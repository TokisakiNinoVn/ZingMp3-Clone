const bannerImagesContainer = document.querySelector('.banner_images_container');
const bannerImages = document.querySelectorAll('.banner_img');
const imageCount = bannerImages.length;
let currentIndex = 0;

function changeImage() {
    // Ẩn tất cả các ảnh
    // bannerImages.forEach(img => {
    //     img.style.display = 'none';
    // });

    // // Hiển thị ảnh tiếp theo
    // bannerImages[currentIndex].style.display = 'block';

    // Tăng vị trí của ảnh hiện tại
    currentIndex++;

    // Nếu đã hiển thị tất cả ảnh, quay lại ảnh đầu tiên
    if (currentIndex >= imageCount) {
        currentIndex = 0;
    }
}

setInterval(changeImage, 3000); // Thay đổi ảnh mỗi 3 giây
