package br.com.nlw.events.service;

import java.util.List;
import java.util.stream.IntStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.nlw.events.dto.SubscriptionRankingByUser;
import br.com.nlw.events.dto.SubscriptionRankingItem;
import br.com.nlw.events.dto.SubscriptionResponse;
import br.com.nlw.events.exception.EventNotFoundException;
import br.com.nlw.events.exception.SubscriptionConflictException;
import br.com.nlw.events.exception.UserIndicatorNotFoundException;
import br.com.nlw.events.model.Event;
import br.com.nlw.events.model.Subscription;
import br.com.nlw.events.model.User;
import br.com.nlw.events.repository.EventRepo;
import br.com.nlw.events.repository.SubscriptionRepo;
import br.com.nlw.events.repository.UserRepo; 

@Service
public class SubscriptionService {
	@Autowired
	private EventRepo evtRepo;
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private SubscriptionRepo subRepo;
	
	public SubscriptionResponse createNewSubscription(String eventName, User user, Integer userId) {
		
		Event evt = evtRepo.findByPrettyName(eventName);
		if (evt == null) { // Event not exists
			throw new EventNotFoundException("Evento "+eventName+ "não existe");
		}
		User userRec = userRepo.findByEmail(user.getEmail());
		if (userRec == null) { // User not exists
			userRec = userRepo.save(user);
		}
		
		User indicator = null;
		if (userId != null) {
			indicator = userRepo.findById(userId).orElse(null);
			if (indicator == null) {
				throw new UserIndicatorNotFoundException("Usuario"+userId+ "indicador não existe");
			}			
		}

		Subscription subs = new Subscription();
		subs.setEvent(evt);
		subs.setSubscriber(userRec);
		subs.setIndication(indicator);
		
		Subscription tmpSub = subRepo.findByEventAndSubscriber(evt, userRec);
		if (tmpSub != null) { // Subscription already exists
			throw new SubscriptionConflictException("Já existe uma inscrição para o usuário "+userRec.getName()+ "no evento "+evt.getTitle());
		}
		
		Subscription res = subRepo.save(subs);
		return new SubscriptionResponse(res.getSubscriptionNumber(), "http://codecraft.com/"+res.getEvent().getPrettyName()+"/"+res.getSubscriber().getId());
	}
	
	public List<SubscriptionRankingItem> getCompleteRanking(String prettyName) {
		Event evt = evtRepo.findByPrettyName(prettyName);
		if (evt == null) {
			throw new EventNotFoundException("Ranking do evento"+prettyName+" não existe");
		}
		return subRepo.generateRanking(evt.getEventId());
	}
	
	public SubscriptionRankingByUser getRankingByUser(String prettyName, Integer userId) {
		List<SubscriptionRankingItem> ranking = getCompleteRanking(prettyName);
		
		SubscriptionRankingItem item = ranking.stream().filter(i->i.userId().equals(userId)).findFirst().orElse(null);
		if (item == null) {
			throw new UserIndicatorNotFoundException("Não há inscrições com o indicação do usuário "+userId);
		}
		Integer posicao = IntStream.range(0, ranking.size())
				.filter(pos -> ranking.get(pos).userId().equals(userId))
				.findFirst().getAsInt();
		
		return new SubscriptionRankingByUser(item, posicao+1);
	}
}
