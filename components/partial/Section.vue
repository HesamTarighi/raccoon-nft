<template>
    <section class="w-full bg-primary py-6">
        <div class="w-lg mx-auto">
            <h2 class="text-fourth text-5xl font-family__secondary font-[800]"> {{ title }} </h2>
            <slot />
        </div>
    </section>
</template>

<script setup lang="ts">
    const props = defineProps<{
        title?: string
    }>()
</script>
