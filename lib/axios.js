import axios from "axios";
import { getToken } from "next-auth/jwt";
import { getSession, useSession } from "next-auth/react";
import { selectSession } from "@/store/slices/authslice";
import { useSelector } from "react-redux";


const secret=process.env.NEXTAUTH_SECRET
const handler= async (req,res)=>{
    console.log(res);
    const token = await getToken({ req, secret,raw:true })
    
    return token
}

const axiosPrivate= axios.create({
    baseURL:'https://e-ticket.onrender.com/api/v1',

})

axiosPrivate.interceptors.request.use(async(config)=>{
    const req = config.transformRequest[0]
    //const accessToken = await handler(req)
    
    if (accessToken) {
        config.headers.Authorization=`Bearer ${accessToken}`
    }

    return config
})

export default axiosPrivate