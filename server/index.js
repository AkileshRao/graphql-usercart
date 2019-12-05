const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const mongoose = require('mongoose');
const resolvers = require('./resolvers/mainResolver');

const server = new ApolloServer({
  typeDefs,
  resolvers
});


mongoose.connect('mongodb+srv://Akilesh_02:12345@cluster0-g35ev.mongodb.net/e-cart?retryWrites=true&w=majority');

mongoose.connection.once('open', () => console.log("Connected to db"));
server.listen().then(console.log("Server on port 4k"));