import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Hoya記帳',
    htmlAttrs: {
      lang: 'zh-tw',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  i18n: {
    defaultLocale: 'zh_TW',
    langDir: '~/locales/',
    locales: [ 
      { code: 'en', iso: 'en-US', file: 'en.js', name: 'English', },
      { code: 'zh_TW', iso: 'zh-TW', file: 'zh_TW.js', name: '中文', },
    ],
    vueI18n: {
      fallbackLocale: 'zh_TW',
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        light: {
          primary: "#1B4F71",
          accent: "#E2E7ED",
          content_background: "#FFFFFF",
          content_text: "#151B23",
          secondary: "#FE9901",
          info: colors.teal.lighten1,
          warning: "#F3BB1C",
          error: "#F03738",
          success: colors.green.accent3,
        },
        dark: {
          primary: "#2DA8CF",
          accent: "#1F2631",
          content_background: "#151B23",
          content_text: "#F5FCF9",
          secondary: "#FE9901",
          info: colors.teal.lighten1,
          warning: "#F3BB1C",
          error: "#F03738",
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
