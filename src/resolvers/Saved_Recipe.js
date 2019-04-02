function savedBy(parent, args, context) {
  return context.prisma.saved_Recipe({ id: parent.id }).savedBy()
}

module.exports = {
  savedBy,
}