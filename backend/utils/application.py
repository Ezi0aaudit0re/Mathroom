"""

    This file serves as the setup and config file for the application


"""



from flask import Flask
from flask_socketio import SocketIO, send
from flask_cors import CORS


app = Flask(__name__)
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
socketio = SocketIO(app)
CORS(app, resources=r'/api/*')