document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const messageEl = document.getElementById("formMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?\d{10,15}$/;

        if (!emailRegex.test(email)) {
            messageEl.textContent = "Please enter a valid email address.";
            messageEl.style.color = "red";
            return;
        }

        if (!phoneRegex.test(phone)) {
            messageEl.textContent = "Please enter a valid phone number (10-15 digits).";
            messageEl.style.color = "red";
            return;
        }

        messageEl.textContent = "Message sent successfully!";
        messageEl.style.color = "green";
        form.reset();
    });
});
