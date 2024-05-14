import  { useEffect, useState } from 'react';
import { authKey } from '@/constance/authKey';
import { decodedToken } from '@/utils/jwt';
import { getToLocalStorage } from '@/utils/local-storage';
import { JwtPayload } from 'jwt-decode';

const useGetUsrInfo = () => {
  const [userInfo,setUserInfo] = useState<any | string>('')
  useEffect(()=> {
    const fetchUserInfo = ()=>{
        const authToken = getToLocalStorage(authKey);
        if(authToken){
            const decodedData: JwtPayload & {role:any} = decodedToken(
              authToken
            ) as JwtPayload & {role:any};
            const userInfo :any = {
                ...decodedData,
                role: decodedData.role?.toLowerCase() || '',
            };
            setUserInfo(userInfo);
        }else{
            setUserInfo('')
        }
    }
    fetchUserInfo();
  },[])
  return userInfo
};

export default useGetUsrInfo;