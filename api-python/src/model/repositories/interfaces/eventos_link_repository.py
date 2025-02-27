from abs import ABC, asbtractmethod # type: ignore
from src.model.entites.eventos_link import EventosLink

class EventosLinkRepositoryInterface(ABC):
  @abstractmethod # type: ignore
  def insert(self, event_id: int, subscriber_id: int) -> str: pass

  @abstractmethod # type: ignore
  def select_events_link(self, event_id: int, subscriber_id: int) -> EventosLink: pass