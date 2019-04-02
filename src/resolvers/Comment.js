function addedBy(parent, args, context) {
  return context.prisma.comment({ id: parent.id }).addedBy()
}

function forCreation(parent, args, context) {
  return context.prisma.comment({ id: parent.id }).forCreation()
}

module.exports = {
  addedBy,
  forCreation,
}