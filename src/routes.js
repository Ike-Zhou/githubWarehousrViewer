import {
  Home,
  Login,
  Detaile,
} from './pages'

const router = [
  {
    path: '/login',
    component: Login,
    title: 'Login',
    is: true,
  }, {
    path: '/home',
    component: Home,
    title: 'Home',
    is: true,
  }, {
    path: '/detaile',
    component: Detaile,
    title: 'Detaile',
    is: true,
  },
]

export default router
