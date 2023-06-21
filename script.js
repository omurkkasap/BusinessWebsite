// ----------------------- PRELOADER -----------------------*/


// ----------------------- SCROLL TO TOP BUTTON CHANGE -----------------------*/



// ----------------------- CHANGE HEADER ON SCROLL -----------------------*/
let nav = document.querySelector('nav');

function changeHeader() {
  if (document.body.scrollTop > 150) {
    nav.classList.add('change-header')
  }else if(document.documentElement.scrollTop > 150) {
    nav.classList.add('change-header');
  }else {
    nav.classList.remove('change-header')
  }
}

window.addEventListener('scroll', changeHeader);



// ----------------TOOGLE NAVİGATİON-----------------*/
let navigation = document.querySelector('nav');
let navMenu = document.querySelector('.nav-menu');
let navToggle = document.getElementById('nav-toggle');
let navClose = document.getElementById('nav-close');

function showNav(){
  navMenu.style.display = 'flex';
  navigation.style.height = '320px';
}



function hideNav(){
  navMenu.style.display = 'none';
  navigation.style.height = '80px';
}


// ------------------------------- HİDE NAV WHEN GO TO SECTİON FOR SMALLER DEVICES -------------------------------
let navLinks = document.querySelectorAll('.pages');

function removeNav() {
  if ($(window).width() < 880) {
    navMenu.style.display = 'none';
    navigation.style.height = '80px';
  }
}

navLinks.forEach(link => {
  link.addEventListener('click', removeNav);
})


// ------------------------------------- SWIPER -------------------------------------



// ------------------------------------- Subscribe FORM -------------------------------------
function subscribe() {
  if (document.getElementById('email').validity.valid) {
    alert('Subscribed successful!');
  } else {
    return;
  }
}
// ------------------------------------- SCROLL TO -------------------------------------
// ------------------------------------- SCROLL REVEAL -------------------------------------
// ------------------------------------- TOGGLE DAY/NIGHT MODE -------------------------------------
