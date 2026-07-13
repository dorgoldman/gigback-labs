// GigBack Labs — language toggle, scroll reveal, waitlist form

// ---- Mobile nav toggle ----
(function(){var b=document.querySelector('.nav-toggle'),n=document.querySelector('nav');if(b&&n)b.onclick=function(){n.classList.toggle('open')};})();

// ---- Language ----
var LANG_KEY = 'gigback-labs-lang';

function setLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-toggle button').forEach(function (b) {
    b.classList.toggle('active', b.dataset.setLang === lang);
  });
  document.title = lang === 'he'
    ? 'GigBack Labs | טכנולוגיה לעמותות בישראל'
    : 'GigBack Labs | Technology for Israeli NGOs';
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
}

document.querySelectorAll('.lang-toggle button').forEach(function (b) {
  b.addEventListener('click', function () { setLang(b.dataset.setLang); });
});

try {
  var saved = localStorage.getItem(LANG_KEY);
  if (saved === 'en' || saved === 'he') setLang(saved);
} catch (e) {}

// ---- Scroll reveal ----
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
} else {
  document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
}

// ---- "Notify me" links preselect product ----
document.querySelectorAll('[data-product]').forEach(function (a) {
  a.addEventListener('click', function () {
    var sel = document.getElementById('wl-product');
    if (sel) sel.value = a.dataset.product;
  });
});

// ---- Waitlist form (Web3Forms) ----
// Get a free access key at https://web3forms.com (verify hello@gigback.org),
// then replace the placeholder below. Submissions arrive by email.
var WEB3FORMS_KEY = 'a4af3ff9-91ad-4c7b-b17e-a12434d458df';

var form = document.getElementById('waitlist-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = document.getElementById('form-msg');
    var btn = form.querySelector('button[type="submit"]');
    var isHe = document.documentElement.lang === 'he';
    msg.className = 'form-msg';

    if (WEB3FORMS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      msg.textContent = isHe
        ? 'הטופס עדיין לא מחובר. כתבו לנו ל-hello@gigback.org'
        : 'Form not connected yet. Email us at hello@gigback.org';
      msg.className = 'form-msg err';
      return;
    }

    var data = new FormData(form);
    data.append('access_key', WEB3FORMS_KEY);
    data.append('subject', 'GigBack Labs: waitlist signup');
    data.append('from_name', 'gigback.org waitlist');

    btn.disabled = true;
    fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res.success) {
          msg.textContent = isHe ? 'נרשמתם! נעדכן אתכם ברגע שזה מוכן 🎉' : "You're in! We'll let you know the moment it's ready 🎉";
          msg.className = 'form-msg ok';
          form.reset();
        } else { throw new Error(); }
      })
      .catch(function () {
        msg.textContent = isHe
          ? 'משהו השתבש. נסו שוב או כתבו ל-hello@gigback.org'
          : 'Something went wrong. Try again or email hello@gigback.org';
        msg.className = 'form-msg err';
      })
      .finally(function () { btn.disabled = false; });
  });
}
