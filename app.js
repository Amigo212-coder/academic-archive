/* ============================================================
   app.js — المنطق الكامل للأرشيف الأكاديمي الرقمي
   ============================================================ */

/* ============================================================
   1. الترجمات الكاملة
   ============================================================ */
const I18N = {
    ar: {
        appTitle:"الأرشيف الأكاديمي الرقمي والمكتبة الشاملة",
        greeting:"مساحتك المخصصة لكل مواد التربوي والتخصص",
        greetingMorning:"☀️ صباح الخير والنشاط! مستعد لإنجاز جديد اليوم؟",
        greetingAfternoon:"☕ مساء الخير! وقت رائع لترتيب أفكارك ومراجعة ملخصاتك.",
        greetingEvening:"🌙 مساء الخير! جلسة مذاكرة هادئة وموفقة يا بطل.",
        filesAvailable:"ملف متاح", studentsBenefited:"طالب استفاد", updating:"جاري التحديث...",
        settingsTitle:"الإعدادات", setTheme:"الوضع", setColor:"اللون الأساسي",
        setRadius:"استدارة الحواف", setFontSize:"حجم الخط", setCardsPerRow:"عدد البطاقات في الصف",
        setLanguage:"اللغة",
        setSectionAppearance:"المظهر", setSectionDisplay:"العرض والقراءة",
        setSectionVisibility:"إظهار/إخفاء العناصر", setSectionEffects:"الحركات والمؤثرات",
        setSectionVisual:"إضافات جمالية", setSectionPerf:"الأداء", setSectionLanguage:"اللغة",
        setSectionAdvanced:"متقدم",
        darkAuto:"🌗 تلقائي", darkOn:"🌙 مفعّل", darkOff:"☀️ معطّل",
        radiusSharp:"حادة", radiusNormal:"عادية", radiusRound:"دائرية",
        cardsAuto:"تلقائي",
        visStats:"📊 شريط الإحصائيات", visUpdate:"🕒 شارة آخر تحديث",
        visRecent:'👁️ قسم "شوهد مؤخراً"', visContributors:"🏆 قسم أكثر المساهمين",
        visTools:"🛠️ مكتبة الأدوات", visAbout:'🌟 قسم "عن المنصة"',
        visFaq:"❓ الأسئلة الشائعة", visBadges:"🏷️ الشارات",
        visUserStats:"📊 إحصائياتي الشخصية", visWatching:"👥 يشاهدون الآن",
        visConnection:"🌐 حالة الاتصال", visRefresh:"🔄 زر التحديث السريع",
        visWaves:"🌊 موجات SVG الفاصلة", visTopo:"🌅 خلفية Hero الطبوغرافية",
        visTilt:"✨ ميلان البطاقات 3D", visRipple:"💧 تأثير Ripple الأزرار",
        visTypewriter:"✍️ آلة كاتبة العنوان",
        visAnimations:"✨ الحركات والانتقالات", visCursor:"🖱️ المؤشر المخصص",
        visShine:"💫 تأثير اللمعان على الأزرار", visShadows:"🌑 الظلال على البطاقات",
        visPerf:"⚡ وضع الأداء للأجهزة الضعيفة",
        visPerfDesc:"يعطّل الظلال والحركات والشفافية لتحسين السرعة",
        advRefresh:"تحديث البيانات", advClearRecent:'مسح "شوهد مؤخراً"',
        advClearFav:"مسح المفضلة", advExport:"تصدير الإعدادات",
        advImport:"استيراد الإعدادات", advReset:"إعادة الضبط الكامل",
        advExportCSV:"تصدير CSV",
        readingModeLabel:"وضع القراءة المريح", readingModeActivate:"تفعيل",
        readingModeOn:"📖 وضع القراءة مفعّل", readingModeOff:"✨ تم إيقاف وضع القراءة",
        exitReadingMode:"خروج من وضع القراءة",
        menuQR:"عرض رمز QR", menuCopyLink:"نسخ الرابط المباشر",
        menuPin:"تثبيت في الأعلى", menuPrint:"طباعة البطاقة",
        menuReport:"إبلاغ عن رابط معطل",
        qrDesc:"امسح الباركود بكاميرا الهاتف 📱",
        filtersBtn:"الفلاتر", favBtn:"🤍 مكتبتي", favBtnActive:"❤️ مكتبتي الخاصة", shareBtn:"مشاركة",
        sortNewest:"🔽 الأحدث", sortOldest:"🔼 الأقدم", sortAlpha:"🔠 أبجدي", sortDownloads:"🔥 الأكثر تحميلاً",
        filterSubject:"📘 المادة", filterYear:"🎓 الفرقة", filterEdu:"🏫 التعليم",
        filterMajor:"📚 التخصص", filterType:"🏷️ النوع", filterSemester:"⏳ الترم",
        year1:"الفرقة الأولى", year2:"الفرقة الثانية", year3:"الفرقة الثالثة", year4:"الفرقة الرابعة",
        eduGeneral:"عام", eduBasic:"تعليم أساسي", typeSpec:"مادة تخصص", typeEdu:"مادة تربوية",
        sem1:"الفصل الأول", sem2:"الفصل الثاني", resetFilters:"تصفير الفلاتر",
        majorArabic:"لغة عربية", majorEnglish:"لغة إنجليزية", majorMath:"رياضيات",
        majorMathEn:"رياضيات بالإنجليزية", majorChemistry:"كيمياء", majorChemistryEn:"كيمياء بالإنجليزية",
        majorPhysics:"فيزياء", majorBiology:"بيولوجي", majorBiologyEn:"بيولوجي بالإنجليزية",
        loading:"جاري الاتصال بقاعدة البيانات...",
        recentTitle:"شوهد مؤخراً", loadMore:"عرض المزيد",
        contributorsTitle:"🏆 أكثر المساهمين",
        contributorsDesc:"هؤلاء الطلاب أثروا الأرشيف بأكبر عدد من الملخصات — تكريماً لجهودهم 💙",
        toolsTitle:"🛠️ مكتبة الأدوات المساعدة", toolsDesc:"جمعنا لك 50 موقعاً وأداة ذكية لمساعدتك.",
        toolsExplore:"استكشف مكتبة الأدوات",
        toolsSearchPh:"ابحث في 50 أداة...",
        toolsAll:"الكل (50)", toolsMath:"📐 رياضيات وعلوم", toolsEdu:"🧠 تربية وعلم نفس",
        toolsResearch:"📚 بحث ومراجع", toolsWriting:"✍️ كتابة", toolsDesign:"🎨 تصميم وعروض",
        toolsProductivity:"⏱️ إنتاجية", toolsUtilities:"🛠️ عامة",
        contributeTitle:"🤝 كيف تساهم معنا؟",
        contributeText:'الأرشيف يُبنى بجهود الطلاب ولأجل الطلاب. إذا قمت بكتابة ملخص مميز، أو جمعت أسئلة سنوات سابقة، فلا تدعها حبيسة هاتفك! شاركها لتكون صدقة جارية لعلمك وتنقذ بها زميلاً ليلة الامتحان.<br><br><strong>خطوات المشاركة بسيطة:</strong><br>1. تأكد أن الملف بصيغة PDF أو صور واضحة.<br>2. سمّ الملف بوضوح (مثال: ملخص جبر مجرد - فرقة ثانية - إعداد فلان).<br>3. أرسل الملف عبر الإيميل المخصص، وسيتم مراجعته ورفعه باسمك.',
        contributeFormBtn:"املأ نموذج رفع الملف (الأسهل)", contributeEmailBtn:"أو أرسله عبر الجيميل",
        policyTitle:"🛡️ سياسة النشر وشروط الإضافة",
        policyIntro:"للحفاظ على جودة المنصة وقانونيتها:",
        policyAllowedTitle:"✅ ما يُسمح بإضافته:",
        policyAllowedList:"- الملخصات الشخصية المكتوبة بخط اليد أو المطبوعة.<br>- الخرائط الذهنية وتبسيط القوانين والنظريات.<br>- تجميعات أسئلة الامتحانات السابقة.<br>- العروض التقديمية التي صممها الطلاب كأنشطة.",
        policyDeniedTitle:"❌ ما نعتذر عن نشره:",
        policyDeniedList:"- الكتب الجامعية الرسمية للدكاترة.<br>- المذكرات التجارية الخاصة بالسناتر.<br>- الملفات غير الواضحة أو التي تفتقد لاسم المادة والفرقة.",
        aboutTitle:"🌟 عن المنصة",
        aboutDesc:'بدأت الفكرة من معاناة حقيقية نعيشها كطلاب؛ حيث تتوه الملفات المهمة وسط آلاف الرسائل في جروبات الواتساب، وتضيع الملخصات قبل الامتحانات. لذلك، تم بناء "الأرشيف الأكاديمي الرقمي" ليكون الذاكرة الدائمة.',
        prob1Title:"وداعاً للبحث العشوائي", prob1Desc:"فلترة المواد بضغطة زر حسب الفرقة، التخصص، أو الترم لتجد ما تريده في ثانية.",
        prob2Title:"روابط دائمة لا تموت", prob2Desc:"جميع الملفات مرفوعة على خوادم سحابية آمنة.",
        prob3Title:"توفير مساحة هاتفك", prob3Desc:"يمكنك عرض الملفات مباشرة من المنصة، أو إضافتها لمكتبتك.",
        faqTitle:"❓ الأسئلة الشائعة",
        faqQ1:"هل أحتاج للإنترنت في كل مرة أفتح فيها الموقع؟", faqA1:"يمكنك رؤية آخر نسخة محفوظة من البيانات عند انقطاع الاتصال، لكن تحديث الملفات والروابط الجديدة يحتاج إلى الإنترنت.",
        faqQ2:"كيف أصل للمنصة بسرعة دون البحث عن الرابط؟", faqA2:'يمكنك تثبيت المنصة كتطبيق! في الأندرويد: النقاط الثلاث ثم "إضافة للشاشة الرئيسية".',
        faqQ3:"لم أجد المادة التي أبحث عنها، ماذا أفعل؟", faqA3:"تأكد أولاً من تصفير الفلاتر. إذا لم تجدها، فهذا يعني أن أحداً لم يقم برفع ملخص لها بعد.",
        faqQ4:'هل "مكتبتي الخاصة" تُحفظ إذا غيرت هاتفي؟', faqA4:"نظام المفضلة يعمل بـ Local Storage، فتُحفظ على متصفح جهازك الحالي فقط.",
        faqQ5:"الرابط لا يعمل أو الملف لا يفتح، ما الحل؟", faqA5:"أحياناً يحدث ضغط على خوادم جوجل. ننصحك بنسخ الرابط وفتحه في متصفح آخر.",
        faqQ6:"هل يمكنني طباعة هذه الملخصات في أي مكتبة؟", faqA6:"بكل تأكيد. جميع الملفات المرفوعة مجهزة بصيغة PDF القياسية.",
        installTitle:"أضف الأرشيف لهاتفك!", installDesc:"للوصول السريع لجميع المواد والملخصات بدون الحاجة للمتصفح.",
        installIOS:'📱 اضغط على <strong>المشاركة</strong> ثم <strong>\'إضافة إلى الشاشة الرئيسية\'</strong>.',
        installAndroid:'📱 اضغط على <strong>النقاط الثلاث ⋮</strong> ثم <strong>\'إضافة إلى الشاشة الرئيسية\'</strong>.',
        exportTitle:"📚 شارك مكتبتك", exportDesc:"اختر الطريقة الأنسب",
        exportNative:"مشاركة عبر التطبيقات", exportWhatsapp:"واتساب", exportTelegram:"تليجرام", exportCopy:"نسخ كنص",
        displayBtn:"عرض", downloadBtn:"تحميل",
        previewBtn:"معاينة", previewTitle:"معاينة الملف",
        openInNewTab:"فتح في تبويب جديد",
        emptyFavTitle:"مكتبتك فارغة", emptyFavDesc:"اضغط على القلب (🤍) في أي ملف لإضافته.",
        emptyResultsTitle:"لا توجد نتائج", emptyResultsDesc:"تأكد من كلمات البحث أو اضغط تصفير.",
        filePrefix:"📊 النتائج: ", filePrefixFav:"📚 تحتفظ بـ ", fileSuffix:" ملف",
        authorPrefix:"✍️ إعداد:", subjectPrefix:"مادة: ", datePrefix:"الرفع: ",
        toastFavAdd:"❤️ تمت الإضافة", toastFavRemove:"🗑️ تمت الإزالة",
        toastCopied:"📋 تم النسخ", toastReset:"🔄 تم إعادة الضبط",
        toastDarkOn:"🌙 الوضع الليلي", toastDarkOff:"☀️ الوضع النهاري",
        toastLangChanged:"🌐 تم تغيير اللغة",
        toastSettingsImported:"✅ تم استيراد الإعدادات",
        toastSettingsExported:"💾 تم تصدير الإعدادات",
        toastCacheCleared:"🔄 تم مسح الكاش، جاري إعادة الجلب",
        toastRecentCleared:"🗑️ تم مسح شوهد مؤخراً",
        toastFavCleared:"💔 تم مسح كل المفضلة",
        toastSettingsReset:"🔄 تم إعادة الضبط الافتراضي",
        toastColorChanged:"🎨 تم تغيير اللون",
        toastPerfOn:"⚡ وضع الأداء مفعّل — الموقع أسرع الآن",
        toastPerfOff:"✨ تم إيقاف وضع الأداء",
        toastPinAdded:"📌 تم تثبيت الملف في الأعلى",
        toastPinRemoved:"📍 تم إلغاء التثبيت",
        toastFilterSaved:"💾 تم حفظ الفلتر",
        toastFilterDeleted:"🗑️ تم حذف الفلتر",
        toastLinkCopied:"🔗 تم نسخ رابط الفلتر",
        toastReportSent:"✅ تم إرسال الإبلاغ، شكراً لك",
        toastCSVExported:"📊 تم تصدير الملف بصيغة CSV",
        toastRefreshed:"✅ تم تحديث البيانات",
        searchPlaceholder:"ابحث عن اسم المادة أو المؤلف...",
        noTools:"لا توجد أدوات مطابقة", loadingFiles:"جاري تحميل الملفات...",
        madeWith:"صُنع بـ", by:"بواسطة",
        makerSub:"لخدمة طلاب كلية التربية · جميع الحقوق محفوظة",
        noAuthor:"غير محدد", unknown:"غير محدد", all:"الكل",
        todayLabel:"اليوم 🔥", yesterdayLabel:"أمس",
        daysAgo:"منذ {n} أيام", weeksAgo:"منذ {n} أسابيع", monthsAgo:"منذ {n} شهور",
        onlineLabel:"متصل", offlineLabel:"غير متصل",
        watchingNowLabel:"طالباً يشاهدون الآن",
        youViewed:"شاهدت:", youDownloaded:"حمّلت:", youFavorites:"مفضلة:", youLastVisit:"آخر زيارة:",
        now:"الآن", minutesAgo:"منذ {n} دقيقة", hoursAgo:"منذ {n} ساعة",
        dayAgo:"أمس", weekAgo:"منذ أسبوع",
        shortcutsTitle:"اختصارات لوحة المفاتيح",
        shortcutsDesc:"وفّر وقتك باستخدام هذه الاختصارات السريعة",
        showShortcuts:"عرض كل الاختصارات",
        scSearch:"البحث", scDarkMode:"تبديل الوضع الليلي", scFilters:"الفلاتر",
        scLibrary:"مكتبتي", scTop:"العودة للأعلى", scReadingMode:"وضع القراءة",
        scClose:"إغلاق النوافذ", scShowShortcuts:"عرض الاختصارات",
        reportTitle:"إبلاغ عن مشكلة", reportDesc:"ساعدنا في تحسين المنصة",
        reportIssueType:"نوع المشكلة", reportBroken:"رابط معطل / ملف لا يفتح",
        reportWrong:"محتوى خاطئ / لا يطابق العنوان", reportInappropriate:"محتوى غير مناسب",
        reportOther:"مشكلة أخرى", reportFileName:"اسم الملف",
        reportDetails:"تفاصيل إضافية (اختياري)",
        reportPlaceholder:"اكتب أي تفاصيل تساعدنا في حل المشكلة...",
        reportSend:"إرسال الإبلاغ",
        saveFilterTitle:"حفظ الفلتر الحالي",
        saveFilterDesc:"احفظ الإعدادات الحالية للرجوع إليها بسرعة",
        saveFilterNamePlaceholder:"مثال: مراجعة الرياضيات",
        saveFilterBtn:"حفظ الفلتر", saveFilterShort:"حفظ الفلتر",
        savedFiltersLabel:"محفوظة:", saveCurrentFilter:"حفظ الحالي",
        notificationNewFiles:"🎉 {n} ملفات جديدة منذ آخر زيارة!",
        notificationNewFileOne:"🎉 ملف جديد منذ آخر زيارة!",
        fileRequestNotice:""
    },
    en: {
        appTitle:"Academic Digital Archive & Comprehensive Library",
        greeting:"Your dedicated space for educational materials",
        greetingMorning:"☀️ Good morning! Ready for a new achievement?",
        greetingAfternoon:"☕ Good afternoon! Great time to review.",
        greetingEvening:"🌙 Good evening! Peaceful study session.",
        filesAvailable:"Files Available", studentsBenefited:"Students Helped", updating:"Updating...",
        settingsTitle:"Settings", setTheme:"Theme", setColor:"Primary Color",
        setRadius:"Corner Radius", setFontSize:"Font Size", setCardsPerRow:"Cards per Row",
        setLanguage:"Language",
        setSectionAppearance:"Appearance", setSectionDisplay:"Display & Reading",
        setSectionVisibility:"Show/Hide Elements", setSectionEffects:"Animations & Effects",
        setSectionVisual:"Visual Additions", setSectionPerf:"Performance", setSectionLanguage:"Language",
        setSectionAdvanced:"Advanced",
        darkAuto:"🌗 Auto", darkOn:"🌙 On", darkOff:"☀️ Off",
        radiusSharp:"Sharp", radiusNormal:"Normal", radiusRound:"Round",
        cardsAuto:"Auto",
        visStats:"📊 Stats Bar", visUpdate:"🕒 Last Update Badge",
        visRecent:"👁️ Recently Viewed Section", visContributors:"🏆 Top Contributors Section",
        visTools:"🛠️ Tools Library", visAbout:'🌟 "About" Section',
        visFaq:"❓ FAQ", visBadges:"🏷️ Badges",
        visUserStats:"📊 My Stats", visWatching:"👥 Watching Now",
        visConnection:"🌐 Connection Status", visRefresh:"🔄 Quick Refresh Button",
        visWaves:"🌊 SVG Waves", visTopo:"🌅 Hero Topographic Background",
        visTilt:"✨ 3D Card Tilt", visRipple:"💧 Ripple Button Effect",
        visTypewriter:"✍️ Typewriter Title",
        visAnimations:"✨ Animations & Transitions", visCursor:"🖱️ Custom Cursor",
        visShine:"💫 Button Shine Effect", visShadows:"🌑 Card Shadows",
        visPerf:"⚡ Performance Mode for Weak Devices",
        visPerfDesc:"Disables shadows, animations, and transparency for better speed",
        advRefresh:"Refresh Data", advClearRecent:"Clear Recently Viewed",
        advClearFav:"Clear Favorites", advExport:"Export Settings",
        advImport:"Import Settings", advReset:"Full Reset",
        advExportCSV:"Export CSV",
        readingModeLabel:"Comfortable Reading Mode", readingModeActivate:"Activate",
        readingModeOn:"📖 Reading mode ON", readingModeOff:"✨ Reading mode OFF",
        exitReadingMode:"Exit Reading Mode",
        menuQR:"Show QR Code", menuCopyLink:"Copy Direct Link",
        menuPin:"Pin to Top", menuPrint:"Print Card",
        menuReport:"Report Broken Link",
        qrDesc:"Scan QR with your phone camera 📱",
        filtersBtn:"Filters", favBtn:"🤍 My Library", favBtnActive:"❤️ My Library", shareBtn:"Share",
        sortNewest:"🔽 Newest", sortOldest:"🔼 Oldest", sortAlpha:"🔠 A-Z", sortDownloads:"🔥 Most Downloaded",
        filterSubject:"📘 Subject", filterYear:"🎓 Year", filterEdu:"🏫 Education",
        filterMajor:"📚 Major", filterType:"🏷️ Type", filterSemester:"⏳ Semester",
        year1:"First Year", year2:"Second Year", year3:"Third Year", year4:"Fourth Year",
        eduGeneral:"General", eduBasic:"Basic Education", typeSpec:"Specialty", typeEdu:"Educational",
        sem1:"First Semester", sem2:"Second Semester", resetFilters:"Reset Filters",
        majorArabic:"Arabic", majorEnglish:"English", majorMath:"Mathematics",
        majorMathEn:"Mathematics (EN)", majorChemistry:"Chemistry", majorChemistryEn:"Chemistry (EN)",
        majorPhysics:"Physics", majorBiology:"Biology", majorBiologyEn:"Biology (EN)",
        loading:"Connecting to database...",
        recentTitle:"Recently Viewed", loadMore:"Load More",
        contributorsTitle:"🏆 Top Contributors",
        contributorsDesc:"These students enriched the archive with the most summaries — honoring their efforts 💙",
        toolsTitle:"🛠️ Tools Library", toolsDesc:"50 smart sites and tools to help you.",
        toolsExplore:"Explore Tools Library",
        toolsSearchPh:"Search 50 tools...",
        toolsAll:"All (50)", toolsMath:"📐 Math & Science", toolsEdu:"🧠 Education & Psychology",
        toolsResearch:"📚 Research & References", toolsWriting:"✍️ Writing", toolsDesign:"🎨 Design & Presentations",
        toolsProductivity:"⏱️ Productivity", toolsUtilities:"🛠️ Utilities",
        contributeTitle:"🤝 How to Contribute?",
        contributeText:'The archive is built by students, for students. If you wrote a great summary or collected past exams, don\'t keep it locked on your phone! Share it as ongoing charity for your knowledge and save a colleague.<br><br><strong>Steps are simple:</strong><br>1. Make sure the file is PDF or clear images.<br>2. Name it clearly (e.g., Abstract Algebra Summary - Year 2 - By John).<br>3. Send via the dedicated email, and it will be reviewed and uploaded with your name.',
        contributeFormBtn:"Fill the Upload Form (Easiest)", contributeEmailBtn:"Or Send via Gmail",
        policyTitle:"🛡️ Publishing Policy & Terms",
        policyIntro:"To maintain platform quality and legality:",
        policyAllowedTitle:"✅ What we allow:",
        policyAllowedList:"- Personal handwritten or printed summaries.<br>- Mind maps and simplified laws & theories.<br>- Collections of past exam questions.<br>- Student-made presentations as activities.",
        policyDeniedTitle:"❌ What we refuse to publish:",
        policyDeniedList:"- Official university textbooks by professors.<br>- Commercial notes from private tutoring centers.<br>- Unclear files missing subject name and year.",
        aboutTitle:"🌟 About the Platform",
        aboutDesc:'The idea started from a real struggle we face as students; important files get lost among thousands of messages in WhatsApp and Telegram groups, summaries get lost before exams. Therefore, the "Digital Academic Archive" was built to be the permanent memory.',
        prob1Title:"No More Random Search", prob1Desc:"Filter materials with one click by year, major, or semester to find what you need in a second.",
        prob2Title:"Permanent Links", prob2Desc:"All files are uploaded to secure cloud servers.",
        prob3Title:"Save Your Phone Storage", prob3Desc:"You can preview files directly on the platform, or add them to your library.",
        faqTitle:"❓ Frequently Asked Questions",
        faqQ1:"Do I need internet every time I open the site?", faqA1:"You can see the last saved version of data when offline, but refreshing files and new links requires internet.",
        faqQ2:"How do I reach the platform quickly without searching for the link?", faqA2:'You can install it as an app! On Android: three dots menu then "Add to Home Screen".',
        faqQ3:"I can't find the material I'm looking for, what should I do?", faqA3:"First make sure to reset filters. If you still can't find it, no one has uploaded a summary for it yet.",
        faqQ4:'Will "My Library" be saved if I change my phone?', faqA4:"Favorites use Local Storage, so they're saved only on your current browser.",
        faqQ5:"The link doesn't work or file won't open, what's the solution?", faqA5:"Sometimes Google servers are overloaded. We recommend copying the link and opening in another browser.",
        faqQ6:"Can I print these summaries at any print shop?", faqA6:"Absolutely. All uploaded files are standard PDF.",
        installTitle:"Add the Archive to your phone!", installDesc:"Quick access to all materials without the browser.",
        installIOS:"📱 Tap <strong>Share</strong> then <strong>'Add to Home Screen'</strong>.",
        installAndroid:"📱 Tap <strong>⋮ menu</strong> then <strong>'Add to Home Screen'</strong>.",
        exportTitle:"📚 Share Your Library", exportDesc:"Choose your preferred method",
        exportNative:"Share via Apps", exportWhatsapp:"WhatsApp", exportTelegram:"Telegram", exportCopy:"Copy as text",
        displayBtn:"View", downloadBtn:"Download",
        previewBtn:"Preview", previewTitle:"File Preview",
        openInNewTab:"Open in new tab",
        emptyFavTitle:"Your library is empty", emptyFavDesc:"Tap the heart (🤍) on any file to add it.",
        emptyResultsTitle:"No results", emptyResultsDesc:"Check your search or tap Reset.",
        filePrefix:"📊 Results: ", filePrefixFav:"📚 You have ", fileSuffix:" files",
        authorPrefix:"✍️ By:", subjectPrefix:"Subject: ", datePrefix:"Uploaded: ",
        toastFavAdd:"❤️ Added", toastFavRemove:"🗑️ Removed",
        toastCopied:"📋 Copied", toastReset:"🔄 Reset done",
        toastDarkOn:"🌙 Dark mode", toastDarkOff:"☀️ Light mode",
        toastLangChanged:"🌐 Language changed",
        toastSettingsImported:"✅ Settings imported",
        toastSettingsExported:"💾 Settings exported",
        toastCacheCleared:"🔄 Cache cleared, refetching",
        toastRecentCleared:"🗑️ Recent cleared",
        toastFavCleared:"💔 All favorites cleared",
        toastSettingsReset:"🔄 Reset to defaults",
        toastColorChanged:"🎨 Color changed",
        toastPerfOn:"⚡ Performance mode ON — faster now",
        toastPerfOff:"✨ Performance mode OFF",
        toastPinAdded:"📌 File pinned to top",
        toastPinRemoved:"📍 Unpinned",
        toastFilterSaved:"💾 Filter saved",
        toastFilterDeleted:"🗑️ Filter deleted",
        toastLinkCopied:"🔗 Filter link copied",
        toastReportSent:"✅ Report sent, thank you",
        toastCSVExported:"📊 CSV file exported",
        toastRefreshed:"✅ Data refreshed",
        searchPlaceholder:"Search by subject or author...",
        noTools:"No matching tools", loadingFiles:"Loading files...",
        madeWith:"Made with", by:"by",
        makerSub:"Serving Faculty of Education students · All rights reserved",
        noAuthor:"Unknown", unknown:"Unknown", all:"All",
        todayLabel:"Today 🔥", yesterdayLabel:"Yesterday",
        daysAgo:"{n} days ago", weeksAgo:"{n} weeks ago", monthsAgo:"{n} months ago",
        onlineLabel:"Online", offlineLabel:"Offline",
        watchingNowLabel:"students watching now",
        youViewed:"Viewed:", youDownloaded:"Downloaded:", youFavorites:"Favorites:", youLastVisit:"Last visit:",
        now:"now", minutesAgo:"{n}m ago", hoursAgo:"{n}h ago",
        dayAgo:"Yesterday", weekAgo:"a week ago",
        shortcutsTitle:"Keyboard Shortcuts",
        shortcutsDesc:"Save time using these quick shortcuts",
        showShortcuts:"Show all shortcuts",
        scSearch:"Search", scDarkMode:"Toggle Dark Mode", scFilters:"Filters",
        scLibrary:"My Library", scTop:"Back to Top", scReadingMode:"Reading Mode",
        scClose:"Close Modals", scShowShortcuts:"Show Shortcuts",
        reportTitle:"Report a Problem", reportDesc:"Help us improve the platform",
        reportIssueType:"Issue type", reportBroken:"Broken link / File won't open",
        reportWrong:"Wrong content / Title mismatch", reportInappropriate:"Inappropriate content",
        reportOther:"Other issue", reportFileName:"File name",
        reportDetails:"Additional details (optional)",
        reportPlaceholder:"Add any details that help us fix the issue...",
        reportSend:"Send Report",
        saveFilterTitle:"Save Current Filter",
        saveFilterDesc:"Save current settings for quick access later",
        saveFilterNamePlaceholder:"e.g., Math Review",
        saveFilterBtn:"Save Filter", saveFilterShort:"Save Filter",
        savedFiltersLabel:"Saved:", saveCurrentFilter:"Save current",
        notificationNewFiles:"🎉 {n} new files since your last visit!",
        notificationNewFileOne:"🎉 A new file since your last visit!",
        fileRequestNotice:""
    }
};

