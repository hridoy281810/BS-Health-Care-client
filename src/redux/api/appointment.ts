
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
import { IMeta } from "@/types";

export const appointmentApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
    createAppointment:build.mutation({
      query:(data)=>({
          url: "/appointment",
          method: "POST",
          data,
      }),
      invalidatesTags:[tagTypes.appointment]
    }),
    getAllSchedules:build.query({
      query:(arg:Record<string,any>)=>{
        return {
          url: "/appointment",
          method: "GET",
          params:arg
      }
      },
      transformResponse: (response: [],meta: IMeta)=>{
          return{
            schedules:response,
              meta
          }
      } ,
      providesTags:[tagTypes.schedule]
    }),
    getMyAppointments: build.query({
        query: (arg: Record<string, any>) => {
          return {
            url: "/appointment/my-appointments",
            method: "GET",
            params: arg,
          };
        },
        transformResponse: (response: [], meta: IMeta) => {
          return {
            appointments: response,
            meta,
          };
        },
        providesTags: [tagTypes.appointment],
      }),
    deleteSchedule:build.mutation({
      query:(id)=>{
        console.log(id)
        return {
          url: `/schedule/${id}`,
          method: "DELETE",
       
      }
      },
      invalidatesTags:[tagTypes.schedule]
    }),
    }),
})
export const {useCreateAppointmentMutation,useGetMyAppointmentsQuery} = appointmentApi