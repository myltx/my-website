import type { useLogto } from '@logto/vue'
import { useRuntimeConfig } from 'nuxt/app'

let logto: ReturnType<typeof useLogto>
export async function getToken() {
  const accessToken = await logto.getAccessToken()

  return accessToken
}
