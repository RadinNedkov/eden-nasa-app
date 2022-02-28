<template>
  <div class="home">
    <h1 class="text-center mt-8" v-if="!$auth.loading">Eden Application APP</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const Home = Vue.extend({
  name: 'Home',
});

export default Home;
</script>
