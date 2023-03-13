<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const handleBack = () => {
  router.push('/')
}
</script>
<template>
  <a-card class="app-error">
    <a-result class="result" status="404" subtitle="页面不见了～" />
    <div class="operation-row">
      <a-button key="back" type="primary" @click="handleBack">返回</a-button>
    </div>
  </a-card>
</template>
