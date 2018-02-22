











//======================================================================================

// const images = [
//   {
//     id: "photo_16",
//     src: "img/photo_15.jpg"
//   },
//   {
//     id: "photo_17",
//     src: "img/photo_16.jpg"
//   },
//   {
//     id: "photo_18",
//     src: "img/photo_17.jpg"
//   },
//   {
//     id: "photo_19",
//     src: "img/photo_18.jpg"
//   }
// ];

var countJson = 1;
var countId = 1;
var button = document.querySelector("#button_load");
var gallery = document.querySelector(".gallery");

// var div = document.createElement("div");
// div.classList.add("gallery-row");
// div.classList.add("gallery-load");
// div.id = 'gallery-row2';
// gallery.appendChild(div);
// var gallery2 = document.querySelector("#gallery-row2");


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
  
  // count++; 
  return output;



};

function addDiv ()  { 

    var div = document.createElement("div");
    div.classList.add("gallery-row");
    div.classList.add("gallery-load");
    div.id = 'gallery-row'+ countId +'';
    gallery.appendChild(div);
    gallery2 = document.querySelector('#gallery-row'+ countId +'');
}

function renderHtml (imgData) {
  // if(count < imgData.length) {
        addDiv();
        gallery2.innerHTML = `${imgTemplate(imgData)}`;
        // gallery.append(`${images.map(imgTemplate).join("")}`);
        // gallery.append(imgTemplate);
        // gallery.insertAdjacentHTML('afterend', imgTemplate);
        // button.classList.add("hide");
      // }
      // else {
      //   // button.classList.add("hide");
      // }
      // var blankDiv = document.createElement("div");
      // gallery.insertAdjacentHTML('afterend', images.map(imgTemplate));
      // gallery.append(`${images.map(imgTemplate).join("")}`);
      // blankDiv.innerText = `${images.map(imgTemplate)}`;
      // gallery.appendChild(blankDiv);
}



button.addEventListener("click", function() {
  
  var ourRequest = new XMLHttpRequest();
  // ourRequest.open('GET','https://api.myjson.com/bins/j1zqp');
  ourRequest.open('GET','http://localhost:3000/imagesData4.json');

  ourRequest.onload = function() {
    if(ourRequest.status >= 200 && ourRequest.status < 400) {
     images = JSON.parse(ourRequest.responseText);
     renderHtml(images);
     // console.log(images.length);
    // } else if (ourRequest.status >= 400 && ourRequest.status <= 499) {
    //   button.classList.add("hide");
    //   console.log("no more JSON files");
    //   gallery2.innerHTML = "No more pictures in gallery";
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
