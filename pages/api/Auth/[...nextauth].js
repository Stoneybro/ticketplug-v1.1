import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import djangoAuthProvider from "@/lib/djangoprovider";
import { signIn } from "next-auth/react";

export const authOptions={
  
    providers:[
        //Google provider
            GoogleProvider({
                clientId:process.env.GOOGLE_ID,
                clientSecret:process.env.GOOGLE_SECRET
            }),

            {
                id:'django',
                name:'Django',
                type:'credentials',
                Credential:{
                    email:'',
                    password:''

                },
                authorize:async (Credential) =>{
                
                    const user=await djangoAuthProvider(Credential)
                    console.log(user);
                    if (user) {
                        return user
                    }else{
                        return null
                    }
                }
            }
    ],callbacks: {
        async jwt({ token, account, profile }) {
            if (account) {
              token.accessToken = account.access_token
              token.id = profile.id
            }
            return token
          },
        async session({ session, token, user }) {
          session.accessToken = token.accessToken
          session.user.id = token.id
          
          return session
        }
      }
}

export default NextAuth(authOptions)
