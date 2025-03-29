import { memo, useCallback } from 'react';
import { Route, RouteProps, Routes } from 'react-router';

import { routeConfig } from './config/routerConfig';

export type AppRoutesProps = RouteProps;

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    // Перехватывает глобальный fallback на уровне роутера

    // const element = (
    //   <Suspense fallback={<AppLoader />}>{route.element}</Suspense>
    // );
    return <Route key={route.path} path={route.path} element={route.element} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
