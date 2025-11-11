const WebSocket = require('ws');
class WebSocketService {
  initialize(server) {
    const wss = new WebSocket.Server({ noServer: true });
    server.on('upgrade', (req, socket, head) => {
      wss.handleUpgrade(req, socket, head, (ws) => wss.emit('connection', ws, req));
    });
    wss.on('connection', (ws) => {
      console.log('Client connected');
      ws.on('message', (msg) => ws.send(`Echo: ${msg}`));
    });
  }
}
module.exports = new WebSocketService();
