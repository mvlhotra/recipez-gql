const Comment = require('./resolvers/Comment')
const Creation = require('./resolvers/Creation')
const Ingredient = require('./resolvers/Ingredient')
const Link = require('./resolvers/Link')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const Saved_Recipe = require('./resolvers/Saved_Recipe')
const User = require('./resolvers/User')

const { GraphQLServer } = require('graphql-yoga')

const { prisma } = require('./generated/prisma-client')


const resolvers = {
  Query,
  Mutation,
  User,
  Link,
  Creation,
  Comment,
  Saved_Recipe,
  Ingredient
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})
server.start(() => console.log(`Server is running on http://localhost:4000`))