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
    const passwordChangeRequired = userInfo?.data?.needPasswordChange;
    const accessToken = userInfo?.data?.accessToken
    let decodedUser = null;
    if(accessToken){
         decodedUser = jwtDecode(accessToken) as any
     }
     const role = decodedUser?.role;
    if(userInfo.data.accessToken){
      setAccessToken(userInfo.data.accessToken,{
        redirect:"/dashboard",
        passwordChangeRequired,
        role
      })
    }
    return userInfo
}