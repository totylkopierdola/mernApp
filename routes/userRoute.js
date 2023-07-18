const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/userModel')

router.post('/register', async (req, res) => {
  try {
    console.log('req.body', req.body)
    const userExists = await User.findOne({ email: req.body.email });
    if(userExists) {
      return res.status(200).send({ message: 'User already exists', success: false}, );
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    req.body.password = hashedPassword;

    const newuser = new User(req.body);

    await newuser.save();
    res.status(200).send({ message: 'Succesfuilly registered a user', success: true });

  } catch (error) {
    res.status(500).send({ message: 'Error registering a user', success: false, error });
  }
});

router.post('/login', (req, res) => {
  try {

  } catch (error) {

  }
});

module.exports = router;
