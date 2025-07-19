// Countdown Timer
const countdown = () => {
  const targetDate = new Date("July 23, 2025 18:00:00").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  // Calculate days/hours/minutes/seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update DOM elements
  document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
  document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
  
  // If the countdown is finished
  if (difference < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown").innerHTML = "<h3>Bootcamp Has Started!</h3>";
  }
};

// Initialize countdown
const countdownInterval = setInterval(countdown, 1000);
countdown();

// Scroll animations
document.addEventListener('DOMContentLoaded', function() {
  // Set up intersection observer for section animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Special animation for curriculum cards
        if (entry.target.id === 'curriculum') {
          const modules = document.querySelectorAll('.module');
          modules.forEach((module, index) => {
            setTimeout(() => {
              module.classList.add('bounce-in');
            }, 300 * index);
          });
        }
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

  // Add hover effect to curriculum cards
  const modules = document.querySelectorAll('.module');
  modules.forEach(module => {
    module.addEventListener('mouseenter', () => {
      module.style.transform = 'translateY(-10px)';
      module.style.boxShadow = '0 20px 30px rgba(0,0,0,0.15)';
    });
    
    module.addEventListener('mouseleave', () => {
      module.style.transform = 'translateY(0)';
      module.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Pulse animation for CTA buttons
  const ctaButtons = document.querySelectorAll('.cta-button');
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.animation = 'pulse 1.5s infinite';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.animation = '';
    });
  });
});

// WhatsApp link for tracking
console.log("CoreTech WhatsApp Group: https://chat.whatsapp.com/Lk9apAGfS9SLLJCzh9uLME");