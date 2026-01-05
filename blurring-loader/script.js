const loaderText = document.querySelector('.loader-text');
const bg = document.querySelector('.background');

let loaderValue = 0;
let interval = setInterval(blurring, 30);

function blurring() {
    loaderValue++;
    
    if(loaderValue == 100) {
        clearInterval(interval);
    }

    loaderText.innerText = `${loaderValue}%`;
    loaderText.style.opacity = scale(loaderValue, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(loaderValue, 0, 100, 30, 0)}px)`;

}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}