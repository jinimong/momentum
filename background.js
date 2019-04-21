const body = document.querySelector('body');

function handleImgLoad() {
    console.log('finished loading !!');
}

function paintRandomImage() {
    const img = new Image();
    // img.src = 'https://source.unsplash.com/random';
    img.src = 'https://source.unsplash.com/800x600/?mac';
    img.classList.add('bgImage');
    body.appendChild(img);
    img.addEventListener('loadend', handleImgLoad);
}

function init() {
    paintRandomImage();
}

init();