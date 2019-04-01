function createdBy(root, args, context, info) {
  return context.prisma.creation({ id: parent.id }).postedBy()
}

module.exports = {
  createdBy,
}