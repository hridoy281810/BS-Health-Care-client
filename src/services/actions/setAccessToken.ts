"use server"
import { authKey } from "@/constance/authKey"
import {cookies} from "next/headers"
import { redirect } from "next/navigation"
const setAccessToken = (token:string,option?:any)=>{
    cookies().set(authKey,token)  
    if(option && option.passwordChangeRequired && option.role === "DOCTOR" || "ADMIN" || "SUPPER_ADMIN"){
        redirect('/dashboard/change-password');
    }
    if(option && option.redirect){
        redirect(option.redirect)
    }
}
export default setAccessToken;