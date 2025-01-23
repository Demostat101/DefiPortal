<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import TopBar from './views/TopBar.vue'
import FooterPage from './views/FooterPage.vue'

interface Wallet {
  CoinName: string
  Symbol: string
  ImageUrl: string
  Id: string
}

const wallets = ref<Wallet[]>([])

onMounted(async () => {
  try {
    const response = await fetch('https://min-api.cryptocompare.com/data/all/coinlist')
    const data = await response.json()

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
</script>

<template>
  <div class="flex flex-col h-screen bg-black relative overflow-y-auto hide-scrollbar">
    <TopBar />
    <main class="p-8 grow">
      <RouterView :wallets="wallets" />
    </main>
    <FooterPage />
  </div>
</template>
