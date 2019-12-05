const mongoose = require('mongoose');
const OrderModel = require('../models/Order');
const UserModel = require('../models/User');
const ItemModel = require('../models/Item');

const orders = (root, args, context, info) => {
  const user = UserModel.findById(args.userId);
  console.log(user);
};

const addOrder = (root, args, context, info) => {
  
  const order = new OrderModel({
    userId: args.userId,
    items: args.items
  });

  console.log(args.items);
}

