import {
  Home,
  Login,
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
  },
]

export default router
