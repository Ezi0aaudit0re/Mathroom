"""
    THis file contains the models for the database tables

"""
from backend.utils.application import db
from datetime import datetime


class Equations(db.Model):

    __tablename__ = "equations"
    id = db.Column(db.Integer, primary_key=True)
    equation=db.Column(db.String(1000))
    result=db.Column(db.String(10000))
    created_at = db.Column(db.DateTime, default=datetime.now)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)



class Users(db.Model):

    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    equations = db.relationship('Equations', backref="user")
    created_at = db.Column(db.DateTime, default=datetime.now)




