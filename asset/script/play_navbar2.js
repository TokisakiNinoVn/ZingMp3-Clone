const inforMusicItems= [
    {
        nameSong: "Thiếu Niên Hoa Hồng Remix",
        nameSinger: "Hoshino Ai",
        linkImgSong: "../asset/images/Ai_1x1_Bloom.jpg",
        linkSong: "../asset/audio/Thieu_Nien_Hoa_Hong_Remix.mp3",
    },
    {
        nameSong: "Vô Cảm Giang Thần",
        nameSinger: "Hoshino Ai",
        linkImgSong: "../asset/images/Eysia_love.jpg",
        linkSong: "../asset/img/VoCamGiangThan.mp3",
    },
    {
        nameSong: "Fool For You (Kastra Remix) [Lyrics Vietsub]",
        nameSinger: "Hoshino Ai",
        linkImgSong: "../asset/images/Eysia_hii.jpg",
        linkSong: "../asset/audio/FoolForYouKastraLyricsVietsub.mp3",
    }

]


// Load page => hiden play navbar
window.addEventListener("load", function() {
    playNavbar.style.display = 'none';
    moveDowAddPlayList()
});

const btnHiddenPlayNavbar = document.getElementById("hidden_play_navbar")
const iconHidden = document.querySelector(".navbar_status--hidden")
const iconShow = document.querySelector(".navbar_status--show")
const scrollToTopEvent = document.querySelector(".scrollToTopBtn")

