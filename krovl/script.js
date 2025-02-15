// Бургер-меню
const burgerMenu = document.querySelector('.burger-menu');
const mainNav = document.querySelector('.main-nav');

burgerMenu.addEventListener('click', () => {
    mainNav.classList.toggle('active'); // Переключаем класс active
});

// Плавная прокрутка для всех ссылок с хэшем
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Обработка формы
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    document.getElementById('contact-form').reset();
});