from flask import jsonify, Blueprint, request # type: ignore
from src.http_types.http_request import HttpRequest
from src.validators.events_creator_validator import events_creator_validator
from src.controllers.events.events_creator import EventsCreator
from src.model.repositories.eventos_repository import EventosRepository

event_route_bp = Blueprint('event_route_bp', __name__)

@event_route_bp.route('/events', methods=['POST'])
def create_new_event():
  events_creator_validator(request)
  http_request = HttpRequest(body=request.json)

  events_repository = EventosRepository()
  events_creator = EventsCreator(events_repository)
  
  http_response = events_creator.create(http_request)

  return jsonify(http_response.body), http_response.status_code