btnHiddenPlayNavbar.addEventListener("click", function() {
    if (playNavbar.classList.contains("movedown")) {
        playNavbar.classList.remove('movedown');
        scrollToTopBtn.classList.remove('nonePlayNavbar');
        iconShow.style.display = "none";
        iconHidden.style.display = "block";
        document.querySelector('.colab_music').style.paddingBottom = '100px';
        moveUpAddPlayList()
    } else {
        playNavbar.classList.add('movedown');
        scrollToTopBtn.classList.add('nonePlayNavbar');
        iconHidden.style.display = "none";
        iconShow.style.display = "block";
        document.querySelector('.colab_music').style.paddingBottom = '20px';
        moveDowAddPlayList()
    }
})


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
    let hours = parseInt(minutes / 60);
    minutes -= hours * 60;
    
    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
        seconds % 60
    ).padStart(2, 0)}`;
}

function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    let hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
        return `${String(hours).padStart(2, 0)}:${minutes}:${String(
            seconds % 60
        ).padStart(2, 0)
    }`;
}
    
function playMusicItems(audioVar) {
    audioVar.play();
}

function pauseMusicItems(audioVar) {
    audioVar.pause();
}


// let audio = null;
// function createOrUpdateAudio(audioFile) {
//   audio.pause();
//   audio = new Audio(audioFile);
//   return audio
// }

let listMusicFavorite = [];
// Function event _____________________________________________________________
document.getElementById("music_item--1").addEventListener("click", function() {
    let audio = null
    audio = new Audio("../asset/audio/Thieu_Nien_Hoa_Hong_Remix.mp3");
    // createOrUpdateAudio(audio);
    
    // Click button play music => show play navbar
    playNavbar.style.display = 'flex';
    moveUpAddPlayList()
    playMusic_IconEvent()
    playMusicItems(audio)
    scrollToTopBtn.classList.remove('nonePlayNavbar');
    document.querySelector('.colab_music').style.paddingBottom = '100px';

    let imageOfSong = document.querySelector('.image_of_song').textContent = inforMusicItems[0].linkImgSong
    let titleDocument = document.querySelector('.title_document').innerHTML = inforMusicItems[0].nameSong
    let nameSong = document.querySelector('.name_song--event').textContent = inforMusicItems[0].nameSong
    let singerName = document.querySelector('.singer-name--event').textContent = inforMusicItems[0].nameSinger

    var musicItem1 = {
        linkOfItem: inforMusicItems[0].linkSong,
        nameSong: inforMusicItems[0].nameSong,
        nameSinger: inforMusicItems[0].nameSinger,
        linkImgSong: inforMusicItems[0].linkImgSong,
        album: 'Phố sau mưa',
        totalTime: '03:30',
    }

    for (var key in musicItem1) {
        if (musicItem1.hasOwnProperty(key)) {
          var entry = {};
          entry[key] = musicItem1[key];
          listMusicFavorite.push(entry);
        }
    }

    console.log(listMusicFavorite);

    let audioPlayer = document.querySelector(".audio-player");
    console.dir(audio);
    audio.addEventListener("loadeddata", () => {
        document.querySelector(".length").textContent = getTimeCodeFromNum(audio.duration);
        audio.volume = 1;
    }, false
    );

    //play or pause audio upon button click
    let playBtn = document.getElementById("stop_pause_music");
    playBtn.addEventListener("click", () => {
        playMusicItems(audio)
    }, false
    );

    //click on timeline to skip around
    let timeline = document.querySelector(".timeline");
    timeline.addEventListener("click", e => {
        let timelineWidth = window.getComputedStyle(timeline).width;
        let timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
        audio.currentTime = timeToSeek;

        if (timeToSeek == getTimeCodeFromNum(audio.duration)) {
            pauseMusic_IconEvent()
        }
        
    }, false);


    //click volume slider to change volume
    let volumeSlider = document.querySelector(".volume-slider");
    volumeSlider.addEventListener('click', e => {
        let sliderWidth = window.getComputedStyle(volumeSlider).width;
        let newVolume = e.offsetX / parseInt(sliderWidth);
        audio.volume = newVolume;
    let letWeidth = document.querySelector(".volume-percentage").style.width = newVolume * 100 + '%';

    }, false)

    //check audio percentage and update time accordingly
    setInterval(() => {
        let progressBar = audioPlayer.querySelector(".progress");
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

    // Click button close play navbar => hiden play navbar
    closeBtnPlayNavbar.addEventListener("click", () => {
        playNavbar.style.display = 'none';
        moveDowAddPlayList()
        pauseMusicItems(audio)
        scrollToTopBtn.classList.add('nonePlayNavbar');
        document.querySelector('.colab_music').style.paddingBottom = '0px';
        document.querySelector('.title_document').innerHTML = 'Zing MP3 - Nghe nhạc mới, HOT nhất và tải nhạc miễn phí'
        audio = null
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
            playMusicItems(audio)
        } else {
            pauseMusic_IconEvent()
            pauseMusicItems(audio)
        }
    })

    //Btn loop music
    const btnLoopMusic = document.getElementById('loop_music_items')
    btnLoopMusic.addEventListener('click', () => {
        if (btnLoopMusic.classList.contains('loop_music_true')) {
            btnLoopMusic.classList.remove('loop_music_true')
            audio.loop = false;
        } else {
            btnLoopMusic.classList.add('loop_music_true')
            audio.loop = true;
        }
    })
});

const favoriteSongMenu = document.querySelector(".favorite_song_menu");
const closeFavoriteSongMenuIcon = document.querySelector(".close_menu_favorite_song");
const listItemFavoriteSongEvent = document.querySelector(".list_items_favorite_song");
const openFavoriteSongMenu = document.querySelector(".open_menu_favorite_list_song").addEventListener("click", () => {
    favoriteSongMenu.style.display = "flex";
})
closeFavoriteSongMenuIcon.addEventListener("click", () => {
    favoriteSongMenu.style.display = "none";
})

listItemFavoriteSongEvent.addEventListener("DOMContentLoaded", () => {
    if (listMusicFavorite.length == 0) {
        alert("Không có bài hát nào trong danh sách yêu thích của bạn !")
    } else {
        for (let i = 0; i < listMusicFavorite.length; i++) {
            let musicItem = listMusicFavorite[i];
            htmlCode += `
                <div class="media_1infor">
                    <div class="media_infor--left">
                        <ion-icon name="musical-notes-outline"></ion-icon>
                        <div class="div_avt_song">
                            <img src="${musicItem.linkImgSong}" alt="">
                        </div>
                        <div class="song_tittle">
                            <span class="name_song">${musicItem.nameSong}</span>
                            <span class="singer_song">${musicItem.nameSinger}</span>
                        </div>
                    </div>
                    <div class="media_infor--mid">
                        <span>${musicItem.album}</span>
                    </div>
                    <div class="media_infor--right">
                        <span class="total_time">${musicItem.totalTime}</span>
                        <div class="items_for_media">
                            <ion-icon id="music_item--${i + 1}" class="play_music" name="play"></ion-icon>
                            <ion-icon name="heart"></ion-icon>
                        </div>
                    </div>
                </div>
            `;
        }
        listItemFavoriteSongEvent.innerHTML = htmlCode;
    }
})




// document.getElementById("music_item--2").addEventListener("click", function() {
//     let audio = null
//     audio = new Audio("../asset/audio/VoCamGiangThan.mp3");
    
//     // Click button play music => show play navbar
//     playNavbar.style.display = 'flex';
//     moveUpAddPlayList()
//     playMusic_IconEvent()
//     playMusicItems(audio)
//     scrollToTopBtn.classList.remove('nonePlayNavbar');


//     let audioPlayer = document.querySelector(".audio-player");
//     console.dir(audio);
//     audio.addEventListener("loadeddata", () => {
//         document.querySelector(".length").textContent = getTimeCodeFromNum(audio.duration);
//         audio.volume = 1;
//     }, false
//     );

//     //play or pause audio upon button click
//     let playBtn = document.getElementById("stop_pause_music");
//     playBtn.addEventListener("click", () => {
//         playMusicItems(audio)
//     }, false
//     );

//     //click on timeline to skip around
//     let timeline = document.querySelector(".timeline");
//     timeline.addEventListener("click", e => {
//         let timelineWidth = window.getComputedStyle(timeline).width;
//         let timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
//         audio.currentTime = timeToSeek;

//         if (timeToSeek == getTimeCodeFromNum(audio.duration)) {
//             pauseMusic_IconEvent()
//         }
        
//     }, false);


//     //click volume slider to change volume
//     let volumeSlider = document.querySelector(".volume-slider");
//     volumeSlider.addEventListener('click', e => {
//         let sliderWidth = window.getComputedStyle(volumeSlider).width;
//         let newVolume = e.offsetX / parseInt(sliderWidth);
//         audio.volume = newVolume;
//     let letWeidth = document.querySelector(".volume-percentage").style.width = newVolume * 100 + '%';

//     }, false)

//     //check audio percentage and update time accordingly
//     setInterval(() => {
//         let progressBar = audioPlayer.querySelector(".progress");
//         progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
//         audioPlayer.querySelector(".current").textContent = getTimeCodeFromNum(
//             audio.currentTime
//         );
//     }, 500);


//     //volume icon event
//     const volumeControlIcon = document.querySelector('.btn_volume_icon');
//     const volumeMedium = document.querySelector('.volume_medium_Icon');
//     const volumeMute = document.querySelector('.volume_mute_Icon');

//     volumeControlIcon.addEventListener('click', () => {
//         if (volumeMute.style.display === 'none') {
//             volumeMedium.style.display = 'none';
//             volumeMute.style.display = 'block';
//             audio.muted = true;
//         } else {
//             volumeMedium.style.display = 'block';
//             volumeMute.style.display = 'none';
//             audio.muted = false;
//         }
//     })

//     // Click button close play navbar => hiden play navbar
//     closeBtnPlayNavbar.addEventListener("click", () => {
//         playNavbar.style.display = 'none';
//         moveDowAddPlayList()
//         pauseMusicItems(audio)
//         scrollToTopBtn.classList.add('nonePlayNavbar')
//         audio = null
//     });

//     // Move "add playlist" when play navbar is show/hiden
//     if(playNavbar.style.display = 'flex' || (playNavbar.style.display = 'block')) {
//         moveUpAddPlayList()
//     } else {
//         moveDowAddPlayList()
//     }

//     // Click button play music => change icon
//     btnPlayStopMusic.addEventListener('click', () => {
//         if(btnPlayMusicIcon.style.display == 'none') {
//             playMusic_IconEvent()
//             playMusicItems(audio)
//         } else {
//             pauseMusic_IconEvent()
//             pauseMusicItems(audio)
//         }
//     })
// });

// document.getElementById("music_item--3").addEventListener("click", function() {
//     let audio = null
//     audio = new Audio("../asset/audio/FoolForYouKastraLyricsVietsub.mp3");
    
//     // Click button play music => show play navbar
//     playNavbar.style.display = 'flex';
//     moveUpAddPlayList()
//     playMusic_IconEvent()
//     playMusicItems(audio)
//     scrollToTopBtn.classList.remove('nonePlayNavbar');


//     let audioPlayer = document.querySelector(".audio-player");
//     console.dir(audio);
//     audio.addEventListener("loadeddata", () => {
//         document.querySelector(".length").textContent = getTimeCodeFromNum(audio.duration);
//         audio.volume = 1;
//     }, false
//     );

//     //play or pause audio upon button click
//     let playBtn = document.getElementById("stop_pause_music");
//     playBtn.addEventListener("click", () => {
//         playMusicItems(audio)
//     }, false
//     );

//     //click on timeline to skip around
//     let timeline = document.querySelector(".timeline");
//     timeline.addEventListener("click", e => {
//         let timelineWidth = window.getComputedStyle(timeline).width;
//         let timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
//         audio.currentTime = timeToSeek;

//         if (timeToSeek == getTimeCodeFromNum(audio.duration)) {
//             pauseMusic_IconEvent()
//         }
        
//     }, false);


//     //click volume slider to change volume
//     let volumeSlider = document.querySelector(".volume-slider");
//     volumeSlider.addEventListener('click', e => {
//         let sliderWidth = window.getComputedStyle(volumeSlider).width;
//         let newVolume = e.offsetX / parseInt(sliderWidth);
//         audio.volume = newVolume;
//     let letWeidth = document.querySelector(".volume-percentage").style.width = newVolume * 100 + '%';

//     }, false)

//     //check audio percentage and update time accordingly
//     setInterval(() => {
//         let progressBar = audioPlayer.querySelector(".progress");
//         progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
//         audioPlayer.querySelector(".current").textContent = getTimeCodeFromNum(
//             audio.currentTime
//         );
//     }, 500);


//     //volume icon event
//     const volumeControlIcon = document.querySelector('.btn_volume_icon');
//     const volumeMedium = document.querySelector('.volume_medium_Icon');
//     const volumeMute = document.querySelector('.volume_mute_Icon');

//     volumeControlIcon.addEventListener('click', () => {
//         if (volumeMute.style.display === 'none') {
//             volumeMedium.style.display = 'none';
//             volumeMute.style.display = 'block';
//             audio.muted = true;
//         } else {
//             volumeMedium.style.display = 'block';
//             volumeMute.style.display = 'none';
//             audio.muted = false;
//         }
//     })

//     // Click button close play navbar => hiden play navbar
//     closeBtnPlayNavbar.addEventListener("click", () => {
//         playNavbar.style.display = 'none';
//         moveDowAddPlayList()
//         pauseMusicItems(audio)
//         scrollToTopBtn.classList.add('nonePlayNavbar');
//         audio = null
//     });

//     // Move "add playlist" when play navbar is show/hiden
//     if(playNavbar.style.display = 'flex' || (playNavbar.style.display = 'block')) {
//         moveUpAddPlayList()
//     } else {
//         moveDowAddPlayList()
//     }

//     // Click button play music => change icon
//     btnPlayStopMusic.addEventListener('click', () => {
//         if(btnPlayMusicIcon.style.display == 'none') {
//             playMusic_IconEvent()
//             playMusicItems(audio)
//         } else {
//             pauseMusic_IconEvent()
//             pauseMusicItems(audio)
//         }
//     })
// });

