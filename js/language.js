// Bilingual Language Support (English/Arabic)

document.addEventListener('DOMContentLoaded', function() {
    initLanguageToggle();
    loadSavedLanguage();
});

// Language data
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'Your Gateway to Chinese Universities',
        'hero.subtitle': 'Expert guidance for international students seeking world-class education in China. From application to graduation, we\'re with you every step of the way.',
        'hero.cta': 'Start Your Journey',
        
        // Services Section
        'services.title': 'Our Services',
        'services.subtitle': 'Comprehensive support for your educational journey in China',
        'services.university.title': 'University Applications',
        'services.university.desc': 'Expert assistance with applications to top Chinese universities, including document preparation and submission guidance.',
        'services.visa.title': 'Visa Guidance',
        'services.visa.desc': 'Complete visa application support, from documentation to interview preparation, ensuring a smooth process.',
        'services.cultural.title': 'Cultural Preparation',
        'services.cultural.desc': 'Comprehensive cultural orientation to help you adapt and thrive in Chinese academic and social environments.',
        'services.language.title': 'Language Support',
        'services.language.desc': 'Mandarin language preparation and ongoing support to ensure academic success and daily communication.',
        'services.academic.title': 'Academic Counseling',
        'services.academic.desc': 'Personalized academic guidance to help you choose the right program and excel in your studies.',
        
        // About Section
        'about.title': 'Why Choose China for Your Education?',
        'about.desc': 'China has emerged as a global leader in education, offering world-class universities, cutting-edge research facilities, and diverse academic programs. With our expertise and personalized guidance, we help you navigate this exciting educational landscape and achieve your academic goals.',
        'about.feature1': 'Top-ranked universities globally',
        'about.feature2': 'Affordable tuition and living costs',
        'about.feature3': 'Rich cultural experience',
        'about.feature4': 'Excellent career opportunities',
        
        // Contact Section
        'contact.title': 'Get in Touch',
        'contact.subtitle': 'Ready to start your educational journey? Contact our expert consultants for personalized guidance.',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.instagram': 'Instagram',
        'form.name': 'Your Name',
        'form.email': 'Email Address',
        'form.phone': 'Phone Number',
        'form.message': 'Your Message',
        'form.submit': 'Send Message',
        
        // Footer
        'footer.copyright': '© 2025 China Scholars. All rights reserved.',
        
        // Form Messages
        'form.required': 'Please fill in all required fields.',
        'form.invalid_email': 'Please enter a valid email address.',
        'form.sending': 'Sending...',
        'form.success': 'Thank you for your message! We will get back to you soon.',
        
        // Logo
        'logo.text': 'China Scholars'
    },
    
    ar: {
        // Navigation
        'nav.home': 'الرئيسية',
        'nav.services': 'الخدمات',
        'nav.about': 'حولنا',
        'nav.contact': 'اتصل بنا',
        
        // Hero Section
        'hero.title': 'بوابتك إلى الجامعات الصينية',
        'hero.subtitle': 'إرشاد خبير للطلاب الدوليين الساعين للحصول على تعليم عالمي في الصين. من التقديم إلى التخرج، نحن معك في كل خطوة.',
        'hero.cta': 'ابدأ رحلتك',
        
        // Services Section
        'services.title': 'خدماتنا',
        'services.subtitle': 'دعم شامل لرحلتك التعليمية في الصين',
        'services.university.title': 'طلبات الجامعة',
        'services.university.desc': 'مساعدة خبيرة في التقديم لأفضل الجامعات الصينية، بما في ذلك إعداد الوثائق وإرشادات التقديم.',
        'services.visa.title': 'إرشاد التأشيرة',
        'services.visa.desc': 'دعم كامل لطلب التأشيرة، من التوثيق إلى التحضير للمقابلة، لضمان عملية سلسة.',
        'services.cultural.title': 'التحضير الثقافي',
        'services.cultural.desc': 'توجيه ثقافي شامل لمساعدتك على التكيف والازدهار في البيئات الأكاديمية والاجتماعية الصينية.',
        'services.language.title': 'دعم اللغة',
        'services.language.desc': 'إعداد لغة الماندرين والدعم المستمر لضمان النجاح الأكاديمي والتواصل اليومي.',
        'services.academic.title': 'الاستشارة الأكاديمية',
        'services.academic.desc': 'إرشاد أكاديمي شخصي لمساعدتك في اختيار البرنامج المناسب والتفوق في دراستك.',
        
        // About Section
        'about.title': 'لماذا تختار الصين لتعليمك؟',
        'about.desc': 'برزت الصين كرائدة عالمية في التعليم، حيث تقدم جامعات عالمية المستوى ومرافق بحثية متطورة وبرامج أكاديمية متنوعة. بخبرتنا وإرشادنا الشخصي، نساعدك في التنقل في هذا المشهد التعليمي المثير وتحقيق أهدافك الأكاديمية.',
        'about.feature1': 'جامعات مصنفة عالمياً',
        'about.feature2': 'رسوم دراسية وتكاليف معيشة معقولة',
        'about.feature3': 'تجربة ثقافية غنية',
        'about.feature4': 'فرص مهنية ممتازة',
        
        // Contact Section
        'contact.title': 'تواصل معنا',
        'contact.subtitle': 'مستعد لبدء رحلتك التعليمية؟ اتصل بمستشارينا الخبراء للحصول على إرشاد شخصي.',
        'contact.phone': 'الهاتف',
        'contact.email': 'البريد الإلكتروني',
        'contact.instagram': 'إنستغرام',
        'form.name': 'اسمك',
        'form.email': 'عنوان البريد الإلكتروني',
        'form.phone': 'رقم الهاتف',
        'form.message': 'رسالتك',
        'form.submit': 'إرسال الرسالة',
        
        // Footer
        'footer.copyright': '© 2025 علماء الصين. جميع الحقوق محفوظة.',
        
        // Form Messages
        'form.required': 'يرجى ملء جميع الحقول المطلوبة.',
        'form.invalid_email': 'يرجى إدخال عنوان بريد إلكتروني صحيح.',
        'form.sending': 'جاري الإرسال...',
        'form.success': 'شكراً لك على رسالتك! سنعود إليك قريباً.',
        
        // Logo
        'logo.text': 'علماء الصين'
    }
};

