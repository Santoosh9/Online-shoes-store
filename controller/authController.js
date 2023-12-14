const User = require('../models/authModel');

// to register user

exports.userRegister = async (req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  user = await user.save();

  if (!user) {
    return res.status(400).json({ eror: 'something went wrong' });
  }
  res.send(user);
};
