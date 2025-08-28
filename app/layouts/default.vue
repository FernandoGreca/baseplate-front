<script lang="ts"></script>

<template>
  <div class="h-full flex">
    <SideBar class="md:flex hidden" />
    <div class="flex flex-col w-full h-full bg-purple-200 dark:bg-primary">
      <NavBar />

      <!-- Canto arredondado -->
      <div
        class="bg-white dark:bg-base-gray-900 w-[50px] h-[50px] flex justify-end items-end md:block hidden"
      >
        <div
          class="bg-purple-200 dark:bg-primary w-[50px] h-[50px] rounded-tl-full"
        />
      </div>

      <div
        class="bg-white dark:bg-base-gray-900 mx-[50px] mb-[50px] h-full p-8 rounded-4xl shadow-2xl md:mt-[0px] mt-[50px]"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
