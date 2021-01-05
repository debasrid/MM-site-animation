window.addEventListener('load', function () {
  document.querySelector('body').classList.add("loaded")
});

const left = document.querySelector('.left');
const right = document.querySelector('.right');

const slider = document.querySelector('.slider');
const bgslider = document.querySelector('.backgroundSlider');
const sections = document.querySelectorAll('.slider section');

const indicatorParent = document.querySelector('.control ul');
const indicators = document.querySelectorAll('.control li');

index = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.control .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translateX(' + (i) * -10 + '%)';
    bgslider.style.transform = 'translateX(' + (i) * -5 + '%)';
    index = i;

  });
});

left.addEventListener('click', function () {
  sections[index].style.webkitAnimationName = '';
  index = (index > 0) ? index - 1 : 0;
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  bgslider.style.transform = 'translateX(' + (index) * -5 + '%)';
  slider.style.transform = 'translateX(' + (index) * -10 + '%)';
  sections[index].style.webkitAnimationName = 'fadein';
  sections[index].style.webkitAnimationDuration = '5s';
});

right.addEventListener('click', function () {
  sections[index].style.webkitAnimationName = '';
  index = (index < 10 - 1) ? index + 1 : 9;
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  bgslider.style.transform = 'translateX(' + (index) * -5 + '%)';
  slider.style.transform = 'translateX(' + (index) * -10 + '%)';
  sections[index].style.webkitAnimationName = 'fadein';
  sections[index].style.webkitAnimationDuration = '5s';
});

