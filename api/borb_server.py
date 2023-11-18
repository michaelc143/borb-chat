from flask import Flask, request, jsonify
import sqlite3
from datetime import datetime

app = Flask(__name__)

@app.route('/api/messages/<chatroom>', methods=['GET'])
def get_messages_for_chatroom(chatroom):
    conn = create_connection()
    cursor = connection.cursor()
    
    query = "SELECT * FROM messages WHERE chatroom = ?"
    cursor.execute(query, (chatroom))
    
    # Fetch all messages
    messages = cursor.fetchall()
    connection.close()

    # Convert messages to a list of dictionaries
    messages_list = []
    for message in messages:
        message_dict = {
            'id': message[0],
            'poster': message[1],
            'content': message[2],
            'postDate': message[3],
        }
        messages_list.append(message_dict)

    return jsonify(messages_list)

@app.route('/api/messages/<chatroom>', methods=['POST'])
def post_message_to_chatroom(chatroom):
    try:
        chatroom = chatroom
        data = request.get_json()
        poster = data.get('poster')
        content = data.get('content')
        postDate = datetime.now()
        # validate request body
        if not poster or not content or not post_date:
            return jsonify({'error': 'Poster, content, and postDate are required for posting a message'}), 400
        conn = create_connection()
        cursor = connection.cursor()
        # insert the message into the chatroom's table
        query = f"INSERT INTO {chatroom} (poster, content, postDate) VALUES (?, ?, ?)"
        cursor.execute(query, (poster, content, post_date))

        # Commit the transaction and close the connection
        connection.commit()
        connection.close()

        return jsonify({'message': 'Message posted successfully'}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/chatrooms', methods=['GET'])
def get_chatrooms():
    chatrooms = ["chatterbox", "talktown"]
    return jsonify(chatrooms)



def create_connection():
    db_file = '../borb.db'
    try:
        conn = sqlite3.connect(db_file)
        return conn
    except sqlite3.Error as e:
        print(e)
    return None

# Crate tables and define schemas
def create_tables(conn):
    try:
        for chatroom in ["chatterbox", "talktown"]:
            cursor = conn.cursor()
            cursor.execute(f'''
                CREATE TABLE IF NOT EXISTS {chatroom} (
                    id INTEGER PRIMARY KEY,
                    poster TEXT NOT NULL,
                    content TEXT NOT NULL,
                    postDate TEXT NOT NULL
                )
            ''')
            conn.commit()
            print("worked")
    except sqlite3.Error as e:
        print(e)



if __name__ == '__main__':
    # connect to db amd do setup
    conn = create_connection()
    if conn is not None:
        create_tables(conn)
        conn.close()
    # run api server locally
    app.run(host='0.0.0.0', port=105)