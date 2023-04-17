const express = require('express')
const app = express();
const notificationRoute = require('./routes/notificationRoutes');
const locationRoute = require('./routes/locationRoutes')
app.use(express.json());

app.use('/api/v1', notificationRoute);
app.use('/api/v1', locationRoute);
module.exports = app;