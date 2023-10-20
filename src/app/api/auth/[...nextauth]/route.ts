import { SecureAPI } from "@/function";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth";

const isProd = process.env.NODE_ENV === "production";
export const runtime = isProd ? "edge" : "nodejs";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@akun.com" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials, req) {
        // Pada Bagian ini untuk ngehit external endpoint jika database user dari endpoint lain
        // namun kalau misalkan untuk loginnya menggunakan third party auth harus dilakukan
        // kita disable dulu

        // const res = await SecureAPI({
        //   url: "auth/login",
        //   method: "POST",
        //   data: credentials,
        //   name: "login",
        // });
        // if (res.result == "success") {
        //   const tkn = res.data.token;
        //   console.log(tkn);

        //   const prfl = await SecureAPI({
        //     url: "user/profile",
        //     token: tkn,
        //     name: "profile",
        //   });
        //   const auth = {
        //     token: tkn,
        //     avatar: `https://api.dicebear.com/7.x/thumbs/png?seed=${encodeURIComponent(
        //       prfl.data.name
        //     )}&scale=75&radius=50&size=100`,
        //     ...prfl.data,
        //   };
        //   console.log(auth);
        //   return auth;
        // }
        // return null;
        if (
          credentials?.email == "me@example.com" &&
          credentials?.password == "123"
        ) {
          return {
            id: "123",
            name: "Anonim",
            email: "me@example.com",
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      // Pada Section ini merupakan cara untuk mereturn value dari hasil JWT ke Session untuk dipanggil ke Client atau Server
      if (session?.user) {
        session.user.name = token.name;
        session.user.email = token.email;
      }
      return session;
    },
    jwt: async ({ user, token, trigger, session }) => {
      // pada bagian ini adalah merupakan nilai returning dari proses JWT
      // jadi setiap field yang ingin kita save harus dituliskan kembali untuk dapat mengirimkan valuenya
      if (user) {
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
