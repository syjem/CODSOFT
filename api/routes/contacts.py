from flask_restful import Resource
from models import Contact


class Contacts(Resource):
    # Read
    def get(self, contact_id=None):
        if contact_id:
            contact = Contact.query.get(contact_id)
            if not contact:
                return {'error': 'Contact not found'}, 404
            return {'contact': contact.print()}, 200

        else:
            contacts = Contact.query.all()
            return {'contacts': [contact.print() for contact in contacts]}, 200
