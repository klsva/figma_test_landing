import './styles/styles.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './js/img'
//import * as $ from 'jquery'
import 'slick-carousel'

//func places hero <img> in hero background-image 
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

//func animates burger menu lines/cross
document.querySelector('.icon-submenu').addEventListener("click", ()=> {
    document.querySelector('.icon-submenu').classList.toggle('active');
    document.querySelector('.submenu__body').classList.toggle('active');
    document.querySelector('.submenu__list').classList.toggle('hidden');    
});
