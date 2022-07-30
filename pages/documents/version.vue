<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10">
      <!-- 標題 -->
      <div class="text-h4 font-weight-bold mb-14 text-center">
        <span :class="`pb-3 px-3 title_border_bottom ${borderColor}`">
          {{ $t('docs_version_title') }}
        </span>
      </div>

      <!-- 錢花在哪裡 -->
      <div v-for="(version, v_ind) in versionsJson" :key="v_ind">
        <v-divider v-show="index !== 0" class="my-8" />
        <div class="text-h5 font-weight-bold mb-1">
          {{ version.version }}
        </div>
        <div :class="`d-block mb-3 ${releaseDateColor}`">
          <small>
            {{ $t('docs_version_released_on') }} {{ version.release_date }}
          </small>
          <small v-show="version.last_patched" class="ml-2">
            {{ $t('docs_version_last_updated_on') }} {{ version.last_patched }}
          </small>
        </div>
        <div v-for="(log, l_ind) in version[localeSuffix]" :key="l_ind">
          <div class="font-weight-bold mb-3">{{ log.type }}</div>
          <ul class="mb-4">
            <li v-for="(content, c_ind) in log.list" :key="c_ind">
              {{ content }}
            </li>
          </ul>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import versionsJson from '@/static/versions.json'
export default {
  layout: 'document',
  data() {
    return {
      pageTitle: this.$t('docs_version_title'),
      versionsJson,
    }
  },
  computed: {
    localeSuffix() {
      return this.$i18n.locale === 'en' ? 'en_US' : 'zh_TW'
    },
    borderColor() {
      return this.$vuetify.theme.dark
        ? 'border_color_dark'
        : 'border_color_light'
    },
    releaseDateColor() {
      return this.$vuetify.theme.dark
        ? 'blue-grey--text text--lighten-1'
        : 'blue-grey--text text--lighten-2'
    },
  },
  created() {
    this.$nuxt.$emit('pageTitle', this.pageTitle)
  },
}
</script>
