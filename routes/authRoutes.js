const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile ", "email"]
    })
  );

  app.get(
    "/auth/facebook",
    passport.authenticate("facebook", {
      scope: ["public_profile", "email"]
    })
  );

  app.get(
    "/auth/twitter",
    passport.authenticate("twitter")
  );

  app.get(
    "/auth/linkedin",
    passport.authenticate("linkedin",{
      profileFields: [ 'email-address', 'id', 'first-name', 'last-name', 'picture-url', 'picture-urls::(original)', 'formatted-name', 'maiden-name', 'phonetic-first-name', 'phonetic-last-name', 'formatted-phonetic-name', 'headline', 'location:(name,country:(code))', 'industry', 'distance', 'relation-to-viewer:(distance,connections)', 'num-connections', 'num-connections-capped', 'summary', 'specialties', 'positions', 'site-standard-profile-request', 'api-standard-profile-request:(headers,url)', 'public-profile-url' ],
      scope: ['r_basicprofile', 'r_emailaddress']
        })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google",{ failureRedirect: '/login' }),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook",{ successRedirect: '/surveys',
    failureRedirect: '/login' })
  );

  app.get(
    "/auth/twitter/callback",
    passport.authenticate("twitter",{ failureRedirect: '/login' }),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get(
    "/auth/linkedin/callback",
    passport.authenticate("linkedin", { failureRedirect: '/login' }),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
