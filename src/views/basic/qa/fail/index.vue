<script lang="ts" setup>
import View from '@/components/View/index.vue'
import { Notification } from '@arco-design/web-vue'

const handleClick = () => {
  Notification.success({ title: '友情提醒', content: '点击了返回' })
}
</script>
<template>
  <View>
    <a-result status="error" title="操作失败">
      <template #subtitle>请稍候, 下一个错误正在准备中...</template>
      <template #extra>
        <a-space>
          <a-button type="primary" @click="handleClick">点击返回</a-button>
        </a-space>
      </template>
    </a-result>
  </View>
</template>
<style lang="scss"></style>
