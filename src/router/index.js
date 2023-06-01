import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import CustomerPage from '../components/CustomerPage.vue'
import NewCustomerForm from '../components/NewCustomerForm.vue'
import ViewCustomerPage from '../components/ViewCustomerPage.vue'
import EditCustomerForm from '../components/EditCustomerForm.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/clientes',
            name: 'CustomerPage',
            component: CustomerPage
        },
        {
            path: '/clientes/novo',
            name: 'NewCustomerForm',
            component: NewCustomerForm
        },
        {
            path: '/clientes/:id',
            name: 'ViewCustomerPage',
            component: ViewCustomerPage
        },
        {
            path: '/clientes/:id/editar',
            name: 'EditCustomerForm',
            component: EditCustomerForm
        }
    ]
})

export default router