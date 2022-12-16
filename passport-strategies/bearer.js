const passport = require('passport');
const BearerStrategy = require ('passport-http-bearer').Strategy;
const jwt = require('jsonwebtoken');
const Admin = require ('../models/Admin')

passport.use(new BearerStrategy(
    function(token, done) {
         const decoded = jwt.verify(token, process.env.SECRET)
         Admin.findOne({ _id:decoded.userId}, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
      });
    }
  ));