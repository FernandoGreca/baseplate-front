<script setup lang="ts">
import type { IUserLogin } from "~/interfaces/user/UserLogin";

definePageMeta({
  layout: "login",
});

const userLogin = ref<IUserLogin>({
  email: "",
  password: "",
});

const show = ref(false);
const { showNotification } = useNotification();
const { validateUser } = useValidate();

async function onSubmit() {
  const validation = validateUser(userLogin.value, "login");

  if (validation !== true) {
    showNotification("Validation Error", "warning", validation);
    return;
  }

  try {
    console.log("Logging in with:", JSON.stringify(userLogin.value, null, 2));
    showNotification("Success", "success", "Login successful!");
    navigateTo("/home");
  } catch (error) {
    console.error("Login failed:", error);
    showNotification("Error", "error", "Login failed. Please try again.");
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
    <UForm :state="userLogin" class="w-full px-6">
      <UFormField label="Email" name="email" class="w-full">
        <UInput
          v-model="userLogin.email"
          trailing-icon="i-lucide-at-sign"
          placeholder="Enter your email"
          size="xl"
          aria-label="Email"
          class="w-full"
        />
      </UFormField>

      <UFormField label="Password" name="password" class="mt-2 w-full">
        <UInput
          v-model="userLogin.password"
          placeholder="Password"
          :type="show ? 'text' : 'password'"
          :ui="{ trailing: 'pe-1' }"
          size="xl"
          class="w-full"
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
      </UFormField>

      <UButton
        label="Sign In"
        class="w-full flex justify-center mt-4 dark:text-white"
        size="xl"
        aria-label="Sign In"
        type="submit"
        @click="onSubmit"
      />

      <p class="text-sm text-center mt-2">
        Don't have an account?
        <NuxtLink
          to="/register"
          class="text-primary dark:text-primary-light"
          aria-label="Register"
        >
          Register
        </NuxtLink>
      </p>
    </UForm>
  </div>
</template>
<style>
/* Hide the password reveal button in Edge */
::-ms-reveal {
  display: none;
}
</style>
