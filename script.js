/**
 * Sasank Potharaju - Personal Portfolio SPA Scripts
 * Lightweight, Vanilla JavaScript with High Performance
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Theme Toggle (Dark / Light Mode)
  // --------------------------------------------------------------------------
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Initial theme setting
  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
  } else if (!prefersDark) {
    htmlElement.setAttribute('data-theme', 'light');
  } else {
    htmlElement.setAttribute('data-theme', 'dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlElement.setAttribute('data-theme', targetTheme);
      localStorage.setItem('theme', targetTheme);
      showToast(`Switched to ${targetTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
    });
  }

  // --------------------------------------------------------------------------
  // 2. Typewriter Effect
  // --------------------------------------------------------------------------
  const typewriterElement = document.getElementById('typewriter');
  if (typewriterElement) {
    const words = [
      'Java Full Stack Developer',
      'Software Engineer',
      'React & Node.js Developer',
      'Problem Solver & Builder'
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingDelay = 100;
    const deletingDelay = 45;
    const pauseDelay = 1800;

    function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? deletingDelay : typingDelay;

      if (!isDeleting && charIndex === currentWord.length) {
        speed = pauseDelay;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
      }

      setTimeout(type, speed);
    }

    type();
  }

  // --------------------------------------------------------------------------
  // 3. Mobile Navigation Drawer
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMobileMenu(forceClose = false) {
    if (!mobileToggle || !mobileDrawer) return;
    const isOpen = forceClose ? false : !mobileDrawer.classList.contains('open');

    if (isOpen) {
      mobileDrawer.classList.add('open');
      mobileToggle.classList.add('active');
      mobileToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflowY = 'hidden';
    } else {
      mobileDrawer.classList.remove('open');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflowY = '';
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleMobileMenu());
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(true));
  });

  // Close drawer if resized to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileDrawer && mobileDrawer.classList.contains('open')) {
      toggleMobileMenu(true);
    }
  });

  // --------------------------------------------------------------------------
  // 4. Active Nav Item Highlighting & ScrollSpy
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-links .nav-link');

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // --------------------------------------------------------------------------
  // 5. Back to Top Button
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. Copy to Clipboard Feature
  // --------------------------------------------------------------------------
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copied to clipboard: ${textToCopy}`);
      } catch (err) {
        // Fallback for older browsers
        const tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast(`Copied to clipboard: ${textToCopy}`);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 7. Interactive Resume Modal
  // --------------------------------------------------------------------------
  const openResumeBtn = document.getElementById('open-resume-btn');
  const closeResumeBtn = document.getElementById('close-resume-btn');
  const resumeModal = document.getElementById('resume-modal');
  const printResumeBtn = document.getElementById('print-resume-btn');

  function openModal() {
    if (!resumeModal) return;
    resumeModal.classList.add('open');
    resumeModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflowY = 'hidden';
  }

  function closeModal() {
    if (!resumeModal) return;
    resumeModal.classList.remove('open');
    resumeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflowY = '';
  }

  if (openResumeBtn) openResumeBtn.addEventListener('click', openModal);
  if (closeResumeBtn) closeResumeBtn.addEventListener('click', closeModal);

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeModal();
    });
  }

  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Escape key handler for drawers and modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (resumeModal && resumeModal.classList.contains('open')) {
        closeModal();
      }
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        toggleMobileMenu(true);
      }
    }
  });

  // --------------------------------------------------------------------------
  // 8. Formspree Contact Form Handling
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !subject || !message) {
        showFeedback('Please fill out all fields before sending.', 'error');
        return;
      }

      const formspreeEndpoint = contactForm.getAttribute('action');

      // Check if user has replaced YOUR_FORMSPREE_ID
      if (!formspreeEndpoint || formspreeEndpoint.includes('YOUR_FORMSPREE_ID')) {
        showFeedback(
          'Please configure your Formspree Form ID in index.html (or contact Sasank directly at sasankpotharaju06@gmail.com).',
          'error'
        );
        return;
      }

      // Set loading state
      setButtonLoading(true);

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          showFeedback('Thank you, ' + name + '! Your message has been sent successfully to Sasank. I will reply soon!', 'success');
          contactForm.reset();
          showToast('Message sent successfully!');
        } else {
          const data = await response.json().catch(() => null);
          if (data && data.errors && data.errors.length > 0) {
            showFeedback(data.errors.map(err => err.message).join(', '), 'error');
          } else {
            showFeedback('Oops! There was a problem submitting your message. Please try again or email directly.', 'error');
          }
        }
      } catch (err) {
        showFeedback('Network error: Unable to reach Formspree. Please check your internet connection or email directly.', 'error');
      } finally {
        setButtonLoading(false);
      }
    });

    function setButtonLoading(isLoading) {
      if (!submitBtn) return;
      const btnText = submitBtn.querySelector('.btn-text');
      const btnIcon = submitBtn.querySelector('.btn-icon');

      if (isLoading) {
        submitBtn.disabled = true;
        if (btnText) btnText.textContent = 'Sending...';
        if (btnIcon) btnIcon.style.display = 'none';

        let spinner = submitBtn.querySelector('.spinner');
        if (!spinner) {
          spinner = document.createElement('span');
          spinner.className = 'spinner';
          submitBtn.prepend(spinner);
        }
      } else {
        submitBtn.disabled = false;
        if (btnText) btnText.textContent = 'Send Message';
        if (btnIcon) btnIcon.style.display = 'inline-block';
        const spinner = submitBtn.querySelector('.spinner');
        if (spinner) spinner.remove();
      }
    }

    function showFeedback(msg, type) {
      if (!formFeedback) return;
      formFeedback.textContent = msg;
      formFeedback.className = `form-feedback ${type}`;
      formFeedback.style.display = 'block';
    }
  }

  // --------------------------------------------------------------------------
  // 9. Toast Notification System
  // --------------------------------------------------------------------------
  function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 2800);
  }
});
