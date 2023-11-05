import { ref, watch } from 'vue'

const jsonAsString = ref('')
const error = ref('')
const jsonAsObject = ref({})

export function useJson () {
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

  return { jsonAsString, error, jsonAsObject }
}
