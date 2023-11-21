// 
const colToRow_Items = document.querySelector('#aboutComp').querySelectorAll('.colToRow');

function ColToRow() {
    if (document.documentElement.clientWidth < 851) {
        for (var i = 0; i < colToRow_Items.length; i++) {
            colToRow_Items[i].classList.add('col-11');
        }
    } else {
        for (var i = 0; i < colToRow_Items.length; i++) {
            colToRow_Items[i].classList.remove('col-11');
        }
    }
}
ColToRow();
window.addEventListener('resize', ColToRow);