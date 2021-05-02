import NextAuth from "next-auth";
import Providers from "next-auth/providers";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId:
        "505860448723-39n4vjg4jouestvjs3u765ia7dsiecgu.apps.googleusercontent.com",
      clientSecret: "ztzSQvHa8PCoSKcmDIkUZFj_",
    }),
  ],

  database:
    "mongodb+srv://hussain:12345@cluster0.reegf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  // The first argument should be a database connection string or TypeORM config object

  // The second argument can be used to pass custom models and schemas
  /* adapter: Adapters.TypeORM.Adapter(
    // The first argument should be a database connection string or TypeORM config object
    "mongodb+srv://hussain:12345@cluster0.reegf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    // The second argument can be used to pass custom models and schemas
    {
      models: {
        User: Models.User,
      },
    }
  ), */

  callbacks: {
    session: async (session, user) => {
      session.id = user.id;
      return Promise.resolve(session);
    },
  },
});
