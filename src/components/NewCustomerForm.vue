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
      <h2>Pets</h2>
      <button class="btn-table" type="button" @click="addPet">+ Cadastrar Pet</button>
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
          <tr v-for="(pet, index) in pets" :key="pet.id">
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
      states: UFS,
      pets: [],
      editingPetIndex: null,
      petName: '',
      petBreed: '',
      petWeight: '',
      petAge: '',
      petNotes: '',
      showAddPetForm: false
    }
  },
  methods: {
    createCustomer() {
      const newCustomer = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        city: this.city,
        state: this.state,
        active: this.active,
        notes: this.notes,
        pets: this.pets
      }
      this.$emit('submit', newCustomer)
      this.name = ''
      this.email = ''
      this.phone = ''
      this.address = ''
      this.city = ''
      this.state = ''
      this.active = true
      this.notes = ''
      this.pets = []
    },
    addPet() {
      this.showAddPetForm = true
      this.editingPetIndex = null
      this.petName = ''
      this.petBreed = ''
      this.petWeight = ''
      this.petAge = ''
      this.petNotes = ''
    },
    savePet() {
      if (this.editingPetIndex !== null) {
        this.pets.splice(this.editingPetIndex, 1, {
          name: this.petName,
          breed: this.petBreed,
          weight: this.petWeight,
          age: this.petAge,
          notes: this.petNotes
        })
      } else {
        this.pets.push({
          id: this.pets.length + 1,
          name: this.petName,
          breed: this.petBreed,
          weight: this.petWeight,
          age: this.petAge,
          notes: this.petNotes
        })
      }
      this.showAddPetForm = false
      this.editingPetIndex = null
      this.petName = ''
      this.petBreed = ''
      this.petWeight = ''
      this.petAge = ''
      this.petNotes = ''
    },
    cancelAddPet() {
      this.showAddPetForm = false
      this.editingPetIndex = null
      this.petName = ''
      this.petBreed = ''
      this.petWeight = ''
      this.petAge = ''
      this.petNotes = ''
    },
    editPet(index) {
      const pet = this.pets[index]
      this.showAddPetForm = false
      this.editingPetIndex = index
      this.petName = pet.name
      this.petBreed = pet.breed
      this.petWeight = pet.weight
      this.petAge = pet.age
      this.petNotes = pet.notes
    },
    deletePet(index) {
      this.pets.splice(index, 1)
    },
  }
}
</script>

<style>
@import '../assets/vueMultiselect.css';
</style>