document.addEventListener('DOMContentLoaded', function () {

    const profileWrapper = document.querySelector('.profile-wrapper');
    if (profileWrapper) {
        const particleCount = 30;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            const size = Math.random() * 8 + 2;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const duration = Math.random() * 6 + 4;
            const delay = Math.random() * 5;
            const opacity = Math.random() * 0.5 + 0.1;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.opacity = opacity;
            particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;

            profileWrapper.appendChild(particle);
        }

        document.querySelectorAll('.particle').forEach(particle => {
            const animName = `float-${Math.random().toString(36).substr(2, 5)}`;
            const keyframes = `
                @keyframes ${animName} {
                    0% { transform: translate(0, 0); }
                    50% { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px); }
                    100% { transform: translate(0, 0); }
                }
            `;
            const styleSheet = document.createElement('style');
            styleSheet.textContent = keyframes;
            document.head.appendChild(styleSheet);

            particle.style.animation = `${animName} ${Math.random() * 10 + 5}s infinite ease-in-out`;
        });
    }

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const menu = document.querySelector('.navbar');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => navLinks.classList.toggle("show"));
    }

    document.addEventListener('click', function(e) {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('show');
        }
    });

    const scrollElements = document.querySelectorAll(
        ".fade-up, .fade-down, .fade-left, .fade-right, .scale-in, .family-card"
    );

    function showOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;
        scrollElements.forEach((el, i) => {
            const boxTop = el.getBoundingClientRect().top;
            if (boxTop < triggerBottom && !el.classList.contains("show")) {
                setTimeout(() => el.classList.add("show"), i * 150);
            }
        });
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll();

    const navItems = document.querySelectorAll(".nav-link");
    navItems.forEach((item, i) => {
        setTimeout(() => item.classList.add("show"), 200 * i + 200);
    });

});
if (localStorage.getItem("login") !== "true") {
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("login");
  window.location.href = "index.html";
}