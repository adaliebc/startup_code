// server.js
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    const msg = String.fromCharCode(...message);
    console.log('received: %s', msg);
    ws.send(msg);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

server.listen(3001, () => {
  console.log('WebSocket server is listening on port 3001');
});
