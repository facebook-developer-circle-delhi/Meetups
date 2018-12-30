const Mutation = {
  createItem(parent, args, { prisma }, info) {
    return prisma.mutation.createItem(args, info);
  }
};
module.exports = Mutation;
