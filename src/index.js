const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

async function main() {

  // Create a new link
  // const newLink = await prisma.createLink({
  //   url: 'www.prisma.io',
  //   description: 'Prisma replaces traditional ORMs',
  // })
  // console.log(`Created new link: ${newLink.url} (ID: ${newLink.id})`)

  // // Read all links from the database and print them to the console
  // const allLinks = await prisma.links()
  // console.log(allLinks)

  // // Create a new user
  // const newUser = await prisma.createUser({
  //   first_name: "Luke",
  //   last_name: "Melenberg",
  //   email: "Lukey_Luke@dogmail.com",
  //   password: "dogs4life"
  // })
  // console.log(`Created new link: ${newUser.first_name} (ID: ${newUser.id})`)

  // // Read all users from the database and print them to the console
  // const allUsers = await prisma.users()
  // console.log(allUsers)

  // Create a new comment
  const newComment = await prisma.createComment({
    text: "wooohoooo"
  })
  console.log(`Created new coomment: ${newComment.text} (ID: ${newComment.id})`)

  // Read all comments from the database and print them to the console
  const allComments = await prisma.comments()
  console.log(allComments)
}

main().catch(e => console.error(e))


const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: (root, args, context, info) => {
      return context.prisma.links()
    },
    user: (root, args, context, info) => {
      return context.prisma.users()
    },
    creation: (root, args, context, info) => {
      return context.prisma.creations()
    },
    comment: (root, args, context, info) => {
      return context.prisma.comments()
    },
    savedRecipe: (root, args, context, info) => {
      return context.prisma.savedRecipes()
    },
    ingredientType: (root, args, context, info) => {
      return context.prisma.ingredientTypes()
    },
    ingredient: (root, args, context, info) => {
      return context.prisma.ingredients()
    },
  },
  Mutation: {
    createLink: (root, args, context) => {
      return context.prisma.createLink({
        url: args.url,
        description: args.description,
      })
    },
    createUser: (root, args, context) => {
      return context.prisma.createUser({
        first_name: args.first_name,
        last_name: args.last_name,
        email: args.email,
        password: args.password,
      })
    },
    createComment: (root, args, context) => {
      return context.prisma.createComment({
        user_id: args.user_id,
        text: args.text
      })
    },
    createSavedRecipe: (root, args, context) => {
      return context.prisma.createComment({
        user_id: args.user_id,
        recipe_link: args.recipe_link
      })
    },
    createIngredientType: (root, args, context) => {
      return context.prisma.createIngredientType({
        name: args.name
      })
    },
    createIngredient: (root, args, context) => {
      return context.prisma.createIngredient({
        name: args.name
      })
    },
    createCreation: (root, args, context) => {
      return context.prisma.createCreation({
        user_id: args.user_id,
        name: args.nam,
        description: args.description
      })
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma },
})
server.start(() => console.log(`Server is running on http://localhost:4000`))