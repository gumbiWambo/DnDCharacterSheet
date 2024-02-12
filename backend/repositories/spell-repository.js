const { Result } = require("../common/Result");
const { colors } = require('../constants/console-colors');

var spellRepository = null;
class SpellRepository {
  constructor() {}

  static getRepository() {
    if(spellRepository === null) {
      spellRepository = new SpellRepository();
      console.log('[' + colors.colorize('Registered', '' , colors.fg.cyan) + '] ' + colors.colorize('SpellRepository', '', colors.fg.red))
    }
    return spellRepository;
  }

  async getAllSpells() {
    var result = new Result()
    return Promise.resolve(result.Ok([]).SetStatusCode(200));
  }

}

exports.SpellRepository = SpellRepository;