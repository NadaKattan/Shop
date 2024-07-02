let slideIndex=0;
let intervalId=null;
let slides=document.querySelectorAll(".slide");
document.addEventListener("DOMContentLoaded",initialize);
function initialize() {
    if(slides.length>0){
        slides[slideIndex].classList.add("displaySlide");
        // intervalId=setInterval(nextSlide,5000);
    }
}
function showSlide(index) {
    if(index<0){
        slideIndex=slides.length-1;
    }
    else if(index >= slides.length){
        slideIndex=0;
    }
    slides.forEach(slide=>{
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");

}
function prevSlide() {
    // clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}