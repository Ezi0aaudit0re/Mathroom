"""

    This file serves as the setup and config file for the application


"""



from flask import Flask
from flask_socketio import SocketIO, send
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import pathlib
from flask_marshmallow import Marshmallow



app = Flask(__name__)
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
socketio = SocketIO(app, cors_allowed_origins="*")
CORS(app, resources=r'/api/*')

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///{}/Database/mathroom.db'.format(pathlib.Path().absolute())

db = SQLAlchemy(app)
ma = Marshmallow(app)

