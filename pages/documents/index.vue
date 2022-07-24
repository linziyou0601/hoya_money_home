<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10">
      <div class="text-h4 font-weight-bold mb-14 text-center">
        <span :class="`pb-3 px-3 title_border_bottom ${borderColor}`">
          {{ $t('docs_index_title') }}
        </span>
      </div>

      <!-- 開發這個App的動機 -->
      <div>
        <div class="text-h5 font-weight-bold mb-3">
          {{ $t('docs_index_why_develop_app_title') }}
        </div>
        <div class="mb-3">{{ $t('docs_index_why_develop_app_content') }}</div>
      </div>

      <!-- 特性 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_prepare_sec') }}
        </div>
        <div class="mb-4">{{ $t('docs_prepare_sec_description') }}</div>
        <v-row class="mb-4">
          <v-col
            v-for="key in ['account', 'category', 'project']"
            :key="key"
            class="mt-1 pb-1"
            cols="12"
            sm="6"
            lg="4"
          >
            <v-card
              color="content_background"
              @click="
                $router.push({
                  name: `documents-prepare-${key}___${$i18n.locale}`,
                })
              "
            >
              <v-card-title class="justify-center mb-2">
                {{ $t(`docs_prepare_${key}_title`) }}
              </v-card-title>
              <v-card-subtitle class="text-center mb-2">
                {{ $t(`docs_prepare_${key}_preface_title`) }}
              </v-card-subtitle>
            </v-card>
          </v-col>
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
      pageTitle: this.$t('docs_page'),
    }
  },
  computed: {
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
