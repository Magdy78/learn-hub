const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const cookieParser = require('cookie-parser');
const tokenDecoder = require('./tokenDecoder');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000", // Replace with your frontend URL
    credentials: true,
  }
});

const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'feats/chat')));

app.use(tokenDecoder.userFromToken);

require(path.join(__dirname, 'ai/script'))(app);
require(path.join(__dirname, 'chat/script'))({ io, app });

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});