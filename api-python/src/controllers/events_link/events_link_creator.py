from src.http_types.http_request import HttpRequest
from src.http_types.http_response import HttpResponse
from src.model.repositories.interfaces.eventos_link_repository import EventosLinkRepositoryInterface

class EventsLinkCreator:
  def __init__(self, events_link_repository: EventosLinkRepositoryInterface):
    self.__events_link_repository = events_link_repository

  def create(self, http_request: HttpRequest) -> HttpResponse:
    event_link_info = http_request.body["data"]
    event_id = event_link_info["event_id"]
    subscriber_id = event_link_info["subscriber_id"]

    self.__check_event_link(event_id, subscriber_id)
    self.__create_event_link(event_id, subscriber_id)
    return self.__format_response(event_id, subscriber_id, event_id, subscriber_id)

  def __check_event_link(self, event_id: int, subscriber_id: int) -> None:
    response = self.__events_link_repository.select_events_link(event_id, subscriber_id)
    if response: raise Exception("Event link already exists!")

  def __create_event_link(self, event_id: int, subscriber_id: int) -> str:
    link = self.__events_link_repository.insert(event_id, subscriber_id)
    return link
  
  def __format_response(self, link: str, event_id: int, subscriber_id: int) -> HttpResponse:
    return HttpResponse(
      body={
        "data": {
          "Type": "EventLink",
          "count": 1,
          "attributes": {
            "link": link,
            "event_id": event_id,
            "subscriber_id": subscriber_id
          }
        }
      },
      status_code=201
    )