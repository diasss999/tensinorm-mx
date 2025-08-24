### ⚙️ script.js
```javascript
// Таймер акции
let time = 15 * 60; // 15 минут
const timerEl = document.getElementById('timer');


function updateTimer() {
const minutes = Math.floor(time / 60);
const seconds = time % 60;
timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
if (time > 0) time--;
}
setInterval(updateTimer, 1000);


// Форма
const form = document.getElementById('leadForm');
const countdown = document.getElementById('countdown');
const counter = document.getElementById('counter');


form.addEventListener('submit', (e) => {
e.preventDefault();
form.classList.add('hidden');
countdown.classList.remove('hidden');


let count = 3;
counter.textContent = count;
const interval = setInterval(() => {
count--;
counter.textContent = count;
if (count === 0) {
clearInterval(interval);
window.location.href = "pdfs/consejos.pdf"; // тут подставим нужный файл позже
}
}, 1000);
});
```