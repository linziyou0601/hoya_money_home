<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10">
      <!-- 標題 -->
      <div class="text-h4 font-weight-bold mb-14 text-center">
        <span :class="`pb-3 px-3 title_border_bottom ${borderColor}`">
          {{ $t('docs_prepare_project_title') }}
        </span>
      </div>

      <!-- 花費的目的 -->
      <div>
        <div class="text-h5 font-weight-bold mb-3">
          {{ $t('docs_prepare_project_preface_title') }}
        </div>
        <div class="mb-3">{{ $t('docs_prepare_project_preface_content') }}</div>
        <v-alert
          border="left"
          colored-border
          color="primary"
          type="info"
          elevation="1"
          class="mb-4"
        >
          {{ $t('docs_prepare_project_preface_alert') }}
        </v-alert>
      </div>

      <!-- 新增專案 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_prepare_project_add_project_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_prepare_project_add_project_content') }}
        </div>
        <v-row class="mt-4">
          <v-img
            :src="`/documents/prepare/project/project_budget_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
          <v-img
            :src="`/documents/prepare/project/create_project_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
        </v-row>
      </div>

      <!-- 週期類型 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_prepare_project_periodic_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_prepare_project_periodic_content') }}
        </div>
        <v-alert
          border="left"
          colored-border
          color="primary"
          type="info"
          elevation="1"
          class="mb-4"
        >
          {{ $t('docs_prepare_project_periodic_alert') }}
        </v-alert>
      </div>

      <!-- 總預算及預算提醒 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_prepare_project_total_budget_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_prepare_project_total_budget_content') }}
        </div>
      </div>

      <!-- 每日預算 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_prepare_project_daily_budget_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_prepare_project_daily_budget_content') }}
        </div>
      </div>

      <!-- 是否顯示 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_prepare_project_showable_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_prepare_project_showable_content') }}
        </div>
      </div>

      <!-- 類別預算 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_prepare_project_type_budget_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_prepare_project_type_budget_content') }}
        </div>
        <v-img
          :src="`/documents/prepare/project/type_budget_${localeSuffix}_${themeSuffix}.png`"
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
      pageTitle: this.$t('docs_prepare_project_title'),
      accountGroups: [
        {
          en: 'Cash',
          zh: '現金',
          intro_en: 'Wallet, Cash, NT$, US$, JP￥, RMB',
          intro_zh: '錢包、新台幣、美元、日圓、人民幣',
        },
        {
          en: 'Bank',
          zh: '銀行',
          intro_en: 'Domestic Bank, Foreign Currency Account, Digital Bank',
          intro_zh: '本國銀行帳戶、外幣帳戶、數位銀行帳戶、郵局',
        },
        {
          en: 'Securities',
          zh: '證券戶',
          intro_en: 'Securities Account, Investment Account',
          intro_zh: '銀行證券帳戶、外國證券帳戶、投資用帳戶',
        },
        {
          en: 'Credit Card',
          zh: '信用卡',
          intro_en: 'VISA、MASTER、JCB、Debit Card',
          intro_zh: 'VISA、MASTER、JCB、簽帳金融卡',
        },
        {
          en: 'E-Payment',
          zh: '電子支付',
          intro_en: 'Line Pay、JKO Pay、Pi Wallet、Gama Pay、Easy Wallet',
          intro_zh: 'Line Pay、街口支付、Pi拍錢包、橘子支付、悠遊付',
        },
        {
          en: 'E-Card',
          zh: '電子票證',
          intro_en: 'Easy Card, iPass, iCash, Octopus',
          intro_zh: '悠遊卡、一卡通、iCash、八達通',
        },
        {
          en: 'Bonus Point',
          zh: '紅利點數',
          intro_en: 'Line Point, JKO Point, Open Point',
          intro_zh: 'Line Point、街口幣、Open Point',
        },
        {
          en: 'Gift Certificate',
          zh: '禮券',
          intro_en: 'Stimulus Vouchers, Shopping Mall Gift Voucher',
          intro_zh: '振興券、購物中心禮券',
        },
        {
          en: 'Insurance Policy',
          zh: '保單',
          intro_en: 'Insurance Policy Account, Savings Insurance',
          intro_zh: '保單帳戶、儲蓄險',
        },
        {
          en: 'Loan Account',
          zh: '貸款帳戶',
          intro_en: 'Mortgage Loan, Car Loan, School Loan',
          intro_zh: '房貸、車貸、學貸',
        },
        {
          en: 'Others',
          zh: '其他',
          intro_en:
            'Accounts not listed above or difficult to classify (e.g. Receivable or Payable Account)',
          intro_zh: '上方未列舉或難以分類的帳戶（如：應收、應付款項）',
        },
      ],
    }
  },
  computed: {
    localeSuffix() {
      return this.$i18n.locale === 'en' ? 'en' : 'zh'
    },
    themeSuffix() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
  },
  created() {
    this.$nuxt.$emit('pageTitle', this.pageTitle)
  },
}
</script>
