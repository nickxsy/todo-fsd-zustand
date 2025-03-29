export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about',

  NOT_FOUND: 'not_found'
} as const;

export type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes];

export const RoutePath: Record<AppRoutesType, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',

  [AppRoutes.NOT_FOUND]: '*'
} as const;
