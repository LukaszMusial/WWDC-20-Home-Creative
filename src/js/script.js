const images = [
  {
    id: "photo_16",
    src: "img/photo_15.jpg"
  },
  {
    id: "photo_17",
    src: "img/photo_16.jpg"
  },
  {
    id: "photo_18",
    src: "img/photo_17.jpg"
  },
  {
    id: "photo_19",
    src: "img/photo_18.jpg"
  }
];

var count = 0;
var button = document.querySelector("#button_load");
var gallery = document.querySelector(".gallery");

var div = document.createElement("div");
div.classList.add("gallery-row");
div.classList.add("gallery-load");
div.id = 'gallery-row2';
gallery.appendChild(div);
var gallery2 = document.querySelector("#gallery-row2");

// var div = document.createElement("div");
// div.classList.add("gallery");
// gallery.appendChild(div);

// var parser = new DOMParser(); 

function imgTemplate (img) {
 
  count++;
  return  `<figure class="gallery__thumbnail">
      <img src="${img.src}" alt="business cards" id="${img.id}" class="gallery__thumbnail__img">
      <div class="wrapper-thumbnail__description">
          <figcaption class="gallery__thumbnail__description">
              <h2 class="gallery__thumbnail__header">REALISTIC BOOK</h2>
              <p class="gallery__thumbnail__text">Print</p>
              <button class="btn btn--secondary btn--modifer-lines btn--gallery right">Wiew work</button>
          </figcaption>
      </div>
    </figure>`



};





button.addEventListener("click", function() {
  if(count < images.length) {
    gallery2.innerHTML = `${images.map(imgTemplate).join("")}`;
    // gallery.append(`${images.map(imgTemplate).join("")}`);
    // gallery.append(imgTemplate);
    // gallery.insertAdjacentHTML('afterend', imgTemplate);

    button.classList.add("hide");
  }
  else {
    // button.classList.add("hide");
  }
  // var blankDiv = document.createElement("div");
  // gallery.insertAdjacentHTML('afterend', images.map(imgTemplate));
  // gallery.append(`${images.map(imgTemplate).join("")}`);
  // blankDiv.innerText = `${images.map(imgTemplate)}`;
  // gallery.appendChild(blankDiv);

});




    // var figure = document.createElement("figure");
    // figure.classList.add("gallery__thumbnail");
    // // var ParentDiv = document.querySelector(".gallery");
    // // ParentDiv.appendChild(figure);
    // var image = document.createElement("img");
    // image.id = 'img.id';
    // image.classList.add('gallery__thumbnail__img');
    // image.setAttribute('src', 'img/photo_14.jpg');
    // image.setAttribute('alt', 'business cards');
    // figure.appendChild(image);
    // var div = document.createElement("div");
    // div.classList.add('wrapper-thumbnail__description');
    // figure.appendChild(div);
    // var figcaption = document.createElement("figcaption");
    // figcaption.classList.add('gallery__thumbnail__description');
    // div.appendChild(figcaption);
    // var header = document.createElement("h2");
    // header.classList.add('gallery__thumbnail__header');
    // header.innerText = 'REALISTIC BOOK';
    // figcaption.appendChild(header);
    // var paragraph = document.createElement("p");
    // paragraph.classList.add('gallery__thumbnail__text');
    // paragraph.innerText = 'Print';
    // figcaption.appendChild(paragraph);
    // var addButton = document.createElement("button");
    // addButton.classList.add('btn');
    // paragraph.innerText = 'Wiew work';