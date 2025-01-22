<script setup lang="ts">
import { onMounted, ref, watch, onBeforeUnmount } from 'vue'
const isOpen = ref(false)

// Define types for wallet data structure
interface Wallet {
  CoinName: string
  Symbol: string
  ImageUrl: string
  Id: string
}

const selectWallet = (selectedWallet: { CoinName: string; ImageUrl: string }) => {
  wallet.value = selectedWallet.CoinName
  walletImage.value = selectedWallet.ImageUrl
  isOpen.value = false
}
// Declare refs with specific types
const fullname = ref<string>('') // Full name as a string
const fullNameFocus = ref<boolean>(false) // Focus state for full name input
const emailFocus = ref<boolean>(false) // Focus state for email input
const email = ref<string>('') // Email as a string
const walletFocus = ref<boolean>(false) // Focus state for wallet select
const wallet = ref<string>('') // Selected wallet symbol as a string
const walletImage = ref('')

// Ref to store list of wallets
const wallets = ref<Wallet[]>([]) // List of wallet data fetched from API

// Fetch wallets data from API on component mount
onMounted(async () => {
  try {
    const response = await fetch('https://min-api.cryptocompare.com/data/all/coinlist')
    const data = await response.json()

    // Type the data response and map it to match the Wallet interface
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    wallets.value = Object.values(data.Data).map((walletData: any) => ({
      CoinName: walletData?.CoinName ?? '',
      Symbol: walletData?.Symbol ?? '',
      ImageUrl: `https://www.cryptocompare.com${walletData?.ImageUrl ?? ''}`,
      Id: walletData?.Id ?? '',
    }))
  } catch (error) {
    console.error('Error fetching wallet data:', error)
  }
})

// Watch for changes in wallets and log whenever it updates
watch(wallets, (newWallets) => {
  console.log('Updated wallets:', newWallets[0]?.ImageUrl)
})
const toggleDropdown = () => {
  walletFocus.value = !walletFocus.value
  isOpen.value = !isOpen.value
}
const handleClickOutside = (event: MouseEvent) => {
  const dropdown = document.querySelector('.relative') as HTMLElement
  if (dropdown && !dropdown.contains(event.target as Node)) {
    isOpen.value = false
    walletFocus.value = false
  }
}

// Watch for mounted/unmounted lifecycle hooks to add/remove event listener
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div
    class="text-white w-full grow h-full flex flex-col place-items-center justify-center overflow-y-auto hide-scrollbar"
  >
    <div class="w-full flex flex-col place-items-center text-center max-w-[40rem] h-[80dvh]">
      <div
        class="w-full max-w-[24rem] border-[1px] shadow-[0px_3px_5px_#BE995E] border-[#BE995E] rounded-b-xl border-t-0 px-5 py-10 relative"
      >
        <div class="text-[#F5A524] text-3xl lg:text-4xl font-bold mb-3">Enter your details</div>

        <form class="flex flex-col gap-8" action="">
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
                class="bg-black text-white px-1 py-2 cursor-pointer border-b-white border-b-[2px]"
                :class="{ 'border-b-yellow-500': walletFocus, 'border-b-white': !walletFocus }"
                @click="toggleDropdown"
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
                v-if="isOpen"
                class="absolute pt-10 z-50 bottom-10 left-0 w-full bg-white shadow-lg rounded-md mb-1 h-[20rem] overflow-y-auto hide-scrollbar"
              >
                <div
                  v-for="wallet in wallets.slice(0, 30)"
                  :key="wallet.Id"
                  @click="selectWallet(wallet)"
                  class="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
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

          <div class="w-full flex place-items-center gap-10 justify-center text-sm font-bold mt-5">
            <div class="px-5 py-2 rounded-xl bg-[#1E070F] text-[#7D0C33]">Previous</div>
            <div class="px-5 py-2 rounded-xl bg-[#36260C] text-[#C48417]">Next</div>
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
