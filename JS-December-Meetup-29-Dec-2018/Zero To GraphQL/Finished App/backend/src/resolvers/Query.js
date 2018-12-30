const Query = {
  items(parent, args, {prisma}, info) {
    return prisma.query.items(null,info);
  }
};
module.exports = Query;
