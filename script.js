// Diplay more text - mobile
const btn = document.querySelectorAll(".article__btn");
const hiddenText = document.querySelectorAll(".article__p--hidden");

for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener("click", ()=>{
    hiddenText[i].classList.toggle("article__p--visible")
  })
}  ;

// btn.addEventListener("click", ()=>{
//   if(text.style.height === "auto"){
//     // fold the text
//     text.style.height = '85';
//     text.style.webkitLineClamp = '3';
//   }else{
//     //unfold the text
//     text.style.height = "auto";
//     text.style.webkitLineClamp = 'none';
//   }
// })

// Burger menu //////////////////////////////

const burgerMenu = document.querySelector(".burger");
const burgerLine = document.querySelector(".burger__menu");

const navLinks = document.querySelector("#navLinks");
const logo = document.querySelector(".logo")
burgerMenu.addEventListener("click", ()=>{
    navLinks.classList.toggle("displayNav");
    logo.classList.toggle("disappearLogo");
})

/////////  video carrousel

const carousel = document.querySelector('.carousel');
const videoContainer = carousel.querySelector('.carousel__video-container');
const videos = carousel.querySelectorAll('.carousel__video');
const prevButton = carousel.querySelector('.carousel__button--prev');
const nextButton = carousel.querySelector('.carousel__button--next');
let currentVideo = 0;

// Show the first video
videos[currentVideo].style.display = 'block';

// Handle the next button
nextButton.addEventListener('click', function() {
  // Hide the current video
  videos[currentVideo].style.display = 'none';

  // Increment the current video
  currentVideo = (currentVideo + 1) % videos.length;

  // Show the new video
  videos[currentVideo].style.display = 'block';
});

// Handle the prev button
prevButton.addEventListener('click', function() {
  // Hide the current video
  videos[currentVideo].style.display = 'none';

  // Decrement the current video
  currentVideo = (currentVideo - 1 + videos.length) % videos.length;

  // Show the new video
  videos[currentVideo].style.display = 'block';
});


// images carrousel
const carousel2 = document.querySelector('.carousel-images');

const images = [
  '/images/pipes2.jpg',
  '/images/pipes3.jpg',
  '/images/pipes4.jpg',
  '/images/pipes5.jpg',
  '/images/pipes6.jpg',
  '/images/pipes_background.jpg'
];

let currentImage = 0;

// Start the carousel
setInterval(function() {
  carousel2.style.backgroundImage = 'url(' + images[currentImage] + ')';
  currentImage = (currentImage + 1) % images.length;
}, 4000);

