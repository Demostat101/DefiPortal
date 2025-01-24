<script setup lang="ts">
import { onMounted, ref, watch, onBeforeUnmount, nextTick } from 'vue'
import { defineProps } from 'vue'

const isOpen = ref(false)
const switchPage = ref('page1')

// Define types for wallet data structure
interface Wallet {
  CoinName: string
  Symbol: string
  ImageUrl: string
  Id: string
}

const props = defineProps({
  wallets: {
    type: Array as () => Wallet[],
    required: true,
  },
})

const selectWallet = (selectedWallet: { CoinName: string; ImageUrl: string }) => {
  wallet.value = selectedWallet.CoinName
  walletImage.value = selectedWallet.ImageUrl
  isOpen.value = false
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

// Ref to store list of wallets
const activeIndex = ref<number>(0) // Keeps track of the active index in the wallet list

// Ref to store the wallet list container for scrolling
const containerRef = ref<HTMLElement | null>(null)

// Watch for changes in wallets and log whenever it updates
watch(props.wallets, (newWallets) => {
  console.log('Updated wallets:', newWallets)
})

const loading = ref(false) // Loading state for fetching wallets
const currentPage = ref(1) // Current page number for pagination
const pageSize = ref(20) // Number of wallets per page
const slicedWallets = ref<Wallet[]>([])

const fetchWallets = async () => {
  if (loading.value) return // Prevent multiple simultaneous fetches
  loading.value = true

  // Simulate API call (replace this with your actual API call)
  const newWallets = props.wallets.slice(
    (currentPage.value - 1) * pageSize.value,
    currentPage.value * pageSize.value,
  )

  slicedWallets.value.push(...newWallets) // Add new wallets to the existing list
  currentPage.value++ // Increment page number for next fetch
  loading.value = false
}

const toggleDropdown = () => {
  // Toggle focus and dropdown state
  walletFocus.value = !walletFocus.value
  isOpen.value = !isOpen.value

  // Only fetch wallets if dropdown is open and the wallets are empty
  if (isOpen.value) {
    // Reset active index when the dropdown is opened
    activeIndex.value = 0
    // Fetch the first batch of wallets
    fetchWallets()
    nextTick(() => {
      if (slicedWallets.value.length > 0) {
        const firstItem = document.querySelector('.wallet-item') as HTMLElement
        firstItem?.focus()
      }
    })
  }
}

const onScroll = () => {
  const container = containerRef.value
  if (!container) return

  // Check if we've scrolled to the bottom
  if (container.scrollTop + container.clientHeight >= container.scrollHeight - 10) {
    fetchWallets() // Fetch more wallets if we're at the bottom
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
    fetchWallets()
    if (event.key === 'ArrowDown') {
      if (activeIndex.value < slicedWallets.value.length - 1) {
        activeIndex.value++
      }
    } else if (event.key === 'ArrowUp') {
      if (activeIndex.value > 0) {
        activeIndex.value--
      }
    } else if (event.key === 'Enter' && activeIndex.value >= 0) {
      selectWallet(slicedWallets.value[activeIndex.value])
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
  fetchWallets()
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
              <label class="text-[#454a4d] text-sm" for="wallet">Select Wallet</label>

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
                      class="w-7 h-7 mr-2 rounded-full object-cover"
                    />
                    <span>{{ wallet ? wallet : 'Select a wallet' }}</span>
                  </span>
                </div>

                <!-- Dropdown list (appears when isOpen is true) -->
                <div
                  @click="walletFocus = false"
                  v-show="isOpen"
                  @scroll="onScroll"
                  ref="containerRef"
                  class="absolute data-[top-scroll=true] z-50 bottom-10 left-0 w-full bg-white shadow-lg rounded-md mb-1 max-h-64 overflow-y-scroll scroll-smooth hide-scrollbar"
                >
                  <div
                    tabindex="0"
                    v-for="(wallet, index) in slicedWallets"
                    :key="wallet.Id"
                    @click="selectWallet(wallet)"
                    :ref="index === 0 ? 'firstWallet' : undefined"
                    :class="{
                      'flex items-center px-4 py-2 focus:outline-none cursor-pointer hover:bg-gray-200 wallet-item': true,
                      'bg-gray-200 wallet-item focus:outline-none': activeIndex === index,
                    }"
                  >
                    <!-- Wallet image with border-radius -->
                    <img
                      :src="wallet.ImageUrl"
                      alt="wallet image"
                      class="w-7 h-7 mr-2 rounded-full object-cover"
                    />
                    <span class="text-black">{{ wallet.CoinName }}</span>
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
