import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'key=30100750-b02cb32f61256b4afede3508c';
const URL_SETTINGS = 'image_type=photo&orientation=horizontal&per_page=12';

export const imgApi = createApi({
  reducerPath: 'imgApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://pixabay.com/api/?${API_KEY}&${URL_SETTINGS}`,
  }),
  tagTypes: ['Img'],
  endpoints: builder => ({
    fetchImgsBySearch: builder.query({
      query: ({ searchQuery, searchPage }) =>
        `&q=${searchQuery}&page=${searchPage}`,
      providesTags: ['Img'],
    }),
  }),
});

export const { useFetchImgsBySearchQuery } = imgApi;
