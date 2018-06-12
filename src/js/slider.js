// ===========================  SLIDER ===========================

document.addEventListener("DOMContentLoaded", function() {

  infinitySlider('slide1','slider1','prev-arrow','next-arrow');
  infinitySlider('slide2','slider2','left-brown-arrow','right-brown-arrow','slider2-wrapper');
})



function infinitySlider(slideClass, sliderId, moveLeftButton, moveRightButton, wrapper)  {

  var slider = document.getElementById(sliderId);
  var section = document.getElementById(wrapper);
  var slides = document.getElementsByClassName(slideClass);
  var ammountSls = document.getElementsByClassName(slideClass).length;
  var widthSl;
  if (wrapper) { 
    widthSl = section.clientWidth;
    for(i=0; i<ammountSls; i++) {
      slides[i].style.transform = 'translateX( -'+ widthSl +'px)'; 
    }
  }
  else {widthSl = window.innerWidth} 

  var sliderWidth = (widthSl * ammountSls);
  var oldJump = 0;
  var jump = widthSl;
  var index = 0;
  var currTrans = [];
  var transistioning = true;
  var flag = true;


  slider.style.width = sliderWidth + 'px';
  window.addEventListener('resize', scale);
  document.getElementById(moveLeftButton).addEventListener('click', prev);
  document.getElementById(moveRightButton).addEventListener('click', next);

  console.log(ammountSls);





  function switchTrans() {
    transistioning = true;
  }

  function scale() {

    if (wrapper) { 
      widthSl = section.clientWidth;
      // for(i=0; i<ammountSls; i++) {
      //   slides[i].style.transform = 'translateX( -'+ widthSl +'px)'; 
      // }
    }
    else {widthSl = window.innerWidth} 

    jump = widthSl;
    sliderWidth = jump * ammountSls;
    slider.style.width = (jump * ammountSls) + 'px';

    for(i=0; i<ammountSls; i++) {

      var differnece = currTrans[i] / oldJump;
      currTrans[i] = jump * differnece;
      var slides = document.getElementsByClassName(slideClass)[i];
      
      slides.style.transform = 'translateX( -'+ widthSl +'px)'; 

      slides.style.transform = 'translateX('+ (currTrans[i]) +'px)';
    }
    oldJump = jump;

  }


  function prev() {
    
    if(transistioning) {
      transistioning = false;
      index = index % ammountSls;

      index--;

      if (index == -1) {
        index = ammountSls - 1;
      }
      if(flag) {
        for(i=0; i<ammountSls; i++) {
          currTrans[i] = -jump;
        }
      }
      flag = false;

      for(var i=0;i<ammountSls;i++) {
        var slides = document.getElementsByClassName(slideClass)[i];
        slides.style.transform = 'translateX('+ (currTrans[i] + jump) +'px)';
        slides.style.opacity = 1;
        currTrans[i] = currTrans[i] + jump;
      }

      oldJump = jump;

      var outerSlide = document.getElementsByClassName(slideClass)[index];
      var transToFront = currTrans[index] - (widthSl * ammountSls);
      outerSlide.style.transform = 'translateX('+ transToFront +'px)';
      outerSlide.style.opacity = 0;
      currTrans[index] = currTrans[index] - (widthSl * ammountSls);
      
      slides.addEventListener("transitionend", switchTrans);
    }
  }

  function next() {
    
    if(transistioning) {
      transistioning = false;
      index = index % ammountSls;
      index++;

    if(flag) {
      for(i=0; i<ammountSls; i++) {
        currTrans[i] = -jump;
      }
    }
    flag = false;

      for(var i=0;i<ammountSls;i++) {
        var slides = document.getElementsByClassName(slideClass)[i];
        slides.style.transform = 'translateX('+ (currTrans[i] - jump) +'px)';
        slides.style.opacity = 1;
        currTrans[i] = currTrans[i] - jump;
      }
      oldJump = jump;

      var outerSlide = document.getElementsByClassName(slideClass)[index-1];
      var transToFront = currTrans[index-1] + (widthSl * ammountSls);

      outerSlide.style.transform = 'translateX('+ transToFront +'px)';
      outerSlide.style.opacity = 0;

      currTrans[index-1] = currTrans[index-1] + (widthSl * ammountSls);
      slides.addEventListener("transitionend", switchTrans);
    }
  }
}
