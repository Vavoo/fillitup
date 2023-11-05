<script setup>
  import { useJson } from '../modules/json'

  const { jsonAsString } = useJson()
</script>

<template>
  <h1>Edit JSON as Text</h1>
  <div class="card">
    <textarea
      rows="25"
      class="full"
      :value="jsonAsString"
      @input="event => jsonAsString = event.target.value" />
  </div>
</template>

<style scoped>
.full {
  width: 100%;
  height: 100%;
}
</style>
