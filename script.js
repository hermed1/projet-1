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
const navLinks = document.querySelector("#navLinks");
burgerMenu.addEventListener("click", ()=>{
    navLinks.classList.toggle("displayNav");
})