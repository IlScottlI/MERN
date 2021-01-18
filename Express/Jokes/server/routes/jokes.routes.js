const JokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("/api/jokes/random", JokesController.findRandomJoke);
  app.get("/api/jokes/", JokesController.findAllJokes);
  app.get("/api/jokes/:id", JokesController.findOneSingleJoke);
  app.post("/api/jokes/new", JokesController.createNewJoke);
  app.put("/api/jokes/update/:id", JokesController.updateExistingJoke);
  app.delete("/api/jokes/delete/:id", JokesController.deleteAnExistingJoke);
};
