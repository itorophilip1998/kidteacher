export default {
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-headadd .
  router: {
    scrollBehavior: async function (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      const findEl = async (hash, x = 0) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve) => {
            if (x > 50) {
              return resolve(document.querySelector('#app'))
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1))
            }, 100)
          })
        )
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    },
  },
  head: {
    title: 'kidteacher',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.jpg' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/style.css', '@/assets/font-awesome/css/font-awesome.css'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/firebase.js'
  ],

  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '~/modules/ngrok'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  router: {
    // middleware: ['auth']
  },
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://speechbot-api.herokuapp.com/api',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'Multisensory System',
      author: 'Group10',
    },
    icon: {
      fileName: 'logo.jpg',
    },
    manifest: {
      name: 'Multisensory System',
      short_name: 'kidteacher',
      lang: 'en',
      display: 'standalone',
      start_url: '/',
      useWebmanifestExtension: false,
      description: 'Multisensory System',
      background_color: '#fff',
      theme_color: '#4169E1',
      splash_pages: '/',
    },
  },

  build: {},
  loadingIndicator: {
    name: 'three-bounce',
    color: 'white',
    background: '#4169E1',
  },
  loading: '~/components/LoadingBar.vue',
}
