import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const imgApi = createApi({
  reducerPath: 'imgApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://pixabay.com/api/?key=30100750-b02cb32f61256b4afede3508c&image_type=photo&orientation=horizontal&per_page=12',
  }),
  endpoints: builder => ({
    fetchImages: builder.query({
      query: () => `/`,
    }),
  }),
});

export const { useFetchImagesQuery } = imgApi;
