
import { baseApi } from '@/redux/api/baseApi';
import { tagTypes } from '../tag-types';
import { IDoctor, IMeta } from '@/types';

const userApi = baseApi.injectEndpoints({
      endpoints:(build)=>({

      getALlUsers:build.query({
        query:(arg:Record<string,any>)=>({
            url: "/user",
            method: "GET",
            params:arg
        }),
        transformResponse: (response: IDoctor[],meta: IMeta)=>{
            return{
                doctors:response,
                meta
            }
        }
        ,
        providesTags:[tagTypes.doctor]
      }),
      getSingleUser:build.query({
        query:()=>({
            url: "/user/me",
            method: "GET",
        }),
        providesTags:[tagTypes.user]
      }),
      updateProfile:build.mutation({
        query:(data)=>({
            url: `/user/update-my-profile`,
            method: "PATCH",
       data,
       contentType: "multipart/form-data"

        }),
        invalidatesTags:[tagTypes.user]
      }),
      
      }),
})

export const {useGetSingleUserQuery,useUpdateProfileMutation} = userApi;