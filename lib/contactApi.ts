import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ContactResponse {
  message: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://flapi.serp24.online/api' }),
  endpoints: (builder) => ({
    submitContactForm: builder.mutation<ContactResponse, FormData>({
      query: (formData) => ({
        url: '/contact',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useSubmitContactFormMutation } = contactApi;