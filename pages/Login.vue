<template>
  <div class="container" style="margin-top:100px;">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">{{ title }}</div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" v-model="email" required>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
              </div>
              <button type="submit" class="btn btn-primary">Login</button>
            </form>
             <p class="mt-3">
              Don't have an account? <router-link to="/register">Register here</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { post } from '~/services/apiService';

export default {
  data() {
    return {
      title: 'Login',
      email: '',
      password: '',
    };
  },
  computed: {
    apiBaseUrl() {
      return process.env.VUE_APP_API_BASE_URL;
    },
  },
  methods: {
    async login() {
      try {
        var data = {
          email :  this.email, 
          password : this.password
        }
        const response = await post(`login`, data);
        if (response.data.token) {
        
         const userJson = JSON.stringify(response.data.user);
          localStorage.setItem('authToken', response.data.token); // Save token to localStorage
          localStorage.setItem('user', userJson); // Save token to localStorage
          localStorage.setItem('user_id', response.data.user.id);
          this.$router.push('/task');
        }

        console.log(response); // Handle the response or redirect to dashboard
      } catch (error) {
        console.log("Invalid Credentials." , error);
      }
    },
  },
};
</script>

<style scoped>
/* Add custom styling here */
</style>