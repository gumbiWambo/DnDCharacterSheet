const { SpellController } = require("./spell-controller");
class Controllers {
  static init = (app) => {
    new SpellController(app);
   };
}


exports.Controllers = Controllers;