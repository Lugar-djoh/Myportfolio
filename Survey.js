document.addEventListener("DOMContentLoaded", () => {
    const surveyForm = document.getElementById("surveyForm");
    const surveyMessage = document.getElementById("surveyMessage");

    surveyForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = surveyForm.userEmail.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            surveyMessage.textContent = "Please enter a valid email.";
            surveyMessage.style.color = "red";
            return;
        }

        surveyMessage.textContent = "Thank you for your feedback!";
        surveyMessage.style.color = "green";
        surveyForm.reset();
    });
});
