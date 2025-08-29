<script setup lang="ts">
import { ref } from "vue";
import type { IUserRegister } from "~/interfaces/user/UserRegister";

definePageMeta({
  layout: "login",
});

const userRegister = ref<IUserRegister>({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const show = ref(false);
const showConfirm = ref(false);

const { showNotification } = useNotification();
const { validateUser } = useValidate();

async function onSubmit() {
  const validation = validateUser(userRegister.value, "register");

  if (validation !== true) {
    showNotification("Validation Error", "warning", validation);
    return;
  }

  try {
    console.log(
      "Registering with:",
      JSON.stringify(userRegister.value, null, 2)
    );

    showNotification(
      "Success",
      "success",
      "Registration completed successfully!"
    );
    navigateTo("/login");
  } catch (error) {
    console.error("Registration failed:", error);
    showNotification(
      "Error",
      "error",
      "Registration failed. Please try again."
    );
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
    <UForm :state="userRegister" class="px-6">
      <div class="flex flex-col items-center gap-2 mt-4">
        <div class="flex gap-2">
          <UFormField label="First Name" name="firstName">
            <UInput
              v-model="userRegister.firstName"
              trailing-icon="material-symbols:drive-file-rename-outline"
              placeholder="First name"
              size="xl"
              aria-label="First Name"
            />
          </UFormField>

          <UFormField label="Last Name" name="lastName">
            <UInput
              v-model="userRegister.lastName"
              trailing-icon="material-symbols:drive-file-rename-outline-outline"
              placeholder="Last name"
              size="xl"
              aria-label="Last Name"
            />
          </UFormField>
        </div>

        <UFormField label="Email" name="email" class="w-full">
          <UInput
            v-model="userRegister.email"
            trailing-icon="i-lucide-at-sign"
            placeholder="Enter your email"
            size="xl"
            aria-label="Email"
            class="w-full"
          />
        </UFormField>

        <div class="flex gap-2">
          <UFormField label="Password" name="password">
            <UInput
              v-model="userRegister.password"
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
          </UFormField>

          <UFormField label="Confirm Password" name="confirmPassword">
            <UInput
              v-model="userRegister.confirmPassword"
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
          </UFormField>
        </div>

        <UButton
          label="Register"
          class="w-full flex justify-center mt-4 dark:text-white"
          size="xl"
          aria-label="Register"
          type="submit"
          @click="onSubmit"
        />
        <p class="text-sm text-center">
          Already have an account?
          <NuxtLink
            to="/login"
            class="text-primary dark:text-primary-light"
            aria-label="Login"
            >Login</NuxtLink
          >
        </p>
      </div>
    </UForm>
  </div>
</template>
<style>
/* Hide the password reveal button in Edge */
::-ms-reveal {
  display: none;
}
</style>
