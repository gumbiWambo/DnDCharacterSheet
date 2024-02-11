class QueryHandler {
  commandName = ""
  value = {};
  constructor(commandName) {
    this.commandName = commandName;
  }
  async Handle(query) {}
}

exports.QueryHandler = QueryHandler;