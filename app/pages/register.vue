<script setup lang="ts">
import { ref, watch } from "vue";

definePageMeta({
  layout: "login",
});

const show = ref(false);
const showConfirm = ref(false);
const password = ref("");
const email = ref("");
const firstName = ref("");
const lastName = ref("");
const confirmPassword = ref("");
const passwordError = ref(false);

watch([password, confirmPassword], () => {
  passwordError.value = false;
});

async function onSubmit() {
  if (password.value !== confirmPassword.value) {
    passwordError.value = true;
    return;
  }
  try {
    // Your registration logic here
    console.log(
      "Registering with:",
      firstName.value,
      lastName.value,
      email.value,
      password.value,
      confirmPassword.value
    );
    navigateTo("/login");
  } catch (error) {
    console.error("Registration failed:", error);
  }
}
</script>

<template>
  <div
    class="w-[500px] flex flex-col items-center gap-4 bg-white dark:bg-base-gray-900 px-4 py-6 border-2 border-gray-200 dark:border-base-gray-700 rounded-xl"
  >
    <div class="flex justify-center">
      <h1 class="text-4xl font-bold">Register</h1>
    </div>

    <!-- Inputs -->
    <div class="flex flex-col items-center gap-2 mt-4">
      <div class="flex flex-col w-full">
        <label for="firstName">First Name</label>
        <UInput
          v-model="firstName"
          placeholder="Enter your first name"
          size="xl"
          aria-label="First Name"
        />
      </div>
      <div class="flex flex-col w-full">
        <label for="lastName">Last Name</label>
        <UInput
          v-model="lastName"
          placeholder="Enter your last name"
          size="xl"
          aria-label="Last Name"
        />
      </div>
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
        <p v-if="passwordError" class="text-red-500 text-sm">
          Passwords do not match
        </p>
      </div>

      <div class="flex flex-col">
        <label for="confirmPassword">Confirm Password</label>
        <UInput
          v-model="confirmPassword"
          placeholder="Confirm Password"
          :type="showConfirm ? 'text' : 'password'"
          :ui="{ trailing: 'pe-1' }"
          size="xl"
          aria-label="Confirm Password"
        >
          <template #trailing>
            <UButton
              color="neutral"
              variant="link"
              size="xl"
              :icon="showConfirm ? 'i-lucide-eye-off' : 'i-lucide-eye'"
              :aria-label="showConfirm ? 'Hide password' : 'Show password'"
              :aria-pressed="showConfirm"
              aria-controls="confirmPassword"
              @click="showConfirm = !showConfirm"
            />
          </template>
        </UInput>
      </div>

      <UButton
        label="Register"
        class="w-full flex justify-center mt-4 dark:text-white"
        size="xl"
        aria-label="Register"
        @click="onSubmit"
      />
      <p class="text-sm text-center">
        Already have an account?
        <NuxtLink
          to="/login"
          class="text-primary dark:text-purple-700"
          aria-label="Login"
          >Login</NuxtLink
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
