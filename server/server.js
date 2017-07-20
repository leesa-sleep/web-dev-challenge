const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const apiRoutes = require('./routes/api');

app.use(cors())

app.use('/api', apiRoutes)

//app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '..', 'public'));
});

module.exports = app;