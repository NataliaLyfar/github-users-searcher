import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { githubUsersApi } from './githubUsers/githubUsersApi';

export const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware(),
  githubUsersApi.middleware,
];
