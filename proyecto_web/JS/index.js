import { changeMode, inicializeSwiper, loadTheme } from "./indexPage.js";

document.addEventListener("DOMContentLoaded", e=>{
    loadTheme();
    changeMode();
    inicializeSwiper();
});