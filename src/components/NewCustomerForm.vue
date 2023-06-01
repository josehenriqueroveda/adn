<template>
  <div>
    <h1 class="h1-bolder">Cadastro de Cliente</h1>
    <form name="customerForm" @submit.prevent="createCustomer">
      <label for="name">Nome:</label>
      <input type="text" id="name" v-model="name" required placeholder="Digite o nome do cliente...">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required placeholder="xxxxx@xxxx.com">
      <label for="phone">Telefone Celular:</label>
      <input type="text" id="phone" v-model="phone" required placeholder="(00)00000-0000">
      <label for="city">Cidade:</label>
      <input type="text" id="cidade" v-model="city" required placeholder="Digite a cidaide...">
      <label for="state">Estado:</label>
      <div class="select-container">
        <VueMultiselect v-model="state" :options="states" placeholder="Selecione..." label="nome" track-by="nome"
          :multiple="false" :close-on-select="true" />
      </div>
      <label for="notes">Observações:</label>
      <textarea id="notes" v-model="notes" placeholder=""></textarea>
      <br />
      <button class="btn-common" type="submit">Salvar</button>
      <router-link :to="{ name: 'CustomerPage' }">Cancelar</router-link>
    </form>
  </div>
</template>
  
<script>
import { UFS } from '../config/constants.js'
import VueMultiselect from 'vue-multiselect'

export default {
  components: {
    VueMultiselect
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      active: true,
      notes: '',
      pets: [],
      states: UFS,
    }
  },
  methods: {
    createCustomer() {
      const newCustomer = {
        name: this.name,
        email: this.email
      }
      this.$emit('submit', newCustomer)
      this.name = ''
      this.email = ''
    },
  }
}
</script>

<style>
@import '../assets/vueMultiselect.css';
</style>