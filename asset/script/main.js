const link_img = [
    {
      url: "./asset/images/banner.jpg",
    },
    {
      url: "./asset/images/banner2.jpg",
    },
    {
      url: "./asset/images/banner3.jpg",
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
  setInterval(changeImage, 4000);