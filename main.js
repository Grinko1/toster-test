//slider

const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.product-small-img');
const oldPrice = document.getElementById('old-price')
const newPrice = document.getElementById('new-price');

//установка цены
function changePrice () {
    oldPrice.innerHTML = 'R 250.00'
    newPrice.innerHTML = 'R 160.00'
}

changePrice()

// опасити для выбранной минатюры
function checkOnActiveImg(thumbSrc) {
  thumbnails.forEach((thumb) => {
    if (thumb.getAttribute('src') !== thumbSrc) {
      thumb.style.opacity = 1;
    } else {
      thumb.style.opacity = 0.6;
    }
  });
}
checkOnActiveImg(mainImage.getAttribute('src'));

// обновление большого изображения
function updateMainImage(event) {
  const thumbnail = event.target; // Получаем выбранную миниатюру
  const newSrc = thumbnail.getAttribute('src'); // Получаем путь к выбранному изображению
  mainImage.style.animation = 'none'; // Отключаем предыдущую анимацию
  setTimeout(function () {
    if (newSrc !== null) {
      mainImage.setAttribute('src', newSrc); // Обновляем большое изображение
      mainImage.style.animation = 'fadeOutIn 0.5s ease'; // Применяем анимацию к большому изображению
      checkOnActiveImg(newSrc, mainImage.getAttribute('src'));
    }
  }, 0);
}

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', updateMainImage);
});

// timer
// Время в секундах = (4 * 3600) + (51 * 60) + 16
let seconds = 17476;

function startCountdownTimer() {
  setInterval(function () {
    if (seconds <= 0) {
      clearInterval();
      const timer = document.getElementById('timer');
      timer.style.fontSize = '12px';
      timer.innerHTML = 'Время истекло!';
    } else {
      seconds--;
      displayTime();
    }
  }, 1000);
}

function displayTime() {
  const hours = Math.floor(seconds / 3600); // Вычисляем часы
  const minutes = Math.floor((seconds % 3600) / 60); // Вычисляем минуты
  const remainingSeconds = seconds % 60; // Вычисляем оставшиеся секунды

  // Форматируем время
  const timeString = padZero(hours) + ':' + padZero(minutes) + ':' + padZero(remainingSeconds);

  // Отображаем время
  document.getElementById('timer').innerHTML = timeString;
}

function padZero(value) {
  return (value < 10 ? '0' : '') + value;
}

startCountdownTimer();
