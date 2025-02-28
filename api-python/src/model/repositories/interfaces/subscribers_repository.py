from abs import ABC, asbtractmethod # type: ignore
from src.model.entites.inscritos import Inscritos

class SubscribersRepositoryInterface(ABC):
  @abstractmethod # type: ignore
  def insert(self, subscriber_infos: dict) -> None: pass

  @abstractmethod # type: ignore
  def select_subscribers(self, email: str, event_id: int) -> Inscritos: pass

  @abstractmethod # type: ignore
  def select_subscribers_by_link(self, link: str, event_id: int) -> Inscritos: pass

  @abstractmethod # type: ignore
  def get_ranking(self, event_id: int) -> list: pass