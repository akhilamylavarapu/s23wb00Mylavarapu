const mongoose = require("mongoose")
const JacketSchema = mongoose.Schema({
    costume_type: String,
    size: String,
    cost: Number
})
module.exports = mongoose.model("Jackets",JacketSchema)

