document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const details = btn.nextElementSibling;
            details.classList.toggle("hidden");
            btn.textContent = details.classList.contains("hidden") ? "Show Details" : "Hide Details";
        });
    });
});
