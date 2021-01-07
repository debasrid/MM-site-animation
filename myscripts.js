const delayInMilliseconds = 3000; //1 second
const left = document.querySelector('.left');
const right = document.querySelector('.right');

const container = document.querySelector('.container');
const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');
const bgslider = document.querySelector('.backgroundSlider');
const sections = document.querySelectorAll('.slider section');

const indicatorParent = document.querySelector('.control ul');
const indicators = document.querySelectorAll('.control li');

const transitionScale = ((window.matchMedia("(max-width: 400px)")).matches) ? 11 : 6 ;

var index = 0;

window.addEventListener('load', function () {
  setTimeout(function() {
    carousel.classList.add("carouselloaded");
    container.classList.add("containerloaded");
    carousel.style.opacity = "1";
  }, delayInMilliseconds); 
});


indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.control .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translateX(' + (i) * -10 + '%)';
    bgslider.style.transform = 'translateX(' + (i) * -transitionScale + '%)';
    index = i;
    sections[index].style.webkitAnimationName = 'fadein';
    sections[index].style.webkitAnimationDuration = '5s';
  });
});

left.addEventListener('click', function () {
  sections[index].style.webkitAnimationName = '';
  index = (index > 0) ? index - 1 : 0;
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  bgslider.style.transform = 'translateX(' + (index) * -transitionScale + '%)';
  slider.style.transform = 'translateX(' + (index) * -10 + '%)';
  sections[index].style.webkitAnimationName = 'fadein';
  sections[index].style.webkitAnimationDuration = '5s';
});

right.addEventListener('click', function () {
  sections[index].style.webkitAnimationName = '';
  index = (index < 10 - 1) ? index + 1 : 9;
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  bgslider.style.transform = 'translateX(' + (index) * -transitionScale + '%)';
  slider.style.transform = 'translateX(' + (index) * -10 + '%)';
  sections[index].style.webkitAnimationName = 'fadein';
  sections[index].style.webkitAnimationDuration = '5s';
});

