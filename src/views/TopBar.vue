<script setup lang="ts">

</script>
<template>
  <div class=" sticky bg-black top-0 z-20 p-4 flex justify-between place-items-center items-center border-b-[#F5A524] border-b-[1px]">
    <div class="flex min-w-[2rem] gap-2 place-items-center cursor-pointer">
      <img class="w-[3.5rem] h-[3.5rem] object-contain" src="/images/logo.png" alt="">
      <div class=" text-[1.25rem] leading-[1.75rem] text-[#F5A524] font-semibold hidden md:block">Defi Portal Connect</div>
    </div>
    <div class=" flex gap-3 place-items-center">
      <div class=" flex flex-col gap-[1.5px]">
       <div class="w-full min-w-[10rem] max-w-[17rem] text-nowrap bg-white">
        <select class="bg-white text-[#666666] text-sm focus:outline-none outline-none w-full " name="" id="">
          <option value="">Select Language</option>
          <option value="">English</option>
          <option value="">French</option>
          <option value="">Spanish</option>
        </select>
       </div>
       <div class=" text-[0.75rem] text-[#444] font-bold">Powered by</div>
       <img class="w-[2.5rem] h-[1rem] object-contain" src="/images/google.png" alt="">
       <div class="text-[0.75rem] text-[#444] font-bold">Translate</div>

      </div>

        <div class="px-4 py-3 rounded-xl text-sm font-semibold bg-[#312107] text-[#F59813] cursor-pointer">Connect</div>

    </div>
  </div>
</template>
