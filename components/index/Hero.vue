<template>
    <PartialSection>
        <div class="w-full min-h-[60vh] bg-[url('~/assets/image/nft1.jpg')] bg-cover rounded-3xl mx-auto grid grid-cols-2 glass-from-bottom">
            <div class="flex justify-start items-end p-16">
                <div class="space-y-10">
                    <h1 class="uppercase font-family__secondary font-[1000] text-8xl text-fourth">
                        CURATED ARTWORK.
                    </h1>
                    <button class="btn btn-type__secondary-outline btn-size__lg"> Explore now </button>
                </div>
            </div>
            <div class="flex items-end justify-end p-16">
                <!-- card -->
                <div class="bg-fourth px-10 py-8 rounded-2xl relative space-y-2 text-secondary">
                    <div class="center-x-position -top-[30px]">
                        <img src="~/assets/image/avatar2.jpg" class="w-[60px] h-[60px] rounded-full shadow-lg" />
                    </div>
                    <div class="space-y-4">
                        <div class="flex flex-col items-center">
                            <span class="text-[12px] opacity-90"> @id1234 </span>
                            <span class="font-[800] text-[19px]"> My balance </span>
                        </div>
                        <div class="flex items-center justify-center gap-2">
                            <span> <Icon name="cryptocurrency-color:eth" size="25px" /> </span>
                            <span class="font-[600] text-[19px]"> 100.50 </span>
                        </div>
                        <div>
                            <button class="btn btn-type__primary"> Top up balance </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PartialSection>
</template>
