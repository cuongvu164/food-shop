
import { lazy } from 'react'
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ProductPage = lazy(() => import('./pages/ProductPage/ProductPage'));
const CartPage = lazy(() => import('./pages/CartPage/CartPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage/CheckoutPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductPage/ProductDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));

export const routers = [
  { path: '/', exact: true, Component: HomePage },
  { path: '/product', exact: true, Component: ProductPage },
  { path: '/cart', exact: true, Component: CartPage },
  { path: '/login', exact: true, Component: SignInPage },
  { path: '/register', exact: true, Component: SignUpPage },
  { path: '/checkout', exact: true, Component: CheckoutPage },
  { path: '/detail', exact: true, Component: ProductDetailPage },
  { path: '/about-us', exact: true, Component: AboutPage },
  { path: '*', exact: true, Component: NotFoundPage },
]