// ===========================  SLIDER ===========================




















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
