<script setup lang="ts">
import { ref, defineEmits } from 'vue';

// Reactive variable for selected language
const selectedLanguage = ref<string>('en'); // Default language is English

// Define the emit for the language change event
const emit = defineEmits<{
  (e: 'language-changed', language: string): void;
}>();

// Emit the selected language to the parent component
const changeLanguage = () => {
  emit('language-changed', selectedLanguage.value);
};

console.log(changeLanguage);
console.log(selectedLanguage.value);


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
            @change="changeLanguage"

          >
            <option value="">Select Language</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
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
