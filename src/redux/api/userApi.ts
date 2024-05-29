
import { baseApi } from '@/redux/api/baseApi';
import { tagTypes } from '../tag-types';
import { IDoctor, IMeta,  IRoleBaseMetaData } from '@/types';

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
      changePassword: build.mutation({
        query: (data) => ({
           url: "/auth/change-password",
           method: 'POST',
           contentType: 'application/json',
           data: data,
        }),
        invalidatesTags: [tagTypes.user],
     }),
      forgotPassword: build.mutation({
        query: (data) => ({
           url: "/auth/forgot-password",
           method: 'POST',
           data: data,
        }),
        invalidatesTags: [tagTypes.user],
     }),
      resetPassword: build.mutation({
        query: (data) => ({
           url: "/auth/reset-password",
           method: 'POST',
           data: data,
        }),
        invalidatesTags: [tagTypes.user],
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
      getALlMeta:build.query({
        query:()=>({
            url: "/metadata",
            method: "GET"
        }),
        transformResponse: (response: IRoleBaseMetaData)=>{
            return{
                meta:response,
            }
        },
        
        providesTags:[tagTypes.meta]
      }),
      }),
})

export const {useGetSingleUserQuery,useUpdateProfileMutation,useChangePasswordMutation,useForgotPasswordMutation,useResetPasswordMutation,useGetALlMetaQuery} = userApi;
