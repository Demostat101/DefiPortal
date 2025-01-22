<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopBar from './views/TopBar.vue'
import FooterPage from './views/FooterPage.vue'
// import { onMounted } from 'vue'

// const initializeGoogleTranslate = () => {
//   new google.translate.TranslateElement(
//     {
//       pageLanguage: 'en', // Default language
//       includedLanguages: 'en,es,fr,de,it', // Languages supported
//       layout: google.translate.TranslateElement.InlineLayout.SIMPLE
//     },
//     'google_translate_element'
//   )
// }

// onMounted(() => {
//   const script = document.createElement('script')
//   script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
//   script.async = true
//   document.body.appendChild(script)

//   // Initialize Google Translate
//   window.googleTranslateElementInit = initializeGoogleTranslate
// })
</script>

<template>
  <div class="flex flex-col h-screen bg-black relative overflow-y-auto">
    <TopBar />
    <!-- <div id="google_translate_element" style="width: 15rem; height: 70px;"></div> -->
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
