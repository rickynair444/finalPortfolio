// JavaScript functions to enhance interactivity across the website

// Function to handle navigation highlighting
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
}

// Function to display a welcome message on page load
function displayWelcomeMessage() {
    const welcomeMessage = document.createElement("div");
    welcomeMessage.className = "welcome-message";
    welcomeMessage.innerText = "Welcome to our multi-page website!";
    document.body.prepend(welcomeMessage);

    setTimeout(() => {
        welcomeMessage.style.opacity = 0;
        setTimeout(() => {
            welcomeMessage.remove();
        }, 1000);
    }, 3000);
}

// Call functions on page load
window.onload = function() {
    highlightCurrentPage();
    displayWelcomeMessage();
};