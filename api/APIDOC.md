# API Documentation

## Get Endpoints

### /api/chatrooms

Returns a list of chatrooms

### /api/messages/<chatroom>

Returns a list of messages for a specified chatroom. Each message is structured as follows:

* id: id signature of the message
* poster: the poster of the message
* content: actual content of the message
* postDate: date and time the message was posted

## Post Endpoints

### /api/messages/<chatroom>

Adds a new message to the specified chatroom. Request should include the following:

* poster: name of the poster of the message
* content: the content of the message
