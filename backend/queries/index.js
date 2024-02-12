const { GetAllSpellsQueryHandler } = require("./get-all-spells-query");

class Queries {
  static init() {
    new GetAllSpellsQueryHandler();
  }
}

exports.Queries = Queries;