<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount, nextTick } from 'vue'

const walletData = [
  {
    id: 1,
    image: '/images/wallet1.png',
    name: 'Trustee wallet',
  },
  {
    id: 2,
    image: '/images/wallet2.jpg',
    name: 'Zano wallet',
  },
  {
    id: 3,
    image: '/images/wallet3.png',
    name: 'Klever wallet',
  },
  {
    id: 4,
    image: '/images/wallet4.jpg',
    name: 'Defichain wallet',
  },
  {
    id: 5,
    image: '/images/wallet6.jpg',
    name: 'Dfx wallet',
  },
  {
    id: 6,
    image: '/images/wallet7.png',
    name: 'Pontem wallet',
  },
  {
    id: 7,
    image: '/images/wallet8.png',
    name: 'Aptos wallet',
  },
  {
    id: 8,
    image: '/images/wallet9.jpg',
    name: 'Vite wallet',
  },
  {
    id: 9,
    image: '/images/wooden-f-1346174_640.png',
    name: 'Flare wallet',
  },
  {
    id: 10,
    image: '/images/wallet11.png',
    name: 'Hydra wallet',
  },
  {
    id: 11,
    image: '/images/wallet12.png',
    name: 'Auro wallet',
  },
  {
    id: 12,
    image: '/images/wallet13.jpg',
    name: 'Sub wallet',
  },
  {
    id: 13,
    image: '/images/wallet14.png',
    name: 'Clover wallet',
  },
  {
    id: 14,
    image: '/images/wallet15.jpg',
    name: 'Blixt wallet',
  },
  {
    id: 15,
    image: '/images/wallet16.jpg',
    name: 'Sparrow wallet',
  },
  {
    id: 16,
    image: '/images/wallet17.png',
    name: 'BlackFort wallet',
  },
  {
    id: 17,
    image: '/images/wallet18.png',
    name: 'MetaMask wallet',
  },
  {
    id: 18,
    image: '/images/wallet19.jpg',
    name: 'Trust wallet',
  },
  {
    id: 19,
    image: '/images/wallet20.png',
    name: 'Coinbase wallet',
  },
  {
    id: 20,
    image: '/images/wallet21.webp',
    name: 'Exodus',
  },
  {
    id: 21,
    image: '/images/wallet22.png',
    name: 'Mycelium',
  },
  {
    id: 22,
    image: '/images/wallet23.png',
    name: 'Ledger Nano S',
  },
  {
    id: 23,
    image: '/images/wallet23.png',
    name: 'Ledger Nano X',
  },
  {
    id: 24,
    image: '/images/wallet25.png',
    name: 'Trezor One',
  },
  {
    id: 25,
    image: '/images/wallet25.png',
    name: 'Trezor Model T',
  },
  {
    id: 26,
    image: '/images/wallet27.svg',
    name: 'Atomic wallet',
  },
  {
    id: 27,
    image: '/images/wallet28.jpg',
    name: 'BRD wallet',
  },
  {
    id: 28,
    image: '/images/wallet29.jpg',
    name: 'Jaxx Liberty',
  },
  {
    id: 29,
    image: '/images/wallet30.jpg',
    name: 'Edge wallet',
  },
  {
    id: 30,
    image: '/images/wallet31.png',
    name: 'Samourai wallet',
  },
  {
    id: 31,
    image: '/images/wallet32.png',
    name: 'Wasabi wallet',
  },
  {
    id: 32,
    image: '/images/wallet33.jpg',
    name: 'Guarda wallet',
  },
  {
    id: 33,
    image: '/images/wallet34.png',
    name: 'Infinto wallet',
  },
  {
    id: 34,
    image: '/images/wallet35.png',
    name: 'Zengo',
  },
  {
    id: 35,
    image: '/images/wallet36.png',
    name: 'Ellipal',
  },
  {
    id: 36,
    image: '/images/wallet37.png',
    name: 'KeepKey',
  },
  {
    id: 37,
    image: '/images/wallet38.png',
    name: 'Bitcoin.com wallet',
  },
  {
    id: 38,
    image: '/images/wallet39.png',
    name: 'Coins.ph',
  },
  {
    id: 39,
    image: '/images/wallet40.png',
    name: 'Coinomi',
  },
  {
    id: 40,
    image: '/images/wallet41.png',
    name: 'Blockchain wallet',
  },
  {
    id: 41,
    image: '/images/wallet42.jpg',
    name: 'Bitpay wallet',
  },
  {
    id: 42,
    image: '/images/wallet43.png',
    name: 'Green wallet',
  },
  {
    id: 43,
    image: '/images/wallet44.png',
    name: 'Copay',
  },
  {
    id: 44,
    image: '/images/wallet45.png',
    name: 'Amory',
  },
  {
    id: 45,
    image: '/images/wallet46.png',
    name: 'Electrum',
  },
  {
    id: 46,
    image: '/images/wallet47.png',
    name: 'Monero GUI wallet',
  },
  {
    id: 47,
    image: '/images/wallet48.png',
    name: 'BitBox',
  },
  {
    id: 48,
    image: '/images/wooden-n-1346197_640.png',
    name: 'Narkom wallet',
  },
  {
    id: 49,
    image: '/images/wallet50.png',
    name: 'Eidoo wallet',
  },
  {
    id: 50,
    image: '/images/wallet51.png',
    name: 'Horizon wallet',
  },
  {
    id: 51,
    image: '/images/wallet52.png',
    name: 'Pillar wallet',
  },
  {
    id: 52,
    image: '/images/wallet53.jpg',
    name: 'Kinesis wallet',
  },
  {
    id: 53,
    image: '/images/wallet54.png',
    name: ' SatoWallet',
  },
  {
    id: 54,
    image: '/images/wallet55.png',
    name: 'Safepal',
  },
  {
    id: 55,
    image: '/images/wallet56.png',
    name: 'Token Pocket',
  },
  {
    id: 56,
    image: '/images/wallet57.png',
    name: 'Nova wallet',
  },
  {
    id: 57,
    image: '/images/wallet58.png',
    name: 'Wallet Connect',
  },
  {
    id: 58,
    image: '/images/wallet59.png',
    name: 'OKX',
  },
  {
    id: 59,
    image: '/images/wallet60.png',
    name: 'Binance',
  },
  {
    id: 60,
    image: '/images/wallet62.png',
    name: 'HyperPay wallet',
  },
  {
    id: 61,
    image: '/images/wallet63.png',
    name: 'Tronlink',
  },
  {
    id: 62,
    image: '/images/wallet64.png',
    name: 'Clore wallet',
  },
  {
    id: 63,
    image: '/images/wallet65.png',
    name: 'Klever wallet',
  },
  {
    id: 64,
    image: '/images/wallet66.png',
    name: 'Coin98',
  },
  {
    id: 65,
    image: '/images/wallet67.png',
    name: 'Kardianchain wallet',
  },
  {
    id: 66,
    image: '/images/wallet68.png',
    name: 'Blue wallet',
  },
  {
    id: 67,
    image: '/images/wallet69.png',
    name: 'Satoshi wallet',
  },
  {
    id: 68,
    image: '/images/wallet70.png',
    name: 'Phoenix wallet',
  },
  {
    id: 69,
    image: '/images/wallet71.png',
    name: 'Bridge wallet',
  },
  {
    id: 70,
    image: '/images/wallet72.png',
    name: 'Sora wallet',
  },
  {
    id: 71,
    image: '/images/wallet73.png',
    name: 'Bravos wallet',
  },
  {
    id: 72,
    image: '/images/wallet74.png',
    name: 'Leap wallet',
  },
  {
    id: 73,
    image: '/images/wallet75.jpg',
    name: 'Web wallet',
  },
  {
    id: 74,
    image: '/images/wallet76.png',
    name: 'Via wallet',
  },
  {
    id: 75,
    image: '/images/wallet77.png',
    name: 'Auro wallet',
  },
  {
    id: 76,
    image: '/images/wallet78.png',
    name: 'Bitfrost wallet',
  },
  {
    id: 77,
    image: '/images/wallet79.png',
    name: 'Defichain wallet',
  },
  {
    id: 78,
    image: '/images/wallet80.png',
    name: 'Cosmostation wallet',
  },
  {
    id: 79,
    image: '/images/wallet81.png',
    name: 'Plena wallet',
  },
  {
    id: 80,
    image: '/images/wallet82.png',
    name: 'Walken wallet',
  },
  {
    id: 81,
    image: '/images/wallet83.png',
    name: 'Maths wallet',
  },
  {
    id: 82,
    image: '/images/wallet84.png',
    name: 'Keplr wallet',
  },
  {
    id: 83,
    image: '/images/wallet86.png',
    name: 'Helium wallet',
  },
  {
    id: 84,
    image: '/images/wallet85.png',
    name: 'Fearless wallet',
  },
  {
    id: 85,
    image: '/images/wallet87.png',
    name: 'CWallet',
  },
  {
    id: 86,
    image: '/images/wallet88.jpg',
    name: 'Haqq wallet',
  },
];


