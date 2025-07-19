// ترجمة النصوص
const translations = {
  en: {
    name: "Dr. Wissam Emad Bakhous",
    job: "Dentist",
    about: "About",
    experience: "Experience",
    volunteer: "Volunteer Work",
    education: "Education",
    skills: "Skills",
    languages: "Languages",
    contact: "Contact",
    aboutText: "Dentist with experience in medical and volunteer work, seeking to develop my skills and serve the community.",
    experienceItems: [
      "Sales Representative at Al-Mustaqbal Pharmacy Warehouse (2025) – Homs, Hajj Atif Square",
      "Dentist at (NDC) New Dental Clinic (2025) – Homs, Ibn Khaldoun Street, City Center"
    ],
    volunteerItems: [
      {
        title: "Saint George Center (Orthodox Church)",
        location: "Homs, Al-Arman",
        details: [
          "Helping the affected people within the city of Homs on the material and psychological level and supporting them morally",
          "Helping people with special needs and widows and supporting them financially and morally"
        ]
      },
      {
        title: "Virgin Mary Center (Orthodox Church)",
        location: "Homs, Alarman",
        details: [
          "Help affected families who need food and psychological assistance, regardless of sect, belief or religion"
        ]
      },
      {
        title: "Lamsa Association",
        location: "Homs, Al Hamidya",
        details: [
          "Child care campaign",
          "A campaign to distribute aid to the affected people within the city of Homs",
          "A campaign of aid to the protestors in the villages surrounding Homs"
        ]
      },
      {
        title: "Monastery of the Jesuit Fathers",
        location: "Homs, Al Hamidya",
        details: [
          "Educator, teacher and psychological support for children"
        ]
      }
    ],
    educationItems: [
      "Homs University – Dentistry (2019–2024), GPA: 79.7%"
    ],
    skillsItems: [
      "Communication skills: Developed through relief work, dealing with all age groups.",
      "Teamwork: Ability to work in a team and flexibility in communication.",
      "Responsibility: Strong sense of responsibility towards people and tasks."
    ],
    languagesItems: [
      "Arabic (Native)",
      "English (B2)"
    ],
    contactItems: [
      "Email: Wissambakhous@gmail.com",
      "Phone: 0968178970 / 0980184143",
      "Location: Syria – Homs – Al Hamidya"
    ],
    footer: "© 2024 Dr. Wissam Emad Bakhous. All rights reserved."
  },
  ar: {
    name: "د. وسام عماد باخوص",
    job: "طبيب أسنان",
    about: "عني",
    experience: "الخبرة",
    volunteer: "العمل التطوعي",
    education: "التعليم",
    skills: "المهارات",
    languages: "اللغات",
    contact: "تواصل",
    aboutText: "طبيب أسنان بخبرة في العمل الطبي والتطوعي، أبحث عن تطوير مهاراتي وخدمة المجتمع.",
    experienceItems: [
      "مندوب مبيعات في مستودع المستقبل للأدوية (2025) – حمص، ساحة الحاج عاطف",
      "طبيب أسنان في مركز (NDC) New Dental Clinic (2025) – حمص، شارع ابن خلدون، مركز المدينة"
    ],
    volunteerItems: [
      {
        title: "مركز القديس جورج (الكنيسة الأرثوذكسية)",
        location: "حمص، الأرمن",
        details: [
          "دعم المتضررين في مدينة حمص على المستوى المادي والنفسي ودعمهم معنوياً",
          "مساعدة ذوي الاحتياجات الخاصة والأرامل ودعمهم مادياً ومعنوياً"
        ]
      },
      {
        title: "مركز السيدة العذراء (الكنيسة الأرثوذكسية)",
        location: "حمص، الأرمن",
        details: [
          "مساعدة العائلات المتضررة التي تحتاج مساعدة غذائية ونفسية، بغض النظر عن الطائفة أو المعتقد أو الدين"
        ]
      },
      {
        title: "جمعية لمسة",
        location: "حمص، الحميدية",
        details: [
          "حملة رعاية الأطفال",
          "حملة توزيع المساعدات للمتضررين في مدينة حمص",
          "حملة مساعدة للمحتجين في القرى المحيطة بحمص"
        ]
      },
      {
        title: "دير الآباء اليسوعيين",
        location: "حمص، الحميدية",
        details: [
          "معلم ودعم نفسي للأطفال"
        ]
      }
    ],
    educationItems: [
      "جامعة حمص – طب الأسنان (2019–2024)، المعدل: 79.7%"
    ],
    skillsItems: [
      "مهارات التواصل: تطورت من خلال العمل في المجال الإغاثي والتعامل مع جميع الفئات العمرية.",
      "العمل الجماعي: القدرة على العمل ضمن فريق ومرونة في التواصل.",
      "المسؤولية: الإحساس بالمسؤولية تجاه الأشخاص والمهام."
    ],
    languagesItems: [
      "العربية (اللغة الأم)",
      "الإنجليزية (B2)"
    ],
    contactItems: [
      "البريد الإلكتروني: Wissambakhous@gmail.com",
      "الهاتف: 0968178970 / 0980184143",
      "العنوان: سوريا – حمص – الحميدية"
    ],
    footer: "© 2024 د. وسام عماد باخوص. جميع الحقوق محفوظة."
  }
};

