// JS for Portfolio Slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myProjs");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// JS for Photo Slideshow

var photoIndex = 1;
showPhotos(photoIndex);

function plusPhoto(n) {
  showPhotos(photoIndex += n);
}

function currentPhoto(n) {
  showPhotos(photoIndex = n);
}

function showPhotos(n) {
  var i;
  var photos = document.getElementsByClassName("myPhotos");
  var dots = document.getElementsByClassName("dot");
  if (n > photos.length) {photoIndex = 1}
  if (n < 1) {photoIndex = photos.length}
  for (i = 0; i < photos.length; i++) {
      photos[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  photos[photoIndex-1].style.display = "block";
  dots[photoIndex-1].className += " active";
}
