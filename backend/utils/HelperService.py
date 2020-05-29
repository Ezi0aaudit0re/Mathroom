
"""
    This file consists of functions that can be used by the front end as helper service
"""
import random
import Database.DBwrapper as DBwrapper
from flask import escape

def solve_equation(data):

    if "equation" not in data or "username" not in data:
        return {"code": 401, "message": "Unauthorized"}

    try:
        data["equation"] = escape(data["equation"])

        result = eval(data["equation"])

        # TODO add to database
        id = DBwrapper.insert_equation(data, result)

        return_data ={
            "code": 200,
            "message": "Success",
            "data": {
                "id": id,  # TODO add database
                "result": result,
                "equation": "{} = {}".format(data["equation"], result),
                "username": data["username"],
                "date_posted": "today"
                }

            }


        return return_data

    except Exception as e:
        print(str(e))
        return {"code": 404, "message": "Not a valid equation "}



def get_latest_equations():
    return DBwrapper.get_equations()




"""
    This function is used to add user to the database
"""
def add_user(user):

    if "username" not in user:
        return {"code": 500, "message": "Cannot save username"}

    return DBwrapper.insert_user(user)



