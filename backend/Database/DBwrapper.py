"""
    This file consists of wrapper methods for the database

"""
from backend.Database.models import *
from backend.Database.schemas import *

"""
    THis method inserts an equation given a user
"""
def insert_equation(data, results):

    try:
        if "username" not in data or "equation" not in data: raise Exception("Correct equation not provided")
        # get the user with the username
        user = get_user(data["username"])

        # create equation
        temp_eq = Equations(
            equation=data["equation"],
            result=results,

        )


        # add the equation to the user
        user.equations.append(temp_eq)

        db.session.add_all([temp_eq, user])

        db.session.commit()

        return {"code": 200, "message": "Success"}

    except Exception as e:
        print(str(e))
        return {"code": 500, "message": "Internal Server Error adding Equation"}


"""
    This method inserts a user in the database
    Note -> Since we are not dealing with passwords to make a user unique 
    We append a random integer to their name
    :param: Information about the user to insert
"""
def insert_user(data):
    try:

        new_user = Users(
            name="{}".format(data["username"])
        )

        db.session.add(new_user)

        db.session.commit()

        return {"code": 200, "message": "Success"}
    except Exception as e:
        print(str(e))
        return {"code": 500, "message": "Internal Server Error"}


"""
    Returns the user based on their username
"""
def get_user(username):

    try:

        user = db.session.query(Users).filter(Users.name == username).first()

        if not user: raise Exception("No user with username, {}".format(username))

        return user



    except Exception as e:
        print(str(e))
        return

"""
    This method gets the last 10 equations from the database
"""
def get_equations():

    try:

        equations = db.session.query(Equations).order_by(Equations.created_at.desc()).limit(10).all()

        return_list = []

        # serialize the information to include username also
        for eq in equations:
            new_obj = EquationsSchema().dump(eq)
            new_obj["user"] = eq.user.name if "user" in new_obj else False
            return_list.append(new_obj)



        return {"code": 200, "message": "Success", "data": return_list}
    except Exception as e:
        print(str(e))
        return {"code": 500, "message": "Internal Server Error"}



# """
#     This function takes an array obj of sqlalchemy and converts each value to be used as json
#     :param: data -> the list of objects to serialize
# """
# def serialize_list(schema, data):
#     output = list()
#
#     # serialize it and send data back so that it can be converted to JSON
#     for dat in data:
#         output.append(schema().dump(dat).data)
#     return output


