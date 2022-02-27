<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';

const App = Vue.extend({
  components: {
    Header
  }
});

export default App;
</script>