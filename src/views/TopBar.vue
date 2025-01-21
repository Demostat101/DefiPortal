<script  setup lang="ts">
import { ref } from 'vue';

// Reactive variable for selected language
const selectedLanguage = ref<string>("");

// Function to handle language change
// const handleLanguageChange = () => {
//   if (selectedLanguage.value) {
//     // Retry to check iframe and select until it's available

//     let attempts = 0;
//     const maxAttempts = 10; // Max number of attempts
//     const interval = 500; // Interval in ms to wait before retrying

//     // Retry logic to wait for iframe to load
//     const retryIframe = setInterval(() => {
//       if (tryAccessIframe() || attempts >= maxAttempts) {
//         clearInterval(retryIframe);
//       }
//       attempts++;
//     }, interval);
//     const tryAccessIframe = () => {


//       const iframe = document.querySelector("iframe.goog-te-menu-frame");
//       console.log(selectedLanguage.value);

//       console.log(iframe);



//       if (iframe && iframe.contentWindow) {
//         const iframeDocument = iframe.contentWindow.document;
//         const select = iframeDocument.querySelector('select.goog-te-combo');

//         if (select) {
//           select.value = selectedLanguage.value;
//           select.dispatchEvent(new Event('change')); // Trigger the change event
//           return true;
//         }
//       }
//       return false;
//     };


//   }
// };

// Load Google Translate widget when the component is mounted
// import { onMounted } from 'vue';
// onMounted(() => {
//   // Manually trigger Google Translate script loading in App.vue
//   const loadGoogleTranslateWidget = () => {
//     const script = document.createElement('script');
//     script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//     script.async = true;
//     document.head.appendChild(script);
//   };

//   loadGoogleTranslateWidget();
// });

// Initialize Google Translate when the script is loaded
// window.googleTranslateElementInit = () => {
//   console.log("Google Translate Initialized");
//   new (window as any).google.translate.TranslateElement({
//     pageLanguage: 'en',
//     includedLanguages: 'en,fr,es', // You can modify the languages here
//     layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
//     autoDisplay: false
//   }, 'google_translate_element');
// };
</script>

<template>
  <div class="sticky bg-black top-0 z-20 p-4 flex justify-between place-items-center items-center border-b-[#F5A524] border-b-[1px]">
    <RouterLink to="/" class="flex min-w-[2rem] gap-2 place-items-center cursor-pointer">
      <img class="w-[3.5rem] h-[3.5rem] object-contain" src="/images/logo.png" alt="" />
      <div class="text-[1.25rem] leading-[1.75rem] text-[#F5A524] font-semibold hidden md:block">Defi Portal Connect</div>
    </RouterLink>

    <div class="flex gap-3 place-items-center">
      <div class="flex flex-col gap-[1.5px]">
        <!-- Custom Language Select -->
        <div class="w-full min-w-[10rem] max-w-[17rem] text-nowrap bg-white">
          <select
            v-model="selectedLanguage"
            class="bg-white text-[#666666] text-sm focus:outline-none outline-none w-full md:w-[15rem]"
   
          >
            <option value="">Select Language</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </select>
        </div>

        <a href="https://translate.google.com/?sl=auto&tl=en&op=translate" target="_blank">
          <div class="text-[0.75rem] text-[#444] font-bold">Powered by</div>
          <img class="w-[2.5rem] h-[1rem] object-contain" src="/images/google.png" alt="Google Translate">
          <div class="text-[0.75rem] text-[#444] font-bold">Translate</div>
        </a>
      </div>

      <RouterLink to="/connect">
        <div class="px-4 py-3 rounded-xl text-sm font-semibold bg-[#312107] text-[#F59813] cursor-pointer">Connect</div>
      </RouterLink>
    </div>
  </div>
</template>
