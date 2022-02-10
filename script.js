const imgContainer = document.getElementById("img-container");
const loader = document.getElementById("loader");

let photosArray = [];

const count = 10;
const apiKey = "m1zhIvmA_Y7kk5VVaF-My1k3kmXvcDPRZ_UJIbrh8_M";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;



function displayPhotos() {
  photosArray.forEach((photo) => {
      const item = document.createElement('a');
      item.setAttribute('href', photo.links.html);
      item.setAttribute('target','_blank');
      const img = document.createElement('img');
      img.setAttribute('src', photo.urls.regular);
      img.setAttribute('alt',photo.alt_description);
      img.setAttribute('title',photo.alt_description);
      item.appendChild(img);
      imgContainer.appendChild(item);
  });
}

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {}
}

getPhotos();
