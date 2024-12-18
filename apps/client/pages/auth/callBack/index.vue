<template>
  <div>
    <!-- 当正在处理中 -->
    <p v-if="isLoading">
      正在重定向...
    </p>
  </div>
</template>

<script setup lang="ts">
import { useHandleSignInCallback, useLogto } from '@logto/vue'

const supabase = useSupabaseClient()
const { getIdTokenClaims } = useLogto()

const { isLoading } = useHandleSignInCallback(async () => {
  console.log('回调')
  // 完成后执行某些操作，例如重定向到主页
  const claims = await getIdTokenClaims()

  navigateTo('/')
})
</script>

<style scoped>

</style>
