import * as pageLoad from './page-load.js';
import * as menu from './menu.js';
import * as about from './about.js';

pageLoad.loadContent();
const menuItems = document.getElementsByClassName('tab-item');
menuItems[0].addEventListener('click', () => {
    pageLoad.loadHome();
})
menuItems[1].addEventListener('click', () => {
    menu.menuLoad();
})
menuItems[2].addEventListener('click', () => {
    console.log('click');
    about.aboutLoad();
})