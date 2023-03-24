const btn = document.getElementsByClassName('container')[0]
const nav = document.getElementsByClassName('side-nav')[0]

btn.addEventListener('click', () => {
    nav.classList.toggle('active')
})
function myfunction(x) {
    btn.classList.toggle("change")
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8000); 
}


// ! button for slides
let slideInde = 1;
showSlides(slideInde);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideInde += n);
}
let slideIndextwo = 0;
showSlidesTwo();

function showSlidesTwo() {
    let i;
    let slidestwo = document.getElementsByClassName("slides-two");
    for (i = 0; i < slidestwo.length; i++) {
        slidestwo[i].style.display = "none";
    }
    slideIndextwo++;
    if (slideIndextwo > slidestwo.length) {slideIndextwo = 1}
    slidestwo[slideIndextwo-1].style.display = "block";
    setTimeout(showSlidesTwo, 5000);
}