<script setup lang="ts">
const data = [
  {
    image: '/images/img0.jpg',
    title: 'Refresh Wallet',
  },
  {
    image: '/images/img2.jpg',
    title: 'Restore Wallet',
  },
  {
    image: '/images/img3.jpg',
    title: 'Claim Rewards',
  },
  {
    image: '/images/img4.jpg',
    title: 'Transaction Error',
  },
  {
    image: '/images/img5.jpg',
    title: 'Migration',
  },
  {
    image: '/images/img6.jpg',
    title: 'Kyc Verification',
  },
  {
    image: '/images/img7.jpg',
    title: 'Refresh Wallets',
  },
  {
    image: '/images/img8.jpg',
    title: 'Recover Funds',
  },
  {
    image: '/images/img9.jpg',
    title: 'Rectify',
  },
  {
    image: '/images/img10.jpg',
    title: 'Authenticate',
  },
  {
    image: '/images/img11.jpg',
    title: 'Swap Error',
  },
  {
    image: '/images/img12.jpg',
    title: 'Stake/Unstake',
  },
  {
    image: '/images/img13.jpg',
    title: 'Mint Nft',
  },
  {
    image: '/images/img14.jpg',
    title: 'Claim Airdrop',
  },
  {
    image: '/images/img15.jpg',
    title: 'Mining Dapp Investment',
  },
  {
    image: '/images/img16.jpg',
    title: 'Node Validator',
  },
  {
    image: '/images/img17.jpg',
    title: 'Node Error/Switch',
  },
  {
    image: '/images/img23.png',
    title: 'Revoke Transaction/Smart Contract',
  },
  {
    image: '/images/img19.jpg',
    title: 'CEX/DEX',
  },
  {
    image: '/images/img20.jpg',
    title: 'Crowdloan / Farming / LP / Yield',
  },
  {
    image: '/images/img21.jpg',
    title: 'Pro FX / Binary / Investment / Trade Option',
  },
  {
    image: '/images/img1.jpg',
    title: 'Whitelist / Pinksale',
  },
]
</script>

<template>
  <div class="w-full grow h-full sm:p-5">
    <div>
      <div class="w-full text-3xl text-[#737373] text-center mb-3">Our services</div>
      <div
        class="w-full gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-7"
      >
        <RouterLink
          to="/connect"
          v-for="(item, index) in data"
          :key="index"
          class="border-white text-wrap border-[1px] shadow-[0px_3px_5px_#F5A524] rounded-b-xl pb-3 rounded-lg hover:bg-[#BB7E1B] text-center grid-rows-subgrid grid row-span-2 bg-black text-white"
        >
          <div class="w-full px-3 pt-3">
            <img :src="item.image" alt="img" class="rounded-xl bg-no-repeat" />
          </div>
          <div class="text-center w-full sm:px-3">{{ item.title }}</div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
