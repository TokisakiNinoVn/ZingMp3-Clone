
document.addEventListener("DOMContentLoaded", () => {
    const playNavbar = document.getElementById("play_navbar");
    const closeBtnPlayNavbar = document.getElementById("close_play_navbar");
    const navbarLeft = document.querySelector('.navbar_scroll')
    const addPlaylist = document.querySelector('.navbar_add--playlist')
    
    closeBtnPlayNavbar.addEventListener("click", () => {
      playNavbar.style.display = 'none';
      moveDowAddPlayList()
    });

    function moveDowAddPlayList() {
        navbarLeft.style.height = '457px'
        addPlaylist.style.bottom = '0'
    }
    
    const openBtnPlayNavbar = document.querySelectorAll(".play_music");
    openBtnPlayNavbar.forEach((btn) => {
      btn.addEventListener("click", () => {
        playNavbar.style.display = 'flex';
        moveUpAddPlayList()
      });
    });

    function moveUpAddPlayList() {
        navbarLeft.style.height = 'calc(457px - 90px)'
        addPlaylist.style.bottom = 'unset'
    }

    if(playNavbar.style.display = 'flex' || (playNavbar.style.display = 'block')) {
        moveUpAddPlayList()
    } else {
        moveDowAddPlayList()
    }

    window.addEventListener("load", function() {
        playNavbar.style.display = 'none';
        moveDowAddPlayList()
    });

});




  