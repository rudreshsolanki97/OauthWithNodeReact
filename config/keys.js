// keys.js figure out what set of keys to use
if (process.env.NODE_ENV == "production") {
  // in prods bitches!!
  module.exports = require("./prod");
} else {
  // in dev, mheh!
  module.exports = require("./dev");
}
