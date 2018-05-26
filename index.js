<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/users");
require("./services/passport");
mongoose.connect(keys.mongoURI);

const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys:[keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
=======
const express = require('express');
const app = express();

app.get('/',(req,res) => {
  res.send( {hi:"there"});
});
>>>>>>> 954bc1c6f4d2745212ce8142fbe14d91be2c62ef

const PORT = process.env.PORT || 5000;
app.listen(PORT);
