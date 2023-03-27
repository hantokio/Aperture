let menuBtn = document.querySelector('.btn-ham');
let menu = document.querySelector('.links');
menuBtn.addEventListener('click', function(e){
    e.preventDefault;
    menuBtn.classList.toggle('btn-active');
    menu.classList.toggle('links-active')
});
