document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Cảm ơn ${name}! Tin nhắn của bạn đã được gửi. Chúng tôi sẽ liên hệ qua ${email} sớm nhất có thể.`);
  this.reset();
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href').substring(1);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  });
});