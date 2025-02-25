from flask import jsonify, Blueprint
from src.http_types.http_response import HttpResponse
from src.http_types.http_request import HttpRequest

event_route_bp = Blueprint('event_route_bp', __name__)

@event_route_bp.route('/events', methods=['POST'])
def create_new_event():
  http_request = HttpRequest(body=request.json)

  http_response = HttpResponse(body={ "estou aqui" }, status_code=201)
  return jsonify(http_response.body), http_response.status_code