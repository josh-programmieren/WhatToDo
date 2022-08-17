from flask import Flask
from app.settings import SQL_ALCHEMY_DATABASE_URI
def working_on_route():
    """This is a helper function to show that the app can't be used in the moment."""
    return "Working on it!"
def create_app():
    """Create and configure an instance of the Flask application."""
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = SQL_ALCHEMY_DATABASE_URI
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.add_url_rule('/', 'index', working_on_route)
    return app