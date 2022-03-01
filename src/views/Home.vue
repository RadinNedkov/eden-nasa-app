<template>
  <div class="mt-8 mx-auto w-2/3" v-if="!$auth.loading">
    <h1 class="text-center">Welcome to Eden Application Task</h1>
    <h2 class="mt-4 text-left lg:text-center">This an applicant task app, which aims to test all position relevant skills. </h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const Home = Vue.extend({
  name: 'Home',
});

export default Home;
</script>
