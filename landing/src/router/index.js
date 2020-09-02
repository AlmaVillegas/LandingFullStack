import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../components/Inicio'
import Nuestro from '../components/Nuestro'
import Contacto from '../components/Contacto'
import Banquete from '../components/Banquete'

Vue.use(VueRouter)

const routes = [
  {
    path: '/inicio',
    name: 'Inicio',
    component: Inicio,
    children: [
      { path: 'nuestro', component: Nuestro },
      { path: 'contacto', component: Contacto },
      { path: 'banquete', component: Banquete }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
