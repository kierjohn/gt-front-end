<template>
  <nav class="right-nav">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="fas fa-bell"></i> Notifications</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="fas fa-envelope"></i> Messages</a>
      </li>
      <!-- Add more navigation items here -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'RightNav',
};
</script>

<style scoped>
.right-nav {
  width: 200px; 
  background-color:rgb(248,249,250);
  color: white; 
  padding: 20px;
}

.right-nav ul {
  list-style: none;
  padding: 0;
}

.right-nav li {
  margin-bottom: 10px;
}

.right-nav a {
  text-decoration: none;
  color: #333;
}
</style>
