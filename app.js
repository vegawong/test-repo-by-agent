const express = require('express');
const app = express();

const pingRouter = require('./routes/ping');

app.use('/api/ping', pingRouter);

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
