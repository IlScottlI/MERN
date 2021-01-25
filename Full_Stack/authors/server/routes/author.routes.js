const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
  app.get("/api/authors/", AuthorController.findAll);
  app.get("/api/authors/:id", AuthorController.findOneSingle);
  app.put("/api/authors/update/:id", AuthorController.updateExisting);
  app.post("/api/authors/new", AuthorController.createNew);
  app.delete("/api/authors/delete/:id", AuthorController.deleteAnExisting);
};
