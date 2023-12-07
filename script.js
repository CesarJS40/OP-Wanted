const images = document.getElementById('Images')
const btnNext = document.getElementById('mudarImagensNext')
const btnPrevious = document.getElementById('mudarImagensPrevious')

const chopper = {
    file: 'Chopper_Wanted_100'
}
const godUsopp = {
    file: 'God_Usopp'
}
const luffyGear5 = {
    file: 'Luffy'
}
const nami = {
    file: 'Nami'
}
const nicoRobin = {
    file: 'Nico_Robin'
}
const zoro = {
    file: 'Zoro'
}



const allImages = [chopper, godUsopp, luffyGear5, nami, nicoRobin, zoro];
let index = 0;

function getImages(){
    images.src = `Wanted Poster's Images/${allImages[index].file}.webp `;
};

function nextImage(){
    if(index === allImages.length - 1){
        index = 0;
    }
    else{index = index + 1;
    }
    getImages();
}

function previousImage(){
    if(index === 0){
        index = allImages.length - 1;
    }
    else{index = index - 1};
    getImages();
}

    getImages();

btnNext.addEventListener('click', nextImage);
btnPrevious.addEventListener('click', previousImage);
