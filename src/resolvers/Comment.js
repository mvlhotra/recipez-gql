function addedBy(root, args, context, info) {
  return context.prisma.comment({ id: parent.id }).addedBy()
}

module.exports = {
  addedBy,
}