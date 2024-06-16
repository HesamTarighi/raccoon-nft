<template>
    <div class="border border-fourth/30 rounded-lg flex items-center gap-2 overflow-auto py-2 px-4">
        <label class="flex items-center opacity-30"> <slot name="label" color="#EEEEEE" /> </label>
        <input :placeholder="placeholder" class="bg-transparent outline-none text-fourth/70 placeholder-fourth/30" />
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        placeholder: string
    }>()
</script>
