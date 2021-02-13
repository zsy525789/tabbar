import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
const Shopcar = () => import('../views/shopcar/Shopcar')

const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcar',
    component: Shopcar
  },
  {
    path: '/profile',
    component: Profile
  }
];

export default new Router({
  routes,
  mode: 'history'
})
