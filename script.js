// ----------------------- PRELOADER -----------------------*/
let loader = document.querySelector('.preloader');

window.addEventListener('load', function(){
  loader.style.display = 'none';
})

// ----------------------- SCROLL TO TOP BUTTON CHANGE -----------------------*/
function showScrollToTopBtn(){
  if (document.body.scroll > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById('scrollTop').style.opacity = '1';
    document.getElementById('scrollTop').style.visibility = 'visible';
  }else {
    document.getElementById('scrollTop').style.opacity = '0';
    document.getElementById('scrollTop').style.visibility = 'hidden';
  }
}

window.addEventListener('scroll', showScrollToTopBtn);

function topClick() {
  document.documentElement.scrollTop = 0
}


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
  navToggle.style.visibility = 'hidden';
  navMenu.style.boxShadow = '0 0 0'; // görünen bozukluklar giderildi
}

function hideNav(){
  navMenu.style.display = 'none';
  navigation.style.height = '80px';
  navToggle.style.visibility = 'visible';
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


// ------------------------------------- Subscribe FORM -------------------------------------
function subscribe() {
  if (document.getElementById('email').validity.valid) {
    alert('Subscribed successful!');
  } else {
    return;
  }
}
// ------------------------------------- SCROLL TO -------------------------------------
function scrollToAbout() {
  let about = document.getElementById('about');
  about.scrollIntoView();
}
// ------------------------------------- SCROLL REVEAL -------------------------------------
const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle('is-inViewport', entry.isIntersecting);
  })
}

const Obs = new IntersectionObserver(inViewport);
const obsObtions = {};
const ELs_inviewport = document.querySelectorAll('[data-inviewport]')
ELs_inviewport.forEach(EL => {
  Obs.observe(EL, obsObtions);
})


// ------------------------------------- TOGGLE DAY/NIGHT MODE -------------------------------------
let moon = document.getElementById('moon');
let sun = document.getElementById('sun');
let root = document.querySelector(':root');

function changeToDark() {
  moon.style.visibility = 'hidden';
  moon.style.opacity = '0';
  sun.style.visibility = 'visible';
  sun.style.opacity = '1';

  // Change Color
  root.style.setProperty('--text-color', '#fff')
  root.style.setProperty('--bg-color', '#1f1a45')
  root.style.setProperty('--dark-color', '#aaf5ff');
  root.style.setProperty('--header-change-color', '#193fa8d7');
  root.style.setProperty('--hover-color', '#00bcd4');
  root.style.setProperty('--bg-color-header', '#1f1a45d3');

  // Change Banner 
  document.getElementById('banner').src = 'assets/line2.png'
}

function changeToMain() {
  moon.style.visibility = 'visible';
  moon.style.opacity = '1';
  sun.style.visibility = 'hidden';
  sun.style.opacity = '0';

  // Turn back Color
  root.style.setProperty('--text-color', '#000')
  root.style.setProperty('--bg-color', '#eaf5a5')
  root.style.setProperty('--dark-color', '#010050');
  root.style.setProperty('--header-change-color', '#e8eba6d7');
  root.style.setProperty('--hover-color', '#049395');
  root.style.setProperty('--bg-color-header', '#eaf5a5d3');
  document.getElementById('banner').src = 'assets/line.png'
}