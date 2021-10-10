
import { lazy } from 'react'
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ProductPage = lazy(() => import('./pages/ProductPage/ProductPage'));

export const routers = [
  { path: '/', exact: true, Component: HomePage },
  { path: '/product', exact: true, Component: ProductPage },
]