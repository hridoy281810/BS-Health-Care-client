
import { IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const appointmentApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
    initialPayment:build.mutation({
      query:(id:string)=>({
          url:`/payment/init/${id}`,
          method: "POST",
      }),
      invalidatesTags:[tagTypes.payment]
    }),
    getPayments:build.query({
      query:()=>{
        return {
          url: "payment/ipn",
          method: "GET",
      }
      },
      transformResponse: (response,meta: IMeta)=>{
          return{
            payment:response,
              meta
          }
      } ,
      providesTags:[tagTypes.prescription]
    }),
})
})
export const {useInitialPaymentMutation,useGetPaymentsQuery} = appointmentApi