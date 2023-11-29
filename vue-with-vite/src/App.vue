<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
// import axios from '@/package/axios';

const list = ref<any>([])
async function getList() {
  // const res = await axios.get('/pic')
  // console.log(res);
  // list.value = res.data
}
getList()
</script>

<template>
  <div class="main">
    halo
    <div v-for="item of list" :key="item.age">
      <div>name: {{ item.name }}</div>
      <div>age: {{ item.age }}</div>
    </div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.main {
  height: 300vh;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
