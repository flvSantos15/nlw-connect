from abs import ABC, asbtractmethod # type: ignore
from src.model.entites.eventos import Eventos

class EventosRepositoryInterface(ABC):
  @abstractmethod # type: ignore
  def insert(self, event_name: str) -> None: pass

  @abstractmethod # type: ignore
  def select_event(self, event_name: str) -> Eventos: pass