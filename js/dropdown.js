"use strict";

const dropbtn = document.getElementById("drop-btn");
const dropMenu = document.getElementById("drop-menu");

dropbtn.addEventListener('click', () => {
  if (dropMenu.classList.contains("show-drop")) {
    dropMenu.classList.remove("show-drop");
  } else {
    dropMenu.classList.add("show-drop");
  }
});
