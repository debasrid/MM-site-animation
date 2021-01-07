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

const bgtransitionScale = ((window.matchMedia("(max-width: 400px)")).matches) ? 11 : 5 ;
const sectransitionScale = ((window.matchMedia("(max-width: 400px)")).matches) ? 10 : 10 ;

var index = 0;

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

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
    slider.style.transform = 'translateX(' + (i) * -sectransitionScale + '%)';
    bgslider.style.transform = 'translateX(' + (i) * -bgtransitionScale + '%)';
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
  bgslider.style.transform = 'translateX(' + (index) * -bgtransitionScale + '%)';
  slider.style.transform = 'translateX(' + (index) * -sectransitionScale + '%)';
  sections[index].style.webkitAnimationName = 'fadein';
  sections[index].style.webkitAnimationDuration = '5s';
});

right.addEventListener('click', function () {
  sections[index].style.webkitAnimationName = '';
  index = (index < 10 - 1) ? index + 1 : 9;
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  bgslider.style.transform = 'translateX(' + (index) * -bgtransitionScale + '%)';
  slider.style.transform = 'translateX(' + (index) * -sectransitionScale + '%)';
  sections[index].style.webkitAnimationName = 'fadein';
  sections[index].style.webkitAnimationDuration = '5s';
});

