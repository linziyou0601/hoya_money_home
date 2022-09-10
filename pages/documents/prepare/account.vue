<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10">
      <!-- 標題 -->
      <div class="text-h4 font-weight-bold mb-14 text-center">
        <span :class="`pb-3 px-3 title_border_bottom ${borderColor}`">
          {{ $t('docs_prepare_account_title') }}
        </span>
      </div>

      <!-- 記帳的第一步 -->
      <div>
        <div class="text-h5 font-weight-bold mb-3">
          {{ $t('docs_prepare_account_preface_title') }}
        </div>
        <div class="mb-3">{{ $t('docs_prepare_account_preface_content') }}</div>
        <v-alert
          border="left"
          colored-border
          color="primary"
          type="info"
          elevation="1"
          class="mb-4"
        >
          {{ $t('docs_prepare_account_preface_alert') }}
        </v-alert>
      </div>

      <!-- 新增帳戶 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_prepare_account_new_account_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_prepare_account_new_account_content') }}
        </div>
        <v-row class="mt-4">
          <v-img
            :src="`/documents/prepare/account/personal_overview_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
          <v-img
            :src="`/documents/prepare/account/create_account_${localeSuffix}_${themeSuffix}.png`"
            contain
            class="mx-auto mb-4"
            max-width="260"
          />
        </v-row>
      </div>

      <!-- 群組 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_prepare_account_group_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_prepare_account_group_content') }}
        </div>
        <v-simple-table class="accent mb-4">
          <template #default>
            <thead>
              <tr>
                <th class="text-left">
                  {{ $t('docs_prepare_account_group_table_group_name') }}
                </th>
                <th class="text-left">
                  {{ $t('docs_prepare_account_group_table_group_intro') }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="group in accountGroups" :key="group.zh">
                <td>{{ group[localeSuffix] }}</td>
                <td>{{ group[`intro_${localeSuffix}`] }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-alert
          border="left"
          colored-border
          color="primary"
          type="info"
          elevation="1"
          class="mb-4"
        >
          {{ $t('docs_prepare_account_group_alert') }}
        </v-alert>
      </div>

      <!-- 貨幣 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_prepare_account_currency_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_prepare_account_currency_content') }}
        </div>
        <v-img
          :src="`/documents/prepare/account/currency_${localeSuffix}_${themeSuffix}.png`"
          contain
          class="mx-auto mb-4"
          max-width="260"
        />
      </div>

      <!-- 初始餘額 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_prepare_account_init_balance_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_prepare_account_init_balance_content') }}
        </div>
      </div>

      <!-- 結帳日 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_prepare_account_closing_date_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_prepare_account_closing_date_content') }}
        </div>
        <v-alert
          border="left"
          colored-border
          color="primary"
          type="info"
          elevation="1"
          class="mb-4"
        >
          {{ $t('docs_prepare_account_closing_date_alert') }}
        </v-alert>
      </div>

      <!-- 繳款日 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_prepare_account_payment_due_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_prepare_account_payment_due_content') }}
        </div>
        <v-alert
          border="left"
          colored-border
          color="primary"
          type="info"
          elevation="1"
          class="mb-4"
        >
          {{ $t('docs_prepare_account_payment_due_alert') }}
        </v-alert>
      </div>

      <!-- 計入總額 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_prepare_account_countable_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_prepare_account_countable_content') }}
        </div>
      </div>

      <!-- 是否顯示 -->
      <v-divider class="my-8" />
      <div>
        <div class="text-h5 font-weight-bold mb-4">
          {{ $t('docs_prepare_account_showable_title') }}
        </div>
        <div class="mb-4">
          {{ $t('docs_prepare_account_showable_content') }}
        </div>
        <v-alert
          border="left"
          colored-border
          color="primary"
          type="info"
          elevation="1"
          class="mb-4"
        >
          {{ $t('docs_prepare_account_showable_alert') }}
        </v-alert>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'document',
  data() {
    return {
      pageTitle: this.$t('docs_prepare_account_title'),
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
          intro_en: '一卡通Money(Old: Line Pay Money)、JKO Pay、Pi Wallet、Gama Pay、Easy Wallet',
          intro_zh: '一卡通Money(原: Line Pay Money)、街口支付、Pi拍錢包、橘子支付、悠遊付',
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
