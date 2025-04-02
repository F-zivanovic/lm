// Open/close mobile menu
const hamburgerIcon = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const closeIcon = document.getElementById('close');
const navLinks = navList.querySelectorAll('.nav__link');

hamburgerIcon.addEventListener('click', ()=> navList.classList.add('active') );
closeIcon.addEventListener('click', ()=> navList.classList.remove('active') );

navLinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
        navList.classList.remove('active');
    })
});

// Close mobile menu on screen > 1200px
window.addEventListener('resize', () => {
    if (window.innerWidth > 1200) {
        navList.classList.remove('active');
    }
});

// Arrow up icon
const arrowUp = document.getElementById('arrow-up');

document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    arrowUp.classList.add("active");
  } else {
    arrowUp.classList.remove("active");
  }
});

const scrollBtn = document.querySelector(".arrow__up");

scrollBtn.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});