/* ============================================================
   2. Utilities — تستخدم Settings من db.js (localStorage)
   ============================================================ */
function storageGet(key, fallback = null) { return Settings.get(key, fallback); }
function storageSet(key, value) { return Settings.set(key, value); }
function storageRemove(key) { Settings.remove(key); }
function readJSON(key, fallback) { return Settings.getJSON(key, fallback); }

let currentLang = storageGet('lang', 'ar');
if (!I18N[currentLang]) currentLang = 'ar';
function t(key) { return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.ar[key]) || key; }

/* ============================================================
   3. الحالة العامة
   ============================================================ */
const SHEET_ID = '11_V1kRj55brAU_Sz7G8sATPNS_tKHaT9G9NoTEiVudY';
const TSV_URL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vTs1m8G5U5okSyDfec9lGQ0aqzhgwaBxygpdfm3uy4IJzz3wl1JIgfWtpMn34XC5XsZN6WH6k6pydf5/pub?output=tsv`;
const ADMIN_EMAIL = 'blackp0778565@gmail.com';
const GOOGLE_FORM_URL = 'https://forms.gle/b6kN4xRxAVLEnfKE9';
const COUNTER_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxAzzAwd-pXuBY1_5MxIAaanFU1uzvt48gvuGJAEdBwIMizgakpDI6fN93rTf_deKmi/exec';
const REPORT_FORM_URL = GOOGLE_FORM_URL;

let allFiles = [];
let currentFilteredFiles = [];
let favorites = readJSON('eduFavorites_v3', []);
if (!Array.isArray(favorites)) favorites = [];
let pinnedFiles = readJSON('eduPinnedFiles_v1', []);
if (!Array.isArray(pinnedFiles)) pinnedFiles = [];
let recentViews = readJSON('recentFilesData', []);
if (!Array.isArray(recentViews)) recentViews = [];
let searchHistory = readJSON('eduSearchHistory_v1', []);
if (!Array.isArray(searchHistory)) searchHistory = [];
let savedFilters = readJSON('eduSavedFilters_v1', []);
if (!Array.isArray(savedFilters)) savedFilters = [];
let userStats = readJSON('eduUserStats_v1', { viewed: [], downloaded: [], lastVisit: null, visits: 0 });
if (typeof userStats !== 'object' || userStats === null) userStats = { viewed: [], downloaded: [], lastVisit: null, visits: 0 };
if (!Array.isArray(userStats.viewed)) userStats.viewed = [];
if (!Array.isArray(userStats.downloaded)) userStats.downloaded = [];

let isRecentOpen = storageGet('recentOpen', '0') === '1';
let isFavViewActive = false;
let currentPage = 1;
const ITEMS_PER_PAGE = 12;
let currentViewStyle = storageGet('eduViewStyle', 'grid');
if (!['grid','list'].includes(currentViewStyle)) currentViewStyle = 'grid';
let currentToolsFilter = 'all';
let moreMenuContext = null;
let toastTimeout;
let previewContext = { list: [], index: -1 };
let isReadingMode = false;

/* ============================================================
   4. تتبع التحميلات
   ============================================================ */
function trackDownload(id) {
    if (!COUNTER_SCRIPT_URL || !id) return;
    try { fetch(`${COUNTER_SCRIPT_URL}?id=${encodeURIComponent(id)}`, { mode: 'no-cors' }).catch(() => {}); } catch(e) {}
}

/* ============================================================
   5. الإعدادات
   ============================================================ */
function applyAllSettingsOnLoad() {
    let mode = storageGet('darkMode', 'auto');
    if (mode === '1') mode = 'on';
    if (mode === '0') mode = 'off';
    if (!['auto','on','off'].includes(mode)) mode = 'auto';
    const setDark = document.getElementById('setDarkMode');
    if (setDark) setDark.value = mode;
    if (mode === 'on') { document.documentElement.classList.add('dark-mode'); }
    else if (mode === 'off') { document.documentElement.classList.remove('dark-mode'); }
    else { const h = new Date().getHours(); document.documentElement.classList.toggle('dark-mode', (h >= 19 || h < 6)); }

    const color = storageGet('set_color', 'blue');
    document.documentElement.setAttribute('data-color', color);
    document.querySelectorAll('.color-swatch').forEach(s => s.classList.toggle('active', s.dataset.color === color));

    const radius = storageGet('set_radius', 'normal');
    document.documentElement.setAttribute('data-radius', radius);
    document.querySelectorAll('.radius-btn').forEach(b => b.classList.toggle('active', b.dataset.radius === radius));

    const cards = storageGet('set_cards_per_row', 'auto');
    document.documentElement.setAttribute('data-cards', cards);
    const cardsSel = document.getElementById('setCardsPerRow');
    if (cardsSel) cardsSel.value = cards;

    const toggleKeys = [
        { id: 'sw_hide_stats', key: 'set_hide_stats', cls: 'hide-stats' },
        { id: 'sw_hide_update', key: 'set_hide_update', cls: 'hide-update' },
        { id: 'sw_hide_recent', key: 'set_hide_recent', cls: 'hide-recent' },
        { id: 'sw_hide_contributors', key: 'set_hide_contributors', cls: 'hide-contributors' },
        { id: 'sw_hide_tools', key: 'set_hide_tools', cls: 'hide-tools' },
        { id: 'sw_hide_about', key: 'set_hide_about', cls: 'hide-about' },
        { id: 'sw_hide_faq', key: 'set_hide_faq', cls: 'hide-faq' },
        { id: 'sw_hide_badges', key: 'set_hide_badges', cls: 'hide-badges' },
        { id: 'sw_hide_cursor', key: 'set_hide_cursor', cls: 'no-custom-cursor' },
        { id: 'sw_hide_shine', key: 'set_hide_shine', cls: 'no-shine' },
        { id: 'sw_hide_waves', key: 'set_hide_waves', cls: 'hide-waves' },
        { id: 'sw_hide_topo', key: 'set_hide_topo', cls: 'hide-topo' },
        { id: 'sw_hide_tilt', key: 'set_hide_tilt', cls: 'no-tilt' },
        { id: 'sw_hide_ripple', key: 'set_hide_ripple', cls: 'no-ripple' },
        { id: 'sw_hide_typewriter', key: 'set_hide_typewriter', cls: 'no-typewriter' },
        { id: 'sw_hide_user_stats', key: 'set_hide_user_stats', cls: 'hide-user-stats' },
        { id: 'sw_hide_watching', key: 'set_hide_watching', cls: 'hide-watching' },
        { id: 'sw_hide_connection', key: 'set_hide_connection', cls: 'hide-connection' },
        { id: 'sw_hide_refresh', key: 'set_hide_refresh', cls: 'hide-refresh' },
        { id: 'sw_perf', key: 'set_perf', cls: 'perf-mode' }
    ];
    toggleKeys.forEach(item => {
        const el = document.getElementById(item.id);
        const isOn = storageGet(item.key, '0') === '1';
        if (el) el.classList.toggle('on', isOn);
        document.documentElement.classList.toggle(item.cls, isOn);
    });

    const shadowsEl = document.getElementById('sw_shadows');
    const shadowsOff = storageGet('set_shadows', '1') === '0';
    if (shadowsEl) shadowsEl.classList.toggle('on', !shadowsOff);
    document.documentElement.classList.toggle('no-shadows', shadowsOff);

    const animEl = document.getElementById('sw_animations');
    const animOff = storageGet('set_animations', '1') === '0';
    if (animEl) animEl.classList.toggle('on', !animOff);
    document.documentElement.classList.toggle('no-anim', animOff);

    initFontScale();
    const langSel = document.getElementById('setLanguage');
    if (langSel) langSel.value = currentLang;
    applyLanguage(currentLang);
}

function applySetting(key, value) {
    if (key === 'darkMode') {
        if (value === 'on') { document.documentElement.classList.add('dark-mode'); storageSet('darkMode', 'on'); }
        else if (value === 'off') { document.documentElement.classList.remove('dark-mode'); storageSet('darkMode', 'off'); }
        else { storageSet('darkMode', 'auto'); const h = new Date().getHours(); document.documentElement.classList.toggle('dark-mode', (h >= 19 || h < 6)); }
    } else if (key === 'cards') {
        document.documentElement.setAttribute('data-cards', value);
        storageSet('set_cards_per_row', value);
    }
}

/* ✅ إصلاح #4: توحيد معالجة hide_update */
function toggleSetting(key, el) {
    const isOn = !el.classList.contains('on');
    el.classList.toggle('on', isOn);
    const clsMap = {
        'hide_stats':'hide-stats','hide_recent':'hide-recent','hide_contributors':'hide-contributors',
        'hide_tools':'hide-tools','hide_about':'hide-about','hide_faq':'hide-faq',
        'hide_badges':'hide-badges','hide_cursor':'no-custom-cursor','hide_shine':'no-shine',
        'hide_waves':'hide-waves','hide_topo':'hide-topo','hide_tilt':'no-tilt',
        'hide_ripple':'no-ripple','hide_typewriter':'no-typewriter',
        'hide_user_stats':'hide-user-stats','hide_watching':'hide-watching',
        'hide_connection':'hide-connection','hide_refresh':'hide-refresh'
    };
    if (key === 'hide_update') {
        storageSet('set_hide_update', isOn ? '1' : '0');
        document.documentElement.classList.toggle('hide-update', isOn);
    } else if (key === 'shadows') {
        storageSet('set_shadows', isOn ? '1' : '0');
        document.documentElement.classList.toggle('no-shadows', !isOn);
    } else if (key === 'animations') {
        storageSet('set_animations', isOn ? '1' : '0');
        document.documentElement.classList.toggle('no-anim', !isOn);
    } else if (key === 'perf') {
        storageSet('set_perf', isOn ? '1' : '0');
        document.documentElement.classList.toggle('perf-mode', isOn);
        showToast(isOn ? t('toastPerfOn') : t('toastPerfOff'));
    } else if (clsMap[key]) {
        storageSet('set_' + key, isOn ? '1' : '0');
        document.documentElement.classList.toggle(clsMap[key], isOn);
    }
}

function setColor(color) {
    document.documentElement.setAttribute('data-color', color);
    storageSet('set_color', color);
    document.querySelectorAll('.color-swatch').forEach(s => s.classList.toggle('active', s.dataset.color === color));
    showToast(t('toastColorChanged'));
}
function setRadius(radius) {
    document.documentElement.setAttribute('data-radius', radius);
    storageSet('set_radius', radius);
    document.querySelectorAll('.radius-btn').forEach(b => b.classList.toggle('active', b.dataset.radius === radius));
}
function openSettingsModal() {
    const modal = document.getElementById('settingsModal');
    if (!modal) return;
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
    document.body.style.overflow = 'hidden';
}
function closeSettingsModal() {
    const modal = document.getElementById('settingsModal');
    if (!modal) return;
    modal.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(() => modal.style.display = 'none', 300);
}

/* ============================================================
   6. إدارة الكاش (تستخدم Store من db.js — IndexedDB)
   ============================================================ */
const CACHE_KEY = 'eduArchiveData';
const CACHE_TIME_KEY = 'eduArchiveTime';

async function clearCache() {
    let oldData = null, oldTime = null;
    try {
        oldData = await Store.get(CACHE_KEY, null);
        oldTime = await Store.get(CACHE_TIME_KEY, null);
    } catch(e) {}
    await Store.remove(CACHE_KEY);
    await Store.remove(CACHE_TIME_KEY);
    showToast(t('toastCacheCleared'));
    const ok = await fetchFilesSilently();
    if (!ok && oldData) {
        await Store.set(CACHE_KEY, oldData);
        if (oldTime) await Store.set(CACHE_TIME_KEY, oldTime);
        try {
            const parsed = typeof oldData === 'string' ? JSON.parse(oldData) : oldData;
            allFiles = normalizeFiles(parsed);
            populateSubjectDropdown(allFiles);
            filterAndSortData();
        } catch(e) {}
        showToast(currentLang === 'ar' ? '⚠️ فشل التحديث وتمت استعادة النسخة السابقة' : '⚠️ Refresh failed; previous data restored');
    }
    closeSettingsModal();
}
function clearRecent() {
    storageRemove('recentFilesData');
    recentViews = [];
    renderRecent();
    showToast(t('toastRecentCleared'));
}
function clearFavoritesConfirm() {
    if (!confirm(currentLang === 'ar' ? 'هل تريد مسح كل المفضلة؟' : 'Clear all favorites?')) return;
    storageRemove('eduFavorites_v3');
    favorites = [];
    if (isFavViewActive) filterAndSortData();
    showToast(t('toastFavCleared'));
}
function exportSettings() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && (k.startsWith('set_') || k === 'darkMode' || k === 'lang' || k === 'fontScaleIndex')) data[k] = localStorage.getItem(k);
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `archive-settings-${Date.now()}.json`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(t('toastSettingsExported'));
}
function importSettings(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            Object.keys(data).forEach(k => localStorage.setItem(k, data[k]));
            showToast(t('toastSettingsImported'));
            setTimeout(() => location.reload(), 800);
        } catch (err) { showToast('❌ Invalid file'); }
    };
    reader.readAsText(file);
    event.target.value = '';
}
function resetSettingsConfirm() {
    if (!confirm(currentLang === 'ar' ? 'إعادة ضبط كل الإعدادات؟' : 'Reset all settings?')) return;
    const toRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && (k.startsWith('set_') || k === 'darkMode' || k === 'lang' || k === 'fontScaleIndex')) toRemove.push(k);
    }
    toRemove.forEach(k => localStorage.removeItem(k));
    showToast(t('toastSettingsReset'));
    setTimeout(() => location.reload(), 800);
}

/* ============================================================
   7. اللغة
   ============================================================ */
function applyLanguage(lang) {
    currentLang = lang;
    storageSet('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = I18N[lang] && I18N[lang][key];
        if (val !== undefined) {
            if (val.indexOf('<') !== -1) el.innerHTML = val;
            else el.textContent = val;
        }
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        const val = I18N[lang] && I18N[lang][key];
        if (val) el.setAttribute('placeholder', val);
    });
    document.title = I18N[lang].appTitle || document.title;
    const searchEl = document.getElementById('searchInput');
    if (searchEl) searchEl.placeholder = t('searchPlaceholder');
    setDynamicGreeting();
    populateSubjectDropdown(allFiles);
    if (allFiles && allFiles.length) { filterAndSortData(); renderRecent(); }
    renderToolsDOM(currentToolsFilter === 'all' ? allToolsData : allToolsData.filter(t => t.cat === currentToolsFilter));
    updateConnectionLabel();
    updateUserStatsBar();
    updateWatchingCount();
    phraseIndex = 0; charIndex = 0; isDeleting = false;
}
function setLanguage(lang) {
    if (lang === currentLang) return;
    applyLanguage(lang);
    showToast(I18N[lang].toastLangChanged);
}

function translateValue(val) {
    if (!val) return val;
    const v = String(val).trim();
    const map = {
        'الكل': t('all'),
        'الفرقة الأولى': t('year1'), 'الفرقة الثانية': t('year2'),
        'الفرقة الثالثة': t('year3'), 'الفرقة الرابعة': t('year4'),
        'عام': t('eduGeneral'), 'تعليم أساسي': t('eduBasic'),
        'مادة تخصص': t('typeSpec'), 'مادة تربوية': t('typeEdu'),
        'الفصل الأول': t('sem1'), 'الفصل الثاني': t('sem2'),
        'لغة عربية': t('majorArabic'), 'لغة إنجليزية': t('majorEnglish'),
        'رياضيات': t('majorMath'), 'رياضيات باللغة الإنجليزية': t('majorMathEn'),
        'كيمياء': t('majorChemistry'), 'كيمياء باللغة الإنجليزية': t('majorChemistryEn'),
        'فيزياء': t('majorPhysics'), 'بيولوجي': t('majorBiology'),
        'بيولوجي باللغة الإنجليزية': t('majorBiologyEn'),
        'غير محدد': t('unknown')
    };
    return map[v] || val;
}

/* ============================================================
   8. سجل البحث
   ============================================================ */
function saveSearchToHistory(query) {
    if (!query || query.trim().length < 2) return;
    const q = query.trim();
    searchHistory = searchHistory.filter(s => s !== q);
    searchHistory.unshift(q);
    if (searchHistory.length > 5) searchHistory = searchHistory.slice(0, 5);
    storageSet('eduSearchHistory_v1', JSON.stringify(searchHistory));
}
function clearSearchHistory() {
    searchHistory = [];
    storageSet('eduSearchHistory_v1', '[]');
    showToast(currentLang === 'ar' ? '🗑️ تم مسح سجل البحث' : '🗑️ Search history cleared');
}

/* ============================================================
   9. إحصائيات المستخدم
   ============================================================ */
function updateUserStats() {
    if (userStats.viewed.length > 200) userStats.viewed = userStats.viewed.slice(-200);
    if (userStats.downloaded.length > 200) userStats.downloaded = userStats.downloaded.slice(-200);
    storageSet('eduUserStats_v1', JSON.stringify(userStats));
}
function updateUserStatsBar() {
    const elViewed = document.getElementById('userStatViewed');
    const elDownloaded = document.getElementById('userStatDownloaded');
    const elFavorites = document.getElementById('userStatFavorites');
    const elLastVisit = document.getElementById('userStatLastVisit');
    if (!elViewed) return;
    elViewed.textContent = userStats.viewed.length;
    elDownloaded.textContent = userStats.downloaded.length;
    elFavorites.textContent = favorites.length;
    if (elLastVisit && userStats.lastVisit) {
        const diff = Date.now() - userStats.lastVisit;
        const mins = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);
        if (mins < 1) elLastVisit.textContent = t('now');
        else if (mins < 60) elLastVisit.textContent = t('minutesAgo').replace('{n}', mins);
        else if (hours < 24) elLastVisit.textContent = t('hoursAgo').replace('{n}', hours);
        else if (days === 1) elLastVisit.textContent = t('dayAgo');
        else if (days < 7) elLastVisit.textContent = t('daysAgo').replace('{n}', days);
        else elLastVisit.textContent = t('weekAgo');
    } else if (elLastVisit) {
        elLastVisit.textContent = t('now');
    }
}
function markUserViewed(fileUrl) {
    if (!fileUrl) return;
    if (!userStats.viewed.includes(fileUrl)) userStats.viewed.push(fileUrl);
    updateUserStats();
    updateUserStatsBar();
}
function markUserDownloaded(fileUrl) {
    if (!fileUrl) return;
    if (!userStats.downloaded.includes(fileUrl)) userStats.downloaded.push(fileUrl);
    updateUserStats();
    updateUserStatsBar();
}

/* ============================================================
   10. يشاهدون الآن (✅ إصلاح #7)
   ============================================================ */
const SESSION_BASE = (function () {
    const h = new Date().getHours();
    if (h >= 9 && h < 13) return 12;
    if (h >= 13 && h < 18) return 8;
    if (h >= 18 && h < 23) return 15;
    return 3;
})();
const SESSION_JITTER = Math.floor(Math.random() * 5);
function updateWatchingCount() {
    const el = document.getElementById('watchingCount');
    if (!el) return;
    const drift = Math.floor(Math.sin(Date.now() / 60000) * 2);
    el.textContent = Math.max(1, SESSION_BASE + SESSION_JITTER + drift);
}
function initWatchingCount() {
    updateWatchingCount();
    setInterval(updateWatchingCount, 45000);
}

/* ============================================================
   11. حالة الاتصال
   ============================================================ */
function updateConnectionLabel() {
    const el = document.getElementById('connectionLabel');
    const box = document.getElementById('connectionStatus');
    if (!el || !box) return;
    if (navigator.onLine) {
        el.textContent = t('onlineLabel');
        box.classList.remove('offline');
        box.classList.add('online');
    } else {
        el.textContent = t('offlineLabel');
        box.classList.remove('online');
        box.classList.add('offline');
    }
}
function initConnectionStatus() {
    updateConnectionLabel();
    window.addEventListener('online', updateConnectionLabel);
    window.addEventListener('offline', updateConnectionLabel);
}

/* ============================================================
   12. الإشعارات
   ============================================================ */
function showNotification(message) {
    const banner = document.getElementById('notificationBanner');
    const text = document.getElementById('notificationText');
    if (!banner || !text) return;
    text.textContent = message;
    banner.classList.add('show');
    setTimeout(() => banner.classList.remove('show'), 8000);
}
function closeNotification() {
    const banner = document.getElementById('notificationBanner');
    if (banner) banner.classList.remove('show');
}
function checkForNewFiles() {
    try {
        const lastVisit = Number(storageGet('lastVisitTimestamp', '0')) || 0;
        const lastSeenCount = Number(storageGet('lastSeenFileCount', '0')) || 0;
        if (!lastVisit || !allFiles.length) return;
        const currentCount = allFiles.length;
        if (lastSeenCount > 0 && currentCount > lastSeenCount) {
            const diff = currentCount - lastSeenCount;
            const msg = diff === 1 ? t('notificationNewFileOne') : t('notificationNewFiles').replace('{n}', diff);
            showNotification(msg);
        }
    } catch(e) {}
}

/* ============================================================
   13. التثبيت
   ============================================================ */
function isPinned(url) { return pinnedFiles.includes(url); }
function togglePin(url) {
    if (isPinned(url)) {
        pinnedFiles = pinnedFiles.filter(u => u !== url);
        showToast(t('toastPinRemoved'));
    } else {
        pinnedFiles.unshift(url);
        showToast(t('toastPinAdded'));
    }
    storageSet('eduPinnedFiles_v1', JSON.stringify(pinnedFiles));
    filterAndSortData();
}

/* ============================================================
   14. الفلاتر المحفوظة
   ============================================================ */
function getCurrentFilterState() {
    const $ = id => document.getElementById(id);
    return {
        search: $('searchInput')?.value || '',
        sort: $('sortFilter')?.value || 'date-desc',
        subject: $('subjectNameFilter')?.value || 'الكل',
        year: $('yearFilter')?.value || 'الكل',
        edu: $('eduFilter')?.value || 'الكل',
        major: $('majorFilter')?.value || 'الكل',
        type: $('typeFilter')?.value || 'الكل',
        semester: $('semesterFilter')?.value || 'الكل'
    };
}
function openSaveFilterModal() {
    const modal = document.getElementById('saveFilterModal');
    if (!modal) return;
    const input = document.getElementById('saveFilterName');
    if (input) input.value = '';
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
    document.body.style.overflow = 'hidden';
    setTimeout(() => { if (input) input.focus(); }, 100);
}
function closeSaveFilterModal() {
    const modal = document.getElementById('saveFilterModal');
    if (!modal) return;
    modal.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(() => modal.style.display = 'none', 300);
}
function submitSaveFilter(event) {
    event.preventDefault();
    const name = document.getElementById('saveFilterName').value.trim();
    if (!name) return;
    const state = getCurrentFilterState();
    savedFilters = savedFilters.filter(f => f.name !== name);
    savedFilters.push({ name, state, createdAt: Date.now() });
    if (savedFilters.length > 10) savedFilters = savedFilters.slice(-10);
    storageSet('eduSavedFilters_v1', JSON.stringify(savedFilters));
    renderSavedFilters();
    closeSaveFilterModal();
    showToast(t('toastFilterSaved'));
}
function applySavedFilter(name) {
    const filter = savedFilters.find(f => f.name === name);
    if (!filter) return;
    const s = filter.state;
    const $ = id => document.getElementById(id);
    if ($('searchInput')) $('searchInput').value = s.search || '';
    if ($('sortFilter')) $('sortFilter').value = s.sort || 'date-desc';
    if ($('subjectNameFilter')) $('subjectNameFilter').value = s.subject || 'الكل';
    if ($('yearFilter')) $('yearFilter').value = s.year || 'الكل';
    if ($('eduFilter')) $('eduFilter').value = s.edu || 'الكل';
    if ($('majorFilter')) $('majorFilter').value = s.major || 'الكل';
    if ($('typeFilter')) $('typeFilter').value = s.type || 'الكل';
    if ($('semesterFilter')) $('semesterFilter').value = s.semester || 'الكل';
    filterAndSortData();
    showToast(`💾 ${name}`);
}
function deleteSavedFilter(name, e) {
    if (e) e.stopPropagation();
    savedFilters = savedFilters.filter(f => f.name !== name);
    storageSet('eduSavedFilters_v1', JSON.stringify(savedFilters));
    renderSavedFilters();
    showToast(t('toastFilterDeleted'));
}
function renderSavedFilters() {
    const bar = document.getElementById('savedFiltersBar');
    const list = document.getElementById('savedFiltersList');
    if (!bar || !list) return;
    if (savedFilters.length === 0) {
        bar.style.display = 'flex';
        list.innerHTML = '';
        return;
    }
    bar.style.display = 'flex';
    list.innerHTML = savedFilters.map(f => `
        <button class="saved-filter-chip" onclick="applySavedFilter('${escapeForOnclick(f.name)}')" title="${escapeHtml(f.name)}">
            <span>${escapeHtml(f.name)}</span>
            <span class="remove-chip" onclick="deleteSavedFilter('${escapeForOnclick(f.name)}', event)">✕</span>
        </button>
    `).join('');
}

/* ============================================================
   15. الروابط العميقة
   ============================================================ */
function applyURLFilters() {
    try {
        const params = new URLSearchParams(window.location.search);
        const $ = id => document.getElementById(id);
        if (params.has('q') && $('searchInput')) $('searchInput').value = params.get('q');
        if (params.has('sort') && $('sortFilter')) $('sortFilter').value = params.get('sort');
        if (params.has('subject') && $('subjectNameFilter')) $('subjectNameFilter').value = params.get('subject');
        if (params.has('year') && $('yearFilter')) $('yearFilter').value = params.get('year');
        if (params.has('edu') && $('eduFilter')) $('eduFilter').value = params.get('edu');
        if (params.has('major') && $('majorFilter')) $('majorFilter').value = params.get('major');
        if (params.has('type') && $('typeFilter')) $('typeFilter').value = params.get('type');
        if (params.has('sem') && $('semesterFilter')) $('semesterFilter').value = params.get('sem');
    } catch(e) {}
}
function shareCurrentFilter() {
    const s = getCurrentFilterState();
    const params = new URLSearchParams();
    if (s.search) params.set('q', s.search);
    if (s.sort && s.sort !== 'date-desc') params.set('sort', s.sort);
    if (s.subject && s.subject !== 'الكل') params.set('subject', s.subject);
    if (s.year && s.year !== 'الكل') params.set('year', s.year);
    if (s.edu && s.edu !== 'الكل') params.set('edu', s.edu);
    if (s.major && s.major !== 'الكل') params.set('major', s.major);
    if (s.type && s.type !== 'الكل') params.set('type', s.type);
    if (s.semester && s.semester !== 'الكل') params.set('sem', s.semester);
    const qs = params.toString();
    const url = window.location.origin + window.location.pathname + (qs ? '?' + qs : '');
    if (navigator.share && /Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        navigator.share({ title: 'الأرشيف الأكاديمي', url }).catch(() => {
            copyToClipboard(url);
            showToast(t('toastLinkCopied'));
        });
    } else {
        copyToClipboard(url);
        showToast(t('toastLinkCopied'));
    }
}

/* ============================================================
   16. معاينة الملف
   ============================================================ */
function openPreview(url, title, list, index) {
    const modal = document.getElementById('previewModal');
    if (!modal) return;
    previewContext.list = list || [];
    previewContext.index = typeof index === 'number' ? index : -1;
    setPreviewContent(url, title);
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
    document.body.style.overflow = 'hidden';
}
function setPreviewContent(url, title) {
    const frame = document.getElementById('previewFrame');
    const titleEl = document.getElementById('previewTitleEl');
    const dlLink = document.getElementById('previewDownloadLink');
    const openLink = document.getElementById('previewOpenNewTab');
    const previewUrl = getPreviewUrl(url);
    const downloadUrl = getDirectDownload(url);
    if (frame) frame.src = previewUrl;
    if (titleEl) titleEl.textContent = title || t('previewTitle');
    if (dlLink) dlLink.href = downloadUrl;
    if (openLink) openLink.href = url;
    markUserViewed(url);
}
function getPreviewUrl(url) {
    const id = extractDriveId(url);
    if (!id) return url;
    return `https://drive.google.com/file/d/${id}/preview`;
}
function extractDriveId(url) {
    if (!url) return null;
    const patterns = [/\/d\/([a-zA-Z0-9_-]+)/, /[?&]id=([a-zA-Z0-9_-]+)/, /file\/d\/([a-zA-Z0-9_-]+)/];
    for (const p of patterns) { const m = url.match(p); if (m) return m[1]; }
    return null;
}
/* ✅ إصلاح #13: حماية أقوى */
function getDirectDownload(url) {
    if (!url || url === '#') return '#';
    try {
        const value = String(url).trim();
        if (!/^https?:\/\//i.test(value)) return '#';
        if (!/drive\.google\.com/i.test(value)) return value;
        const id = extractDriveId(value);
        return id ? `https://drive.google.com/uc?export=download&id=${encodeURIComponent(id)}` : value;
    } catch (e) { return '#'; }
}
function previewNav(dir) {
    if (!previewContext.list.length || previewContext.index < 0) return;
    previewContext.index = (previewContext.index + dir + previewContext.list.length) % previewContext.list.length;
    const file = previewContext.list[previewContext.index];
    if (file) setPreviewContent(file.url, file.title);
}
function closePreview() {
    const modal = document.getElementById('previewModal');
    const frame = document.getElementById('previewFrame');
    if (!modal) return;
    modal.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(() => { modal.style.display = 'none'; if (frame) frame.src = ''; }, 300);
}

/* ============================================================
   17. اختصارات لوحة المفاتيح
   ============================================================ */
function openShortcutsModal() {
    const modal = document.getElementById('shortcutsModal');
    if (!modal) return;
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
    document.body.style.overflow = 'hidden';
}
function closeShortcutsModal() {
    const modal = document.getElementById('shortcutsModal');
    if (!modal) return;
    modal.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(() => modal.style.display = 'none', 300);
}

/* ============================================================
   18. نموذج الإبلاغ (✅ إصلاح #8)
   ============================================================ */
function openReportModal(fileUrl, fileTitle) {
    const modal = document.getElementById('reportModal');
    if (!modal) return;
    document.getElementById('reportFileName').value = fileTitle || '';
    document.getElementById('reportDetails').value = '';
    document.getElementById('reportType').value = 'broken';
    modal.dataset.fileUrl = fileUrl || '';
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
    document.body.style.overflow = 'hidden';
}
function closeReportModal() {
    const modal = document.getElementById('reportModal');
    if (!modal) return;
    modal.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(() => modal.style.display = 'none', 300);
}
function submitReport(event) {
    event.preventDefault();
    const modal = document.getElementById('reportModal');
    if (!modal) return;
    const fileUrl = modal.dataset.fileUrl || '';
    const typeEl = document.getElementById('reportType');
    const nameEl = document.getElementById('reportFileName');
    const detailsEl = document.getElementById('reportDetails');
    const fileName = nameEl ? nameEl.value : '';
    const details = detailsEl ? detailsEl.value : '';
    const typeLabel = (typeEl && typeEl.options[typeEl.selectedIndex])
        ? typeEl.options[typeEl.selectedIndex].text
        : 'مشكلة';
    const subject = encodeURIComponent(`🚩 إبلاغ: ${typeLabel} - ${fileName}`);
    const body = encodeURIComponent(
        `الملف: ${fileName}\nالرابط: ${fileUrl}\nنوع المشكلة: ${typeLabel}\nالتفاصيل: ${details || '—'}`
    );
    try {
        const mailto = `mailto:${ADMIN_EMAIL}?subject=${subject}&body=${body}`;
        const a = document.createElement('a');
        a.href = mailto;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } catch (e) {}
    copyToClipboard(`🚩 إبلاغ - ${fileName}\nالرابط: ${fileUrl}\nالنوع: ${typeLabel}\nالتفاصيل: ${details || '—'}`);
    closeReportModal();
    showToast(t('toastReportSent'));
}

/* ============================================================
   19. وضع القراءة
   ============================================================ */
function toggleReadingMode() {
    isReadingMode = !isReadingMode;
    document.body.classList.toggle('reading-mode', isReadingMode);
    storageSet('readingMode', isReadingMode ? '1' : '0');
    showToast(isReadingMode ? t('readingModeOn') : t('readingModeOff'));
}

/* ============================================================
   20. اختصارات لوحة المفاتيح
   ============================================================ */
function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        const tag = document.activeElement ? document.activeElement.tagName : '';
        const isInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

        if (e.key === 'Escape') {
            closePreview(); closeQR(); closeExportModal(); closeMoreMenu(); closeSettingsModal();
            closeShortcutsModal(); closeReportModal(); closeSaveFilterModal(); hideSuggestions();
            return;
        }
        if (isInput) return;
        if (e.key === '?' || (e.shiftKey && e.key === '/')) {
            e.preventDefault();
            openShortcutsModal();
            return;
        }
        const key = e.key.toLowerCase();
        if (key === 's') { e.preventDefault(); document.getElementById('searchInput').focus(); }
        else if (key === 'd') { e.preventDefault(); toggleDarkMode(); }
        else if (key === 'f') { e.preventDefault(); toggleFiltersPanel(); }
        else if (key === 'm') { e.preventDefault(); toggleFavView(); }
        else if (key === 't') { e.preventDefault(); scrollToTop(); }
        else if (key === 'r') { e.preventDefault(); toggleReadingMode(); }
        else if (key === '/') { e.preventDefault(); document.getElementById('searchInput').focus(); }
    });
}
function toggleDarkMode() {
    const isDark = !document.documentElement.classList.contains('dark-mode');
    applyDarkMode(isDark);
    storageSet('darkMode', isDark ? 'on' : 'off');
    showToast(isDark ? t('toastDarkOn') : t('toastDarkOff'));
}
function applyDarkMode(isDark) {
    document.documentElement.classList.toggle('dark-mode', isDark);
    const setDark = document.getElementById('setDarkMode');
    if (setDark) setDark.value = isDark ? 'on' : 'off';
}

