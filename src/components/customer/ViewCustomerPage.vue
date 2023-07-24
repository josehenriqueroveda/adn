<template>
    <div class="div-customer-page">
        <h1 class="h1-bolder margin-bottom">Visualizar Cliente</h1>
        <div class="customer-container">
            <p class="customer-name blue">{{ customer.name }}</p>
            <div class="customer-active">
                <label class="customer-details customer-details-label" for="active-checkbox">Ativo:</label>
                <input class="checkbox-input" type="checkbox" id="active-checkbox" v-model="customer.active">
            </div>
            <p class="customer-details"><strong class="customer-details-label">Email:</strong> {{ customer.email }}</p>
            <p class="customer-details"><strong class="customer-details-label">Telefone:</strong> {{ customer.phone }}</p>
            <p class="customer-details"><strong class="customer-details-label">Endereço:</strong> {{ customer.address }}</p>
            <p class="customer-details"><strong class="customer-details-label">Cidade:</strong> {{ customer.city }}</p>
            <p class="customer-details"><strong class="customer-details-label">Estado:</strong> {{ customer.state }}</p>
            <p class="customer-details"><strong class="customer-details-label">Observações:</strong> {{ customer.notes }}
            </p>
            <h2 class="blue">Pets:</h2>
            <ul>
                <li v-for="pet in customer.pets" :key="pet.id">
                    <p class="pet-name">{{ pet.name }}</p>
                    <p class="pet-details"><strong class="pet-details-label">Raça:</strong> {{ pet.breed }}</p>
                    <p class="pet-details"><strong class="pet-details-label">Peso:</strong> {{ pet.weight }}</p>
                    <p class="pet-details"><strong class="pet-details-label">Idade:</strong> {{ pet.age }}</p>
                    <p class="pet-details"><strong class="pet-details-label">Observações:</strong> {{ pet.notes }}</p>
                </li>
            </ul>
            <div class="margin-top">
                <router-link :to="{ name: 'CustomerPage' }">Voltar</router-link>
            </div>
        </div>
    </div>
</template>
  
<script>
import { CUSTOMERS } from '@/data/dummies.js'

export default {
    data() {
        return {
            customers: CUSTOMERS
        }
    },
    created() {
        this.customer = this.customers.find(customer => {
            return customer.id === parseInt(this.$route.params.id)
        })
    }
}
</script>