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

function imgTemplate (img) {
  return `
    <figure class="gallery__thumbnail img-photo-11">
      <img src="${img.src}" alt="business cards" id="${img.id}" class="gallery__thumbnail__img">
      <div class="wrapper-thumbnail__description">
          <figcaption class="gallery__thumbnail__description">
              <h2 class="gallery__thumbnail__header">REALISTIC BOOK</h2>
              <p class="gallery__thumbnail__text">Print</p>
              <button class="btn btn--secondary btn--modifer-lines btn--gallery right">Wiew work</button>
          </figcaption>
      </div>
    </figure>`
}

var button = document.querySelector("#button_load");
button.addEventListener("click", function() {
  var gallery = document.querySelector(".gallery");
  // gallery.insertAdjacentHTML('afterend', images.map(imgTemplate));
  // gallery.append(`${HTML.stringify(images.map(imgTemplate).join(""))}`);
});