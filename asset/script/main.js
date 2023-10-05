// document.addEventListener('DOMContentLoaded', function () {
//     alert('Trang không có responsive, đề cử kích thước màn hình [1530:995]');
//     alert('Album: Hoshino Ai.\n Github: TokisakiNinoVn.');
// });


const link_img = [
    {
        url: "./asset/images/Ai_hori7.jpg",
    },
    {
        url: "./asset/images/Ai_hori4.jpg",
    },
    {
        url: "./asset/images/Ai_hori3.jpg",
    },
];

const bannerImgs = document.querySelectorAll(".banner_img");
let currentIndex = 0;

function changeImage() {
    bannerImgs.forEach((img, index) => {
    img.src = link_img[(currentIndex + index) % link_img.length].url;
    });
    currentIndex = (currentIndex + 1) % link_img.length;
}

// Hiển thị ảnh ban đầu
changeImage();

// Thiết lập hàm thay đổi ảnh sau mỗi 3 giây
setInterval(changeImage, 3000);

const clickLeftBtn = document.getElementById("click-left");
const clickRightBtn = document.getElementById("click-right");

// Thêm event listener cho nút click-left để chuyển đến ảnh trước đó
clickLeftBtn.addEventListener("click", () => {
    // currentIndex = (currentIndex - 1 + link_img.length) % link_img.length;
    currentIndex = (currentIndex + 1) % link_img.length ;

    changeImage();
});

// Thêm event listener cho nút click-right để chuyển đến ảnh kế tiếp
clickRightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % link_img.length ;
    changeImage();
});



// document.addEventListener("contextmenu", function(e) {
//     e.preventDefault();
// });
// document.addEventListener("keydown", function(e) {
//     if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
//         e.preventDefault();
//     }
// });






// Main Scroll 1 hidden Event
const specialAlbum = document.getElementById("special_album");
const mainScrollEvent = document.getElementById("main_scroll");
const mainScroll2Event = document.getElementById("main_scroll--2");

specialAlbum.addEventListener("click", () => {
  mainScrollEvent.classList.add("hidden_display--main_scroll")
  mainScroll2Event.style.display = 'flex'
})

// Main Scroll 2 hidden Event
const backBtn = document.getElementById("close_main_scroll2")
backBtn.addEventListener("click", () => {
  mainScrollEvent.classList.remove("hidden_display--main_scroll")
  mainScroll2Event.style.display = 'none'
})





// Main Scroll 2
const eventIcon = document.querySelector('.icon_infor_media')
const effectImg = document.querySelector('.img_infor')

eventIcon.addEventListener('mouseenter', function() {
    effectImg.classList.add('img_infor_effect')
})
eventIcon.addEventListener('mouseleave', function() {
    effectImg.classList.remove('img_infor_effect')
})


