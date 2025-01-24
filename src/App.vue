<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopBar from './views/TopBar.vue'
import FooterPage from './views/FooterPage.vue'
</script>

<template>
  <div class="flex flex-col h-screen bg-black relative overflow-y-auto hide-scrollbar">
    <TopBar />
    <main class="p-8 grow">
      <RouterView />
    </main>
    <FooterPage />
  </div>
</template>
