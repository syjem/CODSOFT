from flask_restful import Resource
from models import Contact


class FavoriteContacts(Resource):
    def get(self):
        favorites = Contact.query.filter(Contact.favorite == True).all()
        if not favorites:
            return {'message': 'No favorite contacts'}, 200
        return {'favorites': [favorite.print() for favorite in favorites]}, 200
