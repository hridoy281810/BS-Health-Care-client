import { authKey } from "@/constance/authKey";
import { getNewAccessToken } from "@/services/actions/auth.service";
import setAccessToken from "@/services/actions/setAccessToken";
import { TErrorResponse, TResponse } from "@/types";
import { getToLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import axios from "axios";

 const instance =axios.create()
instance.defaults.headers.post["Content-Type"]= "application/json";
instance.defaults.headers["Accept"]="application/json";
instance.defaults.timeout = 60000;
instance.interceptors.request.use(function (config) {
    // Do something before request is sent

    const accessToken = getToLocalStorage(authKey)
    if(accessToken){
        config.headers.Authorization =accessToken
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use( 
    // @ts-ignore 
    function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const responseObject: TResponse = {
        data: response?.data?.data,
        meta: response?.data?.meta
    }
    return responseObject;
  }, async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const config = error.config
    // console.log("config",config)
  if(error?.response?.status === 500 && !config.sent ) {
    config.sent = true;
     const response = await getNewAccessToken()
     const accessToken = response?.data?.accessToken;
     config.headers["Authorization"] = accessToken;
     setToLocalStorage(authKey,accessToken)
     setAccessToken(accessToken)
     return instance(config)
  } else{
    const responseObject:TErrorResponse = {
      statusCode: error?.response?.data?.statusCode || 500,
      message:error?.response?.data?.message || 'something went wrong',
      errorMessage:error?.response?.data?.message,
  }
  // return Promise.reject(error);
  return responseObject;
  }
  });

export {instance};