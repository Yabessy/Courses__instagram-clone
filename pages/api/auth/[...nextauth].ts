import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
      // @ts-ignore
      clientId: process.env.GOOGLE_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: "/auth/signin"
  },
  callbacks: {
    async session({ session, token, user }) {
      // @ts-ignore
      session.user.username = session.user.name?.split(" ").join("").toLocaleLowerCase()
      // @ts-ignore
      session.user.uid = token.sub
      // @ts-ignore
      return session
    }
  }
})
