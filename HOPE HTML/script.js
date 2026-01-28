document.addEventListener('DOMContentLoaded', function () {
  // schedule button: open Calendly
  const schedule = document.getElementById('schedule-link');
  if (schedule) {
    schedule.addEventListener('click', function (e) {
      e.preventDefault();
      const calendlyUrl = 'https://calendly.com/yomamentor/15min';
      window.open(calendlyUrl, '_blank');
    });
  }

  // intercept contact form to show feedback when using Formspree
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const url = form.action;
      const data = new FormData(form);
      try {
        const res = await fetch(url, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        if (res.ok) {
          alert('Thanks — we received your message. We will be in touch soon.');
          form.reset();
        } else {
          alert('Submission failed — please email Sales@yomamentor.com');
        }
      } catch (err) {
        alert('Network error — please email Sales@yomamentor.com');
      }
    });
  }

  // Preload and ensure company logo is applied to the hero image element
  try {
    const logoUrl = 'images/company-logo.svg';
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = logoUrl;
    document.head.appendChild(link);

    const companyImg = document.getElementById('company-image');
    if (companyImg) {
      companyImg.src = logoUrl;
      if (!companyImg.alt) companyImg.alt = 'Yomamentor logo';
    }
  } catch (err) {
    // silently ignore if DOM not ready or resource missing
    console.warn('Could not apply company logo preload:', err);
  }
});
