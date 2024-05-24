
import { IAppointmentData } from "@/types/appointment";
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
    createPrescription:build.mutation({
      query:(data)=>({
          url: "/prescription",
          method: "POST",
          data,
      }),
      invalidatesTags:[tagTypes.prescription]
    }),
    getAllAppointments:build.query({
      query:(arg:Record<string,any>)=>{
        return {
          url: "/appointment",
          method: "GET",
          params:arg
      }
      },
      transformResponse: (response: IAppointmentData[],meta: IMeta)=>{
          return{
            schedules:response,
              meta
          }
      } ,
      providesTags:[tagTypes.appointment]
    }),
    getMyAppointments: build.query({
        query: (arg: Record<string, any>) => {
          return {
            url: "/appointment/my-appointments",
            method: "GET",
            params: arg,
          };
        },
        transformResponse: (response: IAppointmentData[], meta: IMeta) => {
          console.log(response)
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
export const {useCreateAppointmentMutation,useGetMyAppointmentsQuery,useCreatePrescriptionMutation} = appointmentApi