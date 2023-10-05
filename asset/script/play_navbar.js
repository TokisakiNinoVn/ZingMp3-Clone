
document.addEventListener("DOMContentLoaded", () => {
    const navbarId = document.getElementById("play_navbar");
    const closeBtnPlayNavbar = document.getElementById("close_play_navbar");
    
    closeBtnPlayNavbar.addEventListener("click", () => {
      navbarId.style.display = 'none';
    });
    
    const openBtnPlayNavbar = document.querySelectorAll(".play_music");
    openBtnPlayNavbar.forEach((btn) => {
      btn.addEventListener("click", () => {
        navbarId.style.display = 'flex';
      });
    });
  });
  