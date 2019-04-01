function links(parent, args, context) {
  return context.prisma.user({ id: parent.id }).links()
}

function creations(parent, args, context) {
  return context.prisma.user({ id: parent.id }).creations()
}

module.exports = {
  links,
  creations,
}