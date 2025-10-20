const sponsorSwiper = new Swiper(".sponsor-swiper", {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 5,
    },
  },
});

const testimonialSwiper = new Swiper(".testimonial-swiper", {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".testimonial-next",
    prevEl: ".testimonial-prev",
  },
  pagination: {
    el: ".testimonial-pagination",
    clickable: true,
  },
});

function switchLanguage(lang) {
  const html = document.documentElement;
  const elements = document.querySelectorAll("[data-ar]");
  const inputs = document.querySelectorAll("[data-ar-placeholder]");

  if (lang === "ar") {
    html.setAttribute("lang", "ar");
    html.setAttribute("dir", "rtl");
    elements.forEach((el) => {
      if (!el.dataset.originalText) {
        el.dataset.originalText = el.textContent;
      }
      el.textContent = el.getAttribute("data-ar");
    });
    inputs.forEach((input) => {
      if (!input.dataset.originalPlaceholder) {
        input.dataset.originalPlaceholder = input.placeholder;
      }
      input.placeholder = input.getAttribute("data-ar-placeholder");
    });
  } else {
    html.setAttribute("lang", "en");
    html.setAttribute("dir", "ltr");
    elements.forEach((el) => {
      if (el.dataset.originalText) {
        el.textContent = el.dataset.originalText;
      }
    });
    inputs.forEach((input) => {
      if (input.dataset.originalPlaceholder) {
        input.placeholder = input.dataset.originalPlaceholder;
      }
    });
  }
}

function toggleTheme() {
  const html = document.documentElement;
  const themeIcon = document.getElementById("theme-icon");
  const currentTheme = html.getAttribute("data-theme");

  if (currentTheme === "dark") {
    html.setAttribute("data-theme", "light");
    themeIcon.className = "ri-moon-line";
    localStorage.setItem("theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    themeIcon.className = "ri-sun-line";
    localStorage.setItem("theme", "dark");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme") || "light";
  const html = document.documentElement;
  const themeIcon = document.getElementById("theme-icon");

  html.setAttribute("data-theme", savedTheme);
  if (savedTheme === "dark") {
    themeIcon.className = "ri-sun-line";
  } else {
    themeIcon.className = "ri-moon-line";
  }
});
