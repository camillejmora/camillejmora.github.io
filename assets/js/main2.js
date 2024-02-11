/**
* Template Name: Personal
* Updated: Jan 27 2024 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
    "use strict";
  
    // Existing helper functions remain unchanged.
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    const scrollto = (el) => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  
    // Modified section to ensure all content is always visible.
    // This modification simply changes the navbar link behavior to scroll to the section without hiding others.
    on('click', '#navbar .nav-link', function(e) {
      if (this.hash) {
        let section = select(this.hash);
        if (section) {
          e.preventDefault();
          scrollto(this.hash);
        }
      }
    }, true);
  
    // Skills animation remains unchanged.
    let skilsContent = select('.skills-content');
    if (skilsContent) {
      new Waypoint({
        element: skilsContent,
        offset: '80%',
        handler: function(direction) {
          let progress = select('.progress .progress-bar', true);
          progress.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%'
          });
        }
      })
    }
  
    // Testimonials slider remains unchanged.
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });
  
    // Portfolio lightbox and Pure Counter initialization remains unchanged.
    const portfolioLightbox = GLightbox({
      selector: '.portfolio-lightbox'
    });
  
    new PureCounter();
  })()
  