/* ============================================================
   21. المؤشر المخصص
   ============================================================ */
function initCustomCursor() {
    const hasFinePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cursor = document.getElementById('customCursor');
    if (!hasFinePointer || reducedMotion || !cursor) return;
    if (document.documentElement.classList.contains('perf-mode') || document.documentElement.classList.contains('no-custom-cursor')) return;
    document.body.classList.add('custom-cursor-active');
    let shown = false;
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        if (!shown) { cursor.classList.add('visible'); shown = true; }
    });
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest && e.target.closest('a, button, input, select, .file-card')) cursor.classList.add('hovering');
    });
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest && e.target.closest('a, button, input, select, .file-card')) cursor.classList.remove('hovering');
    });
    document.addEventListener('mouseleave', function() { cursor.classList.remove('visible'); shown = false; });
}

/* ============================================================
   22. آلة الكاتبة (✅ إصلاح #1 و #2)
   ============================================================ */
let phraseIndex = 0, charIndex = 0, isDeleting = false;
function typeWriter() {
    // stub آمن — الأنيميشن يتم عبر CSS class typewriter-once
    if (document.documentElement.classList.contains('no-typewriter')) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 769) return;
    const el = document.getElementById('mainTitle');
    if (el) el.classList.add('typewriter-once');
}
function initTypewriter() {
    if (document.documentElement.classList.contains('no-typewriter')) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 769) return;
    const title = document.getElementById('mainTitle');
    if (!title) return;
    title.classList.add('typewriter-once');
    setTimeout(() => { title.style.borderInlineEnd = 'none'; }, 3200);
}

