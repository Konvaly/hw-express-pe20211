const http = require('http');
const express = require('express');

const PORT = 5000;
const app = express();

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});