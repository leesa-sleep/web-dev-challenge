const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors())

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;