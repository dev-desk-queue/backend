const { logger, errorLogger } = require('../middleware/winston');
const tickets = require('./tickets');

module.exports = server => {
  server.use(logger);

  server.use('/api/tickets', tickets);
  server.get('/', (req, res) => {
    res.send('API is live!');
  });

  server.use(errorLogger);
};
