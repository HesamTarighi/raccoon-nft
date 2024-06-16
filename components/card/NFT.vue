<template>
    <div class="overflow-hidden rounded-xl inline-block">
        <div class="relative">
            <button class="btn bg-fourth shadow-md px-[6px] py-[2px] rounded-full absolute top-2 right-2"> <Icon name="icon-park-outline:like" color="#00ADB5" /> </button>
            <img src="~/assets/image/nft/nft3.jpg" class="w-full h-[150px] object-cover" />
        </div>
        <div class="px-4 py-2 space-y-2 rounded-b-xl" :class="{ 'bg-secondary': highlight }">
            <div>
                <span class="text-[13px] font-[600]"> Savana art </span> <!-- nft name -->
                 <!-- nft price -->
                <div>
                    <Icon name="cryptocurrency-color:eth" size="20px" />
                    <span class="text-[13px]"> 20 </span>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-[12px] opacity-50"> Fixed price </span>
                <button class="btn btn-size__xs btn-type__primary-outline"> Buy now </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        highlight?: boolean
    }>()
</script>
