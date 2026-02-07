const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  title: String,
  difficulty: String,
  solution: String,
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Problem", problemSchema);
