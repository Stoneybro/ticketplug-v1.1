import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import djangoAuthProvider from "@/lib/djangoprovider";

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
                    email:{},
                    password:{}

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
    ]
}

export default NextAuth(authOptions)
