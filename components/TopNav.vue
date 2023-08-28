<template>
  <div class="top-nav">
    <div class="logo">
      <img src="~/assets/logo-placeholder-image.png" alt="Logo">
    </div>
    <div class="nav-links">
      <a href="#">Home</a>
      <a href="#">Services</a>
      <a href="#">Portfolio</a>
      <a href="#">About Us</a>
      <a href="#">Contact</a>
    </div>
    <div class="user-profile">
      <div class="avatar">
        <img src="~/assets/avatar.jpg" alt="User Avatar">
      </div>
      <div class="user-info">
        <span class="username">John Doe</span>
      </div>
      <button @click="logout" class="btn btn-danger btn-link nav-link">Logout</button>
    </div>
  </div>
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

.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(248,249,250);
  color: #292c36 !important;
  padding: 20px;
  margin-bottom: 40px;
}

.logo img {
  height: 40px;
}

.nav-links a {
  color: #292c36 !important;
  text-decoration: none;
  margin-right: 20px;
  font-weight: bold;
}

.user-profile {
  display: flex;
  align-items: center;
}

.avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.username {
  font-weight: bold;
  font-size: 16px;
}

.user-role {
  font-size: 14px;
  opacity: 0.8;
}

.container
{
  max-width : 100% !important;
}

.btn-link
{
  margin-left : 20px;
  color : white;
}
</style>