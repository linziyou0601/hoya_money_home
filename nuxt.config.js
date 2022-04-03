import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    return {
      titleTemplate: '%s',
      title: 'Hoya記帳',
      htmlAttrs: {
        lang: 'zh-tw',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Hoya記帳是一款個人記帳軟體，介面美觀、輕鬆上手，期望能讓記帳變成你每天的日常，成為你的理財幫手！' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        { hid: 'og:title', name: 'og:title', content: 'Hoya記帳 HoyaMoney' },
        { hid: 'og:description', name: 'og:description', content: 'Hoya記帳是一款個人記帳軟體，介面美觀、輕鬆上手，期望能讓記帳變成你每天的日常，成為你的理財幫手！' },
        { hid: 'og:site_name', name: 'og:site_name', content: 'Hoya記帳 HoyaMoney' },
        { hid: 'keywords', name: 'keywords', content: '記帳,理財,帳本,收支,Money,Track Money,Track Expenses' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, 
      ],
      script: [
        {
          hid: 'gtm-script1',
          src: 'https://www.googletagmanager.com/gtag/js?id=G-7W1GFW6X49',
          defer: true
        },
        {
          hid: 'gtm-script2',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-7W1GFW6X49');
          `,
          type: 'text/javascript',
          charset: 'utf-8'
        },
      ],
      __dangerouslyDisableSanitizers: ['script'],
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vuetify.js'],

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
    '@nuxtjs/i18n',

    'nuxt-fontawesome',
  ],

  i18n: {
    defaultLocale: 'zh_TW',
    langDir: '~/locales/',
    locales: [ 
      { code: 'zh_TW', iso: 'zh-TW', file: 'zh_TW.js', name: '中文', },
      { code: 'en', iso: 'en-US', file: 'en.js', name: 'English', },
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

  fontawesome: {
    // icon 的標籤使用 <fa>，這邊不設定就會依照 plugin 裡的設定<font-awesome-icon>
    component: 'fa', 
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      },
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
