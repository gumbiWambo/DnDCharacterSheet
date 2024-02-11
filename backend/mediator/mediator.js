var mediator = null;
class Mediator {
  #handler = [];
  constructor() {}
  static getMediator() {

    if (mediator === null) {
      mediator = new Mediator();
    }

    return mediator;
  }

  async send(data) {
    if (data == null) {
      return Promise.resolve();
    }
    var handler = this.#handler.find(handler => handler.commandName = data.commandName)
    if (handler == null) {
      return Promise.resolve();
    }
    return handler.Handle(data.value)
  }

  addHandler(handler) {
    this.#handler.push(handler);
  }
}

exports.Mediator = Mediator;