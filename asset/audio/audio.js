const playButton = document.getElementById('stop_pause_music');
const playButtonMainScroll2 = document.getElementById('music_item--1');
const pauseIcon = document.querySelector('.music_status--pause');
const playIcon = document.querySelector('.music_status--play');
const progressBar = document.querySelector('.progress');
const currentTime = document.querySelector('.current');

const audio = new Audio('Thieu_Nien_Hoa_Hong_Remix.mp3'); // Thay 'url_of_your_audio_file.mp3' bằng đường dẫn của tệp âm thanh của bạn

// Khởi tạo trạng thái ban đầu
let isPlaying = false;

// Sự kiện click vào nút play/pause
// playButton.addEventListener('click', () => {
playButtonMainScroll2.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
});

// Sự kiện thay đổi thanh tiến trình khi audio chạy
audio.addEventListener('timeupdate', () => {
  const duration = audio.duration;
  const currentTimeValue = audio.currentTime;

  const progress = (currentTimeValue / duration) * 100;
  progressBar.style.width = progress + '%';

  // Định dạng thời gian hiện tại
  const minutes = Math.floor(currentTimeValue / 60);
  const seconds = Math.floor(currentTimeValue % 60);
  currentTime.textContent = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
});

// Sự kiện khi audio kết thúc
audio.addEventListener('ended', () => {
  isPlaying = false;
  pauseIcon.style.display = 'none';
  playIcon.style.display = 'inline';
  progressBar.style.width = '0%';
  currentTime.textContent = '0:00';
});

// Cập nhật độ dài của bản nhạc khi nó đã tải hoàn toàn
audio.addEventListener('canplaythrough', () => {
  const duration = audio.duration;
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  document.querySelector('.length').textContent = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
});
