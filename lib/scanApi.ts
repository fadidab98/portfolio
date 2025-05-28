import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ScanResult } from '../types';

export const scanApi = createApi({
  reducerPath: 'scanApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://webscan.serp24.online' }),
  endpoints: (builder) => ({
    scanWebsite: builder.mutation<ScanResult, { url: string }>({
      query: ({ url }) => ({
        url: '/scan',
        method: 'POST',
        body: { url },
      }),
    }),
  }),
});

export const { useScanWebsiteMutation } = scanApi;