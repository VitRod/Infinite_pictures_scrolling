const imgCntnr = document.getElementById('image-container');
const ldr = document.getElementById('loader');
const apiKey = '8SxCowITdg8jmkfJcv3n0UiND13XSSNkoio-RZySeKY';
let count = 5;
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// CHECK IF OBJECT LOADED
function imageLoaded() {
    // console.log('image loaded');
    imagesLoaded++;
    // console.log(imagesLoaded);
    if (imagesLoaded === totalImages) {
      ready = true;
      ldr.hidden = true;
      count = 30;
      apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
    }
  }
