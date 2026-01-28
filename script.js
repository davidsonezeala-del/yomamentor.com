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
      const calendlyUrl = 'https://calendly.com/your-username/15min'; // Replace with actual Calendly link
      window.open(calendlyUrl, '_blank');
    });
  }

  // CONTACT FORM SUBMISSION with Formspree
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      const formData = new FormData(contactForm);
      const url = contactForm.action;

      try {
        const response = await fetch(url, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          // Success feedback
          submitBtn.textContent = '✓ Message sent!';
          submitBtn.style.backgroundColor = '#C9A24D';
          contactForm.reset();
          
          // Reset button after 3 seconds
          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = '';
            submitBtn.disabled = false;
          }, 3000);
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        alert('Submission failed. Please email hello@yomamentor.co.uk');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }

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
