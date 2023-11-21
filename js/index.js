// Слайдер
const carousel = new bootstrap.Carousel('#carouselSlidesOnly');

//Высота Слайдера
function setH() {
    const heightWindow = window.innerHeight;
    document.querySelector('.carousel-inner').style.height = heightWindow + 'px';
}
setH();
window.addEventListener('resize', setH);


const colToRowInIndex_Items = document.querySelector('#mainOfIndex').querySelectorAll('.colToRow');
const textToRowInIndex_Items = document.querySelector('#mainOfIndex').querySelectorAll('.textRight');
// console.log(colToRowInMain_Items);

function ColToRowInMain() {
    if (document.documentElement.clientWidth < 851) {
        for (var i = 0; i < colToRowInIndex_Items.length; i++) {
            colToRowInIndex_Items[i].classList.add('col-11');

        }
        for (var i = 0; i < textToRowInIndex_Items.length; i++) {
            textToRowInIndex_Items[i].classList.add('order-2');
        }
        // document.querySelector('.colToRow').classList.add('col-11');
        // console.log(document.querySelector('.colToRow').classList);
    } else {
        for (var i = 0; i < colToRowInIndex_Items.length; i++) {
            colToRowInIndex_Items[i].classList.remove('col-11');
        }
        for (var i = 0; i < textToRowInIndex_Items.length; i++) {
            textToRowInIndex_Items[i].classList.remove('order-2');
        }
        // document.querySelector('.colToRow').classList.remove('col-11');
    }
}
ColToRowInMain();
window.addEventListener('resize', ColToRowInMain);