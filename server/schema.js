const { gql } = require('apollo-server');

const typeDefs = gql`
  type User{
    _id: ID!
    username : String
    email : String
    orders : [Order]
  }

  type Order{
    _id : ID!
    userId : String
    items : [String]
    totalCost : Float
  }

  type Item{
    _id : ID!
    name : String
    cost : Float
  }

  type Query {
    users : [User]
    user(userId : ID!) : User
    orders(userId : ID!) : [Order]
    items : [Item]
    selectedItems(itemIds : [String] ): [Item]
  }

  type Mutation{
    registerUser(username : String!, email : String!, password : String!) : User
    loginUser(email:String!, password : String!) : String!
    addItem(name: String, cost : Float) : Item
    addOrder(userId : String, items : [String]) : Order
  }
`;

module.exports = typeDefs;