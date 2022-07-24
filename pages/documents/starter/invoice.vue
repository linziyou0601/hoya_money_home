<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10">
      <!-- 標題 -->
      <div class="text-h4 font-weight-bold mb-14 text-center">
        <span :class="`pb-3 px-3 title_border_bottom ${borderColor}`">
          {{ $t('docs_starter_invoice_title') }}
        </span>
      </div>

      <!-- 說明 -->
      <div>
        <div class="mb-3">
          {{ $t('docs_starter_invoice_preface_content') }}
        </div>
      </div>

      <!-- 發票 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_starter_invoice_main_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_invoice_main_content') }}
        </div>
        <v-row class="mt-4">
          <v-img
            :src="`/documents/starter/invoice/home_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
          <v-img
            :src="`/documents/starter/invoice/invoice_p1_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
          <v-img
            :src="`/documents/starter/invoice/invoice_p2_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
          <v-img
            :src="`/documents/starter/invoice/invoice_p3_${localeSuffix}_${themeSuffix}.png`"
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
          {{ $t('docs_starter_invoice_txn_connection_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_invoice_txn_connection_content') }}
        </div>
        <v-img
          :src="`/documents/starter/invoice/invoice_txn_connect_${localeSuffix}_${themeSuffix}.png`"
          contain
          class="mx-auto mb-4"
          max-width="260"
        />
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
