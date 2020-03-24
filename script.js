
let slideIndex = 1;
let count = document.getElementById('count');

function plusSlides(n){
    showSlides(slideIndex+=n);
    count.innerText = slideIndex;
}

window.addEventListener('resize',function(){
    if(document.body.clientWidth <= 1300) {
        document.querySelectorAll('.all_news').forEach(el => el.classList.add('slider'));
        showSlides(slideIndex);
    }
    if(document.body.clientWidth > 1301) {
        document.querySelectorAll('.all_news').forEach(el => {
            el.classList.remove('slider');
            el.style.display = 'block';
        });
    }
});


function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slider');
    
    if(n > slides.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = slides.length;
    }
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'block';
}
