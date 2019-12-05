const UserModel = require('../models/User');

const users = (root, args, context, info) => {
  return UserModel.find();
}

const registerUser = (root, args, context, info) => {
  const user = new UserModel({
    username: args.username,
    email: args.email,
    password: args.password
  });

  const registeredUser = user.save();
  return registeredUser;
};


module.exports = {
  users,
  registerUser
}

