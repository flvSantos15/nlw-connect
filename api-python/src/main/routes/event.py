from flask import jsonify, Blueprint

event_route_bp = Blueprint('event_route_bp', __name__)

@event_route_bp.route('/events', methods=['POST'])
def create_new_event():
  return jsonify({ "estou aqui" }), 201