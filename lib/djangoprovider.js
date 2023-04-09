import axios from "./axios";

export default async function djangoAuthProvider(credentials) {

    try{
        const response=await axios.post('/login/',credentials)
        
        if (response.status===200) {

            return{
                user:response.data.user
               
            }
        }
    }catch(error){
        console.log('Authentication failed',error);
    }
}