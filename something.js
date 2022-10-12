document.querySelector(".logo").addEventListener('click',function(){
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
})

function changingColor() {
  console.log(window.scrollY)
  if(window.scrollY == 200){
    document.getElementsByClassName('.header').style.backgroundColor = "red";
  }
}

changingColor()