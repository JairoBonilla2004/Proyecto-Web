function activeLightTheme() {
  const $mode_dark = document.querySelectorAll("[data-active_dark]");
  $mode_dark.forEach(element =>{
    if(element.classList.contains("header")){
      element.classList.remove("dark-theme_header");
    }

    if(element.classList.contains("welcome")){
      element.classList.remove("dark-theme_welcome");
    }

    if(element.classList.contains("urbanizaciones-section")){
      element.classList.remove("dark-theme_urb");      
    }

    if(element.classList.contains("fair-play")){
      element.classList.remove("dark-theme_fair");
    }
  });

}

function activeDarkTheme() {
  const $mode_dark = document.querySelectorAll("[data-active_dark]");
  $mode_dark.forEach(element =>{
    if(element.classList.contains("header")){
      element.classList.add("dark-theme_header");
    }

    if(element.classList.contains("welcome")){
      element.classList.add("dark-theme_welcome");
    }

    if(element.classList.contains("urbanizaciones-section")){
      element.classList.add("dark-theme_urb");      
    }

    if(element.classList.contains("fair-play")){
      element.classList.add("dark-theme_fair");
    }
  });

}

export function loadTheme() {
  const $span = document.querySelector(".button-theme span");
  if (localStorage.getItem("mode") === null) {
    localStorage.setItem("mode", "light");
    activeLightTheme();
  }else{
    if(localStorage.getItem("mode") === "dark_mode"){
      activeDarkTheme();
      $span.textContent = "light_mode";
    }

    if(localStorage.getItem("mode") === "light_mode"){
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
