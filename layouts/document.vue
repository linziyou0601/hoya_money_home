<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" color="content_background" app>
      <!-- 上方LOGO -->
      <v-list-item
        class="px-2"
        @click="$router.push({ name: `index___${$i18n.locale}` })"
      >
        <v-list-item-avatar>
          <v-img src="/adaptive_icon_foreground.png" alt="Logo" />
        </v-list-item-avatar>
        <v-list-item-title>{{ $t('hoya_money') }}</v-list-item-title>
        <v-btn icon @click.stop="drawer = !drawer">
          <fa :icon="['fas', 'chevron-left']" class="icon-3" />
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>

      <!-- 下方按鈕 -->
      <v-list dense>
        <div v-for="(link, index) in links" :key="index">
          <v-list-item
            v-if="!link.readOnly"
            :class="
              links.map((item) => item.name).indexOf($route.name) === index
                ? 'v-list-item--active'
                : ''
            "
            @click="$router.push({ name: link.name })"
          >
            <v-list-item-icon>
              <fa :icon="link.icon" class="icon-3" />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-else class="mt-4 grey--text">
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="content_background" flat>
      <v-btn icon @click="drawer = !drawer">
        <fa :icon="['fas', 'bars']" class="icon-3" />
      </v-btn>

      <!-- 大螢幕顯示 -->
      <v-avatar
        color="content_background"
        size="48"
        style="border-radius: 12%"
        class="d-none d-sm-block"
      >
        <v-img src="/adaptive_icon_foreground.png" alt="Logo" />
      </v-avatar>
      <div class="d-none d-sm-block">{{ $t('docs_page') }}</div>
      <v-spacer />

      <!-- 全顯示 -->
      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <fa
          :icon="['fas', $vuetify.theme.dark ? 'lightbulb' : 'moon']"
          class="icon-3"
        />
      </v-btn>
      <v-menu offset-y>
        <template #activator="{ on }">
          <v-btn icon v-on="on">
            <fa :icon="['fas', 'earth-asia']" class="icon-3" />
          </v-btn>
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

    <v-main class="accent">
      <v-container>
        <nuxt class="pa-8" />
      </v-container>
    </v-main>

    <v-footer color="content_background" padless>
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
      drawer: true,
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
          icon: ['fas', 'house'],
          readOnly: false,
        },
        {
          title: this.$t('docs_page'),
          link: this.localePath({ name: 'documents' }),
          name: `documents___${this.$i18n.locale}`,
          icon: ['fas', 'book'],
          readOnly: false,
        },
        {
          title: this.$t('docs_prepare_sec'),
          readOnly: true,
        },
        {
          title: this.$t('docs_prepare_account_title'),
          link: this.localePath({ name: 'documents-prepare-account' }),
          name: `documents-prepare-account___${this.$i18n.locale}`,
          icon: ['fas', 'building-columns'],
          readOnly: false,
        },
        {
          title: this.$t('docs_prepare_type_title'),
          link: this.localePath({ name: 'documents-prepare-type' }),
          name: `documents-prepare-type___${this.$i18n.locale}`,
          icon: ['fas', 'spa'],
          readOnly: false,
        },
        {
          title: this.$t('docs_prepare_project_title'),
          link: this.localePath({ name: 'documents-prepare-project' }),
          name: `documents-prepare-project___${this.$i18n.locale}`,
          icon: ['fas', 'wallet'],
          readOnly: false,
        },
        {
          title: this.$t('docs_starter_sec'),
          readOnly: true,
        },
        {
          title: this.$t('docs_starter_record_title'),
          link: this.localePath({ name: 'documents-starter-record' }),
          name: `documents-starter-record___${this.$i18n.locale}`,
          icon: ['fas', 'feather'],
          readOnly: false,
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
