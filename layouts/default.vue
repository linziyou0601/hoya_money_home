<template>
  <v-app dark>
    <v-app-bar app class="content_background" flat>
      <v-spacer />
      <v-avatar color="accent" size="48" style="border-radius: 12%">
        <v-avatar color="content_background" rounded size="44">
          <v-img src="/adaptive_icon_foreground.png" alt="Logo" />
        </v-avatar>
      </v-avatar>

      <v-tabs v-model="tabValue" centered>
        <v-tab
          v-for="(link, index) in links"
          :key="index"
          @click="$router.push({ name: link.name })"
        >
          {{ $t(link.title) }}
        </v-tab>
      </v-tabs>

      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>mdi-lightbulb{{ $vuetify.theme.dark ? '-off' : '' }}</v-icon>
      </v-btn>

      <v-btn
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        text
        >{{ locale.name }}</v-btn
      >
      <v-spacer />
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
      tabValue: 0,
      titlePrefix: 'Hoya記帳',
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
        },
        {
          title: this.$t('privacy_policy_page'),
          link: this.localePath({ name: 'privacy_policy' }),
          name: `privacy_policy___${this.$i18n.locale}`,
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
  },
  mounted() {
    this.tabValue = this.links.findIndex(
      (element) => element.name === this.$route.name
    )
  },
  created() {
    this.$nuxt.$on('pageTitle', (data) => (this.pageTitle = data))
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
