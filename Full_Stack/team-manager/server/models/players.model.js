const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [3, "Name must be at least 2 characters in length"],
    },
    position: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Playing", "Not Playing", "Undecided"],
      default: "Undecided",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", PlayerSchema);
