const { Command } = require("../common/Command");
const { QueryHandler } = require("../common/QueryHandler");
const { Mediator } = require("../mediator/mediator");
const { SpellRepository } = require("../repositories/spell-repository");

class GetAllSpellsQuery extends Command {
  constructor() {
    super('GetAllSpellsQuery')
  }
}

class GetAllSpellsQueryHandler extends QueryHandler {
  #repository = SpellRepository.getRepository();
  SpellRepository
  constructor() {
    super('GetAllSpellsQuery')
    const mediator = Mediator.getMediator()
    mediator.addHandler(this);
  }

  async Handle(query) {
    return this.#repository.getAllSpells();
  }
}

exports.GetAllSpellsQuery = GetAllSpellsQuery;
exports.GetAllSpellsQueryHandler = GetAllSpellsQueryHandler;