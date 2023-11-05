<script setup>
  import { useJson } from '../modules/json.js'

  const { jsonAsObject } = useJson()
  const breadcrumbs = [jsonAsObject]

  function back () {
    if (breadcrumbs.length > 1) {
      breadcrumbs.pop()
    }
  }
</script>

<template>
  <h1>Edit JSON as Tree Object</h1>
  <div class="card" />
  <button type="button" @click="back">
    Back
  </button>
</template>

<style scoped>
</style>
