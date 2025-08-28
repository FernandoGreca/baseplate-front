<script setup lang="ts">
defineProps<{
  label: string;
  icon: string;
  redirect?: string;
}>();
</script>

<template>
  <NuxtLink :to="redirect"
    ><div
      class="hover:bg-primary transition-all p-2 rounded-xl flex gap-4 items-center cursor-pointer hover:text-white"
    >
      <UIcon :name="icon" class="size-5" />
      <h3 class="text-md font-semibold">{{ label }}</h3>
    </div></NuxtLink
  >
</template>
