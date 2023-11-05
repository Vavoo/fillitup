import { ref, watch } from 'vue'

const jsonAsString = ref('')
const error = ref('')
const jsonAsObject = ref({})

watch(jsonAsString, () => {
  try {
    const obj = JSON.parse(jsonAsString.value)
    jsonAsObject.value = obj
    error.value = ''
  } catch (err) {
    jsonAsObject.value = {}
    error.value = 'JSON is not well defined'
  }
})

watch(jsonAsObject, () => {
  jsonAsString.value = JSON.stringify(jsonAsObject.value, null, 2)
})

export function useJson () {
  return { jsonAsString, error, jsonAsObject }
}
