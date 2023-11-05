<script setup>
  import { toValue, ref } from 'vue'
  import { useJson } from '../modules/json.js'

  const { jsonAsObject } = useJson()
  const breadcrumbs = [jsonAsObject]
  const objects = ref([])
  const strings = ref([])

  parseTop()

  function back () {
    if (breadcrumbs.length > 1) {
      breadcrumbs.pop()
      parseTop()
    }
  }

  function drillDown (entry) {
    const top = toValue(breadcrumbs[breadcrumbs.length - 1])
    breadcrumbs.push(top[entry])
    parseTop()
  }

  function updateString (entry, newValue) {
    const top = toValue(breadcrumbs[breadcrumbs.length - 1])
    top[entry.name] = newValue
    jsonAsObject.value = { ...jsonAsObject.value }
    parseTop()
  }

  function parseTop () {
    objects.value = []
    strings.value = []
    const top = toValue(breadcrumbs[breadcrumbs.length - 1])
    console.log(top, typeof top)
    for (const property in top) {
      console.log(property, typeof top[property])
      if (typeof top[property] === 'object') {
        objects.value.push(property)
      } else if (typeof top[property] === 'string') {
        strings.value.push({ name: property, value: top[property] })
      }
    }
  }
</script>

<template>
  <h1>Edit JSON as Tree Object</h1>
  <div class="card" />
  <button type="button" @click="back">
    Back
  </button>
  <li v-for="entry in objects" :key="entry">
    <button type="button" @click="drillDown(entry)">
      {{ entry }}
    </button>
  </li>
  <li v-for="entry in strings" :key="entry">
    {{ entry.name }}:
    <input
      :value="entry.value"
      @blur="event => updateString(entry, event.target.value)">
  </li>
</template>

<style scoped>
</style>
