// const link_img = [
//     {
//         url: "./asset/images/banner.jpg",
//     },
//     {
//         url: "./asset/images/banner2.jpg",
//     },
//     {
//         url: "./asset/images/banner3.jpg",
//     },
// ];
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
    currentIndex = (currentIndex - 1 + link_img.length) % link_img.length;
    changeImage();
});

// Thêm event listener cho nút click-right để chuyển đến ảnh kế tiếp
clickRightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % link_img.length;
    changeImage();
});