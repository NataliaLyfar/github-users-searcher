import { githubUsersApi } from './githubUsers/githubUsersApi';

export const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware(),
  githubUsersApi.middleware,
];
