window.addEventListener("DOMContentLoaded", () => {
    const greetingEl = document.getElementById("greeting");
    const hours = new Date().getHours();

    let greeting = "Hello!";
    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    greetingEl.textContent = greeting;

    document.getElementById("year").textContent = new Date().getFullYear();
});