/* ============================================================
   23. الهيدر الذكي
   ============================================================ */
function initSmartHeader() {
    const header = document.getElementById('pageHeader');
    if (!header) return;
    let ticking = false;
    const update = () => {
        if (window.scrollY > 80) header.classList.add('header-scrolled');
        else header.classList.remove('header-scrolled');
        ticking = false;
    };
    window.addEventListener('scroll', () => {
        if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
}

/* ============================================================
   24. Ripple
   ============================================================ */
function initRipple() {
    if (document.documentElement.classList.contains('no-ripple')) return;
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('.ripple-btn, .btn-view, .btn-down, .btn-icon, .filters-toggle-btn, .fav-toggle-btn, .load-more-btn, .settings-action-btn, .reset-btn, .save-filter-btn, .report-submit-btn');
        if (!btn) return;
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
    });
}

/* ============================================================
   25. شريط تقدم القراءة
   ============================================================ */
function initReadingProgress() {
    const bar = document.getElementById('readingProgressBar');
    if (!bar) return;
    let ticking = false;
    const update = () => {
        const dh = document.documentElement.scrollHeight - window.innerHeight;
        const progress = dh > 0 ? (window.scrollY / dh) * 100 : 0;
        bar.style.width = progress + '%';
        ticking = false;
    };
    window.addEventListener('scroll', () => {
        if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
}

/* ============================================================
   26. ميلان البطاقات (✅ إصلاح #14)
   ============================================================ */
function initCardTilt() {
    if (document.documentElement.classList.contains('no-tilt')) return;
    if (document.documentElement.classList.contains('perf-mode')) return;
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.addEventListener('mousemove', function(e) {
        if (!e.target || !e.target.closest) return;
        const card = e.target.closest('.file-card');
        if (!card) return;
        if (card.closest('.recent-scroll-grid')) return;
        const rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateY(-4px)`;
    });
    document.addEventListener('mouseout', function(e) {
        if (!e.target || !e.target.closest) return;
        const card = e.target.closest('.file-card');
        if (card) card.style.transform = '';
    });
}

/* ============================================================
   27. حجم الخط
   ============================================================ */
function applyFontScale(index) {
    const STEPS = [0.9, 1, 1.1, 1.2, 1.3];
    let i = Math.max(0, Math.min(STEPS.length - 1, index));
    document.documentElement.style.setProperty('--font-scale', String(STEPS[i]));
    document.body.style.zoom = STEPS[i];
    try { localStorage.setItem('fontScaleIndex', String(i)); } catch(e) {}
}
function increaseFontSize() { let i = parseInt(localStorage.getItem('fontScaleIndex') || '1', 10); applyFontScale(i + 1); }
function decreaseFontSize() { let i = parseInt(localStorage.getItem('fontScaleIndex') || '1', 10); applyFontScale(i - 1); }
function initFontScale() {
    let stored = null;
    try { stored = localStorage.getItem('fontScaleIndex'); } catch(e) {}
    applyFontScale(stored !== null ? parseInt(stored, 10) : 0);
}

/* ============================================================
   28. Helpers (✅ إصلاح #2 و #3)
   ============================================================ */
function escapeHtml(s) {
    if (s == null) return '';
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function escapeForOnclick(s) {
    if (s == null) return '';
    return String(s)
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'")
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\r?\n/g, '\\n')
        .replace(/\r/g, '');
}
function highlightMatch(text, query) {
    if (!query || !query.trim()) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}
function debounce(fn, wait) {
    let t; return function(...a) { clearTimeout(t); t = setTimeout(() => fn.apply(this, a), wait); };
}
function parseFileDate(d) {
    if (!d) return null;
    const raw = String(d).trim().replace(/\//g, '-');
    const p = raw.split('-').map(Number);
    if (p.length !== 3 || p.some(Number.isNaN)) return null;
    let y, m, day;
    if (String(p[0]).length === 4) [y,m,day] = p;
    else [day,m,y] = p;
    const f = new Date(y, m - 1, day);
    if (f.getFullYear() !== y || f.getMonth() !== m - 1 || f.getDate() !== day) return null;
    return f;
}
function isNew(d) {
    const f = parseFileDate(d);
    if (!f) return false;
    const now = new Date();
    f.setHours(0,0,0,0);
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diff = Math.floor((today - f) / 86400000);
    return diff >= 0 && diff <= 7;
}
function formatSmartDate(d) {
    if (!d || d === '1999-01-01') return '—';
    const f = parseFileDate(d);
    if (!f) return '—';
    const today = new Date(); today.setHours(0,0,0,0);
    f.setHours(0,0,0,0);
    const diff = Math.floor((today - f) / 86400000);
    if (diff < 0) return currentLang === 'en' ? 'Upcoming' : 'قادم';
    if (diff === 0) return t('todayLabel');
    if (diff === 1) return t('yesterdayLabel');
    if (diff <= 7) return t('daysAgo').replace('{n}', diff);
    if (diff <= 30) return t('weeksAgo').replace('{n}', Math.floor(diff/7));
    return t('monthsAgo').replace('{n}', Math.floor(diff/30));
}

/* ============================================================
   29. ألوان وأيقونات التخصص
   ============================================================ */
const MAJOR_COLORS = {
    'رياضيات':'#2563eb','رياضيات باللغة الإنجليزية':'#2563eb',
    'لغة عربية':'#059669','لغة إنجليزية':'#7c3aed',
    'كيمياء':'#db2777','كيمياء باللغة الإنجليزية':'#db2777',
    'فيزياء':'#ea580c','بيولوجي':'#16a34a','بيولوجي باللغة الإنجليزية':'#16a34a'
};
function getMajorColor(m) { return MAJOR_COLORS[m] || '#64748b'; }
const MAJOR_ICONS_SVG = {
    math:'<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M2 4h12M5 4v8M11 4v8"/></svg>',
    arabic:'<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3C6.5 2 4 2 2 2.5v9c2-.5 4.5-.5 6 .5M8 3c1.5-1 4-1 6-.5v9c-2-.5-4.5-.5-6 .5M8 3v9"/></svg>',
    english:'<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 2l3 3-8 8-3.5 1 1-3.5z"/></svg>',
    chemistry:'<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h4M6.5 2v4L3 13a1 1 0 0 0 1 1.5h8a1 1 0 0 0 1-1.5L9.5 6V2"/><path d="M4.5 10.5h7"/></svg>',
    physics:'<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="8" cy="8" r="1.3" fill="currentColor" stroke="none"/><ellipse cx="8" cy="8" rx="6" ry="2.3"/><ellipse cx="8" cy="8" rx="6" ry="2.3" transform="rotate(60 8 8)"/><ellipse cx="8" cy="8" rx="6" ry="2.3" transform="rotate(120 8 8)"/></svg>',
    biology:'<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 3C7 3 3 7 3 13c6 0 10-4 10-10z"/><path d="M4.5 11.5L11 5"/></svg>'
};
function getMajorIcon(m) {
    if (!m) return '';
    if (m.indexOf('رياضيات') === 0) return MAJOR_ICONS_SVG.math;
    if (m.indexOf('كيمياء') === 0) return MAJOR_ICONS_SVG.chemistry;
    if (m.indexOf('بيولوجي') === 0) return MAJOR_ICONS_SVG.biology;
    if (m.indexOf('عربية') !== -1) return MAJOR_ICONS_SVG.arabic;
    if (m.indexOf('إنجليزية') !== -1) return MAJOR_ICONS_SVG.english;
    if (m.indexOf('فيزياء') === 0) return MAJOR_ICONS_SVG.physics;
    return '';
}
function getFileIcon(s) {
    const tt = s.toLowerCase();
    if (tt.includes('word') || tt.includes('doc')) return '<i class="fa-solid fa-file-word file-icon" style="color:#2563eb"></i>';
    if (tt.includes('عرض') || tt.includes('ppt') || tt.includes('تقديم') || tt.includes('بوربوينت')) return '<i class="fa-solid fa-file-powerpoint file-icon" style="color:#f59e0b"></i>';
    if (tt.includes('صورة') || tt.includes('خريطة') || tt.includes('رسم')) return '<i class="fa-solid fa-file-image file-icon" style="color:#10b981"></i>';
    return '<i class="fa-solid fa-file-pdf file-icon" style="color:#ef4444"></i>';
}

/* ============================================================
   30. قائمة More
   ============================================================ */
function toggleMoreMenu(btn, url, title) {
    const popup = document.getElementById('moreMenuPopup');
    if (!popup) return;
    const wasOpen = popup.classList.contains('show') && moreMenuContext && moreMenuContext.url === url;
    closeMoreMenu();
    if (wasOpen) return;
    moreMenuContext = { url, title };
    const pinned = isPinned(url);
    const pinBtn = popup.querySelector('button[onclick*="pin"]');
    if (pinBtn) pinBtn.innerHTML = `<i class="fa-solid fa-thumbtack"></i> <span>${pinned ? (currentLang === 'ar' ? 'إلغاء التثبيت' : 'Unpin') : t('menuPin')}</span>`;
    const r = btn.getBoundingClientRect();
    let left = r.left;
    const maxLeft = window.innerWidth - 250;
    if (left > maxLeft) left = Math.max(6, maxLeft);
    popup.style.top = (r.bottom + 6) + 'px';
    popup.style.left = left + 'px';
    popup.classList.add('show');
}
function closeMoreMenu() {
    const popup = document.getElementById('moreMenuPopup');
    if (popup) popup.classList.remove('show');
    moreMenuContext = null;
}
function moreMenuAction(action) {
    if (!moreMenuContext) return;
    const ctx = moreMenuContext;
    if (action !== 'print') closeMoreMenu();
    if (action === 'qr') showQRCode(ctx.url, ctx.title);
    else if (action === 'copyLink') {
        copyToClipboard(ctx.url);
        showToast(t('toastCopied'));
    } else if (action === 'pin') {
        togglePin(ctx.url);
        closeMoreMenu();
    } else if (action === 'print') {
        printFileCard(ctx.url, ctx.title);
        closeMoreMenu();
    } else if (action === 'report') {
        openReportModal(ctx.url, ctx.title);
    }
}
document.addEventListener('click', function(e) {
    const popup = document.getElementById('moreMenuPopup');
    if (popup && popup.classList.contains('show')) {
        if (!e.target.closest('#moreMenuPopup') && !e.target.closest('.more-menu-btn')) closeMoreMenu();
    }
    if (!e.target.closest('.search-wrapper')) hideSuggestions();
});

/* ============================================================
   31. طباعة البطاقة
   ============================================================ */
function printFileCard(url, title) {
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    if (!printWindow) { window.print(); return; }
    const file = allFiles.find(f => f.url === url);
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
    printWindow.document.write(`
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
            <meta charset="UTF-8">
            <title>${escapeHtml(title)}</title>
            <style>
                body { font-family: 'Cairo', Arial, sans-serif; padding: 40px; color: #1e293b; }
                .card { max-width: 600px; margin: auto; border: 2px solid #2563eb; border-radius: 16px; padding: 30px; }
                h1 { color: #2563eb; font-size: 22px; margin: 0 0 10px; }
                .subject { color: #ef4444; font-weight: 700; margin-bottom: 20px; font-size: 15px; }
                .info { margin: 8px 0; font-size: 13px; color: #64748b; }
                .info strong { color: #0f172a; }
                .qr { text-align: center; margin-top: 25px; }
                .qr img { border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px; background: white; }
                .footer { text-align: center; margin-top: 20px; font-size: 11px; color: #94a3b8; }
                @media print { body { padding: 0; } }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>${escapeHtml(title)}</h1>
                ${file ? `<div class="subject">${t('subjectPrefix')}${escapeHtml(file.subjectName)}</div>` : ''}
                ${file ? `<div class="info"><strong>${t('authorPrefix')}</strong> ${escapeHtml(file.author)}</div>` : ''}
                ${file ? `<div class="info"><strong>${currentLang === 'ar' ? 'الفرقة' : 'Year'}:</strong> ${escapeHtml(file.year)}</div>` : ''}
                ${file ? `<div class="info"><strong>${currentLang === 'ar' ? 'التخصص' : 'Major'}:</strong> ${escapeHtml(file.major)}</div>` : ''}
                ${file ? `<div class="info"><strong>${currentLang === 'ar' ? 'الترم' : 'Semester'}:</strong> ${escapeHtml(file.semester)}</div>` : ''}
                <div class="qr">
                    <img src="${qrUrl}" alt="QR Code">
                    <div style="font-size:11px;color:#64748b;margin-top:8px;">امسح للوصول المباشر</div>
                </div>
                <div class="footer">الأرشيف الأكاديمي الرقمي · M.A.Abdalhamid</div>
            </div>
            <script>window.onload = () => { window.print(); setTimeout(() => window.close(), 500); };<\/script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

/* ============================================================
   32. QR (✅ إصلاح #16)
   ============================================================ */
function showQRCode(url, title) {
    const modal = document.getElementById('qrModal');
    const box = document.getElementById('qrcode');
    if (!modal || !box) return;
    box.innerHTML = '';
    if (typeof QRCode === 'undefined') {
        box.innerHTML = `<a href="${escapeHtml(url)}" target="_blank" rel="noopener" style="color:var(--primary-color);word-break:break-all;font-size:12px;">${escapeHtml(url)}</a>`;
    } else {
        try {
            new QRCode(box, {
                text: url, width: 160, height: 160,
                colorDark: "#0f172a", colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
        } catch (e) {
            box.innerHTML = `<div style="color:#ef4444;font-size:12px;">تعذر توليد QR</div>`;
        }
    }
    const titleEl = document.getElementById('qrTitle');
    if (titleEl) titleEl.innerText = title || '';
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
}
function closeQR() {
    const m = document.getElementById('qrModal');
    if (!m) return;
    m.classList.remove('show');
    setTimeout(() => m.style.display = 'none', 300);
}
function closeExportModal() {
    const m = document.getElementById('exportModal');
    if (!m) return;
    m.classList.remove('show');
    setTimeout(() => m.style.display = 'none', 300);
}
function closeInstallPrompt(remember = true) {
    const o = document.getElementById('installPrompt');
    if (!o) return;
    o.classList.remove('show');
    setTimeout(() => { o.style.display = 'none'; }, 400);
    if (remember) storageSet('installPromptDismissed', 'true');
}
function initInstallPrompt() {
    try {
        if (storageGet('installPromptDismissed') === 'true') return;
        if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) return;
        const ua = navigator.userAgent || '';
        const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
        const isAndroid = /android/i.test(ua);
        if (!isIOS && !isAndroid) return;
        const box = document.getElementById('installInstructions');
        if (box) box.innerHTML = isIOS ? t('installIOS') : t('installAndroid');
        const o = document.getElementById('installPrompt');
        setTimeout(() => { o.style.display = 'flex'; setTimeout(() => o.classList.add('show'), 10); }, 3000);
    } catch(e) {}
}
window.addEventListener('click', function(e) {
    if (e.target == document.getElementById('qrModal')) closeQR();
    if (e.target == document.getElementById('installPrompt')) closeInstallPrompt();
    if (e.target == document.getElementById('exportModal')) closeExportModal();
    if (e.target == document.getElementById('previewModal')) closePreview();
    if (e.target == document.getElementById('shortcutsModal')) closeShortcutsModal();
    if (e.target == document.getElementById('reportModal')) closeReportModal();
    if (e.target == document.getElementById('saveFilterModal')) closeSaveFilterModal();
});

/* ============================================================
   33. Clipboard & Share (✅ إصلاح #12)
   ============================================================ */
function copyToClipboard(text) {
    if (!text) return;
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text)
            .then(() => showToast(t('toastCopied')))
            .catch(() => fallbackCopy(text));
    } else {
        fallbackCopy(text);
    }
}
function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.top = "0";
    ta.style.left = "-9999px";
    ta.setAttribute('readonly', '');
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
        const ok = document.execCommand('copy');
        if (ok) showToast(t('toastCopied'));
    } catch (err) {}
    document.body.removeChild(ta);
}
async function nativeShare(title, text, url) {
    const data = { title, text: text + '\n\n', url };
    try { if (navigator.share) await navigator.share(data); else copyToClipboard(text + " \n " + url); }
    catch (err) { copyToClipboard(text + " \n " + url); }
}

/* ============================================================
   34. التحية والـ Toast
   ============================================================ */
function setDynamicGreeting() {
    const h = new Date().getHours();
    let g = t('greetingEvening');
    if (h >= 5 && h < 12) g = t('greetingMorning');
    else if (h >= 12 && h < 18) g = t('greetingAfternoon');
    const el = document.getElementById('dynamicGreeting');
    if (el) el.innerText = g;
}
function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerText = msg;
    toast.className = 'show';
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => { toast.className = toast.className.replace('show', ''); }, 2500);
}

/* ============================================================
   35. المفضلة
   ============================================================ */
function toggleFav(url, btn) {
    let cur = readJSON('eduFavorites_v3', []);
    if (!Array.isArray(cur)) cur = [];
    if (cur.includes(url)) {
        cur = cur.filter(u => u !== url);
        if (btn) { btn.innerHTML = '🤍'; btn.classList.remove('fav-active'); }
        showToast(t('toastFavRemove'));
    } else {
        cur.push(url);
        if (btn) { btn.innerHTML = '❤️'; btn.classList.add('fav-active'); }
        showToast(t('toastFavAdd'));
    }
    storageSet('eduFavorites_v3', JSON.stringify(cur));
    favorites = cur;
    updateUserStatsBar();
    if (isFavViewActive) filterAndSortData();
}
function exportLibrary() {
    if (!favorites.length) { showToast(t('emptyFavTitle')); return; }
    let txt = (currentLang === 'ar' ? '📚 باقة المذاكرة:\n\n' : '📚 My Study Package:\n\n');
    let i = 1;
    favorites.forEach(u => { const f = allFiles.find(x => x.url === u); if (f) { txt += `${i}. ${f.title}\n${f.url}\n\n`; i++; } });
    const preview = document.getElementById('exportTextPreview');
    if (preview) preview.value = txt;
    const opts = document.getElementById('exportShareOptions');
    const enc = encodeURIComponent(txt);
    let html = '';
    if (typeof navigator.share === 'function') html += `<button class="tool-link ripple-btn" style="display:flex; align-items:center; justify-content:center; gap:8px; width:100%; padding:12px; border:none; background:var(--primary-color); color:white; cursor:pointer; border-radius:12px;" onclick="shareViaNative()"><i class="fa-solid fa-share-nodes"></i> ${t('exportNative')}</button>`;
    html += `
        <a href="https://wa.me/?text=${enc}" target="_blank" rel="noopener noreferrer" class="tool-link" style="display:flex; align-items:center; justify-content:center; gap:8px; width:100%; padding:12px; border:none; background:#25D366; color:white; text-decoration:none; border-radius:12px;"><i class="fa-brands fa-whatsapp"></i> ${t('exportWhatsapp')}</a>
        <a href="https://t.me/share/url?url=&text=${enc}" target="_blank" rel="noopener noreferrer" class="tool-link" style="display:flex; align-items:center; justify-content:center; gap:8px; width:100%; padding:12px; border:none; background:#229ED9; color:white; text-decoration:none; border-radius:12px;"><i class="fa-brands fa-telegram"></i> ${t('exportTelegram')}</a>
        <button class="tool-link ripple-btn" style="display:flex; align-items:center; justify-content:center; gap:8px; width:100%; padding:12px; border:1.5px solid var(--border-color); background:var(--input-bg); color:var(--header-color); cursor:pointer; border-radius:12px;" onclick="copyToClipboard(document.getElementById('exportTextPreview').value)"><i class="fa-solid fa-copy"></i> ${t('exportCopy')}</button>`;
    if (opts) opts.innerHTML = html;
    const m = document.getElementById('exportModal');
    if (m) { m.style.display = 'flex'; setTimeout(() => m.classList.add('show'), 10); }
}
function shareViaNative() {
    const preview = document.getElementById('exportTextPreview');
    if (!preview) return;
    const txt = preview.value;
    navigator.share({ title: 'My Library', text: txt }).then(() => closeExportModal()).catch(() => {});
}

/* ============================================================
   36. تصدير CSV
   ============================================================ */
function exportCSV() {
    if (!allFiles.length) { showToast(t('emptyResultsTitle')); return; }
    const headers = ['Title','Subject','Year','Education','Major','Type','Semester','Date','URL','Author','Downloads'];
    const rows = allFiles.map(f => [
        f.title, f.subjectName, f.year, f.eduType, f.major, f.subjectType,
        f.semester, f.date, f.url, f.author, f.downloads
    ]);
    const csvContent = '\uFEFF' + [headers, ...rows]
        .map(row => row.map(cell => `"${String(cell || '').replace(/"/g, '""')}"`).join(','))
        .join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `archive-data-${Date.now()}.csv`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(t('toastCSVExported'));
    closeSettingsModal();
}

/* ============================================================
   37. شوهد مؤخراً
   ============================================================ */
function addToRecent(url) {
    if (!url) return;
    recentViews = recentViews.filter(u => u !== url);
    recentViews.unshift(url);
    if (recentViews.length > 4) recentViews.pop();
    storageSet('recentFilesData', JSON.stringify(recentViews));
    markUserViewed(url);
    renderRecent();
}
function renderRecent() {
    const section = document.getElementById('recentSection');
    const container = document.getElementById('recentContainer');
    if (!section || !container || !allFiles.length) { if (section) section.style.display = 'none'; return; }
    if (!recentViews.length) { section.style.display = 'none'; return; }
    section.style.display = 'block';
    const body = document.getElementById('recentBody');
    const header = document.getElementById('recentHeader');
    if (body) body.classList.toggle('open', isRecentOpen);
    if (header) header.classList.toggle('open', isRecentOpen);
    let html = '';
    recentViews.forEach(url => {
        const f = allFiles.find(x => x.url === url);
        if (!f) return;
        const sT = escapeForOnclick(f.title);
        const sU = escapeForOnclick(f.url);
        const isEdu = String(f.subjectType || '').includes('تربوي');
        html += `<div class="file-card" style="border-inline-end:4px solid ${getMajorColor(f.major)}; min-width:260px;">
            <div class="${isEdu ? 'card-badge badge-edu' : 'card-badge'}">${isEdu ? (currentLang === 'ar' ? 'تربوي' : 'Edu') : (currentLang === 'ar' ? 'تخصص' : 'Spec')}</div>
            <h3 style="margin-top:20px; font-size:1rem;">${escapeHtml(f.title)}</h3>
            <div class="subject-name"><span style="color:${getMajorColor(f.major)}; margin-inline-end:4px;">${getMajorIcon(f.major)}</span>${t('subjectPrefix')}${escapeHtml(f.subjectName)}</div>
            <div class="card-actions" style="margin-top:auto;">
                <button class="btn btn-view ripple-btn" onclick="openPreview('${sU}', '${sT}'); addToRecent('${sU}')"><i class="fa-solid fa-eye"></i> ${t('previewBtn')}</button>
            </div>
            <div class="icon-actions">
                <button class="btn-icon ripple-btn ${favorites.includes(f.url) ? 'fav-active' : ''}" onclick="toggleFav('${sU}', this)">${favorites.includes(f.url) ? '❤️' : '🤍'}</button>
                <button class="btn-icon ripple-btn" onclick="nativeShare('${sT}', '', '${sU}')"><i class="fa-solid fa-share-nodes"></i></button>
                <button class="btn-icon ripple-btn more-menu-btn" onclick="toggleMoreMenu(this, '${sU}', '${sT}')"><i class="fa-solid fa-ellipsis-vertical"></i></button>
            </div>
        </div>`;
    });
    container.innerHTML = html;
}
function toggleRecentSection() {
    isRecentOpen = !isRecentOpen;
    const body = document.getElementById('recentBody');
    const header = document.getElementById('recentHeader');
    if (body) body.classList.toggle('open', isRecentOpen);
    if (header) header.classList.toggle('open', isRecentOpen);
    storageSet('recentOpen', isRecentOpen ? '1' : '0');
}

/* ============================================================
   38. إحصائيات Hero (✅ إصلاح #15)
   ============================================================ */
function updateHeroStats() {
    const sF = document.getElementById('statFilesCount');
    const sS = document.getElementById('statStudentsCount');
    const badge = document.getElementById('lastUpdateBadge');
    if (!sF || !sS) return;
    const files = Array.isArray(allFiles) ? allFiles : [];
    const filesCount = files.length;
    let totalDownloads = 0;
    for (let i = 0; i < files.length; i++) {
        const d = parseInt(files[i].downloads, 10);
        if (!isNaN(d) && d > 0) totalDownloads += d;
    }
    const studentsCount = Math.max(totalDownloads, filesCount * 5);
    sF.textContent = String(filesCount);
    sS.textContent = String(studentsCount);
    if (badge) {
        const dates = files
            .map(f => parseFileDate(f.date))
            .filter(d => d && !isNaN(d.getTime()))
            .map(d => d.getTime());
        if (dates.length) {
            const latest = new Date(Math.max(...dates));
            const diff = Math.floor((Date.now() - latest) / 86400000);
            let txt = '';
            if (diff <= 0) txt = currentLang === 'ar' ? 'اليوم 🔥' : 'Today 🔥';
            else if (diff === 1) txt = currentLang === 'ar' ? 'منذ يوم' : '1 day ago';
            else if (diff === 2) txt = currentLang === 'ar' ? 'منذ يومين' : '2 days ago';
            else if (diff < 7) txt = currentLang === 'ar' ? `منذ ${diff} أيام` : `${diff} days ago`;
            else if (diff < 30) txt = currentLang === 'ar' ? `منذ ${Math.floor(diff/7)} أسبوع` : `${Math.floor(diff/7)} weeks ago`;
            else txt = currentLang === 'ar' ? `منذ ${Math.floor(diff/30)} شهر` : `${Math.floor(diff/30)} months ago`;
            badge.innerHTML = `<i class="fa-solid fa-circle"></i> ${currentLang === 'ar' ? 'آخر تحديث:' : 'Last update:'} ${txt}`;
        } else {
            badge.innerHTML = `<i class="fa-solid fa-circle"></i> ${currentLang === 'ar' ? 'آخر تحديث:' : 'Last update:'} ${t('unknown')}`;
        }
    }
}

/* ============================================================
   39. العداد والمساهمون
   ============================================================ */
function animateCounter(endValue) {
    const el = document.getElementById('countNum');
    if (!el) return;
    el.className = isFavViewActive ? 'count-number fav-color' : 'count-number';
    let startT = null;
    const step = (ts) => {
        if (!startT) startT = ts;
        const p = Math.min((ts - startT) / 600, 1);
        el.innerText = Math.floor(p * endValue);
        if (p < 1) requestAnimationFrame(step);
        else el.innerText = endValue;
    };
    requestAnimationFrame(step);
}
function renderContributors() {
    const section = document.getElementById('contributorsSection');
    const list = document.getElementById('contributorsList');
    if (!section || !list || !allFiles.length) return;
    const counts = {};
    allFiles.forEach(f => {
        const a = (f.author || '').trim();
        if (a && a !== 'غير محدد') counts[a] = (counts[a] || 0) + 1;
    });
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    if (!sorted.length) { section.style.display = 'none'; return; }
    section.style.display = 'block';
    const medals = ['🥇','🥈','🥉','4️⃣','5️⃣','6️⃣'];
    list.innerHTML = sorted.slice(0, 6).map(([n, c], i) => {
        const cls = i < 3 ? ` top-${i+1}` : '';
        return `<div class="contributor-item${cls}"><span class="contributor-rank">${medals[i]}</span><span class="contributor-name">${escapeHtml(n)}</span><span class="contributor-count">${c} ${currentLang === 'ar' ? 'ملف' : 'files'}</span></div>`;
    }).join('');
}

/* ============================================================
   40. الفلترة والترتيب (✅ إصلاح #9)
   ============================================================ */
function filterAndSortData() {
    const $ = id => document.getElementById(id);
    const sText = String($('searchInput')?.value || '').trim().toLocaleLowerCase(currentLang === 'ar' ? 'ar-EG' : 'en-US');
    const sort = $('sortFilter')?.value || 'date-desc';
    const subj = $('subjectNameFilter')?.value || 'الكل';
    const year = $('yearFilter')?.value || 'الكل';
    const edu = $('eduFilter')?.value || 'الكل';
    const major = $('majorFilter')?.value || 'الكل';
    const type = $('typeFilter')?.value || 'الكل';
    const sem = $('semesterFilter')?.value || 'الكل';
    if (!Array.isArray(allFiles)) allFiles = [];
    updateHeroStats();
    renderContributors();
    updateUserStatsBar();
    try {
        localStorage.setItem('savedYear', year);
        localStorage.setItem('savedEdu', edu);
        localStorage.setItem('savedMajor', major);
    } catch(e) {}
    currentFilteredFiles = allFiles.filter(f => {
        const title = String(f.title || '');
        const subjectName = String(f.subjectName || '');
        const author = String(f.author || '');
        const haystack = `${title} ${subjectName} ${author}`.toLocaleLowerCase(currentLang === 'ar' ? 'ar-EG' : 'en-US');
        const s = !sText || haystack.includes(sText);
        const ms = subj === 'الكل' || f.subjectName === subj;
        const my = year === 'الكل' || f.year === year;
        const me = edu === 'الكل' || f.eduType === edu;
        const mm = major === 'الكل' || f.major === major;
        const mt = type === 'الكل' || f.subjectType === type;
        const mse = sem === 'الكل' || f.semester === sem;
        const mf = isFavViewActive ? favorites.includes(f.url) : true;
        return s && ms && my && me && mm && mt && mse && mf;
    });
    if (sort === 'date-desc') currentFilteredFiles.sort((a,b) => (parseFileDate(b.date)?.getTime() || 0) - (parseFileDate(a.date)?.getTime() || 0));
    else if (sort === 'date-asc') currentFilteredFiles.sort((a,b) => (parseFileDate(a.date)?.getTime() || 0) - (parseFileDate(b.date)?.getTime() || 0));
    else if (sort === 'alpha') currentFilteredFiles.sort((a,b) => a.title.localeCompare(b.title, currentLang === 'ar' ? 'ar' : 'en'));
    else if (sort === 'downloads-desc') currentFilteredFiles.sort((a,b) => (b.downloads||0) - (a.downloads||0));
    currentPage = 1;
    renderFiles();
}
function loadMore() { currentPage++; renderFiles(true); }

/* ============================================================
   41. رسم البطاقات (✅ إصلاح #10)
   ============================================================ */
function renderFiles(append = false) {
    renderRecent();
    const container = document.getElementById('filesContainer');
    const loadMoreC = document.getElementById('loadMoreContainer');
    if (!container) return;
    const sText = document.getElementById('searchInput')?.value || '';
    const maxDL = Math.max(1, ...allFiles.map(f => f.downloads || 0));

    let displayList = currentFilteredFiles.slice();
    if (!isFavViewActive && pinnedFiles.length) {
        const pinnedSet = new Set(pinnedFiles);
        const pinnedItems = currentFilteredFiles.filter(f => pinnedSet.has(f.url));
        const others = currentFilteredFiles.filter(f => !pinnedSet.has(f.url));
        displayList = [...pinnedItems, ...others];
    }

    if (!append) {
        container.innerHTML = '';
        container.classList.add('fading');
        setTimeout(() => container.classList.remove('fading'), 250);
    }
    const prefixEl = document.getElementById('fileCountPrefix');
    const suffixEl = document.getElementById('fileCountSuffix');
    if (prefixEl) prefixEl.innerText = isFavViewActive ? t('filePrefixFav') : t('filePrefix');
    if (suffixEl) suffixEl.innerText = t('fileSuffix');
    animateCounter(displayList.length);

    if (!displayList.length) {
        if (loadMoreC) loadMoreC.style.display = 'none';
        if (isFavViewActive) container.innerHTML = `<div class="empty-state"><div class="empty-title">${t('emptyFavTitle')}</div><div class="empty-desc">${t('emptyFavDesc')}</div></div>`;
        else container.innerHTML = `<div class="empty-state"><div class="empty-title">${t('emptyResultsTitle')}</div><div class="empty-desc">${t('emptyResultsDesc')}</div></div>`;
        return;
    }
    const start = append ? (currentPage - 1) * ITEMS_PER_PAGE : 0;
    const end = currentPage * ITEMS_PER_PAGE;
    const sliceList = displayList.slice(start, end);

    sliceList.forEach((file, idx) => {
        const isEdu = String(file.subjectType || '').includes('تربوي');
        const isNewFile = isNew(file.date);
        const dl = getDirectDownload(file.url);
        const isFav = favorites.includes(file.url);
        const isPinnedFile = isPinned(file.url);
        const hl = (s) => highlightMatch(escapeHtml(s), sText);
        const animDelay = (idx % ITEMS_PER_PAGE) * 0.04;
        const sT = escapeForOnclick(file.title);
        const sU = escapeForOnclick(file.url);
        const majorColor = getMajorColor(file.major);
        const displayAuthor = file.author === 'غير محدد' ? t('noAuthor') : hl(file.author);
        const card = `
            <div class="file-card ${isNewFile ? 'is-new' : ''} ${isPinnedFile ? 'is-pinned' : ''}" data-major-color="${escapeHtml(file.major)}" data-file-url="${escapeHtml(file.url)}" style="--card-shadow-color: ${majorColor}40; animation-delay:${animDelay}s; border-inline-end:4px solid ${majorColor};">
                ${isPinnedFile ? '<div class="pin-badge"><i class="fa-solid fa-thumbtack"></i> ' + (currentLang === 'ar' ? 'مثبت' : 'Pinned') + '</div>' : ''}
                <div class="${isEdu ? 'card-badge badge-edu' : 'card-badge'}">${isEdu ? (currentLang === 'ar' ? 'تربوي' : 'Edu') : (currentLang === 'ar' ? 'تخصص' : 'Spec')}</div>
                ${isNewFile ? `<div class="badge-new">${currentLang === 'ar' ? 'جديد 🔥' : 'New 🔥'}</div>` : ''}
                <div class="content-area">
                    <h3>${getFileIcon(file.title + ' ' + file.subjectName)} ${hl(file.title)}</h3>
                    <div class="subject-name"><span style="color:${majorColor}; margin-inline-end:4px;">${getMajorIcon(file.major)}</span>${t('subjectPrefix')}${hl(file.subjectName)}</div>
                </div>
                <div class="meta-area">
                    <div class="file-info">${escapeHtml(translateValue(file.year))} · ${escapeHtml(translateValue(file.semester))} · ${escapeHtml(translateValue(file.major))} · ${escapeHtml(translateValue(file.eduType))}</div>
                    <div class="file-info"><strong>${t('authorPrefix')}</strong> <span class="author-name">${displayAuthor}</span></div>
                    <div class="file-date"><i class="fa-regular fa-calendar"></i> ${t('datePrefix')}${formatSmartDate(file.date)}${file.downloads > 0 ? ` <span class="download-count-pill"><i class="fa-solid fa-fire"></i> ${file.downloads}</span>` : ''}</div>
                    ${file.downloads > 0 ? `<div class="popularity-bar"><div class="popularity-bar-fill" style="width:${Math.round((file.downloads/maxDL)*100)}%"></div></div>` : ''}
                </div>
                <div class="action-area">
                    <div class="card-actions">
                        <button class="btn btn-view ripple-btn" onclick="openPreview('${sU}', '${sT}', getCurrentFilteredList(), getFileIndexInList('${sU}')); addToRecent('${sU}')"><i class="fa-solid fa-eye"></i> ${t('previewBtn')}</button>
                        <a href="${escapeHtml(dl)}" class="btn btn-down ripple-btn" target="_blank" rel="noopener noreferrer" onclick="trackDownload('${escapeForOnclick(file.id || file.url)}'); markUserDownloaded('${sU}'); addToRecent('${sU}')"><i class="fa-solid fa-download"></i> ${t('downloadBtn')}</a>
                    </div>
                    <div class="icon-actions">
                        <button class="btn-icon ripple-btn ${isFav ? 'fav-active' : ''}" onclick="toggleFav('${sU}', this)">${isFav ? '❤️' : '🤍'}</button>
                        <button class="btn-icon ripple-btn ${isPinnedFile ? 'pin-active' : ''}" onclick="togglePin('${sU}')" title="${currentLang === 'ar' ? 'تثبيت' : 'Pin'}"><i class="fa-solid fa-thumbtack"></i></button>
                        <button class="btn-icon ripple-btn" onclick="nativeShare('${sT}', '', '${sU}')"><i class="fa-solid fa-share-nodes"></i></button>
                        <button class="btn-icon ripple-btn more-menu-btn" onclick="toggleMoreMenu(this, '${sU}', '${sT}')"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                    </div>
                </div>
            </div>`;
        container.insertAdjacentHTML('beforeend', card);
    });
    if (loadMoreC) loadMoreC.style.display = (end < displayList.length) ? 'block' : 'none';
}

/* ✅ إصلاح #3 و #17 */
function getCurrentFilteredList() {
    if (!Array.isArray(currentFilteredFiles)) return [];
    return currentFilteredFiles.map(f => ({ url: f.url, title: f.title }));
}
function getFileIndexInList(url) {
    if (!url) return -1;
    const decoded = String(url)
        .replace(/\\\\/g, '\\')
        .replace(/\\'/g, "'")
        .replace(/\\n/g, '\n');
    return currentFilteredFiles.findIndex(f => f.url === decoded);
}

/* ============================================================
   42. الاقتراحات
   ============================================================ */
function showSuggestions(query) {
    const box = document.getElementById('searchSuggestions');
    if (!box) return;
    const q = (query || '').trim().toLowerCase();
    if (q.length < 1) {
        if (searchHistory.length) {
            box.innerHTML = `
                <div class="suggestion-section-label">
                    <span><i class="fa-solid fa-clock-rotate-left"></i> ${currentLang === 'ar' ? 'عمليات بحث سابقة' : 'Recent searches'}</span>
                    <button class="clear-history-btn" onclick="clearSearchHistory(); hideSuggestions();">${currentLang === 'ar' ? 'مسح' : 'Clear'}</button>
                </div>
                ${searchHistory.map(s => `
                    <div class="suggestion-item" onclick="pickSuggestion('${escapeForOnclick(s)}')">
                        <i class="fa-solid fa-clock-rotate-left suggestion-icon"></i>
                        <div style="flex:1; min-width:0; overflow:hidden;">${escapeHtml(s)}</div>
                    </div>
                `).join('')}
            `;
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
        return;
    }
    const results = allFiles.map(f => {
        let score = 0;
        if (f.title.toLowerCase().includes(q)) score += 10;
        if (f.subjectName.toLowerCase().includes(q)) score += 6;
        if (f.author.toLowerCase().includes(q)) score += 3;
        return { f, score };
    }).filter(r => r.score > 0).sort((a, b) => b.score - a.score).slice(0, 6);
    if (!results.length) { box.classList.remove('show'); return; }
    box.innerHTML = results.map(r => `
        <div class="suggestion-item" onclick="pickSuggestion('${escapeForOnclick(r.f.title)}')">
            <i class="fa-solid fa-file-pdf suggestion-icon"></i>
            <div style="flex:1; min-width:0; overflow:hidden;">
                <div style="font-weight:800; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${highlightMatch(escapeHtml(r.f.title), query)}</div>
                <div style="font-size:11px; color:var(--text-muted);">${highlightMatch(escapeHtml(r.f.subjectName), query)}</div>
            </div>
        </div>
    `).join('');
    box.classList.add('show');
}
function pickSuggestion(title) {
    const el = document.getElementById('searchInput');
    if (el) el.value = title;
    saveSearchToHistory(title);
    hideSuggestions();
    filterAndSortData();
}
function hideSuggestions() {
    const box = document.getElementById('searchSuggestions');
    if (box) box.classList.remove('show');
}

/* ============================================================
   43. جلب الملفات (✅ إصلاح #11)
   ============================================================ */
async function fetchFiles() {
    let cached = [];
    try {
        const cd = await Store.get(CACHE_KEY, null);
        if (cd) {
            const parsed = typeof cd === 'string' ? JSON.parse(cd) : cd;
            cached = normalizeFiles(parsed);
        }
    } catch(e) { cached = []; }
    if (cached.length) {
        allFiles = cached;
        populateSubjectDropdown(allFiles);
        applyURLFilters();
        filterAndSortData();
    }
    const ok = await fetchFilesSilently();
    if (!ok && cached.length) showToast(currentLang === 'ar' ? '⚠️ تعذر التحديث — تم عرض آخر نسخة محفوظة' : '⚠️ Refresh failed — showing saved data');
    else if (!ok && !cached.length) {
        const fc = document.getElementById('fileCountContainer');
        if (fc) fc.innerHTML = '';
        const container = document.getElementById('filesContainer');
        if (container) container.innerHTML = `<div class="empty-state"><div class="empty-title">${t('loadingFiles')}</div><div class="empty-desc">${currentLang === 'ar' ? 'تحقق من اتصال الإنترنت ثم أعد المحاولة.' : 'Check your internet connection and try again.'}</div><button class="load-more-btn ripple-btn" style="margin-top:18px" onclick="fetchFiles()">${currentLang === 'ar' ? 'إعادة المحاولة' : 'Retry'}</button></div>`;
    }
    return !!ok || !!cached.length;
}
function parseTSV(text) {
    const rows = [];
    let row = [], field = '', quoted = false;
    for (let i = 0; i < text.length; i++) {
        const ch = text[i], next = text[i + 1];
        if (ch === '"') {
            if (quoted && next === '"') { field += '"'; i++; }
            else quoted = !quoted;
        } else if (ch === '\t' && !quoted) {
            row.push(field); field = '';
        } else if ((ch === '\n' || ch === '\r') && !quoted) {
            if (ch === '\r' && next === '\n') i++;
            row.push(field); field = '';
            if (row.some(v => String(v).trim() !== '')) rows.push(row);
            row = [];
        } else field += ch;
    }
    if (field !== '' || row.length) { row.push(field); if (row.some(v => String(v).trim() !== '')) rows.push(row); }
    return rows;
}
function normalizeFile(raw) {
    const get = (i, fallback) => String(raw?.[i] ?? fallback).replace(/^\uFEFF/, '').trim() || fallback;
    return {
        title: get(0, 'بدون اسم'), subjectName: get(1, 'غير محدد'), year: get(2, 'الكل'),
        eduType: get(3, 'الكل'), major: get(4, 'الكل'), subjectType: get(5, 'الكل'),
        semester: get(6, 'الكل'), date: get(7, '1999-01-01'), url: get(8, '#'),
        author: get(9, 'غير محدد'), downloads: Math.max(0, Number.parseInt(get(10, '0'), 10) || 0), id: get(11, '')
    };
}
function normalizeFiles(list) {
    return Array.isArray(list) ? list.map(f => normalizeFile([
        f?.title, f?.subjectName, f?.year, f?.eduType, f?.major, f?.subjectType,
        f?.semester, f?.date, f?.url, f?.author, f?.downloads, f?.id
    ])).filter(f => f.url !== '#') : [];
}
async function fetchFilesSilently() {
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000);
        const resp = await fetch(TSV_URL, { cache: 'no-store', signal: controller.signal });
        clearTimeout(timeout);
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const data = await resp.text();
        if (!data || data.trim().length < 10) throw new Error('Empty response');
        const rows = parseTSV(data);
        const parsed = rows.slice(1).map(normalizeFile).filter(f => f.url !== '#');
        if (!parsed.length) throw new Error('Empty dataset');
        allFiles = parsed;
        await Store.setJSON(CACHE_KEY, allFiles);
        await Store.set(CACHE_TIME_KEY, String(Date.now()));
        populateSubjectDropdown(allFiles);
        applyURLFilters();
        filterAndSortData();
        checkForNewFiles();
        return true;
    } catch (e) {
        console.warn('Archive refresh failed:', e);
        return false;
    }
}
/* ✅ إصلاح #6 */
function populateSubjectDropdown(files) {
    const f = document.getElementById('subjectNameFilter');
    if (!f) return;
    if (!Array.isArray(files)) files = [];
    const val = f.value;
    const unique = [...new Set(
        files.map(x => x && x.subjectName).filter(s =>
            s && s !== '—' && s !== 'الكل' && s !== 'غير محدد'
        )
    )].sort((a, b) => a.localeCompare(b, 'ar'));
    let html = `<option value="الكل">${t('filterSubject')}</option>`;
    unique.forEach(s => html += `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`);
    f.innerHTML = html;
    if (val && [...f.options].some(o => o.value === val)) f.value = val;
}

/* ============================================================
   44. تحديث سريع
   ============================================================ */
async function quickRefresh() {
    const btn = document.getElementById('quickRefreshBtn');
    if (btn) btn.classList.add('spinning');
    await Store.remove(CACHE_KEY);
    await Store.remove(CACHE_TIME_KEY);
    const ok = await fetchFilesSilently();
    if (btn) setTimeout(() => btn.classList.remove('spinning'), 600);
    if (ok) showToast(t('toastRefreshed'));
}

/* ============================================================
   45. تبديلات الواجهة
   ============================================================ */
function toggleView(style) {
    currentViewStyle = style;
    storageSet('eduViewStyle', style);
    document.getElementById('gridViewBtn')?.classList.toggle('active', style === 'grid');
    document.getElementById('listViewBtn')?.classList.toggle('active', style === 'list');
    document.getElementById('filesContainer')?.classList.toggle('list-view', style === 'list');
}
function toggleFavView() {
    isFavViewActive = !isFavViewActive;
    const b = document.getElementById('favToggleBtn');
    if (!b) return;
    b.classList.toggle('active', isFavViewActive);
    b.innerHTML = isFavViewActive ? t('favBtnActive') : t('favBtn');
    const exp = document.getElementById('exportFavBtn');
    if (exp) exp.style.display = isFavViewActive ? 'inline-flex' : 'none';
    filterAndSortData();
}
function toggleFiltersPanel() {
    const p = document.getElementById('filtersPanel');
    const b = document.getElementById('filtersToggleBtn');
    if (!p) return;
    const hidden = !p.style.display || p.style.display === 'none';
    p.style.display = hidden ? 'block' : 'none';
    if (b) b.classList.toggle('active', hidden);
}
function resetAllFilters() {
    const $ = id => document.getElementById(id);
    if ($('searchInput')) $('searchInput').value = '';
    if ($('sortFilter')) $('sortFilter').value = 'date-desc';
    document.querySelectorAll('.filter-select:not(.sort-select)').forEach(el => el.value = 'الكل');
    isFavViewActive = false;
    const fav = $('favToggleBtn');
    if (fav) {
        fav.classList.remove('active');
        fav.innerHTML = t('favBtn');
    }
    const exp = $('exportFavBtn');
    if (exp) exp.style.display = 'none';
    filterAndSortData();
    showToast(t('toastReset'));
}
function toggleFAQ(el) {
    const p = el.parentElement;
    document.querySelectorAll('.faq-item').forEach(i => { if (i !== p) i.classList.remove('active'); });
    p.classList.toggle('active');
}
function toggleToolsSection() {
    const w = document.getElementById('toolsContentWrapper');
    const b = document.getElementById('toggleToolsBtn');
    if (!w) return;
    if (w.style.display === 'none' || !w.style.display) {
        w.style.display = 'block';
        if (b) {
            b.innerHTML = '<i class="fa-solid fa-chevron-up"></i> ' + (currentLang === 'ar' ? 'إغلاق' : 'Close');
            b.style.background = 'var(--primary-color)';
            b.style.color = 'white';
        }
    } else {
        w.style.display = 'none';
        if (b) {
            b.innerHTML = `<i class="fa-solid fa-toolbox"></i> ${t('toolsExplore')}`;
            b.style.background = 'transparent';
            b.style.color = 'var(--primary-color)';
        }
    }
}
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

/* ============================================================
   46. مكتبة الأدوات
   ============================================================ */
const allToolsData = [
    {cat:"math",title:"GeoGebra",desc:"أداة هندسية تفاعلية للرياضيات.",descEn:"Interactive geometry tool.",url:"https://www.geogebra.org/",icon:"fa-calculator"},
    {cat:"math",title:"Desmos",desc:"آلة حاسبة رسومية.",descEn:"Graphing calculator.",url:"https://www.desmos.com/",icon:"fa-chart-line"},
    {cat:"math",title:"Wolfram Alpha",desc:"محرك معرفي للمعادلات.",descEn:"Knowledge engine.",url:"https://www.wolframalpha.com/",icon:"fa-square-root-variable"},
    {cat:"math",title:"PhET",desc:"محاكاة تفاعلية للعلوم.",descEn:"Interactive simulations.",url:"https://phet.colorado.edu/ar/",icon:"fa-atom"},
    {cat:"math",title:"Symbolab",desc:"حل المعادلات خطوة بخطوة.",descEn:"Step-by-step solver.",url:"https://www.symbolab.com/",icon:"fa-subscript"},
    {cat:"math",title:"Mathway",desc:"حل مسائل الجبر والتفاضل.",descEn:"Math solver.",url:"https://www.mathway.com/",icon:"fa-infinity"},
    {cat:"math",title:"Ptable",desc:"الجدول الدوري التفاعلي.",descEn:"Periodic table.",url:"https://ptable.com/",icon:"fa-vial"},
    {cat:"math",title:"Khan Academy",desc:"شروحات مرئية رائعة.",descEn:"Video lessons.",url:"https://ar.khanacademy.org/",icon:"fa-book"},
    {cat:"math",title:"Brilliant",desc:"تعلم تفاعلي.",descEn:"Learn interactively.",url:"https://brilliant.org/",icon:"fa-lightbulb"},
    {cat:"math",title:"ChemSpider",desc:"قاعدة بيانات كيميائية.",descEn:"Chemical database.",url:"http://www.chemspider.com/",icon:"fa-flask"},
    {cat:"edu",title:"Edutopia",desc:"استراتيجيات تدريس حديثة.",descEn:"Modern teaching strategies.",url:"https://www.edutopia.org/",icon:"fa-chalkboard-user"},
    {cat:"edu",title:"Simply Psychology",desc:"مرجع علم النفس.",descEn:"Psychology reference.",url:"https://www.simplypsychology.org/",icon:"fa-brain"},
    {cat:"edu",title:"APA PsycNet",desc:"قاعدة بيانات APA.",descEn:"APA database.",url:"https://psycnet.apa.org/",icon:"fa-user-doctor"},
    {cat:"edu",title:"Quizlet",desc:"بطاقات تفاعلية.",descEn:"Flashcards.",url:"https://quizlet.com/",icon:"fa-layer-group"},
    {cat:"edu",title:"Kahoot!",desc:"اختبارات تفاعلية.",descEn:"Quizzes.",url:"https://kahoot.com/",icon:"fa-gamepad"},
    {cat:"edu",title:"Coursera",desc:"دورات جامعية.",descEn:"University courses.",url:"https://www.coursera.org/",icon:"fa-certificate"},
    {cat:"edu",title:"TED-Ed",desc:"دروس فيديو.",descEn:"Video lessons.",url:"https://ed.ted.com/",icon:"fa-video"},
    {cat:"research",title:"Google Scholar",desc:"البحث العلمي.",descEn:"Academic search.",url:"https://scholar.google.com/",icon:"fa-graduation-cap"},
    {cat:"research",title:"بنك المعرفة المصري",desc:"وصول مجاني للمجلات.",descEn:"Egyptian Knowledge Bank.",url:"https://www.ekb.eg/",icon:"fa-book-open"},
    {cat:"research",title:"Zotero",desc:"تنظيم المراجع.",descEn:"Reference manager.",url:"https://www.zotero.org/",icon:"fa-bookmark"},
    {cat:"research",title:"DOAJ",desc:"مجلات مفتوحة.",descEn:"Open journals.",url:"https://doaj.org/",icon:"fa-globe"},
    {cat:"research",title:"Internet Archive",desc:"مكتبة رقمية.",descEn:"Digital library.",url:"https://archive.org/",icon:"fa-building-columns"},
    {cat:"research",title:"ResearchGate",desc:"شبكة باحثين.",descEn:"Research network.",url:"https://www.researchgate.net/",icon:"fa-network-wired"},
    {cat:"research",title:"Mendeley",desc:"مدير مراجع.",descEn:"Reference manager.",url:"https://www.mendeley.com/",icon:"fa-book-bookmark"},
    {cat:"research",title:"PubMed",desc:"أبحاث طبية.",descEn:"Medical research.",url:"https://pubmed.ncbi.nlm.nih.gov/",icon:"fa-microscope"},
    {cat:"writing",title:"DeepL",desc:"مترجم دقيق.",descEn:"Accurate translator.",url:"https://www.deepl.com/",icon:"fa-language"},
    {cat:"writing",title:"ChatPDF",desc:"تلخيص PDF.",descEn:"PDF summary.",url:"https://www.chatpdf.com/",icon:"fa-file-pdf"},
    {cat:"writing",title:"QuillBot",desc:"إعادة صياغة.",descEn:"Paraphrasing.",url:"https://quillbot.com/",icon:"fa-pen-nib"},
    {cat:"writing",title:"Grammarly",desc:"تصحيح إنجليزي.",descEn:"Grammar check.",url:"https://www.grammarly.com/",icon:"fa-spell-check"},
    {cat:"writing",title:"Hemingway",desc:"تبسيط الجمل.",descEn:"Simplify sentences.",url:"https://hemingwayapp.com/",icon:"fa-feather"},
    {cat:"writing",title:"Reverso Context",desc:"مترجم سياقي.",descEn:"Contextual translator.",url:"https://context.reverso.net/",icon:"fa-closed-captioning"},
    {cat:"writing",title:"ProWritingAid",desc:"تدقيق متقدم.",descEn:"Advanced review.",url:"https://prowritingaid.com/",icon:"fa-marker"},
    {cat:"design",title:"Canva",desc:"تصميم عروض.",descEn:"Design presentations.",url:"https://www.canva.com/",icon:"fa-palette"},
    {cat:"design",title:"Affinity",desc:"موارد تصميم.",descEn:"Design resources.",url:"https://affinity.serif.com/",icon:"fa-bezier-curve"},
    {cat:"design",title:"Slidesgo",desc:"قوالب PowerPoint.",descEn:"PPT templates.",url:"https://slidesgo.com/",icon:"fa-images"},
    {cat:"design",title:"Prezi",desc:"عروض ديناميكية.",descEn:"Dynamic presentations.",url:"https://prezi.com/",icon:"fa-circle-nodes"},
    {cat:"design",title:"Remove.bg",desc:"إزالة الخلفية.",descEn:"Remove background.",url:"https://www.remove.bg/",icon:"fa-eraser"},
    {cat:"design",title:"Flaticon",desc:"أيقونات مجانية.",descEn:"Free icons.",url:"https://www.flaticon.com/",icon:"fa-icons"},
    {cat:"design",title:"Freepik",desc:"صور وفيكتور.",descEn:"Images and vectors.",url:"https://www.freepik.com/",icon:"fa-vector-square"},
    {cat:"design",title:"Color Hunt",desc:"لوحات ألوان.",descEn:"Color palettes.",url:"https://colorhunt.co/",icon:"fa-fill-drip"},
    {cat:"productivity",title:"Notion",desc:"مساحة عمل.",descEn:"Workspace.",url:"https://www.notion.so/",icon:"fa-list-check"},
    {cat:"productivity",title:"Trello",desc:"تنظيم مهام.",descEn:"Task organizer.",url:"https://trello.com/",icon:"fa-columns"},
    {cat:"productivity",title:"Pomofocus",desc:"مؤقت بومودورو.",descEn:"Pomodoro timer.",url:"https://pomofocus.io/",icon:"fa-stopwatch"},
    {cat:"productivity",title:"Forest",desc:"منع التشتت.",descEn:"Stay focused.",url:"https://www.forestapp.cc/",icon:"fa-tree"},
    {cat:"productivity",title:"Google Keep",desc:"ملاحظات سريعة.",descEn:"Quick notes.",url:"https://keep.google.com/",icon:"fa-note-sticky"},
    {cat:"productivity",title:"Todoist",desc:"مدير مهام.",descEn:"Task manager.",url:"https://todoist.com/",icon:"fa-clipboard-list"},
    {cat:"utilities",title:"I Love PDF",desc:"أدوات PDF.",descEn:"PDF tools.",url:"https://www.ilovepdf.com/",icon:"fa-file-export"},
    {cat:"utilities",title:"Convertio",desc:"محول صيغ.",descEn:"Format converter.",url:"https://convertio.co/",icon:"fa-right-left"},
    {cat:"utilities",title:"WeTransfer",desc:"إرسال ملفات.",descEn:"Send files.",url:"https://wetransfer.com/",icon:"fa-share-nodes"},
    {cat:"utilities",title:"TinyWow",desc:"أدوات مجانية.",descEn:"Free tools.",url:"https://tinywow.com/",icon:"fa-wand-magic-sparkles"}
];
function renderToolsDOM(arr) {
    const grid = document.getElementById('toolsGrid');
    if (!grid) return;
    if (!arr.length) { grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:30px; color:var(--text-muted);">${t('noTools')}</div>`; return; }
    grid.innerHTML = arr.map(tool => {
        const desc = currentLang === 'en' ? (tool.descEn || tool.desc) : tool.desc;
        return `<a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tool-item-card">
            <i class="fa-solid ${tool.icon} tool-icon"></i>
            <h4 class="tool-title">${tool.title}</h4>
            <p class="tool-desc">${desc}</p>
            <div class="tool-link-text">${currentLang === 'en' ? 'Visit' : 'زيارة'} <i class="fa-solid fa-arrow-${currentLang === 'ar' ? 'left' : 'right'}"></i></div>
        </a>`;
    }).join('');
}
function filterTools(cat, btn) {
    currentToolsFilter = cat;
    document.querySelectorAll('.tool-filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const inp = document.getElementById('toolsSearchInput');
    if (inp) inp.value = '';
    renderToolsDOM(cat === 'all' ? allToolsData : allToolsData.filter(t => t.cat === cat));
}
function searchTools() {
    const inp = document.getElementById('toolsSearchInput');
    if (!inp) return;
    const q = inp.value.toLowerCase();
    const base = currentToolsFilter === 'all' ? allToolsData : allToolsData.filter(t => t.cat === currentToolsFilter);
    renderToolsDOM(base.filter(t => t.title.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || (t.descEn || '').toLowerCase().includes(q)));
}

/* ============================================================
   47. التهيئة
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    applyAllSettingsOnLoad();
    initCustomCursor();
    initReadingProgress();
    initSmartHeader();
    initRipple();
    initTypewriter();
    initCardTilt();
    initKeyboardShortcuts();
    initConnectionStatus();
    initWatchingCount();
    typeWriter();
    toggleView(currentViewStyle);
    renderToolsDOM(allToolsData);
    initInstallPrompt();
    renderSavedFilters();
    updateUserStatsBar();

    if (storageGet('readingMode') === '1') {
        isReadingMode = true;
        document.body.classList.add('reading-mode');
    }
    const lastVisit = Number(storageGet('lastVisitTimestamp', '0')) || 0;
    if (lastVisit) userStats.lastVisit = lastVisit;

    try {
        if (localStorage.getItem('savedYear')) document.getElementById('yearFilter').value = localStorage.getItem('savedYear');
        if (localStorage.getItem('savedEdu')) document.getElementById('eduFilter').value = localStorage.getItem('savedEdu');
        if (localStorage.getItem('savedMajor')) document.getElementById('majorFilter').value = localStorage.getItem('savedMajor');
    } catch(e) {}
    fetchFiles();
    renderRecent();
    updateUserStatsBar();

    const now = Date.now();
    storageSet('lastVisitTimestamp', String(now));

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            showSuggestions(this.value);
        });
        searchInput.addEventListener('blur', function() {
            const val = this.value.trim();
            if (val.length >= 2) saveSearchToHistory(val);
        });
        searchInput.addEventListener('input', debounce(() => {
            showSuggestions(searchInput.value);
            filterAndSortData();
        }, 220));
    }
});

/* ============================================================
   48. الأحداث العامة
   ============================================================ */
window.addEventListener('scroll', function() {
    const btn = document.getElementById('scrollTopBtn');
    if (btn) btn.style.display = window.scrollY > 300 ? 'flex' : 'none';
}, { passive: true });

document.querySelectorAll('.filter-select').forEach(el => el.addEventListener('change', filterAndSortData));

window.addEventListener('beforeunload', function() {
    if (allFiles.length) storageSet('lastSeenFileCount', String(allFiles.length));
    storageSet('lastVisitTimestamp', String(Date.now()));
});
setTimeout(() => {
    if (allFiles.length) storageSet('lastSeenFileCount', String(allFiles.length));
}, 3000);

/* ============================================================
   49. ربط روابط التواصل
   ============================================================ */
try {
    const emailBtn = document.getElementById('contactEmailBtn');
    if (emailBtn) emailBtn.href = `mailto:${ADMIN_EMAIL}?subject=مشاركة ملخص جديد`;
    const formBtn = document.getElementById('contactFormBtn');
    if (formBtn) formBtn.href = GOOGLE_FORM_URL;
} catch(e) {}

console.log('✅ app.js loaded successfully');
