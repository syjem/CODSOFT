from flask import Flask
from flask_restful import Api, Resource
from flask_cors import CORS
from flask_migrate import Migrate

from config import Config
from models import db, Contact

app = Flask(__name__)
CORS(app)

app.config.from_object(Config)

db.init_app(app)
migrate = Migrate(app, db)

api = Api(app)


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


api.add_resource(Contacts, '/contacts', '/contact/<int:contact_id>')

if __name__ == '__main__':
    app.run(debug=True)
