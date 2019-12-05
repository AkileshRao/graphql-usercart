const { users, registerUser } = require('./UserResolver');
const { items, addItem, selectedItems } = require('./ItemResolver');

const resolvers = {
  Query: {
    users,
    items,
    selectedItems
  },
  Mutation: {
    registerUser,
    addItem
  }
}

module.exports = resolvers;