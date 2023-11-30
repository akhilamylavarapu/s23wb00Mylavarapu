const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const accountSchema = new Schema({
  username: String,
  password: {
    type: String,
    // Add a regex pattern for the password
//     At least 8 characters long.
// Must contain at least one letter (uppercase or lowercase).
// Must contain at least one digit.
    match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  }
});

accountSchema.plugin(passportLocalMongoose);

// We export the Schema to avoid attaching the model to the
// default mongoose connection.
module.exports = mongoose.model("Account", accountSchema);
