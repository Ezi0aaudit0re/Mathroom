"""
    This file consists of marshmallow code to serialize the data
"""

from Database.models import *
from utils.application import ma

class EquationsSchema(ma.ModelSchema):
    class Meta:
        model = Equations

class UsersSchema(ma.ModelSchema):
    class Meta:
        model = Users