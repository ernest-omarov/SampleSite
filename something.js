const header = document.querySelector('.header');

document.querySelector(".logo").addEventListener('click',function(){
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
})

let prevScrollY = 0;

function changingColor() {
  // if scrolling up - show
  // if scrolling down and scroll Y past 50px - hide
  if (window.scrollY < prevScrollY) {
    header.classList.remove("header-animation");
    if (window.scrollY <= 50) {
      header.classList.remove("header-changingColor")
    } else {
      header.classList.add("header-changingColor")
    }
  } else {
    if (window.scrollY >= 200) {
      header.classList.add("header-animation");
    }
  }

  // if(window.scrollY <= 50){
  //   header.classList.remove("header-animation");
  //   header.classList.remove("header-changingColor");
  // }else if (window.scrollY >= 50 && window.scrollY <= 250) {
  //   header.classList.add("header-changingColor");
  // }else if (window.scrollY >= 250) {
  //   header.classList.add("header-animation");
  // }

  prevScrollY = window.scrollY;
}

window.addEventListener("scroll", changingColor);