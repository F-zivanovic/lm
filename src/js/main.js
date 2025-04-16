const hamburgerIcon = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const closeIcon = document.getElementById('close');
const navLinks = navList.querySelectorAll('.nav__link');


/**
 * Open/Close mobile menu (navList) wen click on hamburger (hamburgerIcon)
 * Prevent click to came to body (stopPropagation)
 */
hamburgerIcon.addEventListener('click', (e)=>{
  e.stopPropagation();
  navList.classList.toggle('active');
});


/**
 * Close mobile menu (navList) wehn click on close icon (closeIcon)
 */
closeIcon.addEventListener('click', ()=> navList.classList.remove('active') );


/**
 * Close mobile menu (navlist) when click on whatever link 
 */
navLinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
        navList.classList.remove('active');
    })
});


/**
 * Close mobile menu (navList) when screen is larget than 1200px
 */
window.addEventListener('resize', () => {
    if (window.innerWidth > 1200) {
        navList.classList.remove('active');
    }
});


/**
 * Close mobile menu (navList) when user click on screen
 */
document.addEventListener('click', (e)=>{
  if(!navList.contains(e.target)){
    navList.classList.remove('active');
  }
});


/**
 * Show/Hide arrow icon (arrowUp) on scroll
 */
const arrowUp = document.getElementById('arrow-up');

document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    arrowUp.classList.add("active");
  } else {
    arrowUp.classList.remove("active");
  }
});

/**
 * Back to top when user click on arrow icon (arrowUp)
 */
arrowUp.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});
