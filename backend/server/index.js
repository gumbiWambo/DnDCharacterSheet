var express = require('express');
const { SpellController } = require('../conrollers/spell-controller');
const { colors } = require('../constants/console-colors');
const { GetAllSpellsQueryHandler } = require('../queries/get-all-spells-query');

new GetAllSpellsQueryHandler();

var app = express();

const spell = new SpellController(app);

app.listen(8080, () => {
  const text = colors.colorize('Run', '', colors.fg.green)
  console.log('['+ text +'] app is running!');
})