// الحصول على العناصر
const langBtn = document.getElementById('lang-btn');
const themeBtn = document.getElementById('theme-btn');
const nameEl = document.getElementById('name');
const jobEl = document.getElementById('job');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section-card');
const footer = document.querySelector('.footer');

// الحالة الحالية
let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';

// تطبيق اللغة
function applyLanguage(lang) {
  const t = translations[lang];
  
  // تحديث العنوان
  document.title = `${t.name} | ${t.job}`;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // تحديث النصوص الرئيسية
  nameEl.textContent = t.name;
  jobEl.textContent = t.job;
  
  // تحديث روابط التنقل
  navLinks[0].textContent = t.about;
  navLinks[1].textContent = t.experience;
  navLinks[2].textContent = t.volunteer;
  navLinks[3].textContent = t.education;
  navLinks[4].textContent = t.skills;
  navLinks[5].textContent = t.languages;
  navLinks[6].textContent = t.contact;
  
  // تحديث محتوى الأقسام
  sections[0].querySelector('h3').textContent = t.about;
  sections[0].querySelector('p').textContent = t.aboutText;
  
  sections[1].querySelector('h3').textContent = t.experience;
  const expList = sections[1].querySelector('ul');
  expList.innerHTML = t.experienceItems.map(item => `<li>${item}</li>`).join('');
  
  // تحديث قسم العمل التطوعي مع التنظيم الجديد
  sections[2].querySelector('h3').textContent = t.volunteer;
  const volList = sections[2].querySelector('ul');
  volList.innerHTML = t.volunteerItems.map(item => `
    <li class="volunteer-item">
      <div class="volunteer-header">
        <h4>${item.title}</h4>
        <span class="volunteer-location">${item.location}</span>
      </div>
      <ul class="volunteer-details">
        ${item.details.map(detail => `<li>${detail}</li>`).join('')}
      </ul>
    </li>
  `).join('');
  
  sections[3].querySelector('h3').textContent = t.education;
  const eduList = sections[3].querySelector('ul');
  eduList.innerHTML = t.educationItems.map(item => `<li>${item}</li>`).join('');
  
  sections[4].querySelector('h3').textContent = t.skills;
  const skillsList = sections[4].querySelector('ul');
  skillsList.innerHTML = t.skillsItems.map(item => `<li>${item}</li>`).join('');
  
  sections[5].querySelector('h3').textContent = t.languages;
  const langList = sections[5].querySelector('ul');
  langList.innerHTML = t.languagesItems.map(item => `<li>${item}</li>`).join('');
  
  sections[6].querySelector('h3').textContent = t.contact;
  const contactList = sections[6].querySelector('ul');
  contactList.innerHTML = t.contactItems.map(item => `<li>${item}</li>`).join('');
  
  // تحديث الفوتر
  footer.textContent = t.footer;
  
  // تحديث زر اللغة
  langBtn.textContent = lang === 'ar' ? 'English' : 'العربية';
}

// تطبيق الثيم
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// تبديل اللغة
langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('lang', currentLang);
  applyLanguage(currentLang);
});

// تبديل الثيم
themeBtn.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
  applyTheme(currentTheme);
});

// تطبيق الإعدادات المحفوظة
applyLanguage(currentLang);
applyTheme(currentTheme);

// تهيئة الموقع
document.addEventListener('DOMContentLoaded', function() {
    // تعيين اللغة الافتراضية
    currentLang = 'en';
    applyLanguage(currentLang);
    
    // تعيين الوضع الافتراضي (نهاري)
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    
    // تحديث نص زر الثيم
    themeBtn.textContent = '☀️';
});

// تأثيرات إضافية
document.addEventListener('DOMContentLoaded', () => {
  // تأثير ظهور تدريجي للبطاقات
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
}); 