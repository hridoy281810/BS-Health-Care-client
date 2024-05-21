
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
})
})
export const {useInitialPaymentMutation} = appointmentApi