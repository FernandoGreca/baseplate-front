<script setup lang="ts">
import { ref, watch } from "vue";

definePageMeta({
  layout: "login",
});

const show = ref(false);
const password = ref("");
const email = ref("");
const formError = ref(false);

watch([email, password], () => {
  formError.value = false;
});

async function onSubmit() {
  if (!email.value || !password.value) {
    formError.value = true;
    return;
  }
  try {
    // Your login logic here
    console.log("Logging in with:", email.value, password.value);
    navigateTo("/home");
  } catch (error) {
    console.error("Login failed:", error);
  }
}
</script>

<template>
  <div
    class="w-[500px] flex flex-col items-center gap-4 bg-white dark:bg-base-gray-900 px-4 py-6 border-2 border-gray-200 dark:border-base-gray-700 rounded-xl"
  >
    <div class="flex justify-center">
      <h1 class="text-4xl font-bold">Sign In</h1>
    </div>

    <!-- Inputs -->
    <div class="flex flex-col items-center gap-2 mt-4">
      <div class="flex flex-col">
        <label for="email">Email</label>
        <UInput
          v-model="email"
          trailing-icon="i-lucide-at-sign"
          placeholder="Enter your email"
          size="xl"
          aria-label="Email"
        />
      </div>

      <div class="flex flex-col">
        <label for="password">Password</label>
        <UInput
          v-model="password"
          placeholder="Password"
          :type="show ? 'text' : 'password'"
          :ui="{ trailing: 'pe-1' }"
          size="xl"
          aria-label="Password"
        >
          <template #trailing>
            <UButton
              color="neutral"
              variant="link"
              size="xl"
              :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
              :aria-label="show ? 'Hide password' : 'Show password'"
              :aria-pressed="show"
              aria-controls="password"
              @click="show = !show"
            />
          </template>
        </UInput>
      </div>

      <p v-if="formError" class="text-red-500 text-sm">
        Please fill in all fields
      </p>

      <UButton
        label="Sign In"
        class="w-full flex justify-center mt-4 dark:text-white"
        size="xl"
        aria-label="Sign In"
        @click="onSubmit"
      />
      <p class="text-sm text-center">
        Don't have an account?
        <NuxtLink
          to="/register"
          class="text-primary dark:text-purple-700"
          aria-label="Register"
          >Register</NuxtLink
        >
      </p>
    </div>
  </div>
</template>
<style>
/* Hide the password reveal button in Edge */
::-ms-reveal {
  display: none;
}
</style>
