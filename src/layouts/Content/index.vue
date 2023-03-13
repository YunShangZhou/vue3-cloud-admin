<script lang="ts" setup></script>
<template>
  <a-layout-content class="app-layout-content">
    <router-view v-slot="{ Component, route }">
      <transition appear name="fade-transform" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </a-layout-content>
</template>
