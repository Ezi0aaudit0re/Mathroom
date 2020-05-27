"""
    This is the main driver of the application server
"""

from utils.application import *
import utils.HelperService as HelperService
from flask import render_template, jsonify, request
from flask_socketio import  send, emit


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/equations", methods=["GET"])
def get_equations():

    return jsonify(HelperService.get_latest_equations())


"""
    This method is used to solve the equation in it is valid
    :param: Json Data of equation 
"""
#app.route("/api/equation", methods=["POST"])
@socketio.on('solveEquation')
def solve_equation(data):
    print(data)

    return_data = HelperService.solve_equation(data)
    emit("myEquation", return_data)
    emit("newSolvedEquation", return_data, broadcast=True)




@socketio.on('connect')
def handleMessage():

    print("Socket connected")
    send("connect", broadcast=True)




if __name__ == '__main__':
    socketio.run(app, debug=True)

