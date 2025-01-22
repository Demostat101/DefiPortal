<script setup lang="ts">
// src/i18n.ts
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en', // default language
  messages: {
    en: {
      message: {
        hello: 'Hello World'
      }
    },
    es: {
      message: {
        hello: 'Hola Mundo'
      }
    },
    fr: {
      message: {
        hello: 'Bonjour le Monde'
      }
    }
  }
})

export default i18n

</script>
