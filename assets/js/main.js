var header = document.querySelector(".header");

window.addEventListener('scroll', function(){
  if(window.scrollY > 0) {
    header.classList.add("header--sticky");
  }
  if(window.scrollY == 0) {
    header.classList.remove("header--sticky");
  }
});

document.querySelector('body').addEventListener('click', function (e) {
  if (e.target.classList.contains('jump-to')) {
      e.preventDefault();

      Jump(
          e.target.getAttribute("href"),
          {
              offset: -55
          }
      );
  }
});
