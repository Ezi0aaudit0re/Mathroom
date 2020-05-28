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


@app.route("/api/user", methods=["POST"])
def add_user():
    print(request.get_json())

    return jsonify(HelperService.add_user(request.get_json()))


"""
    This method is used to solve the equation in it is valid
    :param: Json Data of equation 
"""
#app.route("/api/equation", methods=["POST"])
@socketio.on('solveEquation')
def solve_equation(data):

    return_data = HelperService.solve_equation(data)
    if "code" in return_data:
        emit("myEquation", return_data)
        emit("newSolvedEquation", {"code": return_data["code"], "message": return_data["message"]}, broadcast=True)
    else:
        emit("myEquation", return_data)







@socketio.on('connect')
def handleMessage():

    print("Socket connected")
    send("connect", broadcast=True)




if __name__ == '__main__':
    socketio.run(app, debug=True)

