from app.app import create_app
from app.settings import port, debug
app=create_app()
app.run(port=port,debug=debug)