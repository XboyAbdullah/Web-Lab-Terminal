const express = require('express');
const app = express();


app.use(express.json());


//Importing all routes
const match = require('./routes/MatchRoutes');
const user = require('./routes/AdminRoutes');

app.use('/api/v1', match);
app.use('api/v1', user);

module.exports = app;