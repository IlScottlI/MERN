const Game = require("../models/games.model");

module.exports.findAll = (req, res) => {
  Game.find()
    .then((allItems) => res.json({ result: allItems }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingle = (req, res) => {
  Game.findOne({ _id: req.params.id })
    .then((oneSingleItem) => res.json({ result: oneSingleItem }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNew = (req, res) => {
  Game.create(req.body)
    .then((newlyCreated) => res.json({ result: newlyCreated }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExisting = (req, res) => {
  var id = req.params.id;
  var client = req.body;
  Game.findOneAndUpdate({ _id: id }, client, { runValidators: true })
    .then((updated) => res.json({ result: updated }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExisting = (req, res) => {
  Game.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
