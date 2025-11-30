        var btn1 = document.getElementById('btn-1');
        var input_name = document.getElementById('input-name');
        btn1.addEventListener('click', () => {
            var name = input_name.value;
            console.log(name);
            alert(`Thank you ${name}, for visiting this site.
All information taken from Wikipedia and slightly supplemented 
Link:
https://en.wikipedia.org/wiki/Friedrich_Nietzsche`);
        });
        
        const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
});
