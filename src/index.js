const Comment = require('./resolvers/Comment')
const Creation = require('./resolvers/Creation')
const Ingredient_Type = require('./resolvers/Ingredient_Type')
const Ingredient = require('./resolvers/Ingredient')
const Link = require('./resolvers/Link')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const Saved_Recipe = require('./resolvers/Saved_Recipe')
const User = require('./resolvers/User')

const { GraphQLServer } = require('graphql-yoga')

const { prisma } = require('./generated/prisma-client')

// async function main() {

//   // Create a new link
//   const newLink = await prisma.createLink({
//     url: 'www.prisma.io',
//     description: 'Prisma replaces traditional ORMs',
//   })
//   console.log(`Created new link: ${newLink.url} (ID: ${newLink.id})`)

//   // Read all links from the database and print them to the console
//   const allLinks = await prisma.links()

//   // Create a new user
//   const newUser = await prisma.createUser({
//     first_name: "Nik",
//     last_name: "Mal",
//     email: "wet_dog@hotmail.com",
//     password: "dogs4life"
//   })
//   console.log(`Created new user: ${newUser.first_name} (ID: ${newUser.id})`)

//   // Read all users from the database and print them to the console
//   const allUsers = await prisma.users()

//   // Create a new creation
//   const newCreation = await prisma.createCreation({
//     user_id: 1,
//     name: "Big Bertha",
//     description: "lolol"
//   })
//   console.log(`Created new creation: ${newCreation.name} (ID: ${newCreation.id})`)

//   // Read all creations from the database and print them to the console
//   const allCreations = await prisma.creations()

//   // Create a new comment
//   const newComment = await prisma.createComment({
//     user_id: 1,
//     text: "hey this looks great."
//   })
//   console.log(`Created new comment: ${newComment.text} (ID: ${newComment.id})`)

//   // Read all comments from the database and print them to the console
//   const allComments = await prisma.comments()

//   // Create a new Ingredient Type
//   const newIngredientType = await prisma.createIngredient_Type({
//     name: "Legumes"
//   })
//   console.log(`Created new ingredient_type: ${newIngredientType.name} (ID: ${newIngredientType.id})`)

//   // Read all Ingredient Types from the database and print them to the console
//   const allIngredientTypes = await prisma.ingredient_Types()

//   // Create a new Ingredient
//   const newIngredient = await prisma.createIngredient({
//     ingredient_type_id: 1,
//     name: "Peanut"
//   })
//   console.log(`Created new ingredient_type: ${newIngredient.name} (ID: ${newIngredient.id})`)

//   // Read all Ingredient Types from the database and print them to the console
//   const allIngredients = await prisma.ingredients()

//   // Create a new saved recipe
//   const newSavedRecipe = await prisma.createSaved_Recipe({
//     user_id: 1,
//     recipe_link: 'www.google.com'
//   })
//   console.log(`Created new saved recipe: ${newSavedRecipe.recipe_link} (ID: ${newSavedRecipe.id})`)

//   // Read all Ingredient Types from the database and print them to the console
//   const allSavedRecipes = await prisma.saved_Recipes()

//   console.log(allLinks)
//   console.log(allUsers)
//   console.log(allCreations)
//   console.log(allComments)
//   console.log(allIngredientTypes)
//   console.log(allIngredients)
//   console.log(allSavedRecipes)
// }

// main().catch(e => console.error(e))


const resolvers = {
  // Query: {
  //   info: () => `This is the API of a Hackernews Clone`,
  //   // user: (root, args, context, info) => {
  //   //   return context.prisma.users()
  //   // },
  //   creation: (root, args, context, info) => {
  //     return context.prisma.creations()
  //   },
  //   comment: (root, args, context, info) => {
  //     return context.prisma.comments()
  //   },
  //   savedRecipe: (root, args, context, info) => {
  //     return context.prisma.saved_Recipes()
  //   },
  //   ingredientType: (root, args, context, info) => {
  //     return context.prisma.ingredient_Types()
  //   },
  //   ingredient: (root, args, context, info) => {
  //     return context.prisma.ingredients()
  //   },
  // },
  // Mutation: {
  //   // postUser: (root, args, context) => {
  //   //   return context.prisma.createUser({
  //   //     first_name: args.first_name,
  //   //     last_name: args.last_name,
  //   //     email: args.email,
  //   //     password: args.password,
  //   //   })
  //   // },
  //   postComment: (root, args, context) => {
  //     return context.prisma.createComment({
  //       user_id: args.user_id,
  //       text: args.text
  //     })
  //   },
  //   postSavedRecipe: (root, args, context) => {
  //     return context.prisma.createSavedRecipe({
  //       user_id: args.user_id,
  //       recipe_link: args.recipe_link
  //     })
  //   },
  //   postIngredientType: (root, args, context) => {
  //     return context.prisma.createIngredientType({
  //       name: args.name
  //     })
  //   },
  //   postIngredient: (root, args, context) => {
  //     return context.prisma.createIngredient({
  //       ingredient_type_id: arg.ingredient_type_id,
  //       name: args.name
  //     })
  //   },
  //   postCreation: (root, args, context) => {
  //     return context.prisma.createCreation({
  //       user_id: args.user_id,
  //       name: args.name,
  //       description: args.description
  //     })
  //   },
  // },
  Query,
  Mutation,
  User,
  Link
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