let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let progress = document.getElementById('progress');

function clockTime() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hr = hr % 12;
    hr = hr ? hr : 12;

    hour.innerHTML = hr;
    minute.innerHTML = min;
    second.innerHTML = sec;

    progress.style.width = (sec / 60) * 100 + '%';
}
setInterval(clockTime, 1000);