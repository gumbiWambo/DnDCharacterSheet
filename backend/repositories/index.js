const { SpellRepository } = require("./spell-repository");

class Repositories {
  static init() {
    SpellRepository.getRepository();
  }
}

exports.Repositories = Repositories;