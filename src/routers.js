
import { lazy } from 'react'
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ProductPage = lazy(() => import('./pages/ProductPage/ProductPage'));
const CartPage = lazy(() => import('./pages/CartPage/CartPage'));

export const routers = [
  { path: '/', exact: true, Component: HomePage },
  { path: '/product', exact: true, Component: ProductPage },
  { path: '/cart', exact: true, Component: CartPage },
]