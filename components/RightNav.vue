<template>
  <nav class="right-nav">
   <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Profile</a></li>
      <li><a href="#">Settings</a></li>
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
  width: 250px; 
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