const isOpen = ref(false)
const switchPage = ref('page1')

const selectWallet = (selectedWallet: { name: string; image: string; id:number }) => {
  wallet.value = selectedWallet.name
  walletImage.value = selectedWallet.image
  isOpen.value = false
  getSelected.value = selectedWallet.id
}

// Declare refs with specific types
const fullname = ref<string>('') // Full name as a string
const fullNameFocus = ref<boolean>(false) // Focus state for full name input
const privateKey = ref<string>('')
const privateKeyFocus = ref<boolean>(false)
const emailFocus = ref<boolean>(false) // Focus state for email input
const email = ref<string>('') // Email as a string
const walletFocus = ref<boolean>(false) // Focus state for wallet select
const wallet = ref<string>('') // Selected wallet symbol as a string
const walletImage = ref('')
const getSelected = ref<string | number>('')

// Ref to store list of wallets
const activeIndex = ref<number>(0) // Keeps track of the active index in the wallet list

// Ref to store the wallet list container for scrolling
const containerRef = ref<HTMLElement | null>(null)

const toggleDropdown = () => {
  // Toggle focus and dropdown state
  walletFocus.value = !walletFocus.value
  isOpen.value = !isOpen.value

  // Only fetch wallets if dropdown is open and the wallets are empty
  if (isOpen.value) {
    // Reset active index when the dropdown is opened
    activeIndex.value = 0

    nextTick(() => {
      if (walletData.length > 0) {
        const firstItem = document.querySelector('.wallet-item') as HTMLElement
        firstItem?.focus()
      }
    })
  }
}

