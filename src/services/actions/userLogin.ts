// "use server"

import { FieldValues } from "react-hook-form"
import setAccessToken from "./setAccessToken"
import { jwtDecode } from "jwt-decode"

export const userLogin = async(userData:FieldValues)=>{
 
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userData) ,
        // cache:"no-store"
        credentials: "include",
    })

    const userInfo = await res.json()
    console.log(userInfo,'functional user info======')
    const passwordChangeRequired = userInfo?.data?.needPasswordChange;
    const accessToken = userInfo?.data?.accessToken
    let decodedUser = null;
    if(accessToken){
         decodedUser = jwtDecode(accessToken) as any
     }
     const role = decodedUser?.role;
     const redirectPath = passwordChangeRequired === true ? "/dashboard/change-password"
     : "/";

    if(accessToken){
      setAccessToken(userInfo.data.accessToken,{
        redirect:redirectPath,
        passwordChangeRequired,
        role
      })
    }

    return userInfo
}