<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const datas = [
  {
    header: 'Transaction Simulations',
    image: '/images/transaction.svg',
    body: 'See exactly what happens to your wallet after signing a hack Transaction and be protected at all times.',
  },
  {
    header: 'Hardware Wallet Support',
    image: '/images/wallet.svg',
    body: 'The safest way to interact with Blockchains is with a hardware wallet. Web3 modal supports Ledger on both web and mobile.',
  },
  {
    header: 'Anti-Phishing',
    image: '/images/phishing.png',
    body: 'Web3 modal warns you before interacting with possibly malicious websites. Explore Solana dApps with ease ofmind...',
  },
]

const sliderDatas = [
  {
    header: 'Manage your NFT collection',
    image: '/images/teddy.png',
    body: 'Safely store your favourite NFTs, check floor prices, set NFT profile picture and more',
  },
  {
    header: 'Buy, store,Send, Swap',
    image: '/images/kite.png',
    body: 'Easily buy and manage all your tokens from the web',
  },
  {
    header: 'Easy to read activity history',
    image: '/images/history.png',
    body: 'View and understand you activity history without needing to be a blockchain expert',
  },
  {
    header: 'stake and earn',
    image: '/images/earn.png',
    body: 'Stake or liquid stake in any native token in one click',
  },
]

const currentSlide = ref(0)

// Handle previous slide
const handlePrev = () => {
  currentSlide.value = currentSlide.value === 0 ? sliderDatas.length - 1 : currentSlide.value - 1
}

// Handle next slide
const handleNext = () => {
  currentSlide.value = (currentSlide.value + 1) % sliderDatas.length
}

const handleIndicatorChange = (index: number) => {
  currentSlide.value = index
}

let intervalId: number

onMounted(() => {
  intervalId = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % sliderDatas.length
  }, 3000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})

