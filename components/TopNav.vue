<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light top-nav">
    <div class="container">
      <router-link to="/tasks" class="navbar-brand">Task Manager</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/tasks" class="nav-link">Tasks</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/profile" class="nav-link">Profile</router-link>
          </li>
          <li class="nav-item">
            <button @click="logout" class="btn btn-link nav-link">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      // Clear the authentication token (replace with your own logic)
      localStorage.removeItem('authToken');

      // Redirect to the login page
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
/* Add custom styling for the top nav */
.top-nav {
  margin-bottom: 40px; /* Adjust the margin value as needed */
}

.container
{
  max-width : 100% !important;
}
</style>