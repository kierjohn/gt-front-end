<template>
  <nav class="left-nav">
    <ul>
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Tasks</a></li>
      <li><a href="#">Projects</a></li>
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
  width: 250px; 
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