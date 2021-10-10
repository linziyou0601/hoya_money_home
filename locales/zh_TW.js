export default {
  // -------------------- 首頁 --------------------
  home_page: '首頁',
  hoya_money: 'Hoya記帳',
  hoya_money_intro:
    'Hoya記帳是一款個人記帳軟體，介面美觀、輕鬆上手，期望能讓記帳變成你每天的日常，成為你的理財幫手！',
  download: '立即下載',

  features: '功能簡介',
  multi_account_and_multi_currency_title: '多帳戶及多種貨幣',
  multi_account_and_multi_currency_content:
    '．支援新增多種帳戶進行資產管理（現金、銀行、信用卡、電子票證……）\n．並且支援不同貨幣並能從網路更新匯率',
  multi_account_and_multi_currency_icon: ['fas', 'university'],
  project_and_budget_title: '專案及預算',
  project_and_budget_content:
    '．客製化的專案及預算設定功能，幫助你劃分不同的花費領域、還能檢視自己的資資產狀況！\n．設定預算提醒功能還能在記帳時提醒你即將超支！',
  project_and_budget_icon: ['fas', 'wallet'],
  dynamic_chart_title: '動態圖表',
  dynamic_chart_content:
    '．收支及餘額圖表分析簡單日常記帳花費\n．每月統計圖，花費分布圓餅圖及趨勢圖',
  dynamic_chart_icon: ['fas', 'chart-line'],
  periodic_event_title: '週期記帳',
  periodic_event_content:
    '．客製化的週期記帳，能以日、週、月、年和間隔頻率的記帳功能\n．檢視所有週期事件，方便管理自己的未來任務',
  periodic_event_icon: ['fas', 'redo-alt'],
  reminders_and_notifications_title: '提醒及通知',
  reminders_and_notifications_content:
    '．每日記帳提醒，讓記帳成為你的日常\n．繳款日提醒，設定好信用卡繳款日，不再錯過截止日！',
  reminders_and_notifications_icon: ['fas', 'bell'],
  backup_import_and_export_title: '備份、匯入及匯出',
  backup_import_and_export_content:
    '．連結Google帳號，即可備份、復原及匯出你的資料',
  backup_import_and_export_icon: ['fas', 'cloud-upload-alt'],
  other_functions_title: '其他功能',
  other_functions_content:
    '．明亮及深色主題功能\n．密碼鎖定功能\n．支援中文、英文',
  other_functions_icon: ['fas', 'braille'],

  snapshots: '實際擷圖',

  // -------------------- 教學文件 --------------------
  docs_page: '教學文件',
  // ----------//---------- 前言 ----------//----------
  docs_index_title: '前言',
  docs_index_why_develop_app_title: '動機',
  docs_index_why_develop_app_content:
    '我是Hoya記帳的開發者，同時也是Android手機的長期使用者，Google Play上的記帳軟體百家爭鳴，儘管在它們之中有功能強大的App、也有介面美觀、簡單易用的App，但總是魚與熊掌不可兼得，無法以單個軟體完全滿足需求。因此決定開發一個介面美觀、輕鬆上手，並整合常用的功能，讓記帳能成為日常的一款記帳軟體！',

  docs_prepare_sec: '事前準備',
  docs_prepare_sec_description:
    '如果您是初次踏入記帳行列的記帳新手，那麼建議您先閱讀說明文件，前完成事前準備後再開始記帳。若您是從其他記帳軟體轉移過來的，也不妨看看與自己原本使用的軟體有什麼差異吧！',

  // ----------//---------- 建立帳戶 ----------//----------
  docs_prepare_account_title: '建立帳戶',
  docs_prepare_account_preface_title: '記帳的第一步',
  docs_prepare_account_preface_content:
    '無論是每日記帳或是月記帳，目的都是為了追蹤各個帳戶的金錢流向及帳戶餘額，因此將自己擁有的各個帳戶進行清點、分類並建立帳戶清單是記帳的第一步。',
  docs_prepare_account_preface_alert:
    '有了帳戶清單後，也可以隨時檢視自己的資產與負債概況，可以更容易追蹤各個帳戶的使用情況！',

  docs_prepare_account_new_account_title: '新增帳戶',
  docs_prepare_account_new_account_content:
    '於個人總覽頁，點擊右上角「＋」號可以新增帳戶。',

  docs_prepare_account_group_title: '群組',
  docs_prepare_account_group_table_group_name: '群組名稱',
  docs_prepare_account_group_table_group_intro: '分類簡易說明',
  docs_prepare_account_group_content:
    '為了和現實中的帳戶類型相互對應，並且方便統整各個同樣類型帳戶之間的餘額，Hoya記帳提供了不同的帳戶群組讓使用者進行分類，以下為各帳戶類型的簡易說明：',
  docs_prepare_account_group_alert:
    '若使用行動支付（Apple Pay、Samsung Pay、Line Pay綁定信用卡、Taiwan Pay等）進行消費，因為實際上是依綁定的實體卡進行扣款，因此不須要另外建立行動支付帳戶，使用原本卡片的帳戶進行記帳即可。',

  docs_prepare_account_currency_title: '貨幣',
  docs_prepare_account_currency_content:
    '根據您的帳戶所使用的幣種進行設定，如果您的帳戶可以同時存放多種貨幣，請依不同貨幣建立不同帳戶進行管理。',

  docs_prepare_account_init_balance_title: '初始餘額',
  docs_prepare_account_init_balance_content:
    '在還沒有記帳資料前，將目前帳戶的餘額填寫上去，系統就會根據初始餘額和記帳資料計算出帳戶目前的餘額。如果您的帳戶餘額是負的，那麼請輸入負的數值。',

  docs_prepare_account_closing_date_title: '結帳日',
  docs_prepare_account_closing_date_content:
    '結帳日是帳戶每月結帳週期的最後一天，預設為每月的最後一天，您可以依照需要按信用卡結帳日進行設定，之後帳戶在統計週期性資料或年、月報表時就會依據結帳週期進行劃分。',
  docs_prepare_account_closing_date_alert:
    '結帳日的後一天即為下一個週期的啟始日，若您需要依照發薪日作為週期啟始日，可以將該帳戶的結帳日設為發薪日的前一天（例：每以月6號發薪水，可以將該帳戶的結帳日設為5號）。',

  docs_prepare_account_payment_due_title: '繳款日',
  docs_prepare_account_payment_due_content:
    '一般而言，繳款日為信用卡或待繳款帳戶當月的繳款截止日，當您設定繳款日後，系統會在每月繳款日的前一天提醒您隔天該繳款囉！',
  docs_prepare_account_payment_due_alert:
    '推播通知功能可能因裝置不同導致長時間關閉後沒有作用。',

  docs_prepare_account_countable_title: '計入總額',
  docs_prepare_account_countable_content:
    '如果不希望該帳戶的餘額計入個人總覽的總額統計內，可以隨時對計入總額欄位進行開啟或關閉。',

  docs_prepare_account_showable_title: '是否顯示',
  docs_prepare_account_showable_content:
    '可以隨時將帳戶設定為封存或顯示，以控制新增記帳記錄時帳戶選擇選單是否出現該帳戶。封存帳戶比較像是隱藏的概念，並不會刪除該帳戶的任何資料，您可以根據需要隨時調整設定。',
  docs_prepare_account_showable_alert:
    '如果有帳戶長時間使用不到、或是帳戶活動期間已過，建議可以以封存代替刪除帳戶，因為帳除帳戶會連帶刪除該帳戶相關的記帳資料，但是封存不會。',

  // ----------//---------- 建立分類 ----------//----------
  docs_prepare_type_title: '建立分類',
  docs_prepare_type_preface_title: '錢被花在哪裡？',
  docs_prepare_type_preface_content:
    '每一篳收入或支出都代表著一件特定的行為，因此針對不同的收支進行分類可以讓自己瞭解錢花在哪裡，而不是單純的收支流水帳！',
  docs_prepare_type_preface_alert:
    '分類沒有一定的模式，通常會以食、衣、住、行、育、樂等方向進行大分類，再依需求進行細分。',

  docs_prepare_type_manage_type_title: '管理類別',
  docs_prepare_type_manage_type_content:
    '於其他功能頁，點選「類別設定」進入類別管理頁面。',
  docs_prepare_type_manage_type_alert:
    '初次進入或類別為空時會詢問是否匯入預設的類別，以供您快速使用！您可以依照自己的需求新增缺少的部分並移除用不到的部分。',

  docs_prepare_type_subtype_title: '子類別',
  docs_prepare_type_subtype_content:
    '子類別可以將範圍較大的類別，針對不同的消費項目進行更細的劃分，讓您方便追蹤這些費用。可以不用一次新增完所有的類別，因為有可能要記帳一段時間後才會發現需要調整的地方，因此可以邊記邊調整所有的類別和子類別。',
  docs_prepare_type_subtype_alert:
    '當子類別被刪除時，並不會刪除與這個子類別相關的記帳資料，而是會將該筆資料的子類別設為無子分類。',

  docs_prepare_type_transfer_title: '轉移',
  docs_prepare_type_transfer_content:
    '除了收入、支出之外，「轉移」這個類別群組是負責諸如提款、儲值等「帳戶之間」的金額移動。',
  docs_prepare_type_transfer_alert:
    '您可以建立「應收款項」、「應付款項」帳戶，當他人向您借款或是您代付款項時，將金額從「您借出的帳戶」轉移到「應收款項」，此時「應收款項為正值」，並在收回款項時，反過來沖銷應收款項帳戶；當您向他人借款時，將金額從「應付款項」轉移到「您借入的帳戶」，此時「應付款項為負值」，並在償還時，反過來沖銷應付款項帳戶。如此一來，不僅可以處理應收、應付款項的資料，還能忠實表述資產與負債的餘額。',

  docs_prepare_type_merge_title: '合併類別',
  docs_prepare_type_merge_content:
    '記帳一段時間後，如果發現有些類別分類不佳或是用處不大，想要併入其他類別，只要點選合併鈕，並選擇欲合併的類別，及可將類別合併過去！',
  docs_prepare_type_merge_alert:
    '合併類別是不可逆的動作，請小心使用，或是在使用前先進行備份！',

  // ----------//---------- 建立專案及預算 ----------//----------
  docs_prepare_project_title: '建立專案及預算',
  docs_prepare_project_preface_title: '花費的目的',
  docs_prepare_project_preface_content:
    '除了針對消費行為進行分類之外，控管自己「為什麼要花這筆錢」也是很重要的一件事，設定好專案及預算，可以讓您將消費歸類到特定的目的，讓您知道每個月在不同情況下所花費的金額，方便您分配自己每個月的預算！',
  docs_prepare_project_preface_alert:
    '建議可以先建立一個「生活開銷」的專案用來紀錄每個月必要的花費，也可以再建立一個「額外開銷」專案，紀錄偶發性或不在計畫範圍內的花費',

  docs_prepare_project_add_project_title: '新增專案',
  docs_prepare_project_add_project_content:
    '於專案及預算頁，點擊右上角「＋」號可以新增專案。',

  docs_prepare_project_periodic_title: '週期類型',
  docs_prepare_project_periodic_content:
    '設定該專案的適用期間，若選擇為「每月」或「每年」，則會在固定日子開始新的週期進行計算。',
  docs_prepare_project_periodic_alert:
    '您可以將發薪日設為每月的起始日，讓薪水和開銷的週期一致。',

  docs_prepare_project_total_budget_title: '總預算及預算提醒',
  docs_prepare_project_total_budget_content:
    '設定該專案的適用期間內的預算上限，並在預算低於預算百分比時，發出警告，提醒您該注意了！',

  docs_prepare_project_daily_budget_title: '每日預算',
  docs_prepare_project_daily_budget_content:
    '當每日預算為「固定金額」時，每日預算會以「預算總額÷專案期間」得出每日固定的金額；當設定為「剩餘比例」時，會以「預算餘額÷專案餘額日數」得出每日還可用的金額。',

  docs_prepare_project_showable_title: '是否顯示',
  docs_prepare_project_showable_content:
    '可以隨時將專案設定為封存或顯示，以控制新增記帳記錄時專案選擇選單是否出現該專案。',

  docs_prepare_project_type_budget_title: '類別預算',
  docs_prepare_project_type_budget_content:
    '可以為每個類別設定預算，並查看該類別是否已超支。如果有為類別設定預算的話，當預算低於前面所設定的百分比時，一樣會發出警告！',

  // ----------//---------- 開始記帳 ----------//----------
  docs_starter_sec: '開始記帳',
  docs_starter_record_go: '前往',
  docs_starter_record_under_construction: '頁面建置中',
  docs_starter_record_title: '建立紀錄',
  docs_starter_record_preface_title: '開始第一筆紀錄',
  docs_starter_record_preface_content:
    '終於完成了事前準備的部分了嗎？在這一小節中，將介紹記帳紀錄中的各個欄位，讓您更瞭解如何使用！',

  docs_starter_record_add_record_title: '新增紀錄',
  docs_starter_record_add_record_content:
    '於首頁，點擊下方「＋」號可以新增紀錄。',
  docs_starter_record_add_record_alert:
    '如果您還沒完成帳戶及類別的設定，您會無法進行記帳，帳戶及類別設定請查看「事前準備」單元。',

  docs_starter_record_field_title: '紀錄欄位',
  docs_starter_record_field_content:
    '附圖是欄位的簡易介紹，下方將為您說明各個欄位的用途',

  docs_starter_record_group_title: '紀錄類型',
  docs_starter_record_group_content:
    '先選擇您要進行紀錄的類型，才能進行類別的選擇。支出代表金錢流出；收入代表金錢流入；轉移代表帳戶間的金錢轉移。',

  docs_starter_record_type_title: '類別及子類別',
  docs_starter_record_type_content:
    '選擇完紀錄類型後，會自動顯示出已設定好的類別，選擇合適的類別將這比紀錄進行分類。選擇主要類別後，會有子類別的選單供您選擇，也可以點擊子類別區域更改子類別！',
  docs_starter_record_type_alert:
    '若您還沒設定類別，或不知道類別是什麼，請見「事前準備」一章。',

  docs_starter_record_datetime_title: '日期與時間',
  docs_starter_record_datetime_content:
    '這筆紀錄的日期與時間，意即消費當下的日期。',

  docs_starter_record_project_title: '專案及預算',
  docs_starter_record_project_content:
    '選擇將該筆紀錄歸類在哪一個專案下，預設為無專案。',
  docs_starter_record_project_alert:
    '若您還沒設定專案，或不知道專案是什麼，請見「事前準備」一章。',

  docs_starter_record_periodic_title: '週期記帳',
  docs_starter_record_periodic_content:
    '設定該筆紀錄的週期，預設為一次，可按日、週、月、年等方式進行重複。',
  docs_starter_record_periodic_alert:
    '有關週期記帳的資料，請見「週期記帳」一節。',

  docs_starter_record_amount_title: '金額',
  docs_starter_record_amount_content:
    '這筆紀錄的金額（除非為減項帳目，否則無論是收入還是支出都輸入正值即可）',

  docs_starter_record_account_title: '帳戶',
  docs_starter_record_account_content:
    '選擇將該筆紀錄的帳戶（若為紀錄類型為支出，僅可選擇流出帳戶；若為收入，僅可擇選流入帳戶；若為轉移，則兩者都須選擇）',
  docs_starter_record_account_alert:
    '若您還沒設定帳戶，或不知道帳戶是什麼，請見「事前準備」一章。',

  docs_starter_record_currency_title: '貨幣及匯率',
  docs_starter_record_currency_content:
    '選擇將該筆紀錄的貨幣，當貨幣與所選擇的帳戶主幣別不同時，會出現匯率欄位供您輸入。',

  docs_starter_record_counted_in_budget_title: '計入預算',
  docs_starter_record_counted_in_budget_content:
    '如果不計入預算，一樣可以將該筆紀錄歸類到指定的專案，並在搜尋紀錄頁面進行找查，但是不會在專案及預算檢視的紀錄列表中。您可以依需求隨時設定這個欄位！',

  // -------------------- 隱私權政策 --------------------
  privacy_policy_page: '隱私權政策',
  policy_preface:
    '感謝您使用Hoya記帳！為了讓您能夠安心的使用本軟體及各項服務（以下簡稱為「服務」），特此向您說明本服務的隱私權政策，以讓您知道我們是如何收集、使用及處理您的個人資料，請您詳閱下列內容以保障您的權益：',
  policy_1_title: '一、隱私權政策的適用範圍',
  policy_1_content:
    '隱私權政策內容，包括本服務如何處理在您使用服務時收集到的個人識別資料。隱私權政策不適用於本服務以外的相關連結網站，也不適用於非本服務所委託或參與管理的人員。',
  policy_2_title: '二、個人資料的蒐集、處理及利用方式',
  policy_2_content_1:
    '當您造訪本服務或使用本服務所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本服務不會將個人資料用於其他用途。',
  policy_2_content_2:
    '本服務在您使用互動性功能（包括但不限於雲端備份、服務信箱、問卷調查）時，會保留您所提供的姓名、電子郵件地址、聯絡方式、附檔及使用時間等，並且會不定時清除這些資料。',
  policy_2_content_3:
    '本服務所使用之所有資料僅儲存在個人裝置（Android），並且非經您的允許，我們不會主動搜集您上傳、備份至Google雲端儲存空間之資料。',
  policy_2_content_4:
    '為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。',
  policy_3_title: '三、資料之保護',
  policy_3_content:
    '本服務所使用之所有資料僅儲存在個人裝置（Android），並且提供您上傳至Google雲端儲存空間的功能，以確保手機遺失、更換或不明原因之資料毀損時有復原的機會。',
  policy_4_title: '四、隱私權政策之修正',
  policy_4_content:
    '本服務隱私權政策將因應需求隨時進行修正，修正後的條款將刊登於網站及軟體上。本條款最近一次更新時間為：西元 2021 年 7 月 30 日。',
  policy_5_title: '五、聯繫我們',
  policy_5_content:
    '如果您對於隱私權政策有任何疑問或建議，請隨時來信至 support@linziyou.info 與我們聯繫。',

  // -------------------- 服務條款 --------------------
  terms_of_service_page: '服務條款',
  terms_of_service_preface:
    '感謝您使用Hoya記帳！為了讓您能夠安心的使用本服務開發者（以下簡稱為「我們」）所提供的軟體及各項服務（以下簡稱為「服務」），特此向您說明本服務的服務條款，當您使用本服務時，表示您已同意本條款。',
  terms_of_service_1_title: '一、智慧財產權',
  terms_of_service_1_content_1:
    '本服務內提供的任何資訊，包括但不限於本服務資訊內容、程式編碼、文字、美術作品、圖標、圖像及商標，均屬我們或其他有權之第三人所有，受到中華民國法律所保護。在未得到我們發出的事先書面許可前，您不得以任何方式就任何目的將本服務的內容或其任何部份進行重製、拷貝、出售、交易、轉售其內容或作任何商業目的之使用，並同意不會移除或變更本服務的內容中所包含的任何防盜拷措施，或其它權利保護措施（包括且不限於專利權、商標權）或標記。您亦不得使用任何自動工具或方式（包括但不限於惡意軟體、爬蟲等方式）收集或破壞本服務之訊息、資料以及干擾、侵犯本服務的正常運作。惟您可將本服務之資訊內容，在基於非商業性、家居及個人使用的目的範圍內，自行利用，但仍應確保我們之智慧財產權不受第三人之侵害。',
  terms_of_service_1_content_2:
    '我們僅授權您使用本服務，而並非將本服務所提供的內容、文字檔及任何編碼的智慧財產權移轉給您。為免存疑，一切我們沒有在本條款中明確授予您的權利，均由我們所保留。',
  terms_of_service_2_title: '二、應用程式內購買與退款',
  terms_of_service_2_content_1:
    '本服務之相關金流皆由 Google 公司之 Google Play 服務負責。如果您同意 Google Play 服務之購買，即代表您個人同意使用該項服務進行消費，並遵守您個人與該服務商間消費機制設定與協議，我們不涉及您雙方之間的付款關係及與其有關的權利義務。',
  terms_of_service_2_content_2:
    '本服務提供之應用程式內購買或訂閱服務屬非以有形媒介提供之數位內容或一經提供即為完成之線上服務，經消費者事先同意始提供，依據行政院消費者保護處公告實施之「通訊交易解除權合理例外情事」，已排除消保法七日猶豫期無條件解除（七天鑑賞期）之適用。',
  terms_of_service_2_content_3:
    '如果您透過 Google Play 服務購買，請您參考並遵循該服務商之退款政策辦理，原則上消費者在購買後未滿 48 小時內可以透過 Google Play 申請退款。',
  terms_of_service_2_content_4:
    '您可以透過 Google Play 在訂閱期間隨時取消本服務，當期計費週期結束時即可完成取消訂閱。如果您在付款日的前一天或者付款日當天取消本服務，取消作業之手續將於下一個計費週期結束時完成。取消訂閱服務後，你仍可在已付費服務剩下的有效天數內使用本服務。取消訂閱並無法溯及既往退回訂閱費用，之前扣除的訂閱費用也無法根據取消日期按比例退回。惟刪除這個 App 並不會導致訂閱服務遭到取消，請確保有照上述流程取消訂閱。',
  terms_of_service_3_title: '三、免責聲明',
  terms_of_service_3_content_1:
    '在準備、蒐集本服務所提供資料的過程中，我們已經盡最大可能採取謹慎的態度，但還是提醒您，除可歸責於我們之情形外，我們不會因任何資料的錯誤或遺漏或因您信賴本服務或其介面上之說明而對提供資料所造成的損害承擔契約責任。',
  terms_of_service_3_content_2:
    '我們不對您的個人記帳資料負擔損害賠償責任，請您務必自行定期做好資料備份動作。',
  terms_of_service_3_content_3:
    '本服務就各項服務，不負任何之擔保責任。本服務不保證各項服務不中斷，您同意承擔使用本服務之所有風險及可能發生之任何損害。',
  terms_of_service_4_title: '四、服務條款之修正',
  terms_of_service_4_content:
    '本服務條款將因應需求隨時進行修正，修正後的條款將刊登於網站及軟體上。本條款最近一次更新時間為：西元 2021 年 7 月 30 日。',
  terms_of_service_5_title: '五、聯繫我們',
  terms_of_service_5_content:
    '如果您對於服務條款有任何疑問或建議，請隨時來信至 support@linziyou.info 與我們聯繫。',
}
