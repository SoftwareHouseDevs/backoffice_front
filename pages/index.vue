<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Welcome to Backoffice
      </h1>
      <p class="text-gray-600 mb-8">
        Please sign in to access the system
      </p>
      <UButton
        to="/login"
        color="primary"
        size="lg"
      >
        Go to Login
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
