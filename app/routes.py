# routes.py

from flask import Blueprint, jsonify
from app.models import Quote

main = Blueprint('main', __name__)

@main.route('/quotes', methods=['GET'])
def get_quotes():
    quotes = Quote.query.all()
    return jsonify([quote.serialize() for quote in quotes])
