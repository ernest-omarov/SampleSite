const header = document.querySelector('.header');
const scrollBlock = document.querySelector(".scroll_block");
const scrollRoboArm = document.querySelector(".robo-arm-info");
const roboScroll = document.querySelector(".robo-arm-scroll");
const titleMarketing = document.querySelectorAll(".marketing-block-inside");
const scrollMarketing = document.querySelectorAll(".scroll_marketing");


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
  }else if (window.scrollY > prevScrollY + 200) {
    header.classList.add("header-animation");
    prevScrollY = window.scrollY;
  }else if (window.scrollY < prevScrollY - 200){
   header.classList.remove("header-animation");
   prevScrollY = window.scrollY;
  }
}

function scrollingAnimation () {
  if (window.scrollY >= 500) {
    scrollBlock.classList.add("animation-scroll_concept_block");
  }
  if (window.scrollY >= 3000) {
    scrollRoboArm.classList.add("robo-arm-info-animation");
  }
  if (scrollRoboArm.classList.contains("robo-arm-info-animation")) {
    roboScroll.classList.add("robo-arm-animation");
  }
  if (window.scrollY >= 4200) {
    titleMarketing.forEach(value => {
      value.classList.add("marketing-block-inside-invisible");
    })
    scrollMarketing.forEach(value => {
      value.classList.add("scroll-marketing-animation");
    })
  }
  }

function changingColor() {
  scrollingWindow()
  scrollingAnimation()
}

window.addEventListener("scroll", changingColor);