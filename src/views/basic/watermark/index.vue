<script lang="ts" setup>
import View from '@/components/View/index.vue'
import Watermark from 'watermark-plus'
import { ProjectName } from '@/common/constants'

const watermark = new Watermark({
  content: ProjectName,
})

function init() {
  watermark.create()
}

onMounted(() => {
  init()
})

onUnmounted(() => {
  watermark.destroy()
})
</script>
<template>
  <View class="app-page">
    <a-card>水印展示</a-card>
  </View>
</template>
<style lang="scss"></style>
