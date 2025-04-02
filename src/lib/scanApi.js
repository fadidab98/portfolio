import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const scanApi = createApi({
  reducerPath: 'scanApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://webscan.serp24.online' }), // Adjust this if your API is hosted elsewhere
  endpoints: (builder) => ({
    scanWebsite: builder.mutation({
      query: (url) => ({
        url: 'scan',
        method: 'POST',
        body: { url },
      }),
    }),
  }),
});

export const { useScanWebsiteMutation } = scanApi;