
import { IAppointmentData } from "@/types/appointment";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
import { IMeta } from "@/types";

export const prescriptionApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
    createPrescription:build.mutation({
      query:(data)=>({
          url: "/prescription",
          method: "POST",
          data,
      }),
      invalidatesTags:[tagTypes.prescription]
    }),
    getAllPrescriptions:build.query({
      query:(arg:Record<string,any>)=>{
        return {
          url: "/prescription",
          method: "GET",
      }
      },
      transformResponse: (response: IAppointmentData[],meta: IMeta)=>{
          return{
            prescriptions:response,
              meta
          }
      } ,
      providesTags:[tagTypes.prescription]
    }),
    getMyPrescriptions: build.query({
        query: () => {
          return {
            url: "/prescription/my-prescription",
            method: "GET",
          };
        },
        transformResponse: (response: IAppointmentData[], meta: IMeta) => {
          console.log(response)
          return {
            prescriptions: response,
            meta,
          };
        },
        providesTags: [tagTypes.prescription],
      }),
    }),
})
export const {useCreatePrescriptionMutation,useGetAllPrescriptionsQuery,useGetMyPrescriptionsQuery} = prescriptionApi
