const User = require('../models/authModel');
const jwt = require('jsonwebtoken'); //authentication
const expressJwt = require('express-jwt'); //authorization

// to register user

exports.userRegister = async (req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    isVerified: true,
  });

  user = await user.save();

  if (!user) {
    return res.status(400).json({ eror: 'something went wrong' });
  }
  res.send(user);
};

// to login user

exports.logIn = async (req, res) => {
  const { email, password } = req.body;
  // checking email is regiser in system or not

  const user = await User.findOne({ email });

  if (!user) {
    return res
      .status(400)
      .json({ error: 'sorry the email you enter is not found in our system' });
  }
  // if email is registered then check password is matched or not

  if (!user.authenticate(password)) {
    return res.status(400).json({
      error: 'email and passwoed dosnot match',
    });
  }

  // checking user is verified or not

  if (!user.isVerified) {
    return res.status(400).json({ error: 'verify your email before login' });
  }

  // generate token with user id and jwt secret
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  //store token in cookie

  res.cookie('myCookie', token, { expire: Date.now() + 99999 });

  //retuen user information to frontend

  const { _id, name, role } = user;
  return res.json({ token, user: { _id, role, email, name } });
};
