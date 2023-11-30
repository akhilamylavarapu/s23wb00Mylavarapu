const mongoose = require("mongoose");

const JacketSchema = mongoose.Schema({
  costume_type: String,
  size: String,
  cost: {
    type: Number,
    required: true,
    min: [10, "Cost must be at least 10"],
    max: [200, "Cost cannot exceed 200"]
  }
});

module.exports = mongoose.model("Jackets", JacketSchema);

