<template>
    <div>
      <h1>Edit Customer</h1>
      <form>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="customer.name">
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="customer.email">
        </div>
        <div>
          <label for="phone">Phone:</label>
          <input type="tel" id="phone" v-model="customer.phone">
        </div>
        <div>
          <label for="address">Address:</label>
          <input type="text" id="address" v-model="customer.address">
        </div>
        <div>
          <label for="city">City:</label>
          <input type="text" id="city" v-model="customer.city">
        </div>
        <div>
          <label for="state">State:</label>
          <input type="text" id="state" v-model="customer.state">
        </div>
        <div>
          <label for="notes">Notes:</label>
          <textarea id="notes" v-model="customer.notes"></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  </template>


<script>
import { CUSTOMERS } from '../data/dummies.js'

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
    },
    methods: {
        submitForm() {
            const updatedCustomer = {
                id: this.customer.id,
                name: this.name,
                email: this.email
            }
            this.$emit('submit', updatedCustomer)
        }
    }
}
</script>