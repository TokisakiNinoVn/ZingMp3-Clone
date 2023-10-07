
document.addEventListener("DOMContentLoaded", () => {
    // Let variable
    const playNavbar = document.getElementById("play_navbar");
    const closeBtnPlayNavbar = document.getElementById("close_play_navbar");
    const navbarLeft = document.querySelector('.navbar_scroll')
    const addPlaylist = document.querySelector('.navbar_add--playlist')
    const openBtnPlayNavbar = document.querySelectorAll(".play_music")
    const btnPlayStopMusic = document.getElementById('stop_pause_music')
    const btnPlayMusicIcon = document.querySelector('.music_status--play')
    const btnPauseMusicIcon = document.querySelector('.music_status--pause')
    

    // Modul vent function
    function moveDowAddPlayList() {
        navbarLeft.style.height = '457px'
        addPlaylist.style.bottom = '0'
    }

    function moveUpAddPlayList() {
        navbarLeft.style.height = 'calc(457px - 90px)'
        addPlaylist.style.bottom = 'unset'
    }

    function playMusic_IconEvent() {
        btnPlayMusicIcon.style.display = 'block'
        btnPauseMusicIcon.style.display = 'none'
    }

    function pauseMusic_IconEvent() {
        btnPlayMusicIcon.style.display = 'none'
        btnPauseMusicIcon.style.display = 'block'
    }

    function getTimeCodeFromNum(num) {
        let seconds = parseInt(num);
        let minutes = parseInt(seconds / 60);
        seconds -= minutes * 60;
        const hours = parseInt(minutes / 60);
        minutes -= hours * 60;
      
        if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
        return `${String(hours).padStart(2, 0)}:${minutes}:${String(
          seconds % 60
        ).padStart(2, 0)}`;
    }

    //turn 128 seconds into 2:08
    function getTimeCodeFromNum(num) {
        let seconds = parseInt(num);
        let minutes = parseInt(seconds / 60);
        seconds -= minutes * 60;
        const hours = parseInt(minutes / 60);
        minutes -= hours * 60;
    
        if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
            return `${String(hours).padStart(2, 0)}:${minutes}:${String(
                seconds % 60
            ).padStart(2, 0)
        }`;
    }
      
    function playMusicItems(audioVar) {
        if (audioVar.paused) {
            audioVar.play();
        } else {
            audioVar.pause();
        }
    }



    // Function event _____________________________________________________________

    // Load page => hiden play navbar
    window.addEventListener("load", function() {
        playNavbar.style.display = 'none';
        moveDowAddPlayList()
    });

    // Click button play music => show play navbar
    openBtnPlayNavbar.forEach((btn) => {
      btn.addEventListener("click", () => {
        playNavbar.style.display = 'flex';
        moveUpAddPlayList()
        playMusic_IconEvent()
      });
    });

    // Click button close play navbar => hiden play navbar
    closeBtnPlayNavbar.addEventListener("click", () => {
      playNavbar.style.display = 'none';
      moveDowAddPlayList()
    });

    // Move "add playlist" when play navbar is show/hiden
    if(playNavbar.style.display = 'flex' || (playNavbar.style.display = 'block')) {
        moveUpAddPlayList()
    } else {
        moveDowAddPlayList()
    }

    // Click button play music => change icon
    btnPlayStopMusic.addEventListener('click', () => {
        if(btnPlayMusicIcon.style.display == 'none') {
            playMusic_IconEvent()
        } else {
            pauseMusic_IconEvent()
        }
    })


    // Audio player ___________________________________________________________
    const audioPlayer = document.querySelector(".audio-player");
    const playBtn = document.getElementById("stop_pause_music");

    const audio = new Audio("../asset/audio/Thieu_Nien_Hoa_Hong_Remix.mp3");

    console.dir(audio);
    audio.addEventListener("loadeddata", () => {
        document.querySelector(".length").textContent = getTimeCodeFromNum(audio.duration);
        audio.volume = 1;
    }, false
    );

    //play or pause audio upon button click
    playBtn.addEventListener("click", () => {
        playMusicItems(audio)
    }, false
    );

    //click on timeline to skip around
    const timeline = document.querySelector(".timeline");
    timeline.addEventListener("click", e => {
        const timelineWidth = window.getComputedStyle(timeline).width;
        const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
        audio.currentTime = timeToSeek;
    }, false);


    //click volume slider to change volume
    const volumeSlider = document.querySelector(".volume-slider");
    volumeSlider.addEventListener('click', e => {
        const sliderWidth = window.getComputedStyle(volumeSlider).width;
        const newVolume = e.offsetX / parseInt(sliderWidth);
        audio.volume = newVolume;
        document.querySelector(".volume-percentage").style.width = newVolume * 100 + '%';
    }, false)

    //check audio percentage and update time accordingly
    setInterval(() => {
    const progressBar = audioPlayer.querySelector(".progress");
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
    audioPlayer.querySelector(".current").textContent = getTimeCodeFromNum(
        audio.currentTime
    );
    }, 500);


    //volume icon event
    const volumeControlIcon = document.querySelector('.btn_volume_icon');
    const volumeMedium = document.querySelector('.volume_medium_Icon');
    const volumeMute = document.querySelector('.volume_mute_Icon');

    volumeControlIcon.addEventListener('click', () => {
    if (volumeMute.style.display === 'none') {
        volumeMedium.style.display = 'none';
        volumeMute.style.display = 'block';
        audio.muted = true;
    } else {
        volumeMedium.style.display = 'block';
        volumeMute.style.display = 'none';
        audio.muted = false;
    }
    })

});



