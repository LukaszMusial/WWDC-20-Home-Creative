// ===========================  SLIDER ===========================

var slides = document.getElementsByClassName('slide');
var ammountSls = document.getElementsByClassName('slide').length;
// var widthSl = document.getElementById('site-container').offsetWidth; //for not full window
var widthSl = window.innerWidth; //tu jest problem

var jump = widthSl;
var index = 0;
var currTrans = [];
var transistioning = true;


document.addEventListener("DOMContentLoaded", function() {
  // console.log(jump);
  for(i=0; i<ammountSls; i++) {
    currTrans[i] = -jump;
    // console.log(currTrans[i]);
  }
  window.addEventListener('resize', scale)
  document.getElementById('prev-arrow').addEventListener('click', prev);
  document.getElementById('next-arrow').addEventListener('click', next);
})

function switchTrans() {
  transistioning = true;
}

function scale() {
  widthSl = window.innerWidth;
}

function prev() {
  
  if(transistioning) {
    transistioning = false;
    index--;

    if (index == -1) {
      index = ammountSls - 1;
    }

    for(var i=0;i<ammountSls;i++) {
      var slides = document.getElementsByClassName('slide')[i];
      slides.style.transform = 'translateX('+ (currTrans[i] + jump) +'px)';
      slides.style.opacity = 1;
      currTrans[i] = currTrans[i] + jump;
    }

    var outerSlide = document.getElementsByClassName('slide')[index];
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

    for(var i=0;i<ammountSls;i++) {
      var slides = document.getElementsByClassName('slide')[i];
      slides.style.transform = 'translateX('+ (currTrans[i] - jump) +'px)';
      slides.style.opacity = 1;
      currTrans[i] = currTrans[i] - jump;
    }

    var outerSlide = document.getElementsByClassName('slide')[index-1];
    var transToFront = currTrans[index-1] + (widthSl * ammountSls);

    outerSlide.style.transform = 'translateX('+ transToFront +'px)';
    outerSlide.style.opacity = 0;

    currTrans[index-1] = currTrans[index-1] + (widthSl * ammountSls);
    slides.addEventListener("transitionend", switchTrans);
  }
}

// ===========================  AJAX LOADING GALLERY ===========================


var countJson = 1;
var countId = 1;
var button = document.querySelector("#button_load");
var gallery = document.querySelector(".gallery");


function imgTemplate (img) {

  var output = '';
  for(var i = countJson - 2; i < countJson - 1; i++) {
    for(var ii in img[i].src) {
      output += `<figure class="gallery__thumbnail">
        <img src="${img[i].src[ii]}" alt="business cards" id="${img[i].id[ii]}" class="gallery__thumbnail__img">
        <div class="wrapper-thumbnail__description">
            <figcaption class="gallery__thumbnail__description">
                <h2 class="gallery__thumbnail__header">REALISTIC BOOK</h2>
                <p class="gallery__thumbnail__text">Print</p>
                <button class="btn btn--secondary btn--modifer-lines btn--gallery right">Wiew work</button>
            </figcaption>
        </div>
      </figure>`
    }
  }
  return output;
};


function addDiv ()  { 

  var div = document.createElement("div");
  div.classList.add("gallery-row");
  div.classList.add("gallery-load");
  div.id = 'gallery-row'+ countId +'';
  gallery.appendChild(div);
  gallery2 = document.querySelector('#gallery-row'+ countId +'');
};


function renderHtml (imgData) {

  addDiv();
  gallery2.innerHTML = `${imgTemplate(imgData)}`;
};


button.addEventListener("click", function() {

  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET','http://localhost:3000/imagesData4.json');

  ourRequest.onload = function() {
    if(ourRequest.status >= 200 && ourRequest.status < 400) {
     images = JSON.parse(ourRequest.responseText);
     renderHtml(images);
    } else {
      console.log("connection error");
    }
  };

  ourRequest.send();
  countJson++;
  countId++;
  if(countJson > images.length) {
    button.classList.add("hide");
  }
});
