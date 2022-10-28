import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { BASE_URL } from 'constants';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const githubUsersApi = createApi({
  reducerPath: 'githubUsers',
  baseQuery: axiosBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ['GithubUsers'],
  endpoints: builder => ({
    searchGithubUsers: builder.query({
      query: query => ({
        url: `search/users?${query}`,
        method: 'get',
      }),
      transformResponse: response => ({
        partialUsers: response.items,
        totalPages: Math.floor(response.total_count / 30),
      }),
    }),
    getUser: builder.query({
      query: login => ({
        url: `users/${login}`,
        method: 'get',
      }),
      providesTags: result => [{ type: 'GithubUsers' }],
    }),
  }),
});

export const { useSearchGithubUsersQuery, useGetUserQuery } = githubUsersApi;
