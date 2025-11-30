const scrollButtons = document.querySelectorAll('[data-scroll]');
scrollButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const orderForm = document.querySelector('.order-form');
const successBox = document.querySelector('.form-success');

const playfulMessages = [
  'Yeay! Permintaanmu sudah masuk. Kami akan balas dengan detail warna & pita terbaik.',
  'Peluk busa virtual! Tunggu email manis dari tim EmberSeat ya.',
  'Seat-sational choice! Kami siapkan konfirmasi pre-order segera.',
  'Pre-order dummy sukses! Satin pastel siap menyapa inbox kamu.',
  'Kursi lucu sedang menari ke keranjang imajinasimu 💖',
];

if (orderForm && successBox) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const random = playfulMessages[Math.floor(Math.random() * playfulMessages.length)];
    successBox.textContent = random;
    orderForm.reset();
    successBox.classList.add('pop');
    setTimeout(() => successBox.classList.remove('pop'), 800);
  });
}

const bubbles = document.querySelectorAll('.bubble');
window.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;
  const moveX = (e.clientX / innerWidth - 0.5) * 8;
  const moveY = (e.clientY / innerHeight - 0.5) * 8;
  bubbles.forEach((bubble, index) => {
    const intensity = (index + 1) * 1.5;
    bubble.style.transform = `translate(${moveX * intensity}px, ${moveY * intensity}px)`;
  });
});

const reveals = document.querySelectorAll('.reveal-on-scroll');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
);

reveals.forEach((el) => observer.observe(el));
