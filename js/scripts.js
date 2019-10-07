const mountainLink = document.getElementById('mountain-link');
const forestLink = document.getElementById('forest-link');
const desertLink = document.getElementById('desert-link');
const photoMountain = document.getElementById('photo-mountain');
const photoForest = document.getElementById('photo-forest');
const photoDesert = document.getElementById('photo-desert');

const photoMotion = (event) => {
  const imgList = document.querySelectorAll('.panel img');
  imgList.forEach((img) => {
    img.className = 'd-none';
  });

  const photoId = event.target.attributes['data-img'].value;
  const photo = document.getElementById(photoId);

  if (photo.className === 'd-none') {
    photo.className = '';
  } else {
    photo.className = 'd-none';
  }
}

mountainLink.addEventListener('mouseenter', photoMotion);
forestLink.addEventListener('mouseenter', photoMotion);
desertLink.addEventListener('mouseenter', photoMotion);
