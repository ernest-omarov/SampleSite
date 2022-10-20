const header = document.querySelector('.header');
const scrollBlock = document.querySelector(".scroll_block");

document.querySelector(".logo").addEventListener('click',function(){
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
})

let prevScrollY = 0;

function scrollingWindow (){
  if(window.scrollY <= 50){
    header.classList.remove("header-animation");
    header.classList.remove("header-changingColor");
  }else if (!header.classList.contains("header-changingColor")) {
    header.classList.add("header-changingColor");
  }else if (window.scrollY >= 50 && window.scrollY <= 250) {
    header.classList.add("header-changingColor");
  }else if (window.scrollY > prevScrollY) {
    header.classList.add("header-animation");
  }else if (window.scrollY < prevScrollY){
   header.classList.remove("header-animation");
  }

 prevScrollY = window.scrollY;
}

function scrollingConceptBlock () {
  scrollBlock.classList.add("animation-scroll_concept_block");
  }

function changingColor() {
  scrollingWindow()
  if(window.scrollY >= 500) {
    scrollingConceptBlock()
  }
}

window.addEventListener("scroll", changingColor);