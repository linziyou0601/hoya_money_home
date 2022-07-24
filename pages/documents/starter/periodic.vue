<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10">
      <!-- 標題 -->
      <div class="text-h4 font-weight-bold mb-14 text-center">
        <span :class="`pb-3 px-3 title_border_bottom ${borderColor}`">
          {{ $t('docs_starter_periodic_title') }}
        </span>
      </div>

      <!-- 重複發生的交易 -->
      <div>
        <div class="text-h5 font-weight-bold mb-3">
          {{ $t('docs_starter_periodic_preface_title') }}
        </div>
        <div class="mb-3">
          {{ $t('docs_starter_periodic_preface_content') }}
        </div>
      </div>

      <!-- 設定週期 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_starter_periodic_setting_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_periodic_setting_content') }}
        </div>
        <v-alert
          border="left"
          colored-border
          color="primary"
          type="info"
          elevation="1"
          class="mb-4"
        >
          {{ $t('docs_starter_periodic_record_alert') }}
          <v-btn
            color="primary"
            class="mx-4 my-0"
            outlined
            small
            @click="
              $router.push({
                name: `documents-starter-record___${$i18n.locale}`,
              })
            "
          >
            {{ $t('docs_go') }}
          </v-btn>
        </v-alert>
        <v-img
          :src="`/documents/starter/periodic/set_periodic_${localeSuffix}_${themeSuffix}.png`"
          contain
          class="mx-auto mb-4"
          max-width="260"
        />
      </div>

      <!-- 實現紀錄 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_starter_periodic_realize_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_periodic_realize_content') }}
        </div>
        <v-row class="mt-4">
          <v-img
            :src="`/documents/starter/periodic/unrealized_periodic_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
          <v-img
            :src="`/documents/starter/periodic/realizable_periodic_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
        </v-row>
      </div>

      <!-- 管理週期事件 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_starter_periodic_list_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_starter_periodic_list_content') }}
        </div>
        <v-row class="mt-4">
          <v-img
            :src="`/documents/prepare/other_fun_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
          <v-img
            :src="`/documents/starter/periodic/periodic_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
          <v-img
            :src="`/documents/starter/periodic/periodic_detail_${localeSuffix}_${themeSuffix}.png`"
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
      pageTitle: this.$t('docs_starter_periodic_title'),
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
