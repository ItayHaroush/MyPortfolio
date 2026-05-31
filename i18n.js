(function () {
    'use strict';

    const STORAGE_KEY = 'portfolio-lang';

    const CONTACT = {
        email: 'itay@itaysolutions.com',
        whatsappUrl: 'https://wa.me/972547466508'
    };

    const translations = {
        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.projects': 'Projects',
            'meta.indexDesc': 'Professional Web Development & Software Solutions',
            'meta.aboutDesc': 'About Itay Haroush - Full Stack Developer',
            'meta.projectsDesc': 'Itay Haroush - Projects Portfolio',
            'meta.indexTitle': 'Itay Haroush - Full Stack Developer',
            'meta.aboutTitle': 'About Itay Haroush',
            'meta.projectsTitle': 'My Projects',
            'home.greeting': "Hello, I'm",
            'home.roleHtml': 'Full-Stack Developer & <span>Digital Solutions Creator</span>',
            'home.bio': 'Building websites, business systems, and modern web applications with a focus on user experience, performance, and solving real problems.',
            'home.projectsBtn': 'My Projects',
            'home.contactBtn': 'WhatsApp',
            'home.photoAlt': 'Itay Haroush - Professional Developer',
            'about.title': 'About Me',
            'about.p1': "Hi, I'm Itay Haroush, a Full-Stack Software Engineering student and web developer from Israel.",
            'about.p2': 'My professional journey began in a completely different world — managing a high-volume professional kitchen serving over 150 customers daily. That experience taught me how to work under pressure, solve problems quickly, manage complex operations, and focus on delivering results.',
            'about.p3': 'In 2023, I decided to follow my passion for technology and software development. I started my studies at Kinneret Technological College and later continued my Software Engineering studies at The College of Management in Haifa, specializing in Full-Stack Development.',
            'about.p4': 'Today, I build modern web applications and business systems using technologies such as JavaScript, React, PHP, MySQL, TypeScript, Java, C, HTML and CSS. I enjoy turning ideas into real products — from planning and development to deployment and ongoing improvements. My focus is creating solutions that are clean, scalable, user-friendly, and built to solve real business problems.',
            'about.p5': "Alongside my studies, I have developed multiple projects including business management systems, appointment scheduling platforms, restaurant ordering systems, and websites for real clients. I'm always looking to grow as a developer, take on new challenges, and contribute to meaningful products and teams.",
            'about.skills': 'Skills',
            'skills.frontend': 'Frontend',
            'skills.backend': 'Backend',
            'skills.languages': 'Programming Languages',
            'skills.tools': 'Tools & Technologies',
            'skills.restApis': 'REST APIs',
            'skills.responsive': 'Responsive Design',
            'skills.vps': 'VPS Deployment',
            'contact.title': 'Get in Touch',
            'contact.intro': "Have a project in mind? Edit the message below and I'll get back to you on WhatsApp.",
            'contact.messageLabel': 'Your message',
            'contact.defaultMessage': "Hi Itay, I visited your portfolio and I'd like to discuss a project.",
            'contact.whatsapp': 'Send on WhatsApp',
            'projects.title': 'My Projects',
            'projects.introHtml': 'Here are some of the projects I have worked on during my studies.<br>Filter by type to explore.',
            'filter.all': 'All',
            'filter.webapp': 'Web App',
            'filter.landing': 'Business Landing',
            'filter.portfolio': 'Portfolio',
            'filter.game': 'Game',
            'projects.view': 'View Project',
            'projects.homepage': 'Homepage',
            'projects.noImage': 'No Image',
            'footer.tagline': 'Itay Haroush - Development Solutions',
            'footer.rights': 'All rights reserved.',
            'footer.logoAlt': 'Itay Solutions Logo'
        },
        he: {
            'nav.home': 'בית',
            'nav.about': 'אודות',
            'nav.projects': 'פרויקטים',
            'meta.indexDesc': 'פיתוח אתרים ופתרונות תוכנה מקצועיים',
            'meta.aboutDesc': 'אודות איתי הרוש - מפתח Full Stack',
            'meta.projectsDesc': 'איתי הרוש - תיק פרויקטים',
            'meta.indexTitle': 'איתי הרוש - מפתח Full Stack',
            'meta.aboutTitle': 'אודות איתי הרוש',
            'meta.projectsTitle': 'הפרויקטים שלי',
            'home.greeting': 'שלום, אני',
            'home.roleHtml': 'מפתח <span>Full-Stack</span> ו<span>יוצר פתרונות דיגיטליים</span>',
            'home.bio': 'בונה אתרים, מערכות עסקיות ואפליקציות ווב מודרניות עם דגש על חוויית משתמש, ביצועים ופתרון בעיות אמיתיות.',
            'home.projectsBtn': 'הפרויקטים שלי',
            'home.contactBtn': 'ווטסאפ',
            'home.photoAlt': 'איתי הרוש - מפתח מקצועי',
            'about.title': 'אודותיי',
            'about.p1': 'שלום, אני איתי הרוש, סטודנט להנדסת תוכנה Full-Stack ומפתח אתרים מישראל.',
            'about.p2': 'המסע המקצועי שלי התחיל בעולם אחר לגמרי — ניהול מטבח מקצועי בעומס גבוה המגיש למעלה מ-150 לקוחות ביום. החוויה הזו לימדה אותי לעבוד תחת לחץ, לפתור בעיות במהירות, לנהל תפעול מורכב ולהתמקד בתוצאות.',
            'about.p3': 'ב-2023 החלטתי ללכת אחרי התשוקה שלי לטכנולוגיה ופיתוח תוכנה. התחלתי את לימודי במכללה הטכנולוגית כנרת והמשכתי את לימודי בהנדסת תוכנה במכללה למנהל בחיפה, בהתמחות ב-Full-Stack.',
            'about.p4': 'היום אני בונה אפליקציות ווב מודרניות ומערכות עסקיות בטכנולוגיות כמו JavaScript, React, PHP, MySQL, TypeScript, Java, C, HTML ו-CSS. אני נהנה להפוך רעיונות למוצרים אמיתיים — מתכנון ופיתוח ועד פריסה ושיפורים שוטפים. המיקוד שלי הוא פתרונות נקיים, סקלביליים, ידידותיים למשתמש ושפותרים בעיות עסקיות אמיתיות.',
            'about.p5': 'במקביל ללימודים פיתחתי פרויקטים רבים, כולל מערכות ניהול עסק, פלטפורמות לניהול תורים, מערכות הזמנות למסעדות ואתרים ללקוחות אמיתיים. תמיד מחפש להתפתח כמפתח, לקחת אתגרים חדשים ולתרום למוצרים ולצוותים משמעותיים.',
            'about.skills': 'מיומנויות',
            'skills.frontend': 'פרונטאנד',
            'skills.backend': 'בק-אנד',
            'skills.languages': 'שפות תכנות',
            'skills.tools': 'כלים וטכנולוגיות',
            'skills.restApis': 'REST APIs',
            'skills.responsive': 'עיצוב רספונסיבי',
            'skills.vps': 'פריסה על VPS',
            'contact.title': 'צור קשר',
            'contact.intro': 'יש לך רעיון לפרויקט? ערוך את ההודעה ואחזור אליך בווטסאפ.',
            'contact.messageLabel': 'ההודעה שלך',
            'contact.defaultMessage': 'היי איתי, ביקרתי בתיק העבודות שלך ואשמח לדבר על פרויקט.',
            'contact.whatsapp': 'שלח בווטסאפ',
            'projects.title': 'הפרויקטים שלי',
            'projects.introHtml': 'הנה חלק מהפרויקטים שעבדתי עליהם במהלך הלימודים.<br>סנן לפי סוג כדי לחקור.',
            'filter.all': 'הכל',
            'filter.webapp': 'אפליקציית ווב',
            'filter.landing': 'דף נחיתה עסקי',
            'filter.portfolio': 'תיק עבודות',
            'filter.game': 'משחק',
            'projects.view': 'צפה בפרויקט',
            'projects.homepage': 'דף הבית',
            'projects.noImage': 'אין תמונה',
            'footer.tagline': 'איתי הרוש - פתרונות פיתוח',
            'footer.rights': 'כל הזכויות שמורות.',
            'footer.logoAlt': 'לוגו Itay Solutions'
        }
    };

    const TAG_LABELS = {
        en: {
            Featured: 'Featured',
            'Real Client': 'Real Client',
            'Full-Stack': 'Full-Stack'
        },
        he: {
            Featured: 'מומלץ',
            'Real Client': 'לקוח אמיתי',
            'Full-Stack': 'פול סטאק'
        }
    };

    function getStoredLang() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored === 'en' || stored === 'he') return stored;
        } catch (_) { /* ignore */ }
        const browser = (navigator.language || '').toLowerCase();
        return browser.startsWith('he') ? 'he' : 'en';
    }

    let currentLang = getStoredLang();

    function t(key) {
        return translations[currentLang][key] ?? translations.en[key] ?? key;
    }

    function translateTag(tag) {
        return TAG_LABELS[currentLang][tag] ?? tag;
    }

    function getLang() {
        return currentLang;
    }

    function setLang(lang) {
        if (lang !== 'en' && lang !== 'he') return;
        currentLang = lang;
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (_) { /* ignore */ }
        applyLanguage(lang);
        document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
    }

    function buildWhatsAppUrl(text) {
        const message = (text || '').trim();
        if (!message) return CONTACT.whatsappUrl;
        return `${CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
    }

    let contactMessageEdited = false;

    function applyContactLinks() {
        const defaultMessage = t('contact.defaultMessage');

        document.querySelectorAll('[data-contact="email"]').forEach((el) => {
            el.href = `mailto:${CONTACT.email}`;
            if (!el.querySelector('i')) {
                el.textContent = CONTACT.email;
            }
            el.setAttribute('aria-label', CONTACT.email);
        });

        document.querySelectorAll('[data-contact="whatsapp"]').forEach((el) => {
            el.href = buildWhatsAppUrl(defaultMessage);
        });

        updateContactFormMessage(defaultMessage);
    }

    function updateContactFormMessage(defaultMessage) {
        const textarea = document.querySelector('[data-contact-message]');
        const customBtn = document.querySelector('[data-contact="whatsapp-custom"]');

        if (textarea && !contactMessageEdited) {
            textarea.value = defaultMessage;
        }

        if (customBtn) {
            customBtn.href = buildWhatsAppUrl(textarea ? textarea.value : defaultMessage);
        }
    }

    function initContactForm() {
        const textarea = document.querySelector('[data-contact-message]');
        const customBtn = document.querySelector('[data-contact="whatsapp-custom"]');
        if (!textarea || !customBtn) return;

        textarea.addEventListener('input', () => {
            contactMessageEdited = true;
            customBtn.href = buildWhatsAppUrl(textarea.value);
        });

        customBtn.addEventListener('click', () => {
            customBtn.href = buildWhatsAppUrl(textarea.value);
        });
    }

    function applyLanguage(lang) {
        currentLang = lang;
        const isRtl = lang === 'he';
        document.documentElement.lang = lang;
        document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (el.hasAttribute('data-i18n-html')) {
                el.innerHTML = t(key);
            } else {
                el.textContent = t(key);
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
        });

        document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
            el.alt = t(el.getAttribute('data-i18n-alt'));
        });

        document.querySelectorAll('[data-i18n-content]').forEach((el) => {
            el.setAttribute('content', t(el.getAttribute('data-i18n-content')));
        });

        const titleEl = document.querySelector('title[data-i18n]');
        if (titleEl) {
            document.title = t(titleEl.getAttribute('data-i18n'));
        }

        document.querySelectorAll('.lang-btn').forEach((btn) => {
            const active = btn.dataset.lang === lang;
            btn.classList.toggle('active', active);
            btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        });

        applyContactLinks();
    }

    function initLanguageSwitcher() {
        document.querySelectorAll('.lang-btn').forEach((btn) => {
            btn.addEventListener('click', () => setLang(btn.dataset.lang));
        });
    }

    window.PortfolioI18n = {
        getLang,
        setLang,
        t,
        translateTag,
        contact: CONTACT
    };

    applyLanguage(currentLang);
    initLanguageSwitcher();
    initContactForm();
})();
