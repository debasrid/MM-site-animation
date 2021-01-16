/**
 * @description This file contains functionalities for triggering slide swipes using left and right buttons on the screen
 * Also includes click events for each numbered button to navigate directly to the screens
 * @author Debasri Dasgupta <debasri_dasgupta@rediffmail.com>
 * @version 1.0
*/


const loaddelayInMilliseconds = 100;                               //Delay period for loading the loader
const sitedelayInMilliseconds = 3000;                               //Delay period for loading the whole site

const loaderTxt1 = document.querySelector('loader-txt1'); 

const left = document.querySelector('.left');                   //Pointer to Left arrow element
const right = document.querySelector('.right');                 //Pointer to Left arrow element

const container = document.querySelector('.container');         //Pointer to outer parent container
const carousel = document.querySelector('.carousel');           //Pointer to inner carousel container
const slider = document.querySelector('.slider');               //Pointer to container anchoring text on all screen
const bgslider = document.querySelector('.backgroundSlider');   //Pointer to background image container
const sections = document.querySelectorAll('.slider section');  //Pointer to the array of sliders for the screens

const indicatorParent = document.querySelector('.control ul');  //Pointer to number control for navigating to the screens
const indicators = document.querySelectorAll('.control li');    //Pointer to each number for navigating to each screen

//Different transition scales for different screen sizes
const bgtransitionScale = ((window.matchMedia("(max-width: 400px)")).matches) ? 11 : 5 ;    
const sectransitionScale = ((window.matchMedia("(max-width: 400px)")).matches) ? 10 : 10 ;

var index = 0;

//Run the loader before displaying the landing screen
window.addEventListener('load', function () {
  setTimeout(function() {
    carousel.classList.add("carouselloaded");   // Carousel should be hidden while window is loaded and then displayed after predefined time
    container.classList.add("containerloaded"); // Display container after loading time
    carousel.style.opacity = "1";
  }, sitedelayInMilliseconds); 
});

//Functionality to navigate to corresponding screen on clicking each number control
indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.control .selected').classList.remove('selected');    //Deselect the already selected button
    indicator.classList.add('selected');                                          //Select the button clicked on
    slider.style.transform = 'translateX(' + (i) * -sectransitionScale + '%)';    //Move to the slide corresponding to the button clicked
    bgslider.style.transform = 'translateX(' + (i) * -bgtransitionScale + '%)';   //Move to the section of background image corresponding to the number clicked
    index = i;
    sections[index].style.webkitAnimationName = 'fadein';                         //Text animation to appear slowly on screen
    sections[index].style.webkitAnimationDuration = '5s';                         //Duration of text animation
  });
});

//Functionality to navigate to previous screen on pressing the left control button
left.addEventListener('click', function () {
  sections[index].style.webkitAnimationName = '';                                 //Remove previous text animation to allow reattaching new animation
  index = (index > 0) ? index - 1 : 0;                                            //Decrement screen counter unless already on first screen
  document.querySelector('.control .selected').classList.remove('selected');      //Deselect the already selected button
  indicatorParent.children[index].classList.add('selected');                      //Select the button corresponding to the screen
  bgslider.style.transform = 'translateX(' + (index) * -bgtransitionScale + '%)'; //Move to the previous slide
  slider.style.transform = 'translateX(' + (index) * -sectransitionScale + '%)';  //Move to the section of background image corresponding to previous slide
  sections[index].style.webkitAnimationName = 'fadein';                           //Text animation to appear slowly on screen
  sections[index].style.webkitAnimationDuration = '5s';                           //Duration of text animation
});

//Functionality to navigate to next screen on pressing the right control button
right.addEventListener('click', function () {
  sections[index].style.webkitAnimationName = '';                                 //Remove previous text animation to allow reattaching new animation
  index = (index < 10 - 1) ? index + 1 : 9;                                       //Increment screen counter unless already on last screen
  document.querySelector('.control .selected').classList.remove('selected');      //Deselect the already selected button
  indicatorParent.children[index].classList.add('selected');                      //Select the button corresponding to the screen
  bgslider.style.transform = 'translateX(' + (index) * -bgtransitionScale + '%)'; //Move to the next slide
  slider.style.transform = 'translateX(' + (index) * -sectransitionScale + '%)';  //Move to the section of background image corresponding to next slide
  sections[index].style.webkitAnimationName = 'fadein';                           //Text animation to appear slowly on screen
  sections[index].style.webkitAnimationDuration = '5s';                           //Duration of text animation
});

