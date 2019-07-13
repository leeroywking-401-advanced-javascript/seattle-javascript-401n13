'use strict';

const express = require('express');

const notFound = require('../middleware/404.js');
const errorHandler = require('../middleware/500.js');
const logger = require('../middleware/logger.js');

const johnsRouter = require('../routes/routes.js');

const app = express();

app.use(express.json());
app.use(logger);

app.use('/api/v1', johnsRouter);

app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  start: (port) => app.listen(port, () => console.log(`up on ${port}`)),
  app: app,
};
