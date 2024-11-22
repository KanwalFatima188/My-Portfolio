
// ***********Type writer***************/
var options = {
    strings: ['Frontend Developer', 'WordPress Developer',  'Freelauncer'],
    typeSpeed: 100,
    backSpeed:100,
    loop: true
  };
var typed = new Typed('.typing', options);



AOS.init();


const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.close-icon');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});


const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// ***********Type writer***************/



// ***********Start skill section***************/

document.addEventListener('DOMContentLoaded', () => {
 
  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(bar => {
      setTimeout(() => {
          bar.style.left = '0';
      }, 200);
  });

  
  const circularProgressBars = document.querySelectorAll('.circular-progress');
  circularProgressBars.forEach(circle => {
      const targetProgress = circle.getAttribute('data-progress');
      const percentageSpan = circle.querySelector('.skill-percentage');
      let currentProgress = 0;

      const animateCircle = () => {
          if (currentProgress < targetProgress) {
              currentProgress++;
              circle.style.background = `conic-gradient(#1b3069 ${currentProgress * 3.6}deg, #bab3b3 0deg)`;
              percentageSpan.textContent = `${currentProgress}%`;
              requestAnimationFrame(animateCircle);
          }
      };

      setTimeout(() => {
          requestAnimationFrame(animateCircle);
      }, 500);
  });
});


// *********************Start skilll section*************///


// *********************Start freelaunce section*************///


const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 200;  // Speed of the counter

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

// *********************End freelaunce section*************///


// *********************slider section*************///

document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const navItems = document.querySelectorAll('.slider-nav-item');
    let currentIndex = 0;

    function showSlide(index) {
        sliderContainer.style.transform = `translateX(-${index * 100}%)`;
        navItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});

// *********************sllider section*************///




document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {
  
      e.preventDefault();
  
  
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
  
        behavior: 'smooth'
  
      });
  
    });
  
  });