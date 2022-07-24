<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10">
      <!-- 標題 -->
      <div class="text-h4 font-weight-bold mb-14 text-center">
        <span :class="`pb-3 px-3 title_border_bottom ${borderColor}`">
          {{ $t('docs_starter_chart_title') }}
        </span>
      </div>

      <!-- 檢視消費習慣 -->
      <div>
        <div class="text-h5 font-weight-bold mb-3">
          {{ $t('docs_starter_chart_preface_title') }}
        </div>
        <div class="mb-3">
          {{ $t('docs_starter_chart_preface_content') }}
        </div>
      </div>

      <!-- 圖表及分析資料 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_starter_chart_main_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_chart_main_content') }}
        </div>
        <v-row class="mt-4">
          <v-img
            :src="`/documents/starter/chart/chart_overview_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
          <v-img
            :src="`/documents/starter/chart/chart_detail_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
          <v-img
            :src="`/documents/starter/chart/chart_exp_rev_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
        </v-row>
      </div>

      <!-- 自定義圖表條件 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_starter_chart_condition_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_chart_condition_content') }}
        </div>
        <v-row class="mt-4">
          <v-img
            :src="`/documents/starter/chart/chart_condition_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
          <v-img
            :src="`/documents/starter/chart/chart_change_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'document',
  data() {
    return {
      pageTitle: this.$t('docs_starter_chart_title'),
    }
  },
  computed: {
    localeSuffix() {
      return this.$i18n.locale === 'en' ? 'en' : 'zh'
    },
    themeSuffix() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
    borderColor() {
      return this.$vuetify.theme.dark
        ? 'border_color_dark'
        : 'border_color_light'
    },
  },
  created() {
    this.$nuxt.$emit('pageTitle', this.pageTitle)
  },
}
</script>
