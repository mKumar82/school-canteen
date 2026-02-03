// store/api/canteenApi.ts
import { Order } from "@/types/order";
import { Student } from "@/types/student";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const canteenApi = createApi({
  reducerPath: "canteenApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/api` }),
  tagTypes: ["Snacks", "Students", "Orders"],
  endpoints: (builder) => ({
    getSnacks: builder.query<any[], void>({
      query: () => "/snacks",
      providesTags: ["Snacks"],
    }),
    getStudents: builder.query<Student[], void>({
      query: () => "/students",
      providesTags: ["Students"],
    }),
    getStudentById: builder.query<Student, string>({
      query: (id) => `/students/${id}`,
      providesTags: ["Students"],
    }),
    createStudent: builder.mutation<Student, { name: string }>({
      query: (body) => ({
        url: "/students",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Students"],
    }),
    placeOrder: builder.mutation<
      Order,
      { snackId: number; studentId: string; quantity: number }
    >({
      query: (body) => ({
        url: "/orders",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Snacks", "Students", "Orders"],
    }),
  }),
});

export const {
  useGetSnacksQuery,
  useGetStudentsQuery,
  useCreateStudentMutation,
  usePlaceOrderMutation,
  useGetStudentByIdQuery,
} = canteenApi;
