const express = require('express');
const socket= require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config()
const app = express();
app.use(cors());

const PORT = process.env.PORT;

// Connect to MongoDB
mongoose
  .connect(process.env.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

const server = app.listen(PORT, () =>
  console.log(`Server started on ${PORT}`)
);
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});
  
const Message = mongoose.model('Message', {
    sender: String,
    receiver: String,
    content: String,
  });
  
  // Fetch all messages for a specific sender and receiver
  app.get('/messages/:sender/:receiver', async (req, res) => {
    try {
      const { sender, receiver } = req.params;
      const messages = await Message.find({
        $or: [
          { sender, receiver },
          { sender: receiver, receiver: sender },
        ],
      });
      console.log(messages)
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch messages' });
    }
  });
  
  // Create a new message
  app.post('/messages', async (req, res) => {
    try {
      const { sender, receiver, content } = req.body;
      const message = new Message({ sender, receiver, content });
      await message.save();
      io.to(receiver).emit('receiveMessage', message);
      res.status(201).json(message);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create message' });
    }
  });
  
  // Socket.io connection handler
  io.on('connection', (socket) => {
    console.log('A user connected');
  
    socket.on('joinRoom', (room) => {
      socket.join(room);
    });
  
    socket.on('sendMessage', (message) => {
      io.to(message.receiver).emit('receiveMessage', message);
    });
  
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
  


