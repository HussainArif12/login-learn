import NextAuth from "next-auth";
import Providers from "next-auth/providers";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  database: process.env.DB_CONNECT,

  callbacks: {
    session: async (session, user) => {
      session.id = user.id;
      return session;
    },
  },
});
