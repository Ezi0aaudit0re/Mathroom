
"""
    This file consists of functions that can be used by the front end as helper service
"""
import random

def solve_equation(data):

    if "equation" not in data or "username" not in data:
        return {"code": 401, "message": "Unauthorized"}

    try:

        result = eval(data["equation"])

        # TODO add to database

        return_data ={
            "code": 200,
            "message": "Success",
            "data": {
                "id": random.randint(11, 100),  # TODO add database
                "result": result,
                "equation": "{} = {}".format(data["equation"], result),
                "username": data["username"],
                "date_posted": "today"
                }

            }


        print(return_data)
        return return_data

    except Exception as e:
        print(str(e))
        return {"code": 404, "message": "Not a valid equation "}



def get_latest_equations():
    return{
            "code": 200,
            "message": "success",
            "data": [
                {"id": 1, "username": "Aman Nagpal", "equation": "a + b = 10", "date_posted": "today"},
                {"id": 2, "username": "Aman 2", "equation": "a - b = 10", "date_posted": "today"},
                {"id": 3, "username": "Aman Nagpal", "equation": "a + b = 10", "date_posted": "today"},
                {"id": 4, "username": "Aman 2", "equation": "a - b = 10", "date_posted": "today"},
                {"id": 5, "username": "Aman Nagpal", "equation": "a + b = 10", "date_posted": "today"},
                {"id": 6, "username": "Aman 2", "equation": "a - b = 10", "date_posted": "today"},
                {"id": 7, "username": "Aman Nagpal", "equation": "a + b = 10", "date_posted": "today"},
                {"id": 8, "username": "Aman 2", "equation": "a - b = 10", "date_posted": "today"},
            ]
        }

