import { baseApi } from '@/redux/api/baseApi';
import React from 'react';
import { tagTypes } from '../tag-types';

const specialtiesApi = baseApi.injectEndpoints({
      endpoints:(build)=>({
      createSpecialty:build.mutation({
        query:(data)=>({
            url: "/specialties",
            method: "POST",
            contentType: "multipart/form-data",
            data,
        }),
        invalidatesTags:[tagTypes.specialties]
      }),
      getSpecialty:build.query({
        query:()=>({
            url: "/specialties",
            method: "GET",
        }),
        providesTags:[tagTypes.specialties]
      }),
      deleteSpecialty:build.mutation({
        query:(id)=>({
            url: `/specialties/${id}`,
            method: "DELETE",
         
        }),
        invalidatesTags:[tagTypes.specialties]
      }),
      }),
})

export const {useCreateSpecialtyMutation ,useGetSpecialtyQuery,useDeleteSpecialtyMutation} = specialtiesApi;