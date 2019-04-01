const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

function post(parent, args, context, info) {
  const userId = getUserId(context)
  return context.prisma.createLink({
    url: args.url,
    description: args.description,
    postedBy: { connect: { id: userId } },
  })
}

function postCreation(root, args, context) {
  const userId = getUserId(context)
  return context.prisma.createCreation({
    name: args.name,
    description: args.description,
    createdBy: { connect: { id: userId } }
  })
}

function postComment(root, args, context) {
  const userId = getUserId(context)
  return context.prisma.createComment({
    text: args.text,
    addedBy: { connect: { id: userId } }
  })
}

// User signup
async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({ ...args, password })
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}
//User login
async function login(parent, args, context, info) {
  const user = await context.prisma.user({ email: args.email })
  if (!user) {
    throw new Error('No such user found')
  }
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)
  return {
    token,
    user,
  }
}

module.exports = {
  signup,
  login,
  post,
  postCreation,
  postComment,
}