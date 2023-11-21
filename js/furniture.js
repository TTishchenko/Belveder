//
const colToRowInMain_Items = document.querySelector('#mainSection').querySelectorAll('.colToRow');
const textToRowInMain_Items = document.querySelector('#mainSection').querySelectorAll('.textLeft');
// console.log(colToRowInMain_Items);

function ColToRowInMain() {
    if (document.documentElement.clientWidth < 851) {
        for (var i = 0; i < colToRowInMain_Items.length; i++) {
            colToRowInMain_Items[i].classList.add('col-11');

        }
        for (var i = 0; i < textToRowInMain_Items.length; i++) {
            textToRowInMain_Items[i].classList.add('order-2');
        }
        // document.querySelector('.colToRow').classList.add('col-11');
        // console.log(document.querySelector('.colToRow').classList);
    } else {
        for (var i = 0; i < colToRowInMain_Items.length; i++) {
            colToRowInMain_Items[i].classList.remove('col-11');
        }
        for (var i = 0; i < textToRowInMain_Items.length; i++) {
            textToRowInMain_Items[i].classList.remove('order-2');
        }
        // document.querySelector('.colToRow').classList.remove('col-11');
    }
}
ColToRowInMain();
window.addEventListener('resize', ColToRowInMain);
