<template>
    <div>
        <h1>View Customer</h1>
        <div>
            <p><strong>Name:</strong> {{ customer.name }}</p>
            <p><strong>Email:</strong> {{ customer.email }}</p>
            <p><strong>Phone:</strong> {{ customer.phone }}</p>
            <p><strong>Address:</strong> {{ customer.address }}</p>
            <p><strong>City:</strong> {{ customer.city }}</p>
            <p><strong>State:</strong> {{ customer.state }}</p>
            <p><strong>Notes:</strong> {{ customer.notes }}</p>
            <h2>Pets:</h2>
            <ul>
                <li v-for="pet in customer.pets" :key="pet.id">
                    <p><strong>Name:</strong> {{ pet.name }}</p>
                    <p><strong>Breed:</strong> {{ pet.breed }}</p>
                    <p><strong>Weight:</strong> {{ pet.weight }} lbs</p>
                    <p><strong>Age:</strong> {{ pet.age }}</p>
                    <p><strong>Notes:</strong> {{ pet.notes }}</p>
                </li>
            </ul>
        </div>
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
    }
}
</script>