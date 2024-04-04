import { authKey } from "@/constance/authKey";
import { getToLocalStorage, removeFromLocalStorage, setToLocalStorage } from "../../utils/local-storage";
import { decodedToken } from "@/utils/jwt";

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