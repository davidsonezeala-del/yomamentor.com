document.addEventListener('DOMContentLoaded', function() {
  // Set copyright year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // MOBILE NAVIGATION TOGGLE
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Close mobile menu when a nav link is clicked
  if (navMenu) {
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // SCHEDULE BUTTON: Open Calendly
  const scheduleLink = document.getElementById('schedule-link');
  if (scheduleLink) {
    scheduleLink.addEventListener('click', function(e) {
      e.preventDefault();
      const calendlyUrl = 'https://calendly.com/keturahoyibo/60'; // Replace with actual Calendly link
      window.open(calendlyUrl, '_blank');
    });
  }

  // CONTACT FORM SUBMISSION with Formspree
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value?.trim() || "";
    const email = document.getElementById("email")?.value?.trim() || "";
    const message = document.getElementById("message")?.value?.trim() || "";

    const subject = encodeURIComponent("New message from Yomamentor website");
    const body = encodeURIComponent(
      `Full name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );

    // Opens user's default email app with prefilled details
    window.location.href = `mailto:info@yomamentor.com?subject=${subject}&body=${body}`;
  });
});


  // SMOOTH SCROLL TO SECTIONS
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});


