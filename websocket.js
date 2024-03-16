// server.js (Next.js custom server)
const express = require('express');
const http = require('http');
const next = require('next');
const WebSocketServer = require('ws');


const dev = process.env.NODE_ENV
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
const httpServer = http.createServer(server); // Create HTTP server using Express app
const wss = new WebSocketServer.Server({ server: httpServer }); 

// Handle WebSocket connections
wss.on('connection', function connection(ws) {
  console.log('Client connected');

  ws.on('close', function () {
    console.log('Client disconnected');
  });
});

// Handle incoming webhook events from Sanity.io
server.post('/sanity-webhook', (req, res) => {
  // Process the webhook event from Sanity.io
  // Broadcast the event over WebSocket to connected clients
  // console.log('test')
  // console.log('Received webhook event from Sanity.io');
  // wss.clients.forEach((client) => {
  //   if (client.readyState === WebSocketServer.OPEN) { // Corrected typo here
  //     client.send('Dataset updated'); // You can send any information you want here
  //   }
  // });

  // res.status(200).end();
  res.status(200).json({ message: 'Webhook received successfully' });
});


app.prepare().then(() => {
  httpServer.listen(3001, () => {
    console.log('Next.js server with WebSocket running on port 3000');
  });
});