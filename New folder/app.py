from flask import Flask, render_template, jsonify, request
from flask_socketio import SocketIO, emit
import subprocess
import json 
from flask_cors import CORS
from cryptography.fernet import Fernet

# Generate a key for encryption
key = Fernet.generate_key()
cipher_suite = Fernet(key)

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5000"}})
socketio = SocketIO(app)

# Encrypt function
def encrypt_data(data):
    encrypted_data = cipher_suite.encrypt(data.encode())
    return encrypted_data

# Decrypt function
def decrypt_data(encrypted_data):
    decrypted_data = cipher_suite.decrypt(encrypted_data).decode()
    return decrypted_data

@app.route('/')
def index():
    return render_template('app.html')

@app.route('/login', methods=['POST'])
def login():
    # Run the main.py script asynchronously when login is triggered
    subprocess.Popen(['python', 'main.py'])
    return 'Image capture process started...'  # Indicate that the process has started

@app.route('/result', methods=['POST'])
def result():
    # Get the result data from the request
    result_data = request.json
    # Encrypt the result data
    encrypted_data = encrypt_data(json.dumps(result_data))
    # Process the result data as needed (e.g., store in database, send notifications, etc.)

    # Emit a WebSocket event to notify the frontend with encrypted data
    socketio.emit('face_detected', {'encrypted_message': encrypted_data})
    
    # Return a response if necessary
    return jsonify(success=True)

if __name__ == '__main__':
    socketio.run(app)
