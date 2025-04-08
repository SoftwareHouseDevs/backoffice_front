<template>
  <div class="flex h-screen bg-gray-100 dark:bg-gray-900">
    <!-- Sidebar -->
    <aside class="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div class="h-16 flex items-center justify-center text-xl font-bold border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
        Admin Panel
      </div>
      <UVerticalNavigation :links="links" class="flex-1 px-4 py-4" />
      <!-- Optional: Add footer/logout in sidebar -->
    </aside>

    <!-- Main content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Topbar -->
      <header class="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
        <div>
          <!-- Page Title (could be dynamic) -->
          <h1 class="text-xl font-semibold text-gray-800 dark:text-gray-100">Dashboard</h1>
        </div>
        <div>
          <!-- User profile/logout Button -->
           <UButton
            icon="i-heroicons-user-circle"
            size="sm"
            color="primary"
            square
            variant="ghost"
          />
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900 p-6">
        <!-- Your dashboard content goes here -->
        <UCard>
          <template #header>
             <h2 class="text-lg font-medium text-gray-900 dark:text-white">Welcome to your Dashboard!</h2>
          </template>

          <p class="text-sm text-gray-600 dark:text-gray-400">
            This is where your main dashboard content will be displayed.
          </p>
        </UCard>

        <!-- Example cards/widgets -->
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <UCard>
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Users</h3>
            <p class="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">1,234</p>
          </UCard>
          <UCard>
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Revenue</h3>
            <p class="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">$5,678</p>
          </UCard>
          <!-- Add more UCard components -->
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    label: 'Dashboard',
    icon: 'i-heroicons-home',
    to: '/dashboard' // Use NuxtLink's 'to' prop
  },
  {
    label: 'Users',
    icon: 'i-heroicons-users',
    to: '/users' // Example route
  },
  {
    label: 'Settings',
    icon: 'i-heroicons-cog',
    to: '/settings' // Example route
  }
]

// You might need to add logic here later, e.g., fetching data
// Or define page meta for layout if using Nuxt layouts explicitly
// definePageMeta({ layout: 'default' }); // If you have a layouts/default.vue
</script>