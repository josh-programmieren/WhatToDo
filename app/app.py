from flask import Flask
from app.ui.ui import ui
def create_app():
    """Create and configure an instance of the Flask application."""
    app = Flask(__name__)
    app.register_blueprint(ui,url_prefix="app")
    return app