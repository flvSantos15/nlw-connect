from abs import ABC, asbtractmethod
from src.model.entites.inscritos import Inscritos

class SubscribersRepositoryInterface(ABC):
  @abstractmethod
  def insert(self, subscriber_infos: dict) -> None: pass

  @abstractmethod
  def select_subscribers(self, email: str, event_id: int) -> Inscritos: pass