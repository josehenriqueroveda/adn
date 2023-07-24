<template>
    <div>
      <h1 class="h1-bolder">Atendimentos</h1>
      <div class="search-container">
        <input class="search-input" type="text" v-model="searchQuery" placeholder="Buscar Atendimento (por cliente)...">
        <router-link class="btn-common" :to="{ name: 'NewVetServiceForm' }">Novo Atendimento</router-link>
        <div class="table-div">
          <table class="table-common">
            <thead>
              <tr>
                <th>Data do Atendimento</th>
                <th>Nome do Cliente</th>
                <th>Nome do Pet</th>
                <th>Tipo de Atendimento</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="vetservice in filteredServices" :key="vetservice.id">
                <td>{{ vetservice.serviceDate }}</td>
                <td>{{ vetservice.customerName }}</td>
                <td>{{ vetservice.petName }}</td>
                <td>{{ vetservice.serviceType }}</td>
                <td class="acoes">
                  <router-link class="btn-table" :to="{ name: 'EditVetServiceForm', params: { id: vetservice.id } }">
                    Editar
                  </router-link>
                  <router-link class="btn-table" :to="{ name: 'ViewVetServicePage', params: { id: vetservice.id } }">
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
  import { VETSERVICES } from '@/data/dummies.js'
  
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
        vetservices: VETSERVICES
      }
    },
    computed: {
      filteredServices() {
        return this.vetservices.filter(vetservice => {
          return vetservice.customerName.toLowerCase().includes(this.searchQuery.toLowerCase())
        })
      }
    },
  }
  </script>
  
  <style>
  @import '@/assets/customerPage.css';
  </style>