const visibleCards = computed(() => {
  return sliderDatas.slice(currentSlide.value, currentSlide.value + 1)
})
</script>
<template>
  <div class="text-white w-full min-h-screen flex flex-col gap-10">
    <!-- <component :is="btn"/>
    <component :is="btn" class="w-10 h-10 text-red-500" /> -->
    <div
      class="grid gap-10 md:gap-5 lg:grid-cols-[1.5fr_2fr] md:grid-cols-[1.3fr_1fr] w-full max-w-[90rem]"
    >
      <div
        class="px-[1rem] py-[4rem] order-2 md:order-1 flex flex-col place-items-center justify-center items-center rounded-xl bg-gradient-to-br from-[#F5A524] via-[#92541B] to-[#481715]"
      >
        <div class="text-[1.5rem] leading-[2rem] font-normal text-center">
          A secure and powerful
          <span class="text-[#610726] font-bold text-[1.875rem] leading-[2.25rem]"
            >wallet solution</span
          >
          provider
        </div>
        <p class="text-[0.875rem] leading-[1.25rem] text-center lg:px-6 mt-1">
          Defi Portal Connect provides industry-leading Web3 and Blockchain a safe protocol and
          process encrypted by a superb encryption server. Your warningrmation never leaves our
          sever or be visible to anyone It’s an end to end encryption with no human interaction
        </p>
        <div
          class="flex gap-1 md:gap-5 max-w-[30rem] w-full justify-center flex-wrap place-items-center items-center mt-10 font-medium"
        >
          <RouterLink
            to="/connect"
            class="px-4 py-2 rounded-xl bg-[#F5A524] text-nowrap text-[#000000] hover:bg-[#e6aa4a] cursor-pointer"
          >
            Connect to Wallet
          </RouterLink>
          <RouterLink
            to="/services"
            class="px-4 py-2 bg-[#F31260] hover:bg-[#da4c7e] cursor-pointer rounded-xl"
          >
            Proceed
          </RouterLink>
        </div>
      </div>

      <div class="flex justify-center place-items-center order-1 md:order-2">
        <div
          class="bg-[url('/images/cryptocurrency.avif')] bg-no-repeat bg-[position:center_center] bg-cover aspect-[16/9] md:aspect-auto max-h-[20rem] w-full md:bg-[size:400px_auto] lg:w-[50%] lg:h-[70%] md:w-[90%] md:h-[60%] border-[1px] shadow-[0px_3px_5px_#DA638D] border-[#DA638D] rounded-xl border-t-0"
        ></div>
      </div>
    </div>
    <div>
      <div class="text-[1.25rem] leading-[1.75rem] text-[rgb(163_163_163)] mt-[0.13rem]">SAFE</div>
      <div class="text-4xl mt-[0.13rem]">
        <span class="text-[#F5A524] font-bold">Security</span> is key
      </div>
      <p class="text-[#D4D4D4] text-xl mt-[0.13rem]">
        Defi Portal Connect was the first Wallet solution provider that provides the simplest yet
        most secure way to connect to blockchain-based applications. You are always in control when
        interacting on the new decentralized web.
      </p>

      <div class="w-full grid lg:grid-cols-3 gap-10 my-[1rem] text-left h-fit">
        <div
          v-for="(data, index) in datas"
          :key="index"
          :class="{ 'min-h-[400px]': index === 1, 'h-fit': index !== 1 }"
          class="border-[1px] border-[#D4D4D4] rounded-lg p-8 items-center flex flex-col place-items-center"
        >
          <img :src="data.image" alt="" />
          <div class="text-xl font-bold text-center">{{ data.header }}</div>
          <div class="text-[#A3A3A3] text-lg">{{ data.body }}</div>
        </div>
      </div>
    </div>

    <div>
      <div class="text-2xl font-normal text-[#A3A3A3] text-center">Powerful</div>
      <div class="text-3xl font-bold text-center">
        Block rocking <span class="text-[#66AAF9]">Power</span>
      </div>
      <div class="text-xl text-[#A3A3A3] text-center mt-[1rem] mb-[2rem]">
        From Newcomer to Pro - Web3 modal got you covered. Powerful features are constantly added to
        assist you to succeed more.
      </div>

      <!-- Slider Container -->
      <div class="w-full relative flex justify-center place-items-center">
        <div class="absolute top-1 right-3 text-white text-[0.75rem] font-normal">
          {{ currentSlide + 1 }} of {{ sliderDatas.length }}
        </div>

        <div @click="handlePrev" class="absolute -left-3 cursor-pointer">
          <button class="w-12 h-12 flex items-center justify-center transform rotate-180">
            <div
              class="w-0 h-0 border-t-[0.75rem] border-b-[0.75rem] border-l-[0.75rem] border-transparent border-l-[#6D6D6E] hover:border-l-white"
            ></div>
          </button>
        </div>

        <!-- Cards Section -->
        <div
          v-for="(cardData, index) in visibleCards"
          :key="index"
          class="border-[1px] border-[#D4D4D4] rounded-lg min-w-[15rem] w-full p-5 flex flex-col gap-5 mb-5"
        >
          <div class="flex flex-col gap-2 place-items-center">
            <img class=" " :src="cardData.image" alt="" />

            <div class="flex flex-col gap-3">
              <span class="text-xl font-bold text-center">
                {{ cardData.header }}
              </span>
              <span class="text-[#A3A3A3] text-lg">{{ cardData.body }}</span>
            </div>
          </div>
        </div>

        <span class="flex gap-2 place-items-center absolute bottom-[1.5rem]">
          <button
            v-for="(item, index) in sliderDatas"
            :key="index"
            @click="handleIndicatorChange(index)"
            :class="
              currentSlide === index
                ? ' h-3 w-3 bg-white rounded-full m-[0_0.2rem]'
                : ' w-3 h-3 rounded-full bg-gray-400'
            "
          />
        </span>

        <!-- Next Button (conditional rendering) -->
        <div @click="handleNext" class="absolute -right-3 cursor-pointer">
          <button class="w-12 h-12 flex items-center justify-center">
            <div
              class="w-0 h-0 border-t-[0.75rem] border-b-[0.75rem] border-l-[0.75rem] border-transparent border-l-[#6D6D6E] hover:border-l-white"
            ></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
