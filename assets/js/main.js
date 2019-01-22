var header = document.querySelector(".header");

window.addEventListener('scroll', function(){
  if(window.scrollY > 0) {
    header.classList.add("header--sticky");
  }
  if(window.scrollY == 0) {
    header.classList.remove("header--sticky");
  }
});
