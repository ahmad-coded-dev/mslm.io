let navbar = document.getElementsByClassName('navbar')[0]; //top bar
let mobileNavbar = document.getElementsByClassName('navbar_links')[0]; //sliding part
let mobileNavbarLogo = document.getElementsByClassName('navbar_logo')[0]; //logo appears when stick
let navbarSpace = navbar.offsetTop;
let mobNavbarBackground = document.getElementsByClassName('mob_navbar_bg')[0]; //black background appears below mobile navbar

window.onload = stickyNavbar();
window.onscroll = stickyNavbar;
window.addEventListener('resize', hide_mob_nav);
window.addEventListener('touchmove', hide_mob_nav);
window.addEventListener('click', windowOnClick);

function windowOnClick(event) {
    if (event.target.classList.contains('hamburger')) {
        show_mob_nav();
    } else if (
        event.target.classList.contains('navbar_links') ||
        event.target.tagName == 'HR'
    ) {
    } else {
        hide_mob_nav();
    }
}
function show_mob_nav() {
    mobileNavbar.classList.add('show_navbar');
    if (navbar.classList.contains('sticky')) {
        mobNavbarBackground.style.top = '0px';
    }
    document.body.style.overflow = 'hidden';
    mobNavbarBackground.style.display = 'block';
}
function hide_mob_nav() {
    mobileNavbar.classList.remove('show_navbar');
    document.body.style.overflow = '';
    mobNavbarBackground.style.display = 'none';
    mobNavbarBackground.style.top = '';
    if (window.innerWidth > 901) {
        mobileNavbarLogo.style.display = 'none';
    }
}
function stickyNavbar() {
    if (window.pageYOffset >= navbarSpace) {
        navbar.classList.add('sticky');
        if (window.innerWidth < 901) {
            mobileNavbarLogo.style.display = 'inline-block';
        }
    } else {
        navbar.classList.remove('sticky');
        mobileNavbarLogo.style.display = 'none';
    }
}
