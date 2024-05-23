
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
import { IMeta } from "@/types";

export const reviewApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
    createReview:build.mutation({
      query:(data)=>({
          url: "/review",
          method: "POST",
          data,
      }),
      invalidatesTags:[tagTypes.review]
    }),
    getAllReviews:build.query({
      query:(arg:Record<string,any>)=>{
        return {
          url: "/review",
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

    }),
})
export const {useCreateReviewMutation,useGetAllReviewsQuery} = reviewApi
