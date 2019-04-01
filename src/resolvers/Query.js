function feed(parent, args, context, info) {
  return context.prisma.links()
}

function creation(root, args, context, info) {
  return context.prisma.creations()
}

module.exports = {
  feed,
  creation,
}