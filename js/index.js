//javascript of best team card (home page)
let cards_count = document.getElementsByClassName('member_card'); //contains all the cards we have
let count = 0;
let slider = document.getElementsByClassName('slider');
let no = 0;
if (cards_count <= 3) {
    document.getElementsByClassName('sec')[0].style.visibility = 'hidden';
}
function trans_left() {
    document.getElementsByClassName('sec')[0].style.visibility = 'visible';
    count = count + 924;
    slider[0].style.transition = 'all .5s ease-in-out';
    slider[0].style.transform = 'translateX(' + count + 'px)';
    no = no - 1;
    if (no < 1) {
        document.getElementsByClassName('first')[0].style.visibility = 'hidden';
    }
}
function trans_right() {
    let a = document.getElementsByClassName('slider');
    document.getElementsByClassName('first')[0].style.visibility = 'visible';
    count = count - 924;
    slider[0].style.transition = 'all .5s ease-in-out';
    slider[0].style.transform = 'translateX(' + count + 'px)';
    no = no + 1;
    if (no >= Math.ceil(cards_count.length / 3) - 1) {
        document.getElementsByClassName('sec')[0].style.visibility = 'hidden';
    }
}
