const galleryOne = document.querySelector('.masters-first-js');

const galleryTwo = document.querySelector('.masters-second-js');

const galleryThree = document.querySelector('.masters-third-js');


const buttonOne = document.getElementById('gallery-one-btn');

const buttonTwo = document.getElementById('gallery-two-btn');

const buttonThree = document.getElementById('gallery-three-btn');



buttonOne.addEventListener("click", galleryOpeningToggle);
buttonTwo.addEventListener("click", galleryOpeningToggle);
buttonThree.addEventListener("click", galleryOpeningToggle);

function galleryOpeningToggle() {
    if (this === buttonOne) {
        galleryOne.classList.toggle('hidden')
    } else if (this === buttonTwo) {
        galleryTwo.classList.toggle('hidden')
        
    } else if (this === buttonThree) {
        galleryThree.classList.toggle('hidden')
        
    } else {
        
    }    
}






