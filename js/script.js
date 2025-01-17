// JavaScript for interactivity
document.addEventListener("DOMContentLoaded", () => {
    const socialLinks = document.querySelectorAll(".social-icons a");

    socialLinks.forEach(link => {
        link.addEventListener("click", event => {
            const platform = link.getAttribute("data-title");
            alert(`Opening ${platform}!`);
        });
    });

    // Sticky header on scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        } else {
            header.style.boxShadow = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".accordion-toggle");
  
    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const targetId = toggle.getAttribute("data-target");
        const targetBody = document.getElementById(targetId);
        const accordionContainer = toggle.closest(".accordion-container");
  
        // Tutup semua accordion body lainnya di dalam container yang sama
        accordionContainer.querySelectorAll(".accordion-body").forEach((body) => {
          if (body !== targetBody) {
            body.style.display = "none";
          }
        });
  
        // Reset semua toggle lainnya di dalam container yang sama
        accordionContainer.querySelectorAll(".accordion-toggle").forEach((btn) => {
          if (btn !== toggle) {
            btn.classList.remove("active");
          }
        });
  
        // Toggle body yang diklik
        if (targetBody.style.display === "block") {
          targetBody.style.display = "none";
          toggle.classList.remove("active");
        } else {
          targetBody.style.display = "block";
          toggle.classList.add("active");
        }
      });
    });
  });