require('dotenv').config({ path: `./.env` });

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'gt-front-end',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '@fortawesome/fontawesome-free/css/all.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/custom.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    routes: [
      {
        path: '/login',
        component: '~/pages/Login.vue',
      },
      {
        path: '/task',
        component: '~/pages/Task.vue',
      },
      {
        path: '/register',
        component: '~/pages/Register.vue',
      },

      {
        path: '/',
        component: '~/pages/Login.vue',
      },
      // Other routes
    ],
  },
  publicRuntimeConfig: {
    apiBaseUrl: "http://localhost:8000/api",
  },

  env: {
    API_BASE_URL: process.env.VUE_APP_API_BASE_URL,
  },
}
