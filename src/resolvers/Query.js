function feed(parent, args, context, info) {
  return context.prisma.links()
}

function creation(parent, args, context, info) {
  return context.prisma.creations()
}

function comment(parent, args, context, info) {
  return context.prisma.comments()
}

function saved(parent, args, context, info) {
  return context.prisma.saved_recipes()
}

function ingredient(parent, args, context, info) {
  return context.prisma.ingredients()
}

module.exports = {
  feed,
  creation,
  comment,
  saved,
  ingredient

}