const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  googleId: String,
  facebookId : String,
  twitterId : String,
  linkedinId : String
});

mongoose.model("users", userSchema);
