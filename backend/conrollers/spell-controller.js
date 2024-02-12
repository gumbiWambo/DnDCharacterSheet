const { colors } = require("../constants/console-colors");
const { Mediator } = require("../mediator/mediator");
const { GetAllSpellsQuery } = require("../queries/get-all-spells-query");

class SpellController {
  #app = null
  #prefix = '/api/spell';
  #controllerName = 'SpellController';
  #mediator = Mediator.getMediator();;
  constructor(app) {
    this.#app = app;
    this.#initialize()
  }

  #initialize() {
    this.#app.get(this.#prefix, this.#getSpell.bind(this))
    this.#app.get(this.#prefix + '/all', this.#getAllSpells.bind(this));
    console.log('[' + colors.colorize('Registered', '' , colors.fg.cyan) + '] ' + colors.colorize(this.#controllerName, '', colors.fg.yellow))
  }

  async #getAllSpells(req, res) {
    var result = await this.#mediator.send(new GetAllSpellsQuery());
    if (result == null) {
      res.status(500);
      res.send("Result is invalid");
      return;
    }
    res.status(result.statusCode);
    if (result.isSuccess) {
      res.type('application/json')
      res.send(JSON.stringify(result.value));
    } else if (result.isFailed) {
      res.send(JSON.stringify(result.errors));
    } else {
      res.status(500);
      res.send();
    }
  }

  #getSpell(req, res) {
    res.status(501);
    res.send('Not Implemented!');
  }

}

exports.SpellController = SpellController;