document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;

    const subject = `New message from ${name}`;
    const body = `${message}\n\nFrom: ${name} (${email})`;

    window.location.href = `mailto:willryan73@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});