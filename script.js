// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Hardware recommendation button
function showTip() {
    const tips = [
        "32GB DDR5 is ideal for modern gaming and productivity.",
        "NVMe SSDs provide much faster loading times than SATA SSDs.",
        "Mini-ITX builds save space but offer fewer expansion slots.",
        "ATX motherboards provide the best upgrade flexibility.",
        "Choose a power supply with at least 20% extra capacity."
    ];

    const randomTip =
        tips[Math.floor(Math.random() * tips.length)];

    document.getElementById("tip").textContent = randomTip;
}

// Fade-in animation when sections appear
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".card").forEach(card => {
    observer.observe(card);
});

// Display current year automatically
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");

    footer.innerHTML =
        `PC Hardware Hub © ${new Date().getFullYear()}`;
});
