
import { authKey } from "@/constance/authKey";
import { getToLocalStorage, removeFromLocalStorage, setToLocalStorage } from "../../utils/local-storage";
import { decodedToken } from "@/utils/jwt";
import { instance as axiosInstance } from "@/helpers/axios/axiosInstance";


export const storeUserInfo = ({accessToken}:{accessToken:string})=>{
console.log(accessToken)

    return setToLocalStorage(authKey, accessToken) ;
}


export const getUsrInfo = ()=>{
    const authToken = getToLocalStorage(authKey)
    if(authToken){
        const decodedData:any = decodedToken(authToken)
        return {
            ...decodedData,
            role: decodedData?.role.toLowerCase()
        }
    }
}

export const isLoggedIn = ()=>{
    const authToken = getToLocalStorage(authKey)
    if(authToken){
        return !! authToken;
    }
}

export const removeUser = ()=>{
      return removeFromLocalStorage(authKey)
}

export const getNewAccessToken =async ()=> {
    return await axiosInstance({
         url:"http://localhost:5000/api/v1/auth/refresh-token",
         method: "POST",
         headers: {"Content-Type": "application/json"},
        withCredentials:true
    });
};