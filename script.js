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

  // CREATE ELEMENTS AND SET ATTRIBUTES
function setAttributes(element, attributes) {
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  }

  // CREATE ELEMENTS, LINKS, PHOTOS FOR DOM
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    console.log('total images= ', totalImages);
  
    // FOR EACH PHOTO ARRAY
    photosArray.forEach((photo) => {
      // CREATE ANCHOR LINK UNSPLASH
      const item = document.createElement('a');
      setAttributes(item, {
        href: photo.links.html,
        target: '_blank',
      });

      // CREATE <IMG> TAG
    const img = document.createElement('img');
    
    // DRY REPEAT
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    });

    // LISTEN, FOR WHEN OBJECT IS FINISHED LAODING
    img.addEventListener('load', imageLoaded);

    // PUT IMAGE IN <A> THEN BOTH IN IMAGE CONTAINER
    item.appendChild(img);
    imgCntnr.appendChild(item);
  });
}

// GET PHOTOS FROM UNSPLASH API
async function getPhotos() {
    try {
      const response = await fetch(apiUrl);
      photosArray = await response.json();
      displayPhotos();
    } catch (error) {
      console.log(error);
    }
  }
