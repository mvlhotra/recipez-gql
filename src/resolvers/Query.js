function feed(parent, args, context, info) {
  return context.prisma.links()
}

function creation(root, args, context, info) {
  return context.prisma.creations()
}

function comment(root, args, context, info) {
  return context.prisma.comments()
}

module.exports = {
  feed,
  creation,
  comment,

}