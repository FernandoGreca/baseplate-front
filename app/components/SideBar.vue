<script setup>
import logo from "~/assets/images/logo-main.png";

const sideBarItemsTop = [
  {
    label: "Home",
    icon: "material-symbols:home-outline-rounded",
    redirect: "/home",
  },
  {
    label: "Messages",
    icon: "material-symbols:chat-bubble-outline",
    redirect: "/messages",
  },
  {
    label: "Notifications",
    icon: "material-symbols:notifications",
    redirect: "/notifications",
  },
  {
    label: "Analytics",
    icon: "ix:barchart",
    redirect: "/analytics",
  },
];

const sideBarItemsBottom = [
  {
    label: "Profile",
    icon: "material-symbols:person-outline",
    redirect: "/profile",
  },
  {
    label: "Settings",
    icon: "material-symbols:settings-outline",
    redirect: "/settings",
  },
  {
    label: "Logout",
    icon: "material-symbols:logout",
    redirect: "/login",
  },
];
</script>
<template>
  <div
    class="h-full bg-white dark:bg-base-gray-900 p-8 flex flex-col items-center rounded-br-4xl"
  >
    <div class="mb-8">
      <img :src="logo" alt="" class="rounded-xl shadow-lg" width="148" >
    </div>
    <div class="flex flex-col justify-between h-full">
      <div class="flex gap-2 flex-col">
        <SideBarItem
          v-for="(item, index) in sideBarItemsTop"
          :key="index"
          :label="item.label"
          :icon="item.icon"
          :redirect="item.redirect"
        />
      </div>

      <div class="flex gap-2 flex-col">
        <SideBarItem
          v-for="(item, index) in sideBarItemsBottom"
          :key="index"
          :label="item.label"
          :icon="item.icon"
          :redirect="item?.redirect"
        />
      </div>
    </div>
  </div>
</template>
