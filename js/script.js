// Знак меню (анимация)
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navMenu').classList.toggle('open');
});

// Выподающее меню
document.querySelector('.store').addEventListener('click', function() {
    document.querySelector('#store').classList.toggle('see');

});

// Настройка расположения логотипа в футоре
document.querySelector('.logoF')

function changeWidthLogo() {
    if (document.documentElement.clientWidth < 851) {
        document.querySelector('.logoF').classList.add('col-5');
    } else {
        document.querySelector('.logoF').classList.remove('col-5');
    }
}
changeWidthLogo();
window.addEventListener('resize', changeWidthLogo);



const wtf = document.querySelector('#contComp').querySelectorAll('.col');

function ContIconChange() {
    if (document.documentElement.clientWidth < 851) {
        for (var i = 0; i < wtf.length; i++) {
            wtf[i].classList.add('col-11');

        }
        // document.querySelector('.colToRow').classList.add('col-11');
        // console.log(document.querySelector('.colToRow').classList);
    } else {
        for (var i = 0; i < wtf.length; i++) {
            wtf[i].classList.remove('col-11');
        }
        // document.querySelector('.colToRow').classList.remove('col-11');
    }
}
ContIconChange();
window.addEventListener('resize', ContIconChange);

//console.log('gggggg');

//

