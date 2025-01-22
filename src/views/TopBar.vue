<script setup lang="ts"></script>

<template>
  <div
    class="sticky bg-black top-0 gap-4 z-20 p-4 flex justify-between place-items-center items-center border-b-[#F5A524] border-b-[1px]"
  >
    <RouterLink to="/" class="flex min-w-[2rem] gap-2 place-items-center cursor-pointer">
      <img class="w-[3.5rem] h-[3.5rem] object-contain" src="/images/logo.png" alt="" />
      <div class="text-[1.25rem] leading-[1.75rem] text-[#F5A524] font-semibold hidden md:block">
        Defi Portal Connect
      </div>
    </RouterLink>

    <div class="flex gap-5 place-items-center">
      <div class="flex flex-col gap-[1.5px]">
        <!-- Custom Language Select -->

        <div id="google_translate_element">
          <div class="skiptranslate goog-te-gadget flex flex-col" dir="ltr">
            <div id=":0.targetLanguage"></div>
          </div>
        </div>
      </div>
      <RouterLink to="/connect">
        <div
          class="px-4 py-3 rounded-xl text-sm font-semibold bg-[#312107] text-[#F59813] cursor-pointer"
        >
          Connect
        </div>
      </RouterLink>
    </div>
  </div>
</template>