let currentLanguage = 'en';

// Initialize language toggle functionality
function initLanguageToggle() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            switchLanguage(selectedLang);
        });
    });
}

// Switch language
function switchLanguage(lang) {
    if (lang === currentLanguage) return;
    
    currentLanguage = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Update HTML direction and lang attributes
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update all translatable elements
    updateTranslations(lang);
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
    
    // Update form placeholders and labels
    updateFormElements(lang);
    
    // Trigger layout adjustments for RTL
    if (lang === 'ar') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
}

// Update all translations
function updateTranslations(lang) {
    const elements = document.querySelectorAll('[data-en], [data-ar]');
    
    elements.forEach(element => {
        const key = lang === 'ar' ? 'data-ar' : 'data-en';
        const text = element.getAttribute(key);
        
        if (text) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        }
    });
}

// Update form elements specifically
function updateFormElements(lang) {
    const formLabels = document.querySelectorAll('label[data-en], label[data-ar]');
    const formInputs = document.querySelectorAll('input[data-en], input[data-ar], textarea[data-en], textarea[data-ar]');
    
    formLabels.forEach(label => {
        const key = lang === 'ar' ? 'data-ar' : 'data-en';
        const text = label.getAttribute(key);
        if (text) {
            label.textContent = text;
        }
    });
    
    formInputs.forEach(input => {
        const key = lang === 'ar' ? 'data-ar' : 'data-en';
        const text = input.getAttribute(key);
        if (text) {
            input.placeholder = text;
        }
    });
}

// Load saved language preference
function loadSavedLanguage() {
    const savedLang = localStorage.getItem('preferred-language');
    
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
        switchLanguage(savedLang);
    } else {
        // Detect browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('ar')) {
            switchLanguage('ar');
        } else {
            switchLanguage('en');
        }
    }
}

// Get translation by key
function getTranslation(key, lang = currentLanguage) {
    return translations[lang] && translations[lang][key] ? translations[lang][key] : key;
}

// Update notification messages based on current language
function showLocalizedNotification(messageKey, type = 'info') {
    const message = getTranslation(messageKey);
    showNotification(message, type);
}

// Override the original form handling to use localized messages
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');
            
            // Simple validation with localized messages
            if (!name || !email || !message) {
                showLocalizedNotification('form.required', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showLocalizedNotification('form.invalid_email', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            const sendingText = getTranslation('form.sending');
            
            submitBtn.innerHTML = `<span>${sendingText}</span><i class="ph ph-spinner"></i>`;
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                showLocalizedNotification('form.success', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
});

// Add RTL-specific styles
const rtlStyles = document.createElement('style');
rtlStyles.textContent = `
    /* RTL-specific adjustments */
    [dir="rtl"] .hero-content {
        text-align: center;
    }
    
    [dir="rtl"] .nav-menu {
        flex-direction: row-reverse;
    }
    
    [dir="rtl"] .footer-content {
        flex-direction: row-reverse;
    }
    
    [dir="rtl"] .contact-content {
        direction: rtl;
    }
    
    [dir="rtl"] .about-content {
        direction: rtl;
    }
    
    [dir="rtl"] .services-grid {
        direction: rtl;
    }
    
    [dir="rtl"] .service-card {
        text-align: right;
    }
    
    [dir="rtl"] .contact-item {
        flex-direction: row-reverse;
        text-align: right;
    }
    
    [dir="rtl"] .feature-item {
        flex-direction: row-reverse;
        text-align: right;
    }
    
    [dir="rtl"] .cta-button,
    [dir="rtl"] .submit-btn {
        flex-direction: row-reverse;
    }
    
    [dir="rtl"] .nav-logo,
    [dir="rtl"] .footer-logo {
        flex-direction: row-reverse;
    }
    
    /* Form RTL adjustments */
    [dir="rtl"] .form-group input,
    [dir="rtl"] .form-group textarea {
        text-align: right;
    }
    
    [dir="rtl"] .form-group label {
        right: 1rem;
        left: auto;
    }
    
    [dir="rtl"] .form-group input:focus + label,
    [dir="rtl"] .form-group input:valid + label,
    [dir="rtl"] .form-group textarea:focus + label,
    [dir="rtl"] .form-group textarea:valid + label {
        right: 0.75rem;
        left: auto;
    }
    
    /* Mobile menu RTL */
    [dir="rtl"] .mobile-menu-content {
        text-align: right;
    }
    
    /* Language toggle RTL positioning */
    [dir="rtl"] .language-toggle {
        left: 2rem;
        right: auto;
    }
    
    @media (max-width: 768px) {
        [dir="rtl"] .language-toggle {
            left: 0.75rem;
            right: auto;
        }
    }
    
    @media (max-width: 480px) {
        [dir="rtl"] .language-toggle {
            left: 0.5rem;
            right: auto;
        }
    }
`;

document.head.appendChild(rtlStyles);

