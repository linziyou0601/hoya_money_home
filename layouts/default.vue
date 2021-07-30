<template>
  <v-app dark>
    <!-- 小螢幕顯示 -->
    <v-navigation-drawer
      v-model="drawer"
      color="content_background"
      class="d-block d-sm-none"
      app
    >
      <!-- 上方LOGO -->
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="/adaptive_icon_foreground.png" alt="Logo" />
        </v-list-item-avatar>
        <v-list-item-title>{{ $t('hoya_money') }}</v-list-item-title>
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>

      <!-- 下方按鈕 -->
      <v-list dense>
        <v-list-item
          v-for="(link, index) in links"
          :key="index"
          @click="$router.push({ name: link.name })"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t(link.title) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="content_background" flat>
      <!-- 小螢幕顯示 -->
      <v-app-bar-nav-icon class="d-block d-sm-none" @click="drawer = !drawer" />

      <!-- 大螢幕顯示 -->
      <v-spacer />
      <v-avatar
        color="content_background"
        size="48"
        style="border-radius: 12%"
        class="d-none d-sm-block"
      >
        <v-img src="/adaptive_icon_foreground.png" alt="Logo" />
      </v-avatar>
      <v-tabs v-model="tabValue" centered class="d-none d-sm-block">
        <v-tab
          v-for="(link, index) in links"
          :key="index"
          @click="$router.push({ name: link.name })"
        >
          {{ $t(link.title) }}
        </v-tab>
      </v-tabs>

      <!-- 全顯示 -->
      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>mdi-lightbulb{{ $vuetify.theme.dark ? '-off' : '' }}</v-icon>
      </v-btn>
      <v-menu offset-y :rounded="rounded">
        <template #activator="{ on }">
          <v-btn icon v-on="on"><v-icon>mdi-translate</v-icon></v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
          >
            <v-list-item-title>{{ locale.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main class="accent mb-10">
      <v-container class="mt-5">
        <nuxt class="pa-8" />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" color="content_background" app padless>
      <v-col cols="12" class="text-center">
        <div class="my-3">
          <a
            href="https://play.google.com/store/apps/details?id=com.hoya_money"
            target="_blank"
          >
            <v-img
              :alt="downloadBadgeAltText"
              :src="downloadBadgeLink"
              max-width="150"
              class="mx-auto"
            />
          </a>
        </div>

        <div class="grey--text pt-0 mb-10">
          <a
            class="text-decoration-none grey--text mx-2"
            :href="`${localePath({ name: 'privacy_policy' })}`"
          >
            {{ $t('privacy_policy_page') }}
          </a>
          <a
            class="text-decoration-none grey--text mx-2"
            :href="`${localePath({ name: 'terms_of_service' })}`"
          >
            {{ $t('terms_of_service_page') }}
          </a>
        </div>

        <div class="mt-10 mb-3">
          &copy; {{ new Date().getFullYear() }} {{ $t('hoya_money') }}, Linziyou
          Dev
        </div>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      pDrawer: false,
      tabValue: 0,
      titlePrefix: this.$t('hoya_money'),
      pageTitle: '',
    }
  },
  head() {
    return {
      title: `${this.titlePrefix} ${this.pageTitle}`,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    links() {
      return [
        {
          title: this.$t('home_page'),
          link: this.localePath({ name: 'index' }),
          name: `index___${this.$i18n.locale}`,
          icon: 'mdi-home',
        },
        {
          title: this.$t('privacy_policy_page'),
          link: this.localePath({ name: 'privacy_policy' }),
          name: `privacy_policy___${this.$i18n.locale}`,
          icon: 'mdi-script-text',
        },
        {
          title: this.$t('terms_of_service_page'),
          link: this.localePath({ name: 'terms_of_service' }),
          name: `terms_of_service___${this.$i18n.locale}`,
          icon: 'mdi-script-text',
        },
      ]
    },
    downloadBadgeLink() {
      return this.$i18n.locale === 'en'
        ? 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
        : 'https://play.google.com/intl/en_us/badges/static/images/badges/zh-tw_badge_web_generic.png'
    },
    downloadBadgeAltText() {
      return this.$i18n.locale === 'en'
        ? 'Get it on Google Play'
        : 'Google Play立即下載'
    },
    drawer: {
      get() {
        return this.pDrawer
      },
      set(val) {
        this.loadTabValue()
        this.pDrawer = val
      },
    },
  },
  mounted() {
    this.loadTabValue()
  },
  created() {
    this.$nuxt.$on('pageTitle', (data) => (this.pageTitle = data))
  },
  methods: {
    loadTabValue() {
      this.tabValue = this.links.findIndex(
        (element) => element.name === this.$route.name
      )
    },
  },
}
</script>

<style>
.title_border_bottom {
  border-bottom: 2px solid;
}
.border_color_light {
  border-color: #1b4f71;
}
.border_color_dark {
  border-color: #2da8cf;
}
</style>
