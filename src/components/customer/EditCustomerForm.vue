<template>
  <div>
    <h1 class="h1-bolder">Editar Cliente</h1>
    <form name="customerForm" @submit.prevent="editCustomer">
      <div class="customer-active">
        <label for="active-checkbox">Ativo:</label>
        <input class="checkbox-input" type="checkbox" id="active-checkbox" v-model="customer.active">
      </div>
      <label for="name">Nome:</label>
      <input type="text" id="name" v-model="customer.name" required placeholder="Digite o nome do cliente...">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="customer.email" required placeholder="xxxxx@xxxx.com">
      <label for="phone">Telefone Celular:</label>
      <input type="text" id="phone" v-model="customer.phone" required placeholder="(00)00000-0000">
      <label for="city">Cidade:</label>
      <input type="text" id="cidade" v-model="customer.city" required placeholder="Digite a cidade...">
      <label for="state">Estado:</label>
      <input type="text" id="estado" v-model="customer.state" required placeholder="Digite o estado...">
      <label for="notes">Observações:</label>
      <textarea id="notes" v-model="customer.notes" placeholder=""></textarea>
      <br />
      <h2>Pets</h2>
      <button class="btn-table" type="button" @click="addPet">+ Cadastrar Pet</button>
      <div class="table-div">
        <table class="table-common margin-bottom">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Raça</th>
              <th>Peso</th>
              <th>Idade</th>
              <th>Observações</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pet, index) in customer.pets" :key="pet.id">
              <td>{{ pet.name }}</td>
              <td>{{ pet.breed }}</td>
              <td>{{ pet.weight }}</td>
              <td>{{ pet.age }}</td>
              <td>{{ pet.notes }}</td>
              <td class="acoes">
                <button class="btn-table" type="button" @click="editPet(index)">Editar</button>
                <button class="btn-table" type="button" @click="deletePet(index)">Remover</button>
              </td>
            </tr>
            <tr v-if="showAddPetForm">
              <td><input v-model="petName" placeholder="Nome"></td>
              <td><input v-model="petBreed" placeholder="Raça"></td>
              <td><input v-model="petWeight" placeholder="Peso"></td>
              <td><input v-model="petAge" placeholder="Idade"></td>
              <td><input v-model="petNotes" placeholder="Observações"></td>
              <td class="acoes">
                <button class="btn-table" type="button" @click="savePet">Salvar</button>
                <button class="btn-table" type="button" @click="cancelAddPet">Cancelar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button class="btn-common" type="submit">Salvar</button>
      <router-link :to="{ name: 'CustomerPage' }">Cancelar</router-link>
    </form>
  </div>
</template>


<script>
import { UFS } from '@/config/constants'
import { CUSTOMERS } from '@/data/dummies.js'
import VueMultiselect from 'vue-multiselect'

export default {
  components: {
    VueMultiselect
  },
  data() {
    return {
      customers: CUSTOMERS,
      states: UFS,
      showAddPetForm: false,
    }
  },
  created() {
    this.customer = this.customers.find(customer => {
      return customer.id === parseInt(this.$route.params.id)
    })
  },
  methods: {
    editCustomer() {
      const updatedCustomer = {
        id: this.customer.id,
        name: this.name,
        email: this.email,
        phone: this.phone,
        city: this.city,
        state: this.state,
        notes: this.notes,
        pets: this.pets
      }
      this.$emit('submit', updatedCustomer)
    }
  }
}
</script>