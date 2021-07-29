<template>
  <v-row justify="center" align="center">
    <!-- 介紹 -->
    <v-col
      cols="12"
      sm="8"
      md="6"
      class="text-center"
      style="height: calc(100vh - 88px)"
    >
      <v-img
        src="/adaptive_icon_foreground.png"
        max-width="200"
        contain
        class="mx-auto mt-10"
      />
      <div class="text-h3 font-weight-bold mb-8">{{ $t('hoya_money') }}</div>

      <div class="text-h6 mb-8">{{ $t('hoya_money_intro') }}</div>

      <v-btn
        color="primary"
        rounded
        large
        class="text-h6 px-8 mt-10"
        outlined
        target="_blank"
        href="https://play.google.com/store/apps/details?id=com.hoya_money"
      >
        {{ $t('download') }}
      </v-btn>
    </v-col>

    <!-- 功能 -->
    <v-col cols="12" class="text-center">
      <div class="text-h4 font-weight-bold mb-8">
        <span :class="`pb-3 px-3 title_border_bottom ${borderColor}`">
          {{ $t('features') }}
        </span>
      </div>
      <v-row>
        <v-col
          v-for="key in functionKeys"
          :key="key"
          cols="12"
          sm="6"
          lg="4"
          class="mb-n5"
        >
          <v-col class="text-center">
            <v-avatar
              class="mb-n16"
              style="z-index: 1"
              color="#FFFFFF"
              size="60"
            >
              <v-avatar color="primary" size="58">
                <v-icon color="#FFFFFF">{{ $t(`${key}_icon`) }}</v-icon>
              </v-avatar>
            </v-avatar>
          </v-col>
          <v-col>
            <v-card color="content_background">
              <v-card-title class="justify-space-between pb-3">
                <v-spacer />
              </v-card-title>
              <v-card-title
                class="justify-center mb-2"
                v-html="$t(`${key}_title`).replaceAll('\n', '<br>')"
              >
              </v-card-title>
              <v-card-subtitle
                class="text-center"
                v-html="$t(`${key}_content`).replaceAll('\n', '<br>')"
              >
              </v-card-subtitle>
              <v-card-actions>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-col>
        </v-col>
      </v-row>
    </v-col>

    <!-- 擷圖 -->
    <v-col cols="12" class="text-center mt-10">
      <div class="text-h4 font-weight-bold mb-8">
        <span :class="`pb-3 px-3 title_border_bottom ${borderColor}`">
          {{ $t('snapshots') }}
        </span>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="i in 10" :key="i" class="swiper-slide">
            <v-img
              :src="`/snapshots/${snapshotSuffix}${i}.png`"
              contain
              class="mx-auto"
            />
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

export default {
  data() {
    return {
      pageTitle: '',
      functionKeys: [
        'multi_account_and_multi_currency',
        'project_and_budget',
        'dynamic_chart',
        'periodic_event',
        'reminders_and_notifications',
        'backup_import_and_export',
        'other_functions',
      ],
      swiper: null,
    }
  },
  computed: {
    themeType() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
    borderColor() {
      return this.$vuetify.theme.dark
        ? 'border_color_dark'
        : 'border_color_light'
    },
    snapshotSuffix() {
      return this.$i18n.locale === 'en' ? 'en' : 'zh'
    },
  },
  mounted() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 5,
      breakpoints: {
        480: {
          // when window width is >= 480px
          slidesPerView: 2,
          spaceBetween: 5,
        },
        720: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        900: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
      },
    })
  },
  created() {
    this.$nuxt.$emit('pageTitle', this.pageTitle)
  },
}
</script>
