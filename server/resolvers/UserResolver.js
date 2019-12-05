const UserModel = require('../models/User');
const bcrypt = require('bcrypt');

const users = (root, args, context, info) => {
  return UserModel.find();
}

const registerUser = async (root, args, context, info) => {
  const user = new UserModel({
    username: args.username,
    email: args.email,
    password: await bcrypt.hash(args.password, 12) 
  });
  return user.save();
};

const loginUser = async (root, args, context, info) => {
  const user = new UserModel({
    email: args.email,
    password: await bcrypt.hash(args.password, 12) 
  });
  return user.save();
};

module.exports = {
  users,
  registerUser
}

