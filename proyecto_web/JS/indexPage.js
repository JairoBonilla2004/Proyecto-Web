function activeLightTheme() {
  const $mode_dark = document.querySelectorAll("[data-active_dark]");
  $mode_dark.forEach((element) => {
    if (element.classList.contains("header")) {
      element.classList.remove("dark-theme_header");
    }

    if (element.classList.contains("welcome")) {
      element.classList.remove("dark-theme_welcome");
    }

    if (element.classList.contains("urbanizaciones-section")) {
      element.classList.remove("dark-theme_urb");
    }

    if (element.classList.contains("fair-play")) {
      element.classList.remove("dark-theme_fair");
    }
    if(element.classList.contains("match-section-time")){
      element.classList.remove("matchTime-dark-mode");
    }
  });
}

function activeDarkTheme() {
  const $mode_dark = document.querySelectorAll("[data-active_dark]");
  $mode_dark.forEach((element) => {
    if (element.classList.contains("header")) {
      element.classList.add("dark-theme_header");
    }

    if (element.classList.contains("welcome")) {
      element.classList.add("dark-theme_welcome");
    }

    if (element.classList.contains("urbanizaciones-section")) {
      element.classList.add("dark-theme_urb");
    }

    if (element.classList.contains("fair-play")) {
      element.classList.add("dark-theme_fair");
    }

    if(element.classList.contains("match-section-time")){
      element.classList.add("matchTime-dark-mode");
    }
  });
}

export function loadTheme() {
  const $span = document.querySelector(".button-theme span");
  if (localStorage.getItem("mode") === null) {
    localStorage.setItem("mode", "light");
    activeLightTheme();
  } else {
    if (localStorage.getItem("mode") === "dark_mode") {
      activeDarkTheme();
      $span.textContent = "light_mode";
    }

    if (localStorage.getItem("mode") === "light_mode") {
      activeLightTheme();
      $span.textContent = "dark_mode";
    }
  }
}

export function changeMode() {
  const $span = document.querySelector(".button-theme span");
  document.addEventListener("click", (e) => {
    if (
      e.target.matches(".button-theme") ||
      e.target.matches(".button-theme *")
    ) {
      if ($span.textContent === "dark_mode") {
        $span.textContent = "light_mode";
        localStorage.setItem("mode", "dark_mode");
        activeDarkTheme();
      } else {
        $span.textContent = "dark_mode";
        localStorage.setItem("mode", "light_mode");
        activeLightTheme();
      }
    }
  });
}

export function inicializeSwiper() {
  const swiper = new Swiper(".swiper", {
    // Parámetros opcionales
    direction: "horizontal",
    loop: true,
    grabcursor: true,
    spaceBetween: 30,

    // Paginación
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Permitir clics en los puntos de la paginación
      dynamicBullets: true, // Mostrar solo los puntos que se necesitan
    },

    // Flechas de navegación
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Hacer que el slider sea responsivo
    breakpoints: {
      0: {
        slidesPerView: 1, // Móvil
      },
      620: {
        slidesPerView: 2, // Tablet
      },
      1024: {
        slidesPerView: 3, // Escritorio
      },
    },
  });
}

export function nextMatchTimer() {
  const target = new Date("2024-12-31T23:59:59");

  function updateCountdown() {
    const current = new Date();
    const diff = target - current;

    if (diff <= 0) {
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(
      2,
      "0"
    );
    document.getElementById("minutes").textContent = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").textContent = String(seconds).padStart(
      2,
      "0"
    );
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
}
