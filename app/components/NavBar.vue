<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";

const items = ref<DropdownMenuItem[]>([
  { label: "Home", icon: "material-symbols:home-outline-rounded", to: "/home" },
  {
    label: "Messages",
    icon: "material-symbols:chat-bubble-outline",
    to: "/messages",
  },
  {
    label: "Notifications",
    icon: "material-symbols:notifications",
    to: "/notifications",
  },
  { label: "Analytics", icon: "ix:barchart", to: "/analytics" },
  { label: "Profile", icon: "material-symbols:person-outline", to: "/profile" },
  {
    label: "Settings",
    icon: "material-symbols:settings-outline",
    to: "/settings",
  },
  { label: "Logout", icon: "material-symbols:logout", to: "/login" },
]);

</script>
<template>
  <div
    class="bg-white dark:bg-base-gray-900 w-full flex md:justify-end justify-between p-4"
  >
    <div class="md:hidden block">
      <UDropdownMenu
        :items="items"
        :content="{
          align: 'start',
          side: 'bottom',
          sideOffset: 8,
        }"
        :ui="{
          content: 'w-48',
        }"
      >
        <UButton
          icon="i-lucide-menu"
          color="neutral"
          variant="outline"
          size="xl"
        />
      </UDropdownMenu>
    </div>
    <div class="flex items-center gap-4">
      <ColorModeButton />
    </div>
  </div>
</template>
