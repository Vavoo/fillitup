import { ref, watch } from 'vue'

const jsonAsString = ref('')
const error = ref('')

export function useJson () {
  watch(jsonAsString, () => {
    console.log('json changed:', jsonAsString)
    error.value = 'JSON is not well defined'
  })

  return { jsonAsString, error }
}
