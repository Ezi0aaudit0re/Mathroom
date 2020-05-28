"""
    This file consists of marshmallow code to serialize the data
"""

from Database.models import *
from marshmallow_sqlalchemy import ModelSchema

class EquationsSchema(ModelSchema):
    class Meta:
        model = Equations

class UsersSchema(ModelSchema):
    class Meta:
        model = Users