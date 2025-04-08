export default defineNuxtRouteMiddleware((to, _from) => {
  // Use a simple state to track authentication status (replace with your actual auth logic)
  const isAuthenticated = useState<boolean>('isAuthenticated', () => false); // Default to not authenticated

  // Routes that require authentication
  const protectedRoutes = ['/dashboard'];

  // Check if the target route requires authentication
  const requiresAuth = protectedRoutes.some(route => to.path.startsWith(route));

  // If trying to access a protected route without being authenticated
  if (requiresAuth && !isAuthenticated.value) {
    console.log('Redirecting unauthenticated user to login');
    // Redirect to the login page (root route in this case)
    return navigateTo('/');
  }

  // If trying to access the login page while already authenticated
  // Optional: You might want to redirect logged-in users away from the login page
  // if (to.path === '/' && isAuthenticated.value) {
  //   console.log('Redirecting authenticated user to dashboard');
  //   return navigateTo('/dashboard');
  // }

  // Allow navigation otherwise
});