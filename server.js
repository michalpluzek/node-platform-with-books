const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();

server.use(bodyParser.json());
server.use(cors());

server.listen(8000, () => console.log('Server is started...'));
