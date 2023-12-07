import { createRouter, createWebHistory } from 'vue-router'
import ArticleFormView from '../views/ArticleFormView.vue'
import tableListVue from '@/views/table-list.vue'
import PaymentView from '../views/PaymentView.vue'
import Customer from '../views/customer.vue'
import AccueilView from '@/views/AccueilView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/invoiceList',
      name: 'invoiceList',
      component: tableListVue
    },
    {
      path: '/articleForm',
      name: 'articleForm',
      component: ArticleFormView
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentView
    },
    {
      path: '/customer',
      name: 'customer',
      component: Customer
    },
    {
      path: '/',
      name: 'accueil',
      component: AccueilView
    },
  ]
})
export default router