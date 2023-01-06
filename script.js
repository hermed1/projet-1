// Unfolding/folding the text of the articles

const btn = document.querySelector(".article__btn");
const text = document.querySelector(".article__p");

btn.addEventListener("click", ()=>{
  if(text.style.height === "auto"){
    // fold the text
    text.style.height = '80';
    text.style.webkitLineClamp = '3';
  }else{
    //unfold the text
    text.style.height = "auto";
    text.style.webkitLineClamp = 'none';
  }
})

// //////////////////////////////
const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselItems = carouselInner.querySelectorAll('.carousel-item');

// Set the index of the active item
let activeIndex = 0;

// Set the interval for the carousel to change
const interval = 5000;

// Set the transition duration for the carousel
const transitionDuration = 500;

function nextItem() {
  // Increment the index
  activeIndex = (activeIndex + 1) % carouselItems.length;

  // Set the active item
  carouselItems.forEach((item, index) => {
    if (index === activeIndex) {
      item.classList.add('active');
      item.style.transform = 'translateX(0)';
    } else if (index === (activeIndex - 1 + carouselItems.length) % carouselItems.length) {
      item.classList.remove('active');
      item.style.transform = 'translateX(-100%)';
    } else if (index === (activeIndex + 1) % carouselItems.length) {
      item.classList.remove('active');
      item.style.transform = 'translateX(100%)';
    }
  });
}

// Start the carousel
setInterval(nextItem, interval);
setInterval(nextItem, 5000);
