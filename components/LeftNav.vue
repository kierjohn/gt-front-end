<template>
  <nav class="left-nav">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" href="#"><i class="fas fa-home"></i> Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="fas fa-user"></i> Profile</a>
      </li>
      <!-- Add more navigation items here -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'LeftNav',
};
</script>

<style scoped>
.left-nav {
  width: 180px; 
  background-color:rgb(248,249,250);
  color: white;
  padding: 20px;
  margin-right : 30px;
}

.left-nav ul {
  list-style: none;
  padding: 0;
}

.left-nav li {
  margin-bottom: 10px;
}

.left-nav a {
  text-decoration: none;
  color: #333;
}
</style>