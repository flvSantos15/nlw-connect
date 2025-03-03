from flask import Blueprint, jsonify, request # type: ignore
from src.http_types.http_request import HttpRequest
from src.validators.subscribers_creator_validator import subscribers_creator_validator
from src.model.repositories.subscribers_repository import SubscribersRepository

from src.controllers.subscribers.subscribers_creator import SubscribersCreator
from src.controllers.subscribers.subscribers_manager import SubscriberManager

subscriber_route_bp = Blueprint('subscriber_route', __name__)

@subscriber_route_bp.route('/subscribers', methods=['POST'])
def create_new_subscriber():
  subscribers_creator_validator(request)
  http_request = HttpRequest(body=request.json)

  subscribers_repository = SubscribersRepository()
  subscribers_creator = SubscribersCreator(subscribers_repository)
  
  http_response = subscribers_creator.create(http_request)

  return jsonify(http_response.body), http_response.status_code

@subscriber_route_bp.route('/subscribers/link/<link>/event/<event_id>', methods=['GET'])
def subscribers_by_link(link, event_id):
  subscribers_repository = SubscribersRepository()
  subscribers_manager = SubscriberManager(subscribers_repository)

  http_request = HttpRequest(param={"link": link, "event_id": event_id})
  
  http_response = subscribers_manager.get_subscribers_by_link(http_request)

  return jsonify(http_response.body), http_response.status_code

@subscriber_route_bp.route('/subscribers/ranking/event/<event_id>', methods=['GET'])
def link_ranking(event_id):
  subscribers_repository = SubscribersRepository()
  subscribers_manager = SubscriberManager(subscribers_repository)

  http_request = HttpRequest(param={"event_id": event_id})
  
  http_response = subscribers_manager.get_event_ranking(http_request)

  return jsonify(http_response.body), http_response.status_code