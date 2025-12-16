// Floating Chat Widget
const chatBubble = document.getElementById('chat-bubble');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');

if (chatBubble && chatWindow && closeChat) {
  chatBubble.addEventListener('click', () => {
    chatWindow.style.display = 'flex';
  });

  closeChat.addEventListener('click', () => {
    chatWindow.style.display = 'none';
  });
}

// Feature Details
const cards = document.querySelectorAll('.feature-card[data-target]');
const backButtons = document.querySelectorAll('.back-to-top');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const targetId = card.getAttribute('data-target');
    const detail = document.getElementById(targetId);
    if (detail) {
      detail.classList.remove('hidden');
      detail.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

backButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const detail = btn.parentElement;
    detail.classList.add('hidden');
    const section = detail.id.includes('program') ? document.getElementById('programs') : document.getElementById('services');
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Initialize Swiper for Services
const servicesSwiper = new Swiper('.services-swiper', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Initialize Swiper for Programs
const programsSwiper = new Swiper('.programs-swiper', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
