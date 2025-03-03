from flask import jsonify, Blueprint, request # type: ignore
from src.controllers.events_link.events_link_creator import EventsLinkCreator
from src.model.repositories.eventos_link_repository import EventosLinkRepository

from src.http_types.http_request import HttpRequest

events_link_route_bp = Blueprint('events_link_route', __name__)

@events_link_route_bp.route('/events_link_route', methods=['POST'])
def create_new_link():
  events_link_repository = EventosLinkRepository()
  events_link_creator = EventsLinkCreator(events_link_repository)

  http_request = HttpRequest(body=request.json)
  
  http_response = events_link_creator.create(http_request)

  return jsonify(http_response.body), http_response.status_code