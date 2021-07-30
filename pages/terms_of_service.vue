<template>
  <v-row justify="center" align="center">
    <!-- 擷圖 -->
    <v-col cols="12" sm="10" md="8">
      <div class="text-h4 font-weight-bold mb-8 text-center">
        <span :class="`pb-3 px-3 title_border_bottom ${borderColor}`">
          {{ $t('terms_of_service_page') }}
        </span>
      </div>
      <div
        v-for="line in textlines"
        :key="line.key"
        :class="`text-${line.size} my-4`"
      >
        <ul v-if="Array.isArray(line.children) && line.children.length">
          <li v-for="child in line.children" :key="child">{{ $t(child) }}</li>
        </ul>
        <span v-else>
          {{ $t(line.key) }}
        </span>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: this.$t('terms_of_service_page'),
      textlines: [
        {
          key: 'terms_of_service_preface',
          size: 'h7',
        },
        {
          key: 'terms_of_service_1_title',
          size: 'h6',
        },
        {
          key: 'terms_of_service_1_content',
          size: 'h7',
          children: [
            'terms_of_service_1_content_1',
            'terms_of_service_1_content_2',
          ],
        },
        {
          key: 'terms_of_service_2_title',
          size: 'h6',
        },
        {
          key: 'terms_of_service_2_content',
          size: 'h7',
          children: [
            'terms_of_service_2_content_1',
            'terms_of_service_2_content_2',
            'terms_of_service_2_content_3',
            'terms_of_service_2_content_4',
          ],
        },
        {
          key: 'terms_of_service_3_title',
          size: 'h6',
        },
        {
          key: 'terms_of_service_3_content',
          size: 'h7',
          children: [
            'terms_of_service_3_content_1',
            'terms_of_service_3_content_2',
            'terms_of_service_3_content_3',
          ],
        },
        {
          key: 'terms_of_service_4_title',
          size: 'h6',
        },
        {
          key: 'terms_of_service_4_content',
          size: 'h7',
        },
        {
          key: 'terms_of_service_5_title',
          size: 'h6',
        },
        {
          key: 'terms_of_service_5_content',
          size: 'h7',
        },
      ],
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
