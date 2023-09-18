import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
// import User from "@/models/User";
// import connect from "@/utils/db";
// import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    // CredentialsProvider({
    //   id: "credentials",
    //   name: "Credentials",
    //   async authorize(credentials) {
    //     //Check if the user exists.
    //     await connect();

    //     try {
    //       const user = await User.findOne({
    //         email: credentials.email,
    //       });

    //       if (user) {
    //         const isPasswordCorrect = await bcrypt.compare(
    //           credentials.password,
    //           user.password
    //         );

    //         if (isPasswordCorrect) {
    //           return user;
    //         } else {
    //           throw new Error("Wrong Credentials!");
    //         }
    //       } else {
    //         throw new Error("User not found!");
    //       }
    //     } catch (err) {
    //       throw new Error(err);
    //     }
    //   },
    // }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: "848780056417-7qf97hr8no1tifo7br14pjllcscbpvj9.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  pages: {
    error: "/login",
  },

});

export { handler as GET, handler as POST };
