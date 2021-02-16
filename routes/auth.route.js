const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const User = require('../models/user.model');
const { authSchema } = require('../helpers/validation_schema');

router.post('/register', async (req, res, next) => {
  //  res.send("Register Route");

  try {
    const result = await authSchema.validateAsync(req.body);
    console.log(result);

    const doesExist = await User.findOne({ email: result.email });
    if (doesExist)
      throw createError.Conflict(`${result.email} is already been registered`);
    // const user = new User({ email:email,password:password })
    const user = new User(result);
    const savedUser = await user.save();
    res.send({ user: savedUser.name, email: savedUser.email });
    // res.send('Hello');
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const result = await authSchema.validateAsync(req.body);
    const user = await User.findOne({ email: result.email });
    if (!user) throw createError.NotFound('User not registered');

    const isMatch = await user.isValidPassword(result.password);
    if (!isMatch) throw createError.Unauthorized('Username/password not valid');

    const access = 'Successfully Login';

    res.send({ access });
  } catch (error) {
    if (error.isJoi === true)
      return next(createError.BadRequest('Invalid Username/Password'));
    next(error);
  }
});

router.delete('/logout', async (req, res, next) => {
  res.send('Logout Route');
});

module.exports = router;
