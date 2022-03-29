//Pick All images & layer them based on z-index
const slidearea = document.querySelector("div.slides");
const images = slidearea.querySelectorAll("img");

//Keep track of 2 things

let currentSlide = 0;
let z = 1;

//when i click slide area change slide based on z-index
slidearea.addEventListener("click", function(){
    currentSlide = currentSlide + 1;
    if (currentSlide > images.length - 1){
        currentSlide = 0;
    }


    z = z + 1;

    //remove the animation form the style for every img
    images.forEach(function(image){
        image.style.animation = ""
    })

    //pick the right image
    images[currentSlide].style.zIndex = z;
    images[currentSlide].style.animation = "fade 0.5s"
    //Loop images

})

//When mouseover put all images in a random place

slidearea.addEventListener("mouseover", function(){
    images.forEach(image =>{
        const x = 25 * (Math.floor(Math.random()  * 5)) - 50
        const y = 25 * (Math.floor(Math.random()  * 5)) - 50

        image.style.transform = `translate(${x}px, ${y}px)`
    })
})

//When move mouse away go default

slidearea.addEventListener("mouseout", function(){

    images.forEach(image => {
        image.style.transform = ""
    })
})