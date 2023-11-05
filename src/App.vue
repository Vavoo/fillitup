<script setup>
  import { useJson } from './modules/json'

  const { error } = useJson()
</script>

<template>
  <div>
    <router-link to="doc">
      <img src="./assets/images/doc.svg" class="logo" alt="doc logo">
    </router-link>
    <router-link to="json">
      <img src="./assets/images/json.svg" class="logo json" alt="json logo">
    </router-link>
  </div>
  <div class="error" :class="error ? 'red' : 'white'">
    {{ error || 'Json is well defined' }}
  </div>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.red {
  color: red;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.json:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
