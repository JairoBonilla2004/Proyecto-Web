import {
  changeHtml,
  changeMode,
  inicializeSwiper,
  loadTheme,
  nextMatchTimer,
} from "./indexPage.js";

document.addEventListener("DOMContentLoaded", (e) => {
  loadTheme();
  changeMode();
  inicializeSwiper();
  nextMatchTimer();
});
changeHtml();
