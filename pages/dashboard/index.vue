<template>
  <div class="flex h-screen">
    <!-- Responsive Sidebar -->
    <aside
      class="w-64 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex flex-col flex-shrink-0
             fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0"
      :class="{ '-translate-x-full': !isSidebarOpen }"
    >
       <!-- Sidebar Header -->
       <div class="h-16 flex items-center justify-center shrink-0">
        <span class="text-xl font-bold text-gray-900 dark:text-white">Admin Panel</span>
      </div>

      <!-- Navigation Links -->
      <nav class="flex-1 overflow-y-auto px-4 py-4">
        <ul>
          <li v-for="link in links" :key="link.id">
            <NuxtLink
              :to="link.to"
              class="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              active-class="bg-gray-100 dark:bg-gray-800 text-primary-500 dark:text-primary-400"
              @click="isSidebarOpen = false"
            >
               <UIcon v-if="link.icon" :name="link.icon" class="h-5 w-5 mr-3" />
              <span class="truncate">{{ link.label }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>

       <!-- Optional Footer -->
       <!-- <div class="p-4 border-t border-gray-200 dark:border-gray-700">
         <button>Logout</button>
       </div> -->
    </aside>
    <!-- End Responsive Sidebar -->

    <!-- Sidebar Overlay (Mobile) -->
    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 bg-black/50 z-40 lg:hidden"
      @click="isSidebarOpen = false"
    />

    <!-- Main Content Panel -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Navbar -->
      <nav class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16 flex items-center px-4">
        <!-- Left side -->
        <div class="flex items-center">
          <!-- Hamburger Menu Button (only visible on mobile) -->
          <button
            class="lg:hidden text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
            @click="isSidebarOpen = true"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <!-- Page Title -->
          <h1 class="ml-4 text-xl font-semibold text-gray-800 dark:text-gray-100">Dashboard</h1>
        </div>

        <!-- Right side -->
        <div class="ml-auto">
          <button class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg class="h-6 w-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Main Page Content -->
      <div class="flex-1 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-800">
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
      </div>
    </div>
    <!-- End Main Content Area -->

  </div>
</template>

<script setup lang="ts">
const links = [
  {
    id: 'home', // Required for v3
    label: 'Dashboard',
    icon: 'i-heroicons-home', // Temporarily removed
    to: '/dashboard'
  },
  {
    id: 'users', // Required for v3
    label: 'Users',
    icon: 'i-heroicons-users', // Temporarily removed
    to: '/users' // Example route
  },
  {
    id: 'settings', // Required for v3
    label: 'Settings',
    icon: 'i-heroicons-cog', // Temporarily removed
    to: '/settings' // Example route
  }
]

const isSidebarOpen = ref(false)

// You might need to add logic here later, e.g., fetching data
// Or define page meta for layout if using Nuxt layouts explicitly
// definePageMeta({ layout: 'default' }); // If you have a layouts/default.vue
</script>