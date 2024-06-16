<template>
    <main class="w-full bg-primary">
        <PartialSection :title="'TRENDING NFTs'">
            <div class="flex justify-between items-end gap-8">
                <CardNFT class="w-[200px]" />
                <CardNFT class="w-[200px]" :highlight="true" />
                <CardNFT class="w-[200px]" />
                <CardNFT class="w-[200px]" />
                <!-- profile gallery card -->
                <CardProfileGallery class="w-[300px]" />
            </div>
        </PartialSection>
    </main>
</template>
