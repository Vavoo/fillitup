import { useJson } from './json.js'

export function format () {
  const { error, jsonAsObject } = useJson()
  if (error.value) {
    return
  }
  return JSON.stringify(jsonAsObject.value, null, 4)
}
