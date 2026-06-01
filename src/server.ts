import * as http from 'http';

const PORT: number = process.env.PING_LISTEN_PORT
  ? parseInt(process.env.PING_LISTEN_PORT, 10)
  : 8080;

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {

    if (req.method === 'GET' && req.url === '/ping') {
      const headers = req.headers;
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(headers));
    } else {
      res.writeHead(404);
      res.end();
    }
  }
);

server.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});