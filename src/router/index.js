import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import(/* webpackChunkName: "about" */ '../components/Landing.vue')
  },
  {
    path: '/personaldetails',
    name: 'PersonalDetails',
    component: () => import( '../components/Personal Details/PersonalDetails.vue'),
    redirect:'/personaldetails/information',
    children:[{
      path: '/personaldetails/information',
      name: 'Information',
      component: () => import( '../components/Personal Details/Information.vue')
    },{
      path: '/personaldetails/engagementletter',
      name: 'EngagementLetter',
      component: () => import( '../components/Personal Details/EngagementLetter.vue')
    },{
      path: '/personaldetails/payment',
      name: 'Payment',
      component: () => import( '../components/Personal Details/Payment.vue')
    },{
      path: '/personaldetails/done',
      name: 'Done',
      component: () => import( '../components/Personal Details/Done.vue')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
