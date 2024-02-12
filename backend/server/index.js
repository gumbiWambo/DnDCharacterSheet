var express = require('express');
const { colors } = require('../constants/console-colors');
const { Controllers } = require('../conrollers');
const { Queries } = require('../queries');
const { Commands } = require('../commands');
const { Repositories } = require('../repositories');

Repositories.init();
Queries.init();
Commands.init();

var app = express();

Controllers.init(app);

app.listen(8080, () => {
  const text = colors.colorize('Run', '', colors.fg.green)
  console.log('['+ text +'] app is running!');
})