// i18n.ts
import { createI18n } from 'vue-i18n';

// Define your messages
const messages = {
  en: {
    message: {
      hello: 'Hello world',
    },
  },
  // other languages
  fr: {
    message: {
      hello: 'Bonjour le monde',
    },
  },
};

const i18n = createI18n({
  legacy: false, // Disable the legacy API mode
  locale: 'en', // default language
  messages, // add your language messages
});

export default i18n;
