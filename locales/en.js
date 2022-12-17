export default {
  docs_go: 'Go',
  docs_under_construction: 'Page Not Ready',
  announcement: 'Announcement',

  // -------------------- 首頁 --------------------
  home_page: 'Home',
  hoya_money: 'Hoya Money',
  hoya_money_intro:
    'Hoya Money is a personal revenue & expense tracking software with a beautiful interface and easy to use. It is hoped that tracking money can become your daily and become your financial helper!',
  download: 'Download Now',

  features: 'Features',
  taiwan_invoice_title: 'Taiwan E-Invoice',
  taiwan_invoice_content:
    '．Support scanning invoices and synchronizing mobile barcode invoices\n．Allow linking of invoices and money records',
  taiwan_invoice_icon: ['fas', 'receipt'],
  multi_account_and_multi_currency_title:
    'Support multi-account and multi-currency',
  multi_account_and_multi_currency_content:
    '．Support for adding multiple accounts for asset management (cash, bank, credit card, e-payment, and so on)\n．And supports different currencies and can update the exchange rate from the Internet',
  multi_account_and_multi_currency_icon: ['fas', 'building-columns'],
  project_and_budget_title: 'Project and budget',
  project_and_budget_content:
    '．Customized project and budget setting feature help you divide different spending areas and view your own asset status!\n．The budget reminder function can also remind you that you are about to overspend when you are add record!',
  project_and_budget_icon: ['fas', 'wallet'],
  dynamic_chart_title: 'Dynamic chart',
  dynamic_chart_content:
    '．Analysis of revenue, expense and balance chart, simple analyzing daily money flow\n．Monthly statistics chart, pie chart and line chart of revenue and expense distribution',
  dynamic_chart_icon: ['fas', 'chart-line'],
  periodic_event_title: 'Periodic event',
  periodic_event_content:
    '．Customized periodic event, with daily, weekly, monthly, annual and interval frequency functions\n．View all periodic events to facilitate management of your future tasks',
  periodic_event_icon: ['fas', 'rotate-right'],
  reminders_and_notifications_title: 'Reminders and notifications',
  reminders_and_notifications_content:
    '．Daily reminders make tracking money your daily routine\n．Reminder of payment due day, set a credit card payment due day, no longer miss the deadline!',
  reminders_and_notifications_icon: ['fas', 'bell'],
  backup_import_and_export_title: 'Backup, import and export',
  backup_import_and_export_content:
    '．Link your Google account to back up, restore and export your data',
  backup_import_and_export_icon: ['fas', 'cloud-arrow-up'],
  other_functions_title: 'Other functions',
  other_functions_content:
    '．Light and Dark theme\n．Password lock\n．Support Chinese and English',
  other_functions_icon: ['fas', 'braille'],

  snapshots: 'Snapshots',

  // -------------------- 教學文件 --------------------
  docs_page: 'Features',
  // ----------//---------- 前言 ----------//----------
  docs_index_title: 'Preface',
  docs_index_why_develop_app_title: 'Motivation',
  docs_index_why_develop_app_content:
    'I am the developer of Hoya Money and a long-term user of Android phones. There are a lot of tracking money apps on Google Play. Although there are powerful apps, there are also beautiful and easy-to-use apps, but you cannot have the cake and eat it too. A single software cannot fully satisfy the demand. Therefore, I decided to develop an app which have beautiful interface, easy to use, and integrate commonly used functions, so that tracking money can become your daily!',

  docs_prepare_sec: 'Getting Ready',
  docs_prepare_sec_description:
    'If you are using money tracking app for the first time, it is recommended that you read the documentation first and complete the preparation before you start recording. If you are transferring from other app, you might as well take a look at the difference with the app you originally used!',

  // ----------//---------- 版本 ----------//----------
  docs_version_title: 'Version',
  docs_version_released_on: 'Released on',
  docs_version_last_updated_on: 'Last Patched on',

  // ----------//---------- 建立帳戶 ----------//----------
  docs_prepare_account_title: 'Create Account',
  docs_prepare_account_preface_title: 'The First Step',
  docs_prepare_account_preface_content:
    'Whether it is daily or monthly tracking, the purpose is to track the money flow and account balance of each account. Therefore, counting, categorizing and creating an account list is the first step in tracking money.',
  docs_prepare_account_preface_alert:
    'Once you have the account list, you can also check your own assets and liabilities profile at any time, making it easier to track the usage of each account!',

  docs_prepare_account_new_account_title: 'Add an Account',
  docs_prepare_account_new_account_content:
    'On the Personal Overview page, click the "＋" sign in the corner to add an account.',

  docs_prepare_account_group_title: 'Group',
  docs_prepare_account_group_table_group_name: 'Group Name',
  docs_prepare_account_group_table_group_intro: 'Brief Description',
  docs_prepare_account_group_content:
    'In order to correspond to the actual account types and to facilitate the integration of the balances between accounts of the same type, Hoya Money provides different kinds of group for users to classify. The following is a brief description of each account type:',
  docs_prepare_account_group_alert:
    'If you use mobile payment (such as Apple Pay, Samsung Pay, Line Pay with a credit card, Taiwan Pay, etc.) for consumption, because the payment is actually based on the physical card you bound, there is no need to create another account, just using the original account of the card can be billed.',

  docs_prepare_account_currency_title: 'Currency',
  docs_prepare_account_currency_content:
    'Set according to the currency used by your account. If your account can have multiple currencies, please create different accounts for different currencies for management.',

  docs_prepare_account_init_balance_title: 'Initial Balance',
  docs_prepare_account_init_balance_content:
    'Before you have tracking money data, fill in the current account balance, and the system will calculate the current balance of the account based on the initial balance and money records. If your account balance is negative, please just enter a negative value.',

  docs_prepare_account_closing_date_title: 'Bill Closing Date',
  docs_prepare_account_closing_date_content:
    'The Bill Closing Date is the last day of the account’s monthly cycle. The system default value is the last day of each month. You can set it according to the credit card bill closing date according to your needs. After that, the account will be used for periodic statistics or annual and monthly reports. Divide according to the bill cycle.',
  docs_prepare_account_closing_date_alert:
    'The day after the bill closing date is the start day of the next cycle. If you need to use the payday of salary as the start day of the cycle, you can set the account’s bill closing date as the day before the payday (e.g. Salary paid on the 6th, you can set the bill closing date to the 5th).',

  docs_prepare_account_payment_due_title: 'Payment Due Date',
  docs_prepare_account_payment_due_content:
    'Generally, the Payment Due Date is the deadline to payment day of the current month for the credit card or the account need to be paid. After you set the payment due date, the system will remind you the day before the monthly payment due day that you need to pay on the next day!',
  docs_prepare_account_payment_due_alert:
    'Notification function may not work after being closed for a long time due to different devices.',

  docs_prepare_account_countable_title: 'Counted in the total',
  docs_prepare_account_countable_content:
    'If you do not want the balance of the account to be included in the total balance of the personal overview, you can turn on or off the field at any time.',

  docs_prepare_account_showable_title: 'To be Shown',
  docs_prepare_account_showable_content:
    'You can set the account to be archived or displayed at any time to control whether the account appears in the account selection menu when you create money record. Archiving an account is more like a hidden concept, and will not delete any data of the account. You can adjust the settings as needed at any time.',
  docs_prepare_account_showable_alert:
    'If there is an account that is not used for a long time or the account activity period has passed, it is recommended to set the account to be archived instead of deleting the account, because the related money records will be deleted when you delete an account, but the archive will not.',

  // ----------//---------- 建立分類 ----------//----------
  docs_prepare_category_title: 'Create Category',
  docs_prepare_category_preface_title: 'Where is the money spent?',
  docs_prepare_category_preface_content:
    'Each revenue or expense represents a specific behavior, so classifying different revenue or expense can help you understand where the money is spent, rather than just a revenue or expense!',
  docs_prepare_category_preface_alert:
    'There is no certain model for classification. Generally, it is classified in the directions of Food, Clothing, Housing, Transportation, Education, and Entertainment, and then subdivided according to needs.',

  docs_prepare_category_manage_category_title: 'Category Management',
  docs_prepare_category_manage_category_content:
    'On the Others page, click "Categories" to enter the Category Management page.',
  docs_prepare_category_manage_category_alert:
    'When you enter for the first time or the categories is empty, you will be asked whether to import the default categories for your quick use! You can add missing parts and remove unused parts according to your needs.',

  docs_prepare_category_subcategory_title: 'Sub-Categories',
  docs_prepare_category_subcategory_content:
    'Sub-categories can divide a larger range of categories into more detailed categories for different expenses’ behavior, making it easier for you to track these expenses. You don’t need to add all the categories at once, because it may take a period of time before you find the places that need to be adjusted, so you can adjust all the categories and sub-categories while recording your money records.',
  docs_prepare_category_subcategory_alert:
    'When a sub-category is deleted, the money record data related to this sub-category will not be deleted, but the sub-category of these data will be set as "No Sub-Category."',

  docs_prepare_category_transfer_title: 'Transfer',
  docs_prepare_category_transfer_content:
    'In addition to Revenue and Expense, the "Transfer" category group is responsible for the movement of amounts "Between Accounts" such as withdrawals and deposit.',
  docs_prepare_category_transfer_alert:
    'You can create accounts "Receivable" and "Payable". When someone else borrows from you or pays on your behalf, transfer the amount from "The Account You Lent" to "The Account Receivable". amount of receivable is "POSITIVE", and when the amount is back to you, the Account Receivable is reversed; when you borrow from others, the amount is transferred from "The Account Payable" to "The Account You Borrowed". amount of Payables are "NEGATIVE", and when repaying, the Account Payable will be reversed. In this way, not only can you process the information of receivables and payables, but also faithfully represent the balance of assets and liabilities.',

  docs_prepare_category_merge_title: 'Merge Category',
  docs_prepare_category_merge_content:
    'After recording for a period of time, if you find that some categories are not well classified or useful, and you want to merge into other categories, just click the merge button, and select the category you want to merge, and you can merge the categories!',
  docs_prepare_category_merge_alert:
    'Merging categories is an IRREVERSIBLE action, please use it carefully, or make a backup before using it!',

  // ----------//---------- 建立專案及預算 ----------//----------
  docs_prepare_project_title: 'Create Project & Budget',
  docs_prepare_project_preface_title: 'Intention to spend',
  docs_prepare_project_preface_content:
    'In addition to classifying spending behaviors, it is also important to control that "Why you spend this money". Setting a good project and budget allows you to categorize your spending into specific purposes and let you know every The amount of money spent in different situations in a month is convenient for you to allocate your monthly budget!',
  docs_prepare_project_preface_alert:
    'It is recommended to create a "Cost of Living" project to record the necessary expenses each month, and also to create an "Extra Expenses" project to record sporadic or out-of-plan expenses',

  docs_prepare_project_add_project_title: 'Add a Project',
  docs_prepare_project_add_project_content:
    'On the Project & Budget page, click the "＋" sign in the corner to add a project.',

  docs_prepare_project_periodic_title: 'Periodic Type',
  docs_prepare_project_periodic_content:
    'Set the applicable period of the project. If you select "Monthly" or "Yearly", a next new cycle will be calculated on a fixed day.',
  docs_prepare_project_periodic_alert:
    'You can also set the salary payday as the starting day of each month to make the salary and expense cycle consistent.',

  docs_prepare_project_total_budget_title: 'Total Budget and Balance Alert',
  docs_prepare_project_total_budget_content:
    'Set the total budget during the applicable period of the project, and issue a warning when the budget is lower than the balance percentage to remind you that it is time to pay attention!',

  docs_prepare_project_daily_budget_title: 'Daily Budget',
  docs_prepare_project_daily_budget_content:
    'When the daily budget is "Fixed Avg.", the daily budget will be calculated as "Total Budget ÷ Project Period" to get a fixed daily amount; when it is set to "Rest Ratio", it will be calculated as "Budget Balance ÷ Project Remaining Days" to get the amount that is still available every day.',

  docs_prepare_project_showable_title: 'To be Shown',
  docs_prepare_project_showable_content:
    'You can set the project to be archived or displayed at any time to control whether the project appears in the project selection menu when you create money record.',

  docs_prepare_project_type_budget_title: 'Type Budgets',
  docs_prepare_project_type_budget_content:
    'You can set a budget for each category and see if the category has overspend. If there is a budget for the category, when the budget is lower than the balance percentage set earlier, a warning will also be issued!',

  // ----------//---------- 建立紀錄 ----------//----------
  docs_starter_sec: 'Starter',

  docs_starter_record_title: 'Create Record',
  docs_starter_record_preface_title: 'Start Your First Record',
  docs_starter_record_preface_content:
    'Have you finally completed the Getting Ready part? In this section, we will introduce each field in the money record, so that you can better understand how to use it!',

  docs_starter_record_add_record_title: 'Add a Record',
  docs_starter_record_add_record_content:
    'On the Homepage, click the "＋" sign below to add a record.',
  docs_starter_record_add_record_alert:
    'If you have not completed the account and category settings, you will not be able to add a record. For account and category settings, please refer to the "Getting Ready" section.',

  docs_starter_record_field_title: 'Record Fields',
  docs_starter_record_field_content:
    'The attached picture is a brief introduction of the fields, the following will explain the purpose of each field for you',

  docs_starter_record_group_title: 'Record Type',
  docs_starter_record_group_content:
    'First select the type of record you want to record before you can select the category. Expense represents money outflow; Revenue represents money inflow; Transfer represents money transfer between accounts.',

  docs_starter_record_category_title: 'Category & Sub-Category',
  docs_starter_record_category_content:
    'After selecting the record type, the set of categories will be automatically displayed. Choose the appropriate category to classify the records. After selecting the main category, there will be a sub-category menu for you to choose, or you can click the sub-type area to change the sub-category!',
  docs_starter_record_category_alert:
    'If you haven’t set the Category yet, or don’t know what the Category is, please see the chapter "Getting Ready".',

  docs_starter_record_amount_title: 'Amount',
  docs_starter_record_amount_content:
    'The amount of this record (unless it is a deduction value, enter a positive value for both revenue and expense record type)',

  docs_starter_record_account_title: 'Account',
  docs_starter_record_account_content:
    'Select the account for the record (if the record type is expense, only the outflow account can be selected; if it is revenue, only the inflow account can be selected; if it is a transfer, both must be selected)',
  docs_starter_record_account_alert:
    'If you haven’t set the Account yet, or don’t know what the Account is, please see the chapter "Getting Ready".',

  docs_starter_record_currency_title: 'Currency & Exchange Rate',
  docs_starter_record_currency_content:
    'Select the currency of the record. When the currency is different from the selected account currency, the exchange rate field will appear for you to enter.',

  docs_starter_record_counted_in_budget_title: 'Counted in Budget',
  docs_starter_record_counted_in_budget_content:
    'If it is not included in the budget, the record can also be classified into a designated project and searched on the search record page, but it will not be included in the record list of the project and budget view page. You can set this field at any time according to your needs!',

  docs_starter_record_project_title: 'Project & Budget',
  docs_starter_record_project_content:
    'Select the project in which the record is classified, and the default is No Project.',
  docs_starter_record_project_alert:
    'If you haven’t set the Project yet, or don’t know what the Project is, please see the chapter "Getting Ready".',

  docs_starter_record_multi_record_title: 'Multi-Categories',
  docs_starter_record_multi_record_content:
    'If in a transaction record, the same category cannot clearly cover the entire transaction, or if additional fees are incurred during transfer, you can add multiple sub-records in the same transaction to fit the situation. Except for Date, Time, Periodic, Comment and Taiwan E-Invoice, other fields of sub-record can be edited freely.',

  docs_starter_record_datetime_title: 'Date & Time',
  docs_starter_record_datetime_content: 'The date and time of this record.',

  docs_starter_record_periodic_title: 'Periodic Setting',
  docs_starter_record_periodic_content:
    'Set the period of this record, the default is Once, and it can be repeated in the manner of Dayly, Weekly, Monthly, Yearly, etc.',
  docs_starter_record_periodic_alert:
    'For information on Periodic Setting, please see the section "Periodic Setting".',

  docs_starter_record_invoice_title: 'Taiwan E-Invoice',
  docs_starter_record_invoice_content:
    'The e-invoice associated with the transaction can be easily viewed, or the transaction can be created directly with the invoice.',
  docs_starter_record_invoice_alert:
    'For information on Taiwan E-Invoice, please see the section "Invoice".',

  // ----------//---------- 週期紀錄 ----------//----------
  docs_starter_periodic_record_alert:
    'If you don’t know what the Transaction Record is, please see the section "Create Record".',

  docs_starter_periodic_title: 'Periodic Setting',
  docs_starter_periodic_preface_title: 'Recurring Transactions',
  docs_starter_periodic_preface_content:
    'Sometimes there will be transactions that recur in a fixed period, such as rent-fee, salary, telephone bills, subscription services, etc. At this time, you do not need record one by one, you can create a periodic transaction, and realize the record at the corresponding time.',

  docs_starter_periodic_setting_title: 'Settings',
  docs_starter_periodic_setting_content:
    'When creating or editing transaction records, you can set the periodic of the transaction. The default is Once, and it can be repeated in the manner of Dayly, Weekly, Monthly, Yearly, etc.',

  docs_starter_periodic_realize_title: 'Realize Record',
  docs_starter_periodic_realize_content:
    'If there is a periodic transaction, it will be displayed on the record page at the corresponding time. Click the unrealized record to view the information and choose whether to realize it.',

  docs_starter_periodic_list_title: 'Manage Periodics',
  docs_starter_periodic_list_content:
    'On the Others page, click "Periodic Events" to enter the Periodic events page, and you can view the detailed information of the periodic event, or delete the periodic event.',

  // ----------//---------- 圖表 ----------//----------
  docs_starter_chart_title: 'Charts',
  docs_starter_chart_preface_title: 'Tracking spending habits',
  docs_starter_chart_preface_content:
    'After recording for a certain period of time, you can use charts and statistic data to view your spending habits and revenue and expense within a certain period of time, you can effectively manage your finances and analyze your money-used behavior!',

  docs_starter_chart_main_title: 'Chart and Statistic Data',
  docs_starter_chart_main_content:
    'By default, you can view the Overview, Details, Expense and Revenue data on a monthly basis on the Chart page.',

  docs_starter_chart_condition_title: 'Chart Condition',
  docs_starter_chart_condition_content:
    'You can add your own preferred chart conditions on the page to filter the data you want to view.',

  docs_starter_invoice_txn_connection_title: 'Connected Invoice',
  docs_starter_invoice_txn_connection_content:
    'After connecting the invoice, you can check the invoice on the connected transaction record.',

  // ----------//---------- 電子發票 ----------//----------
  docs_starter_invoice_title: 'Taiwan E-Invoice',
  docs_starter_invoice_preface_content:
    "This function is the support for Taiwan's electronic invoices. It can scan invoices and synchronize mobile barcode invoices. And it allowed linking of invoices and money records",

  docs_starter_invoice_main_title: 'Invoice Management',
  docs_starter_invoice_main_content:
    'Click the Invoice button on the home page to enter the Invoice Management page, where you can view invoices, connect to the transaction and other actions',

  // -------------------- 隱私權政策 --------------------
  privacy_policy_page: 'Privacy Policy',
  policy_preface:
    'Thank you for using Hoya Money! These Privacy Policy apply to the use of the software and various services (hereinafter also referred as “this service”). Please read the following carefully to protect your rights:',
  policy_1_title: '1. Applicable scope of this statement',
  policy_1_content:
    'The content of this statement including how this service handles the personal identification data collected when you use the service. The privacy policy and personal data protection statement apply to the region of Republic of China (Taiwan) and within the scope of this service; it does not apply to related linked websites other than this service, nor does it apply to persons who are not entrusted or participate in the management of this service.',
  policy_2_title: '2. Purpose of personal data collection',
  policy_2_content:
    'The following codes refer to the “The specific purpose and the classification of personal information of the Personal Information Protection Act” announced by the Ministry of Justice. If the codes and project names are subsequently changed by the Ministry of Justice’s announcement, they will also be changed accordingly: “040 Marketing (including financial cross-selling business)”, “081 Legal transaction business for personal data”, “090 Consumer, Customer Management and Service”, “135 Information (Communication) Services”, “136 Information (Communication) and database Management”, “148 Internet shopping and other electronic commerce services” , “157 Investigation, statistics and research analysis”.',
  policy_3_title: '3. Classification of Personal Data Collection',
  policy_3_content_1:
    'Code 001 Type for identifying individuals. For example: Name, internet web signing up account, photograph, the E-mail address, record providing internet identity authentication or applying inquiry service record as well as any other data which can identify the individual.',
  policy_3_content_2:
    'Code 036 Lifestyles. For example: The types and details of consumer goods and services, personal or family consumption patterns, etc.',
  policy_3_content_3:
    'Code 093 Financial deals. For example: The amount paid, the way to pay or record of dealing, etc.',
  policy_4_title: '4. Collection, processing and using of personal data',
  policy_4_content_1:
    'The collection period of personal data is from the date when you use the various functions provided by this service to the date when you apply for cessation; or the expiry date of use disclosed in the various activities of this service. However, if the laws and regulations provide otherwise, the provisions shall follow.',
  policy_4_content_2:
    'When you use the App, Website, or Various Activities of this service, we will depending on the nature of the service function, ask you to provide the necessary personal data, and process and use your personal data within the scope of the specific purpose; Without your written consent, this service will not use personal data for other purposes, and this service will not and cannot share your do not yet have unseparated and encrypted personal data with any third party for any purpose.',
  policy_4_content_3:
    'When you use the interactive functions of this service (including but not limited to cloud backup, service mailbox, questionnaire survey), the service will retain the name, email address, contact information, attachments, and time of use provided by you, and will vary from time to time Clear these data.',
  policy_4_content_4:
    'In order to evaluate and monitor the network traffic of each page to ensure uninterrupted service, provide accurate service and provide a better user experience, this service may automatically collect your App or Browser’s “IP address, URL, click history, usage device, advertising identification code, tracking code or login information” in a de-identified manner through the services provided by Google or related service providers, and use it for data statistics and research.',
  policy_4_content_5:
    'You fully understand that when you use the Taiwan electronic invoice-related functions provided in this service, it means that you authorize this service to access the information provided by the Ministry of Finance’s electronic invoice application API according to the login information (including but not limited to mobile barcode, verification code, invoice number and related infomation) provided by you; And you also agree that this service can store the information and connection track records in the server of this service, so as to reduce the frequency of accessing the electronic invoice application API of the Ministry of Finance, and avoid the interruption of the connection between this service and the electronic invoice platform of the Ministry of Finance due to network traffic overload. You may request to delete the records kept in this service at any time in accordance with the “Personal Data Protection Act” and “The Fifth Statement of the Privacy Policy” of this service.',
  policy_5_title: '5. Rights of data subject',
  policy_5_content_1:
    'In accordance with the “Personal Data Protection Act” and related laws and regulations, this service is able to allow data subject exercise the following rights with regard to his/her personal data: “make an inquiry of and to review his/her personal data”, “request a copy of his/her personal data”, “supplement or correct his/her personal data”, “demand the cessation of the collection, processing or use of his/her personal data”; and “erase his/her personal data”.',
  policy_5_content_2:
    'You are free to choose whether to provide your personal information, but if you refuse to provide relevant personal information, some functions of this service will not be able to perform necessary processing operations, resulting in failure to provide relevant services.',
  policy_5_content_3:
    'If the personal data you request to inquire, review or make a personal copy is the data provided by third-party services (such as: Google-related services), because it is not kept by this service, or this service can only obtain de-identified anonymous statistical data, so this service cannot provide this data to you. You also may not request that your data be deleted from the parent body of the de-identified analysis data.',
  policy_5_content_4:
    'You can also write to the service mailbox support@linziyou.info at any time to request this service to stop collecting, processing and using your personal data. If there is a contractual relationship or a disputed event or other requirements of the competent authority or regulations, this service may refuse the request, or terminate the contractual relationship with you while agreeing to the request. After confirming your identity, this service will perform the above obligations within the statutory period according to your application. If you entrust someone else to apply on your behalf, you should also provide a verifiable identity certificate for verification.',
  policy_6_title: '6. Protection of personal data',
  policy_6_content_1:
    'All money record data for this service is only stored on personal devices (Android), and without your permission, we will not actively collect the data you upload and back up to Google cloud storage; but provides you with the function of uploading to personal Google cloud storage to ensure that your have a chance of recovery in the event of loss, replacement or unexplained data damage.',
  policy_6_content_2:
    'When the user logs in to the Google account through this service to access the backup data in the Google Drive, the app only needs to call the API provided by Google for login verification. The verification process is carried out on the relevant Google platform, and this service will not store his/her login information and personal information.',
  policy_6_content_3:
    'If it is necessary to entrust other units to provide services due to business needs, this service will also strictly require them to abide by their confidentiality obligations, and take necessary inspection procedures to ensure that they will actually comply.',
  policy_6_content_4:
    'This service adopts appropriate personal data protection measures, and the authority to process or use personal data is only open to those who need it (need-to-know basis).',
  policy_7_title: '7. Amendment of this statement',
  policy_7_content:
    'The statement of this service will be revised at any time in response to needs, and the revised terms will be published on the website and software. This statement was last updated: December 10, 2022',
  policy_8_title: '8. Contact us',
  policy_8_content:
    'If you have any questions or suggestions about the privacy policy or personal data protection statement, please feel free to contact us at “support@linziyou.info”.',

  // -------------------- 服務條款 --------------------
  terms_of_service_page: 'Terms of Serivce',
  terms_of_service_preface:
    'Thank you for using Hoya Money! These Privacy Policy apply to the use of the software and various services (hereinafter also referred as “this service”) provided by the service developer (hereinafter also referred as “we”, “us” or “our”). When you use this service, it means that you have agreed to these terms.',
  terms_of_service_1_title: '1. Intellectual property rights',
  terms_of_service_1_content_1:
    'Any information provided in this service, including but not limited to the content of the service information, programming codes, text, artwork, icons, images, and trademarks, belongs to us or other third parties with rights and is protected by the laws of the Republic of China (Taiwan). You may not reproduce, copy, sell, trade, resell the content of this service or any part of it for any purpose in any way without obtaining our prior written permission. And agree not to remove or change any anti-copy measures, or other rights protection measures (including but not limited to patent rights, trademark rights) or marks contained in the content of this service. You also must not use any automatic tools or methods (including but not limited to malicious software, crawlers) to collect or destroy the information and data of this service, or interfere with or infringe the normal operation of the service. However, you can use the information content of this service on your own within the scope of non-commercial, household and personal use, but you should still ensure that our intellectual property rights are not infringed by third parties.',
  terms_of_service_1_content_2:
    'We only authorize you to use this service, and do not transfer the content, text files, and any encoded intellectual property rights provided by this service to you. For the avoidance of doubt, all rights that we did not expressly grant you in this clause are reserved by us.',
  terms_of_service_2_title: '2. In-app purchases and refunds',
  terms_of_service_2_content_1:
    'The related transactions of this service is handled by Google Play Service of Google Inc. If you agree to the purchase from Google Play Service, it means that you personally agree to use the service for consumption, and to comply with the personal consumption mechanism settings and agreements between you and the service provider. We do not involve the payment relationship between you and the service provider and related rights and obligations.',
  terms_of_service_2_content_2:
    'The in-app purchases or subscription services provided by this service are digital content that is the supply of digital content which is not supplied on a tangible medium, or online services which would be fully performed once begun, with the consumer’s prior consent. Pursuant to the “The Regulations on Reasonable Matters as Exceptions to Rescind the Distance Sales” announced by the Consumer Protection Committee of the Executive Yuan, the application of the unconditional cancellation of the seven-day hesitation period of the Consumer Protection Act has been excluded.',
  terms_of_service_2_content_3:
    'If you purchase through Google Play Service, please refer to and follow the refund policy of the service provider. In principle, consumers can apply for a refund through Google Play within 48 hours after purchase.',
  terms_of_service_2_content_4:
    'You can cancel this service at any time during the subscription period through Google Play, and you can cancel the subscription at the end of the current billing cycle. If you cancel this service on the day before or on the day of payment day, the handling fee of procedure for canceling the subscription will be completed at the end of the next billing cycle. After canceling the subscription service, you can still use the service during the remaining valid days of the paid service. Cancellation of the subscription cannot retroactively refund the subscription fee, and the previously deducted subscription fee cannot be refunded in proportion to the cancellation date. However, deleting this App will not cause the subscription service to be cancelled. Please make sure to cancel the subscription according to the above process.',
  terms_of_service_3_title: '3. Disclaimer',
  terms_of_service_3_content_1:
    'In the process of preparing and collecting the information provided by this service, we have tried our best to adopt a cautious attitude, but we still remind you that Except for the circumstances attributable to us, we will not bear contractual liability for the damage caused by the provision of information due to any errors or omissions in the information or due to your reliance on the service or the instructions on the interface.',
  terms_of_service_3_content_2:
    'We will not be liable for damages to your personal money record data. Please be sure to back up your data regularly.',
  terms_of_service_3_content_3:
    'This service does not bear any guarantee responsibility for each service. This service does not guarantee that the services will not be interrupted, and you agree to bear all the risks of using this service and any damage that may occur.',
  terms_of_service_4_title: '4. The rights you authorize to this service',
  terms_of_service_4_content_1:
    'You fully understand that when you use the Taiwan electronic invoice-related functions provided in this service, it means that you authorize this service to access the information provided by the Ministry of Finance’s electronic invoice application API according to the login information (including but not limited to mobile barcode, verification code, invoice number and related infomation) provided by you; And you also agree that this service can store the information and connection track records in the server of this service, so as to reduce the frequency of accessing the electronic invoice application API of the Ministry of Finance, and avoid the interruption of the connection between this service and the electronic invoice platform of the Ministry of Finance due to network traffic overload. You may request to delete the records kept in this service at any time in accordance with the “Personal Data Protection Act” and “The Fifth Statement of the Privacy Policy” of this service.',
  terms_of_service_4_content_2:
    'As your legally authorized agent, this service obtains your invoice information through the Ministry of Finance’s electronic invoice application API to download the invoice information and details to your personal money record data, but is not responsible for the correctness of the accessed content. The responsibility for the guarantee, the correctness of the content shall be the responsibility of the electronic invoice platform of the Ministry of Finance and third-party manufacturers.',
  terms_of_service_4_content_3:
    'If the API service of the Ministry of Finance’s electronic invoice application is interrupted or the data is unavailable due to the network traffic overload, the content provided by this service may not be instant, final and valid.',
  terms_of_service_5_title: '5. Amendment of this terms of this service',
  terms_of_service_5_content:
    'The terms of this service of this service will be revised at any time in response to needs, and the revised terms will be published on the website and software. This statement was last updated: December 10, 2022',
  terms_of_service_6_title: '6. Contact us',
  terms_of_service_6_content:
    'If you have any questions or suggestions about the terms of service, please feel free to contact us at “support@linziyou.info”.',
}
