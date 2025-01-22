<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopBar from './views/TopBar.vue'
import FooterPage from './views/FooterPage.vue'
import { onMounted } from 'vue'

// This method is triggered when the language is changed from TopBar component
const onLanguageChange = (language: string) => {
  initializeGoogleTranslate(language)
}

// Initialize or re-initialize Google Translate widget
const initializeGoogleTranslate = (language = 'en') => {
  // Wait until google.translate is available
  if (typeof window.google !== 'undefined' && window.google.translate) {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: language, // Set the language to selected
        includedLanguages: 'en,es,fr,de,it', // List of languages you want to support
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      },
      'google_translate_element'
    )
  } else {
    // Retry after a short delay if the Google Translate API is not yet available
    setTimeout(() => initializeGoogleTranslate(language), 1000)
  }
}

// Initialize Google Translate with the default language (English)
onMounted(() => {
  initializeGoogleTranslate()
})
</script>

<template>
  <div class="flex flex-col h-screen bg-black relative overflow-y-auto">
    <TopBar @language-changed="onLanguageChange"/>
    <div id="google_translate_element" style="width: 100vw; height: 70px;"></div>
    <main class="p-8 grow">
      <RouterView />
    </main>
    <FooterPage />
  </div>
</template>

<style scoped>
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
  height: 100% !important; /* Adjust height to match the container */
}

/* Optional: If the dropdown selector inside the Google Translate widget appears too large */
#google_translate_element select {
  height: 30px;  /* Reduce the height of the select box */
  font-size: 14px;  /* Adjust font size */
}

</style>
