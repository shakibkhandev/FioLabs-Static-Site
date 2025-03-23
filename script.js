// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar background change on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.style.background = "rgba(10, 15, 29, 0.98)";
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.background = "transparent";
    header.style.boxShadow = "none";
  }
});

// Animate elements on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".category-card");
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const isVisible = elementTop < window.innerHeight && elementBottom >= 0;

    if (isVisible) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Initialize animation states
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".category-card");
  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
  });

  // Trigger initial animation check
  animateOnScroll();
});

// Listen for scroll events
window.addEventListener("scroll", animateOnScroll);

// Search functionality
const searchInput = document.querySelector(".search-container input");
const searchButton = document.querySelector(".search-btn");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    // Add a subtle animation to the button
    searchButton.style.transform = "scale(0.95)";
    setTimeout(() => {
      searchButton.style.transform = "scale(1)";
    }, 100);

    // You can implement actual search functionality here
    console.log("Searching for:", searchTerm);
  }
});

// Add hover effect to category cards
const categoryCards = document.querySelectorAll(".category-card");
categoryCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
    card.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "none";
  });
});

// Mobile Menu Functionality
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const body = document.body;

// Function to toggle menu
function toggleMenu() {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "";
}

// Toggle menu on hamburger click
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    !navLinks.contains(e.target) &&
    !hamburger.contains(e.target) &&
    navLinks.classList.contains("active")
  ) {
    toggleMenu();
  }
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenu();
  });
});

// Prevent menu from closing when clicking inside
navLinks.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Change header background on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "rgba(4, 11, 20, 0.95)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.background = "transparent";
    header.style.backdropFilter = "none";
  }
});
