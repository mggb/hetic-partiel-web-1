var burgerMenu = document.querySelector('.menu');
var imgClose = document.querySelector('.img-menu-close');
var mainnav = document.getElementById('mainav');


burgerMenu.addEventListener('click',function () {
  mainav.style.display = 'block';
  imgClose.style.display = 'block';

})
imgClose.addEventListener('click',function () {
  mainav.style.display = 'none';
  imgClose.style.display = 'none';
})
