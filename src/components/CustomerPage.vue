<template>
  <div>
    <div class="search-container">
      <input class="search-input" type="text" v-model="searchQuery" placeholder="Buscar clientes...">
      <router-link class="btn-common" :to="{ name: 'NewCustomerForm' }">Adicionar Cliente</router-link>
      <div class="table-div">
        <table class="table-common">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Contato</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="customer in filteredCustomers" :key="customer.id">
              <td>{{ customer.name }}</td>
              <td>{{ customer.email }}</td>
              <td>{{ customer.phone }}</td>
              <td class="acoes">
                <router-link class="btn-table" :to="{ name: 'EditCustomerForm', params: { id: customer.id } }">
                  Editar
                </router-link>
                <router-link class="btn-table" :to="{ name: 'ViewCustomerPage', params: { id: customer.id } }">
                  Visualizar
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
  
<script>
import { CUSTOMERS } from '../data/dummies.js'

export default {
  props: {
    customers: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      searchQuery: '',
      customers: CUSTOMERS
    }
  },
  computed: {
    filteredCustomers() {
      return this.customers.filter(customer => {
        return customer.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          customer.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
    }
  },
  methods: {
    navigateToEditCustomerPage(customer) {
      // Code to navigate to the edit customer page
    },
    navigateToViewCustomerPage(customer) {
      // Code to navigate to the view customer page
    }
  }
}
</script>

<style>
@import '../assets/customerPage.css';
</style>