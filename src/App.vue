<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopBar from './views/TopBar.vue'
import FooterPage from './views/FooterPage.vue'

</script>

<template>
  <div class="flex flex-col h-screen bg-black relative overflow-y-auto">
    <TopBar />

    <main class="p-8 grow">
      <RouterView />
    </main>
    <FooterPage />
  </div>
</template>

<!-- <style scoped>
/* Target the Google Translate element container */
#google_translate_element {
  width: 15rem;  /* Adjust the width as needed */
  height: 30px;  /* Reduce the height as needed */
  background-color: black;  /* Optional background color */
}

/* Hide the Google logo */
/* #google_translate_element img[src*="google.com/images/branding/translate"] {
  display: none;
} */

/* Target the iframe inside the Google Translate element and resize it */
#google_translate_element iframe {
  width: 15rem !important;  /* Ensure the iframe takes up full width */
  height:2rem !important; /* Adjust height to match the container */
}

/* Optional: If the dropdown selector inside the Google Translate widget appears too large */
#google_translate_element select {
  height: 30px;  /* Reduce the height of the select box */
  font-size: 14px;  /* Adjust font size */
}

</style> -->
