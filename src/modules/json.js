import { readonly, ref, toValue } from 'vue'
import { useStorage } from '@vueuse/core'

const jsonAsString = useStorage('jsonAsString', '')
const error = ref('')
const jsonAsObject = ref({})

setJsonString(jsonAsString.value)

function setJsonString (jsonString) {
  jsonAsString.value = toValue(jsonString)
  try {
    jsonAsObject.value = JSON.parse(jsonAsString.value)
    error.value = ''
  } catch (err) {
    jsonAsObject.value = {}
    error.value = 'JSON is not well defined'
  }
}

function setJsonObject (jsonObject) {
  jsonAsObject.value = toValue(jsonObject)
  jsonAsString.value = JSON.stringify(jsonAsObject.value, null, 2)
}

export function useJson () {
  return {
    error,
    jsonAsString: readonly(jsonAsString),
    jsonAsObject: readonly(jsonAsObject),
    setJsonString,
    setJsonObject
  }
}
