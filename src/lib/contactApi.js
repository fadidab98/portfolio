import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://flapi.serp24.online/api' }), // Base URL for your Next.js API routes
  endpoints: (builder) => ({
    submitContactForm: builder.mutation({
      query: (formData) => ({
        url: '/contact', // Points to your /api/contact route
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useSubmitContactFormMutation } = contactApi;