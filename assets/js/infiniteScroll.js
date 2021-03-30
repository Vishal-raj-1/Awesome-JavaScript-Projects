// Get elements for changing
const imageContainer = getElement("image-container");
const loader = getElement("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

// Array on images
let photosArray = [];

// Unsplash API
let imageCount = 5;
const apiKey = "UZyM9wrTWlPfm2DjYrPvFcmuoNzHQCo56UmEVe0L44w";
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${imageCount}`;

// Check if all images were loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    increaseImagesToLoadCount();
  }
}

function increaseImagesToLoadCount() {
  imageCount = 30;
  apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${imageCount}`;
}

// Create Elements for links and photos, and add to DOM
function displayPhotos() {
  imagesLoaded = 0;
  //Set the amount of photos
  totalImages = photosArray.length;

  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to unsplash
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });

    // Create <img> for photo
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    // Event Listner to check when each photo has finished loading
    img.addEventListener("load", imageLoaded);

    // Put <img> inside <a>, then both inside image container
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get Photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log(photosArray);
    displayPhotos();
  } catch (error) {
    // Catch Error Here
  }
}

// Helper Function to quickly assign elements with IDs to constants
function getElement(elemID) {
  return document.getElementById(elemID);
}

// Helper function to set attributes on DOM elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Check to see if scrolling near the bottom of the page, if so, load more
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

// On Load
getPhotos();
