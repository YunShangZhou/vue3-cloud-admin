<script setup lang="ts">
import View from '@/components/View/index.vue'

import { authorInfo, projectInfo } from '@/common/constants'
</script>
<template>
  <a-space direction="vertical" :size="15">
    <View style="min-height: 100px" class="app-example relative">
      <a-descriptions :data="authorInfo" size="large" bordered title="作者信息" />
    </View>
    <View title="项目信息" style="min-height: calc(100vh - 320px)" class="app-example">
      <a-descriptions :column="2" layout="vertical" bordered size="large" :data="projectInfo" />
    </View>
  </a-space>
</template>
<style lang="scss">
.app-github {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 555;
}
</style>
