# models.py

from app import db

class Quote(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text, nullable=False)
    author = db.Column(db.String(50), nullable=False)

    def __init__(self, text, author):
        self.text = text
        self.author = author

    def serialize(self):
        return {
            'id': self.id,
            'text': self.text,
            'author': self.author
        }

# Pre-populate the database with quotes
def populate_quotes():
    quotes = [
        Quote(text="The best way to predict the future is to invent it.", author="Alan Kay"),
        Quote(text="The only way to do great work is to love what you do.", author="Steve Jobs"),
        Quote(text="Success is not final, failure is not fatal: It is the courage to continue that counts.", author="Winston Churchill")
        # Add more quotes as needed
    ]

    for quote in quotes:
        db.session.add(quote)
    db.session.commit()
