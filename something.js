const header = document.querySelector('.header');

document.querySelector(".logo").addEventListener('click',function(){
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
})

function changingColor() {
  if(window.scrollY >= 50){
    header.style.backgroundColor = "#f0f0f0";
    header.style.transition = "all .3s";
  }else if (window.scrollY <= 50) {
    header.style.backgroundColor = "transparent";
    header.style.transition = "all .3s";
  }
}

window.addEventListener("scroll",changingColor);