<script setup>
  import { useJson } from '../modules/json.js'
  import { format } from '../modules/formatting.js'

  const { jsonAsString, setJsonString } = useJson()

  function formatJson () {
    const formattedJsonString = format()
    if (formattedJsonString) {
      setJsonString(formattedJsonString)
    }
  }
</script>

<template>
  <h1>Edit JSON as Text</h1>
  <div class="card">
    <textarea
      rows="25"
      class="full"
      :value="jsonAsString"
      @input="event => setJsonString(event.target.value)" />
    <button type="button" @click="formatJson">
      Format
    </button>
  </div>
</template>

<style scoped>
.full {
  width: 100%;
  height: 100%;
}
</style>
