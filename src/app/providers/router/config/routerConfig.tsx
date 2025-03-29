import { HomePage } from '@/pages/HomePage';
import { InfoPage } from '@/pages/InfoPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

import { AppRoutes, AppRoutesType, RoutePath } from '@/shared/const';

import { AppRoutesProps } from '../AppRouter';

export const routeConfig: Record<AppRoutesType, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <HomePage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <InfoPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
};
