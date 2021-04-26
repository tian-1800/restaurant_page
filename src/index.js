import * as pageLoad from './page-load.js';
import * as menu from './menu.js';

pageLoad.loadContent();
let menuContent = document.getElementById('content');
const menuItems = document.getElementsByClassName('tab-item');
//let i = 0;
//const arrayFunction = [pageLoad.loadContent(),menu.menuLoad()];
// for(element in menuItems){
//     element.value = 0;
//     element.addEventListener('click', () => {
//         //arrayFunction[element.value];
//         console.log("click");
//     })
//     i++;
// };
menuItems[1].addEventListener('click', () => {
    menu.menuLoad();
})