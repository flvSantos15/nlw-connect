from src.model.repositories.interfaces.subscribers_repository import SubscribersRepositoryInterface
from src.http_types.http_request import HttpRequest
from src.http_types.http_response import HttpResponse
from src.validators.subscribers_creator_validator import subscribers_creator_validator

class SubscribersCreatorController:
  def __init__(self, subscribers_repository: SubscribersRepositoryInterface):
    self.__subscribers_repository = subscribers_repository

  def create(self, http_request: HttpRequest) -> HttpResponse:
    subscriber_info = http_request.body["data"]
    subscriber_email = subscriber_info["email"]
    subscriber_event_id = subscriber_info["event_id"]

    self.__chech_subscriber(subscriber_email, subscriber_event_id)
    self.__insert_subscriber(subscriber_info)

    return self.__format_response(subscriber_info)

  def __chech_subscriber(self, subscriber_email: str, subscriber_event_id: int):
    response = self.__subscribers_repository.select_subscribers(subscriber_email, subscriber_event_id)
    if response: raise Exception("Subscriber already exists!")

  def __insert_subscriber(self, subscriber_info: dict):
    self.__subscribers_repository.insert(subscriber_infos=subscriber_info)

  def __format_response(self, subscriber_info: dict):
    return HttpResponse(
      body={
        "data": {
          "Type": "Subscriber",
          "count": 1,
          "attributes": subscriber_info
        }
      },
      status_code=201
    )