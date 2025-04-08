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

<template>
<div class="min-h-screen flex items-center justify-center bg-gray-50">
  <div class="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-900">
        Welcome back
      </h2>
      <p class="mt-2 text-sm text-gray-600">
        Sign in to your account
      </p>
    </div>


    <div class="w-full flex flex-col gap-4">
      <div class="text-xl text-blue-600">Email</div>
      <UFormField label="Email" name="email">
        <UInput v-model="email" />
      </UFormField>

      <UInput
v-model="email" highlight variant="none" color="secondary" type="email" placeholder="Enter your email"
        icon="i-heroicons-envelope" autocomplete="email" required />



      <UInput
v-model="password" highlight variant="none" color="info" type="password" placeholder="Enter your password"
        icon="i-heroicons-lock-closed" autocomplete="current-password" required />

    </div>

    <div class="flex items-center justify-between">
      <UCheckbox v-model="rememberMe" label="Remember me" />
      <NuxtLink to="/auth/forgot-password" class="text-sm text-primary-600 hover:text-primary-500">
        Forgot password?
      </NuxtLink>
    </div>

    <UButton block size="lg" :loading="loading" @click="handleLogin">
      Sign in
    </UButton>

    <div class="text-center">
      <p class="text-sm text-gray-600">
        Don't have an account?
        <NuxtLink to="/auth/register" class="font-medium text-primary-600 hover:text-primary-500">
          Sign up
        </NuxtLink>
      </p>
    </div>

  </div>
</div>
</template>