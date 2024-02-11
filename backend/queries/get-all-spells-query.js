const { Command } = require("../common/Command");
const { QueryHandler } = require("../common/QueryHandler");
const { Result } = require("../common/Result");
const { Mediator } = require("../mediator/mediator");

class GetAllSpellsQuery extends Command {
  constructor() {
    super('GetAllSpellsQuery')
  }
}

class GetAllSpellsQueryHandler extends QueryHandler {
  constructor() {
    super('GetAllSpellsQuery')
    const mediator = Mediator.getMediator()
    mediator.addHandler(this);
  }

  async Handle(query) {
    const result = new Result();
    return Promise.resolve(result.Ok({hello: "hello"}).SetStatusCode(200));
  }
}

exports.GetAllSpellsQuery = GetAllSpellsQuery;
exports.GetAllSpellsQueryHandler = GetAllSpellsQueryHandler;