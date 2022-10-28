import { configureStore } from '@reduxjs/toolkit';
import { middleware } from './middleware';
import { searchSlice } from './githubUsers/searchSlice';
import { githubUsersApi } from './githubUsers/githubUsersApi';

export const store = configureStore({
  reducer: {
    [githubUsersApi.reducerPath]: githubUsersApi.reducer,
    [searchSlice.name]: searchSlice.reducer,
  },
  middleware,
});
