<template>
  <div class="mt-8 mx-auto w-2/3" v-if="!$auth.loading">
    <p class="text-center text-lg">Welcome to Eden Application Task</p>
    <p class="mt-4 text-left text-base lg:text-center">This is an applicant task app, which aims to test all position relevant skills. </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const Home = Vue.extend({
  name: 'Home',
});

export default Home;
</script>
