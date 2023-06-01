<template>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
      <button type="submit">Add customer</button>
      <router-link :to="{ name: 'CustomerPage' }">Cancel</router-link>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: ''
      }
    },
    methods: {
      submitForm() {
        const newCustomer = {
          name: this.name,
          email: this.email
        }
        this.$emit('submit', newCustomer)
        this.name = ''
        this.email = ''
      }
    }
  }
  </script>