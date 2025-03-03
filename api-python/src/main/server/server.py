from flask import Flask # type: ignore
from src.main.routes.event import user_route_bp
from src.main.routes.subscriber import subscriber_route_bp
from src.main.routes.events_link import events_link_route_bp

app = Flask(__name__)

app.register_blueprint(user_route_bp)
app.register_blueprint(subscriber_route_bp)
app.register_blueprint(events_link_route_bp)
