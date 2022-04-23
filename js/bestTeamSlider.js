const mob_sliderContainer = document.querySelector('.window');
const mob_slider = document.querySelector('.slider');
const no_of_cards = document.getElementsByClassName('member_card');

mob_slider.style.width = String(no_of_cards.length * 326) + 'px';

let clicked = false;
let xAxis;
let x;

mob_sliderContainer.addEventListener('mouseup', () => {});

mob_sliderContainer.addEventListener('mousedown', (e) => {
    clicked = true;
    xAxis = e.offsetX - mob_slider.offsetLeft;
});

window.addEventListener('mouseup', () => {
    clicked = false;
});

mob_sliderContainer.addEventListener('mousemove', (e) => {
    if (!clicked) return;
    e.preventDefault();
    x = e.offsetX;
    mob_slider.style.left = `${x - xAxis}px`;
    checkSize();
});

function checkSize() {
    let mob_sliderContainerOut = mob_sliderContainer.getBoundingClientRect();
    let mob_sliderIn = mob_slider.getBoundingClientRect();
    if (parseInt(mob_slider.style.left) > 0) {
        mob_slider.style.left = `0px`;
    } else if (mob_sliderIn.right < mob_sliderContainerOut.right) {
        mob_slider.style.left = `-${
            mob_sliderIn.width - mob_sliderContainerOut.width
        }px`;
    }
}

mob_sliderContainer.addEventListener('touchstart', (e) => {
    clicked = true;
    xAxis = e.touches[0].clientX - mob_slider.offsetLeft;
});
mob_sliderContainer.addEventListener('touchend', () => {
    clicked = false;
});
mob_sliderContainer.addEventListener('touchmove', (e) => {
    if (!clicked) return;
    e.preventDefault();
    x = e.touches[0].clientX;
    mob_slider.style.left = `${x - xAxis}px`;
    checkSize();
});
