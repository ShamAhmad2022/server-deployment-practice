require('dotenv').config();

const { start } = require('./server');

const PORT = process.env.PORT;

start(PORT);