const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name must be at least 2 characters in length"],
    },
    id: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Game", GameSchema);
