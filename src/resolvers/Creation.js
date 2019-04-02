function createdBy(parent, args, context) {
  return context.prisma.creation({ id: parent.id }).createdBy()
}
function comments(parent, args, context) {
  return context.prisma.creation({ id: parent.id }).comments()
}

module.exports = {
  createdBy,
  comments
}