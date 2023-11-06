<script setup>
  import { toValue, ref, watch, toRaw } from 'vue'
  import { useJson } from '../modules/json.js'

  const { jsonAsObject, setJsonObject } = useJson()
  const breadcrumbs = []
  const objects = ref([])
  const strings = ref([])
  let json = {}

  parseTop()

  watch(jsonAsObject, () => {
    parseTop()
  })

  function back () {
    if (breadcrumbs.length > 0) {
      breadcrumbs.pop()
      parseTop()
    }
  }

  function drillDown (entry) {
    breadcrumbs.push(entry)
    parseTop()
  }

  function getTopObject () {
    let top = json
    for (let i = 0; i < breadcrumbs.length; i++) {
      if (top[breadcrumbs[i]] !== undefined) {
        top = top[breadcrumbs[i]]
      } else {
        top = undefined
        break
      }
    }
    return top
  }

  function updateString (entry, newValue) {
    const top = getTopObject()
    if (top !== undefined) {
      top[entry.name] = newValue
      setJsonObject(json)
    }
    parseTop()
  }

  function parseTop () {
    objects.value = []
    strings.value = []
    json = structuredClone(toRaw(toValue(jsonAsObject)))
    let top = getTopObject()
    if (top === undefined) {
      breadcrumbs.length = 0
      top = json
    }
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
