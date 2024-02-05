<script setup>
  import Header from './components/Header.vue';
  import Balance from './components/Balance.vue';
  import {ref, computed} from 'vue'

  const transactions = ref([
    {id: 1, text: 'Paycheck', ammount: 699.99},
    {id: 2, text: 'Food', ammount: -30},
    {id: 3, text: 'Bills', ammount: -200},
    {id: 4, text: 'Video Game', ammount: -54.11},
    {id: 5, text: 'Tax Return', ammount: 3000},
  ])

  //get the total
  const total = computed(() =>{
    return transactions.value.reduce( (acc, transaction) => {
      return acc + transaction.amount
    }, 0)
  })

  
</script>

<template>
  <Header></Header>
  <div class="container">
    <Balance :total="total"></Balance>
  </div>
</template>