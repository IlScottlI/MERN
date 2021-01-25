const Person = require("../models/user.model");

module.exports.findAllUsers = (req, res) => {
  Person.find()
    .then((allDaPeople) => res.json({ users: allDaPeople }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleUser = (req, res) => {
  Person.findOne({ _id: req.params.id })
    .then((oneSingleUser) => res.json({ user: oneSingleUser }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewUser = (req, res) => {
  Person.create(req.body)
    .then((newlyCreatedUser) => res.json({ user: newlyCreatedUser }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingUser = (req, res) => {
  Person.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedUser) => res.json({ user: updatedUser }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingUser = (req, res) => {
  Person.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
