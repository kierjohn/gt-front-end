<template>
  <div class="container mt-4">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" v-model="name" :class="{ 'is-invalid': nameError }" required>
        <div class="invalid-feedback">{{ nameError }}</div>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" v-model="email" :class="{ 'is-invalid': emailError }" required>
        <div class="invalid-feedback">{{ emailError }}</div>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" class="form-control" v-model="password" :class="{ 'is-invalid': passwordError }" required>
        <div class="invalid-feedback">{{ passwordError }}</div>
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" class="form-control" v-model="confirmPassword" :class="{ 'is-invalid': confirmPasswordError }" required>
        <div class="invalid-feedback">{{ confirmPasswordError }}</div>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
import { get , post ,put , del } from '~/services/apiService';
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      nameError: '',
      emailError: '',
      passwordError: '',
      confirmPasswordError: '',
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        this.confirmPasswordError = 'Passwords do not match';
        return;
      } else {
        this.confirmPasswordError = '';
      }

      // Reset error messages
      this.nameError = '';
      this.emailError = '';
      this.passwordError = '';

      // Implement registration logic using Axios or your preferred API client
      try {
        const response = await post(`users`, {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        console.log('Registration successful:', response);

        this.$router.push('/login');
        // Redirect to login page or handle success
      } catch (errors) {
      console.log("xx" , errors);

        if (errors.email) {
          this.emailError = errors.email[0];
        }
        if (errors.password) {
          this.passwordError = errors.password[0];
        }

        console.error('Registration error:', errors);
        // Handle registration error
      }
    },
  },
};
</script>