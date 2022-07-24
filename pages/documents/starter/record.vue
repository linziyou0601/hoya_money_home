<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10">
      <!-- 標題 -->
      <div class="text-h4 font-weight-bold mb-14 text-center">
        <span :class="`pb-3 px-3 title_border_bottom ${borderColor}`">
          {{ $t('docs_starter_record_title') }}
        </span>
      </div>

      <!-- 開始第一筆紀錄 -->
      <div>
        <div class="text-h5 font-weight-bold mb-3">
          {{ $t('docs_starter_record_preface_title') }}
        </div>
        <div class="mb-3">{{ $t('docs_starter_record_preface_content') }}</div>
      </div>

      <!-- 新增紀錄 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_starter_record_add_record_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_record_add_record_content') }}
        </div>
        <v-alert
          border="left"
          colored-border
          color="primary"
          type="info"
          elevation="1"
          class="mb-4"
        >
          {{ $t('docs_starter_record_add_record_alert') }}
        </v-alert>
        <v-row class="mt-4">
          <v-img
            :src="`/documents/starter/record/home_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
          <v-img
            :src="`/documents/starter/record/add_record_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
        </v-row>
      </div>

      <!-- 紀錄欄位 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_starter_record_field_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_record_field_content') }}
        </div>
        <v-img
          :src="`/documents/starter/record/field_${localeSuffix}_${themeSuffix}.png`"
          contain
          class="mx-auto mb-4"
          max-width="640"
        />
      </div>

      <!-- 紀錄類型 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_starter_record_group_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_record_group_content') }}
        </div>
      </div>

      <!-- 類別及子類別 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_starter_record_category_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_record_category_content') }}
        </div>
        <v-alert
          border="left"
          colored-border
          color="primary"
          type="info"
          elevation="1"
          class="mb-4"
        >
          {{ $t('docs_starter_record_category_alert') }}
          <v-btn
            color="primary"
            class="mx-4 my-0"
            outlined
            small
            @click="
              $router.push({
                name: `documents-prepare-type___${$i18n.locale}`,
              })
            "
          >
            {{ $t('docs_go') }}
          </v-btn>
        </v-alert>
      </div>

      <!-- 金額 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_starter_record_amount_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_record_amount_content') }}
        </div>
      </div>

      <!-- 帳戶 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_starter_record_account_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_record_account_content') }}
        </div>
        <v-alert
          border="left"
          colored-border
          color="primary"
          type="info"
          elevation="1"
          class="mb-4"
        >
          {{ $t('docs_starter_record_account_alert') }}
          <v-btn
            color="primary"
            class="mx-4 my-0"
            outlined
            small
            @click="
              $router.push({
                name: `documents-prepare-account___${$i18n.locale}`,
              })
            "
          >
            {{ $t('docs_go') }}
          </v-btn>
        </v-alert>
      </div>

      <!-- 貨幣及匯率 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_starter_record_currency_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_record_currency_content') }}
        </div>
      </div>

      <!-- 計入預算 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_starter_record_counted_in_budget_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_record_counted_in_budget_content') }}
        </div>
      </div>

      <!-- 專案及預算 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_starter_record_project_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_record_project_content') }}
        </div>
        <v-alert
          border="left"
          colored-border
          color="primary"
          type="info"
          elevation="1"
          class="mb-4"
        >
          {{ $t('docs_starter_record_project_alert') }}
          <v-btn
            color="primary"
            class="mx-4 my-0"
            outlined
            small
            @click="
              $router.push({
                name: `documents-prepare-project___${$i18n.locale}`,
              })
            "
          >
            {{ $t('docs_go') }}
          </v-btn>
        </v-alert>
      </div>

      <!-- 多類別紀錄 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_starter_record_multi_record_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_record_multi_record_content') }}
        </div>
        <v-row class="mt-4">
          <v-img
            :src="`/documents/starter/record/multi_record_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
          <v-img
            :src="`/documents/starter/record/multi_record_info_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
        </v-row>
      </div>

      <!-- 日期與時間 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_starter_record_datetime_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_record_datetime_content') }}
        </div>
      </div>

      <!-- 週期記帳 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_starter_record_periodic_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_record_periodic_content') }}
        </div>
        <v-alert
          border="left"
          colored-border
          color="primary"
          type="info"
          elevation="1"
          class="mb-4"
        >
          {{ $t('docs_starter_record_periodic_alert') }}
          <v-btn
            color="primary"
            class="mx-4 my-0"
            outlined
            small
            @click="
              $router.push({
                name: `documents-starter-periodic___${$i18n.locale}`,
              })
            "
          >
            {{ $t('docs_go') }}
          </v-btn>
        </v-alert>
      </div>

      <!-- 台灣電子發票 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_starter_record_invoice_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_record_invoice_content') }}
        </div>
        <v-alert
          border="left"
          colored-border
          color="primary"
          type="info"
          elevation="1"
          class="mb-4"
        >
          {{ $t('docs_starter_record_invoice_alert') }}
          <v-btn
            color="primary"
            class="mx-4 my-0"
            outlined
            small
            @click="
              $router.push({
                name: `documents-starter-invoice___${$i18n.locale}`,
              })
            "
          >
            {{ $t('docs_go') }}
          </v-btn>
        </v-alert>
        <!--<v-alert
          border="left"
          colored-border
          color="primary"
          type="info"
          elevation="1"
          class="mb-4"
        >
          {{ $t('docs_starter_record_invoice_alert') }}
          <v-btn class="mx-4 my-0" outlined small :disabled="true">
            {{ $t('docs_under_construction') }}
          </v-btn>
        </v-alert>-->
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'document',
  data() {
    return {
      pageTitle: this.$t('docs_starter_record_title'),
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
