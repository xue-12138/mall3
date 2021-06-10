import { createRouter, createWebHistory } from 'vue-router'
const Home=()=>import('views/tabbar/home/Home.vue')
const Category=()=>import('views/tabbar/category/Category.vue')
const Cart=()=>import('views/tabbar/cart/Cart.vue')
const Profile=()=>import('views/tabbar/profile/Profile.vue')
const Detail=()=>import('../views/detail/Detail.vue')

const routes = [
  
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component:Home
  },
  {
    path: '/category',
    name: 'category',
    component:Category
  },
  {
    path: '/cart',
    name: 'cart',
    component:Cart
  },
  {
    path: '/profile',
    name: 'profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    name:'detail',
    component:Detail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
