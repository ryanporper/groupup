const express = require('express');
const cors = require('cors');
const port = 8000;

const { groupRouter } = require('./routes/group.routes');

require('./config/mongoose.config');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/groups', groupRouter);

app.listen(port, () =>
  console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);