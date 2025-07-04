import NextAuth from "next-auth"

// Bu aralık içinde tipleri genişletiyoruz.
declare module "next-auth" {
  interface User {
    id: string
    name: string
    email: string
  }

  interface Session {
    user: User & {
      id: string
    }
  }
}