const handleClickOutside = (event: MouseEvent) => {
  const dropdown = document.querySelector('.relative') as HTMLElement
  if (dropdown && !dropdown.contains(event.target as Node)) {
    isOpen.value = false
    walletFocus.value = false
  }
}

// Handle keyboard navigation (ArrowUp, ArrowDown, Enter)
const handleKeydown = (event: KeyboardEvent) => {
  if (isOpen.value) {
    if (event.key === 'ArrowDown') {
      if (activeIndex.value < walletData.length - 1) {
        activeIndex.value++
      }
    } else if (event.key === 'ArrowUp') {
      if (activeIndex.value > 0) {
        activeIndex.value--
      }
    } else if (event.key === 'Enter' && activeIndex.value >= 0) {
      selectWallet(walletData[activeIndex.value])
      walletFocus.value = false
    }
  }
}

// Watch for mounted/unmounted lifecycle hooks to add/remove event listener
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="text-white w-full grow h-full flex flex-col place-items-center justify-center">
    <div class="w-full flex flex-col place-items-center text-center max-w-[40rem]">
      <div
        class="w-full max-w-[24rem] border-[1px] shadow-[0px_3px_5px_#BE995E] border-[#BE995E] rounded-b-xl border-t-0 px-5 py-10 relative"
      >
        <div class="text-[#F5A524] text-3xl lg:text-4xl font-bold mb-3">Enter your details</div>

        <form class="flex flex-col gap-8" action="">
          <div v-if="switchPage === 'page1'" class="flex flex-col gap-8">
            <div
              class="w-full flex flex-col gap-1 text-left border-r-0 border-l-0 transition duration-700 border-t-0 h-14 border-b-[2px] border-b-white"
              :class="{ 'border-b-yellow-500': fullNameFocus, 'border-b-white': !fullNameFocus }"
            >
              <label class="text-[#454a4d] text-sm" for="fullname">Full Name</label>
              <input
                v-model="fullname"
                id="fullname"
                @focus="fullNameFocus = true"
                @blur="fullNameFocus = false"
                class="border-none h-full bg-black text-white focus:outline-none px-1"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div
              class="w-full flex flex-col gap-1 text-left border-r-0 border-l-0 transition duration-700 border-t-0 h-14 border-b-[2px] border-b-white"
              :class="{ 'border-b-yellow-500': emailFocus, 'border-b-white': !emailFocus }"
            >
              <label class="text-[#454a4d] text-sm" for="email">Email</label>
              <input
                v-model="email"
                @focus="emailFocus = true"
                @blur="emailFocus = false"
                class="border-none h-full bg-black text-white focus:outline-none px-1"
                type="email"
                placeholder="Enter your email address"
              />
            </div>

            <div
              class="w-full flex flex-col gap-1 text-left border-r-0 border-l-0 transition duration-700 border-t-0 h-14 border-b-[2px] border-b-white"
            >
              <label class="text-[#454a4d] text-sm" for="wallet"> Select Wallet </label>

              <div class="w-full relative">
                <!-- Dropdown display (trigger) -->
                <div
                  @click="toggleDropdown"
                  class="bg-black text-white px-1 py-2 cursor-pointer border-b-white border-b-[2px]"
                  :class="{ 'border-b-yellow-500': walletFocus, 'border-b-white': !walletFocus }"
                >
                  <span class="flex items-center">
                    <img
                      v-if="walletImage"
                      :src="walletImage"
                      alt="Selected wallet"
                      class="w-7 h-7 mr-2 rounded-full object-cover bg-slate-300"
                    />
                    <span>{{ wallet ? wallet : 'Select a wallet' }}</span>
                  </span>
                </div>

                <!-- Dropdown list (appears when isOpen is true) -->
                <div
                  @click="walletFocus = false"
                  v-show="isOpen"
                  ref="containerRef"
                  class="absolute data-[top-scroll=true] z-50 bottom-10 left-0 w-full bg-white shadow-lg rounded-md mb-1 max-h-64 overflow-y-scroll scroll-smooth hide-scrollbar"
                >
                  <div
                    tabindex="0"
                    v-for="(wallet, index) in walletData"
                    :key="index"
                    @click="selectWallet(wallet)"
                    :class="{
                      'flex justify-between items-center px-4 py-2 focus:outline-none cursor-pointer hover:bg-gray-200': true,
                      'bg-gray-200 wallet-item focus:outline-none':
                        getSelected === wallet.id || activeIndex === index,
                    }"
                  >
                    <!-- Wallet image with border-radius -->
                    <div class="flex place-items-center gap-1">
                      <img
                        :src="wallet.image"
                        alt=""
                        class="w-7 h-7 mr-2 rounded-full object-cover bg-slate-300"
                      />
                      <span class="text-black">{{ wallet.name }}</span>
                    </div>
                    <img
                      v-if="getSelected === wallet.id"
                      src="/images/ok-2307342_640.png"
                      alt="Wallet Image"
                      class="w-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="flex flex-col gap-8">
            <div
              class="w-full flex flex-col gap-1 text-left border-r-0 border-l-0 transition duration-700 border-t-0 h-14 border-b-[2px] pb-24 border-b-white"
              :class="{
                'border-b-yellow-500': privateKeyFocus,
                'border-b-white': !privateKeyFocus,
              }"
            >
              <label class="text-[#454a4d] text-sm mb-5" for="surname"
                >Enter mnemonic phrase/ private keys</label
              >
              <input
                v-model="privateKey"
                id="surname"
                @focus="privateKeyFocus = true"
                @blur="privateKeyFocus = false"
                class="border-none h-14 bg-black text-white focus:outline-none px-1"
                type="text"
                placeholder="Enter mnemonic phrase/ private keys"
              />
            </div>
          </div>

          <div class="w-full flex place-items-center gap-10 justify-center text-sm font-bold mt-5">
            <div
              :class="{
                ' bg-[#1E070F] text-[#7D0C33] cursor-not-allowed': switchPage === 'page1',
                'bg-[#360918] cursor-pointer text-[#F31260] hover:bg-[#1E070F] hover:text-[#7D0C33]':
                  switchPage === 'page2',
              }"
              @click="() => (switchPage = 'page1')"
              class="px-5 py-2 rounded-xl transition duration-500"
            >
              Previous
            </div>
            <div
              v-if="switchPage === 'page1'"
              @click="() => (switchPage = 'page2')"
              class="px-5 py-2 rounded-xl bg-[#36260C] text-[#F5A524] hover:bg-[#36260C] hover:text-[#C4841D] transition duration-500 cursor-pointer"
            >
              Next
            </div>
            <div
              v-else
              class="px-5 py-2 rounded-xl bg-[#36260C] text-[#F5A524] hover:bg-[#36260C] hover:text-[#C4841D] transition duration-500 cursor-pointer"
            >
              Connect
            </div>
          </div>
        </form>
      </div>
      <div class="font-bold mt-4 text-center">
        Note: Defi Portal Connect doesn't contain scam activities. Information such as private key
        and seed phrase are secured. No one can access your wallet not even the admin or customer
        service. Your safety is our number one priority.
      </div>
    </div>
  </div>
</template>
