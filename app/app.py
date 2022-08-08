from flask import Flask
def working_on_route():
    """This is a helper function to show that the app can't be used in the moment."""
    return "Working on it!"
def create_app():
    """Create and configure an instance of the Flask application."""
    app = Flask(__name__)
    app.add_url_rule('/', 'index', working_on_route)
    return app