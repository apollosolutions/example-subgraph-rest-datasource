export const resolvers = {
  Query: {
    allUsers: async (_, __, context) => {
      const api = context.dataSources.jsonApi;
      return api.listUsers(context);
    },
  },
  User: {
    __resolveReference: () => {
      // Fetch by id
    }
  }
};
