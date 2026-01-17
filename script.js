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
<form id="contact-form" novalidate>
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  // Put YOUR real Formspree endpoint here (must be the one you created)
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mreqzqwa";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    const name = (document.getElementById("name")?.value || "").trim();
    const email = (document.getElementById("email")?.value || "").trim();
    const message = (document.getElementById("message")?.value || "").trim();

    // Simple validation
    if (!name || !email || !message) {
      alert("Please fill in your name, email, and message.");
      if (submitBtn) submitBtn.disabled = false;
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        // Try to read Formspree error details (if any)
        let errText = "";
        try {
          const data = await res.json();
          errText = data?.error || "";
        } catch {}
        throw new Error(errText || "Form submission failed.");
      }

      // Success
      alert("Message sent successfully. We’ll reply shortly.");
      form.reset();
    } catch (err) {
      // IMPORTANT: no hello@ anywhere
      alert("Submission failed. Please email info@yomamentor.com.");
      console.error(err);
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
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



