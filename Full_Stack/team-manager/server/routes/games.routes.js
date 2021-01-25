const GameController = require("../controllers/games.controller");

module.exports = (app) => {
  app.get("/api/games/", GameController.findAll);
  app.get("/api/games/:id", GameController.findOneSingle);
  app.put("/api/games/update/:id", GameController.updateExisting);
  app.post("/api/games/new", GameController.createNew);
  app.delete("/api/games/delete/:id", GameController.deleteAnExisting);
};
