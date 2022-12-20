from flask import Blueprint, rednder_template
ui=Blueprint("ui",__name__)
@ui.route("/")
def index():
    return rednder_template("startseite.html")