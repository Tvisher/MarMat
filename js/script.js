let burger = document.querySelector('.burger_btn');
let menu = document.querySelector('.burger__menu');
let body = document.querySelector('body');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('.close');


burger.onclick = function () {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("active");
};

overlay.onclick = function () {
    menu.classList.remove("active");
    this.classList.remove("active");
    body.classList.remove("active");
};

close.onclick = () => {
    menu.classList.remove("active");
    body.classList.remove("active");
    overlay.classList.remove("active");
};

var container = document.querySelector('.gallery');
var msnry;
// Инициализация Масонри, после загрузки изображений
imagesLoaded(container, function () {
    msnry = new Masonry(container, {
        columnWidth: '.item',
        itemSelector: '.item',
        //gutter: 35,
        //percentPosition: true,
        //fitWidth: true

    });
});