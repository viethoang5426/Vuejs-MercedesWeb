import Vue from 'vue'
import VueRouter from 'vue-router'
import TrangChu from '../TrangChu.vue'
import WedNavbar from '../components/WedNavbar' 
import WedFooter from '../components/WedFooter'
import WedContents from '../components/WedContents'
import WebTableCar from '../components/WebTableCar'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/trangchu',
    name: 'TrangChu',
    component: TrangChu
  },
  {
    path: '/webnavbar',
    name: 'WedNavbar',
    component: WedNavbar
  },
  {
    path: '/wedfooter',
    name: 'WedFooter',
    component: WedFooter
  },
  {
    path: '/wedcontents',
    name: 'WedContents',
    component: WedContents
  },
  {
    path: '/wedtablecar',
    name: 'WebTableCar',
    component: WebTableCar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
