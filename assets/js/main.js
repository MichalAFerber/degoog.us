/**
 * DeGoog.us - Main JavaScript
 */

(function() {
  'use strict';

  // ============================================================================
  // Mobile Navigation Toggle
  // ============================================================================

  const navToggle = document.getElementById('nav-toggle');
  const navMobile = document.getElementById('nav-mobile');

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', function() {
      navMobile.classList.toggle('is-open');
      navToggle.querySelector('.menu-icon').classList.toggle('hidden');
      navToggle.querySelector('.close-icon').classList.toggle('hidden');

      // Prevent body scroll when menu is open
      document.body.style.overflow = navMobile.classList.contains('is-open') ? 'hidden' : '';
    });

    // Close mobile menu when clicking a link
    navMobile.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navMobile.classList.remove('is-open');
        navToggle.querySelector('.menu-icon').classList.remove('hidden');
        navToggle.querySelector('.close-icon').classList.add('hidden');
        document.body.style.overflow = '';
      });
    });
  }

  // ============================================================================
  // Sticky CTA Dismiss
  // ============================================================================

  const ctaStickyClose = document.getElementById('cta-sticky-close');
  const ctaSticky = document.getElementById('cta-sticky');

  if (ctaStickyClose && ctaSticky) {
    // Check if user has dismissed the CTA before
    if (localStorage.getItem('cta-sticky-dismissed') === 'true') {
      ctaSticky.style.display = 'none';
    }

    ctaStickyClose.addEventListener('click', function() {
      ctaSticky.style.display = 'none';
      localStorage.setItem('cta-sticky-dismissed', 'true');
    });
  }

  // ============================================================================
  // Smooth Scroll for Anchor Links
  // ============================================================================

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();

        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update URL without scrolling
        history.pushState(null, null, href);
      }
    });
  });

  // ============================================================================
  // Intersection Observer for Animations
  // ============================================================================

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.card, .hero-stat, .feature-card').forEach(function(el) {
      observer.observe(el);
    });
  }

  // ============================================================================
  // External Link Handler
  // ============================================================================

  document.querySelectorAll('a[target="_blank"]').forEach(function(link) {
    // Ensure security attributes are set
    if (!link.hasAttribute('rel') || !link.getAttribute('rel').includes('noopener')) {
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // ============================================================================
  // Scroll-based Header Styling
  // ============================================================================

  const header = document.querySelector('.site-header');

  if (header) {
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

})();
