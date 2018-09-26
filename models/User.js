var mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  local: {
    email: String,
    password: String,
  },
  username: String
});

mongoose.model("Users", userSchema);