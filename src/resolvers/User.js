function links(parent, args, context) {
  return context.prisma.user({ id: parent.id }).links()
}

function creations(parent, args, context) {
  return context.prisma.user({ id: parent.id }).creations()
}

function comments(parent, args, context) {
  return context.prisma.user({ id: parent.id }).comments()
}

function saved_recipes(parent, args, context) {
  return context.prisma.user({ id: parent.id }).saved_recipes()
}

module.exports = {
  links,
  creations,
  comments,
  saved_recipes,

}