import colors from 'vuetify/es5/util/colors'
import { defaultMeta } from './components/meta/index'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "Dhanabordee's Portfolio",
    title: "Dhanabordee's Portfolio",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "My name is Dhanabordee Mekintharanggur and I'm an ICE student with a passion for web development and UI/UX design." },
      ...defaultMeta
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon256.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;300;400;500;600;700&display=swap'
      }
    ],
    script: [
      {
        async: true,
        defer: true,
        'data-website-id': '1a80aced-e2de-4ad9-a41d-0dcc2680a2e1',
        src: 'https://dhanabordeem-analytics.herokuapp.com/umami.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  publicRuntimeConfig: { baseURL: "https://dhanabordeem.site" },
  hooks: {
    'generate:page': page => {
      page.html = page.html.replace(/ data-n-head=".*?"/gi, '').replace(/ data-hid=".*?"/gi, '')
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
