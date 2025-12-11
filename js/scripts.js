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
