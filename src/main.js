import './styles/styles.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './js/img'
import * as $ from 'jquery'
import 'slick-carousel'

//func places <img> in background-image 
function ibg(){
    let ibg = document.querySelectorAll('.ibg');
    for (let elem of ibg) {
        if (elem.querySelector('img')){
            elem.style.backgroundImage = 'url(' + elem.querySelector('img')
                .getAttribute('src') + ')'
        }
    }
}
ibg();

$( document ).ready(function() {
    //func animates burger menu lines/cross
    $('.icon-submenu').on("click", function(){
        $('.icon-submenu').toggleClass('active');
        $('.submenu__body').toggleClass('active');
        $('.submenu__list').toggleClass('hidden');
        $('body').toggleClass('lock');

    });

    //func accordion
    $('#accordion > div').hide();
    $('.accordion__title').on("click", function(){
        $(this).toggleClass('active'); 
        $(this).next('div').slideToggle('.accordion__text');
    });
});



