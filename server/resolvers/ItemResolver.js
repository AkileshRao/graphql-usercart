const ItemModel = require('../models/Item');
const mongoose = require('mongoose');

const items = (root, args, context, info) => {
  return ItemModel.find()
};

const addItem = (root, args, context, info) => {
  const item = new ItemModel({
    name: args.name,
    cost: args.cost
  });

  const addedItem = item.save();
  return addedItem;
}

const selectedItems = (root, args, context, info) => {
  const items = ItemModel.find({
    _id: {
      $in: args.itemIds.map(id => mongoose.Types.ObjectId(id))
    }
  });

  return items;
};

module.exports = {
  items,
  addItem,
  selectedItems
}