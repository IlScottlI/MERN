const PlayerController = require("../controllers/players.controller");

module.exports = (app) => {
  app.get("/api/players/", PlayerController.findAll);
  app.get("/api/players/:id", PlayerController.findOneSingle);
  app.put("/api/players/update/:id", PlayerController.updateExisting);
  app.post("/api/players/new", PlayerController.createNew);
  app.delete("/api/players/delete/:id", PlayerController.deleteAnExisting);
};
