
document.addEventListener("DOMContentLoaded", () => {
    const playNavbar = document.getElementById("play_navbar");
    const closeBtnPlayNavbar = document.getElementById("close_play_navbar");
    const navbarLeft = document.querySelector('.navbar_scroll')
    const addPlaylist = document.querySelector('.navbar_add--playlist')
    
    function moveDowAddPlayList() {
        navbarLeft.style.height = '457px'
        addPlaylist.style.bottom = '0'
    }

    function moveUpAddPlayList() {
        navbarLeft.style.height = 'calc(457px - 90px)'
        addPlaylist.style.bottom = 'unset'
    }

    const openBtnPlayNavbar = document.querySelectorAll(".play_music")
    const btnPlayMusic = document.getElementById('stop_pause_music')
    const btnPlayMusicIcon = document.querySelector('.music_status--play')
    const btnPauseMusicIcon = document.querySelector('.music_status--pause')

    openBtnPlayNavbar.forEach((btn) => {
      btn.addEventListener("click", () => {
        playNavbar.style.display = 'flex';
        moveUpAddPlayList()
        btnPauseMusicIcon.style.display = 'none'
      });
    });

    closeBtnPlayNavbar.addEventListener("click", () => {
      playNavbar.style.display = 'none';
      moveDowAddPlayList()
    });

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




// Event click on button play music
const btnPlayMusic = document.getElementById('stop_pause_music')
const btnPlayMusicIcon = document.querySelector('.music_status--play')
const btnPauseMusicIcon = document.querySelector('.music_status--pause')

btnPlayMusic.addEventListener('click', () => {
    if(btnPlayMusicIcon.style.display == 'none') {
        btnPlayMusicIcon.style.display = 'block'
        btnPauseMusicIcon.style.display = 'none'
    } else {
        btnPlayMusicIcon.style.display = 'none'
        btnPauseMusicIcon.style.display = 'block'
    }
})