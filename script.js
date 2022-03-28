let i = 0;
let images = [];
let time = 3000;

images[0] = "./images/highRes/Activities1.jpg";
images[1] = "./images/highRes/Activities2.jpg";
images[2] = "./images/highRes/Activities3.jpg";
images[3] = "./images/highRes/Activities4.jpg";

function imgSlide() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("imgSlide()", time);
}

window.onload = imgSlide;
