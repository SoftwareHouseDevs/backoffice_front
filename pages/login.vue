<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-sm p-8 bg-white rounded-3xl shadow-lg">
      <div class="text-center mb-8">
        <h2 class="text-2xl font-semibold text-gray-900">
          Welcome back
        </h2>
        <p class="mt-2 text-sm text-gray-500">
          Sign in to your account
        </p>
      </div>

      <form class="space-y-6" @submit.prevent="handleLogin">
        <div class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
            <UInput
              v-model="email"
              type="email"
              placeholder="Enter your email"
              icon="i-heroicons-envelope"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
            <UInput
              v-model="password"
              type="password"
              placeholder="Enter your password"
              icon="i-heroicons-lock-closed"
              required
            />
          </div>
        </div>

        <div class="flex items-center justify-between mt-6">
          <UCheckbox
            v-model="rememberMe"
            label="Remember me"
            class="text-sm text-gray-500"
          />

          <NuxtLink
            to="/forgot-password"
            class="text-sm font-medium text-[#2CD3A9] hover:text-[#22C49C]"
          >
            Forgot password?
          </NuxtLink>
        </div>

        <UButton
          type="submit"
          block
          :loading="loading"
          class="mt-6"
        >
          Sign in
        </UButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  try {
    // TODO: Implement login logic here
    console.log('Login attempt with:', { email: email.value, password: password.value })
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
  } catch (error) {
    console.error('Login failed:', error)
  } finally {
    loading.value = false
  }
}
</script>