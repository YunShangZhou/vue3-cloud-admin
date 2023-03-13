<script setup lang="ts">
import { ref } from 'vue'

const content = ref('MIT License 2022-2023')

</script>
<template>
  <a-layout-footer class="app-footer">
    <a-space>
        {{ content }}
    </a-space>
  </a-layout-footer>
</template>

<style lang="scss" scoped>
.app-footer {
  color: #555;
}
.app-refresh {
  cursor: pointer;
  color: #666;
}
</style>
