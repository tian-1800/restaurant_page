const rendang = [
    {   
        value: 1,
        variant: "sapi",
        img: "https://cdn1-production-images-kly.akamaized.net/muibItj6Qwbj8sGg003Qp9r7c34=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/929547/original/035685000_1436945386-makanan-2.jpg",
        description: "Rendang made from meat with unique ingredient from Padang, Indonesia",
    }, 
    {
        value: 2,
        variant: "ayam",
        img: "https://selerasa.com/wp-content/uploads/2015/05/images_daging_rendang-ayam-pedas.JPG",
        description: "Rendang variant using chicken instead of cow",
    },
    {
        value: 3,
        variant: "pakis",
        img: "https://img-global.cpcdn.com/recipes/b1d92ab058d3503a/680x482cq70/rendang-pakis-foto-resep-utama.jpg",
        description: "Dried rendang, no coconut milk added",
    },
    {
        value: 4,
        variant: "maco",
        img: "https://www.saribundo.biz/wp-content/uploads/2016/01/jenis-rendang-di-Padang-atau-Sumatera-Barat-salah-satunya-rendang-jengkol.jpg",
        description: "Rendang made from maco fish and jenkol (Archidendron Pauciflorum)",
    }
];
const foodDisplay = (foodIndex,el) => {
    const imgWrap = ((i) => {
        return `<img class="img-food" src=${rendang[i].img}>`;
    })(foodIndex-1);
    const descWrap = ((i) => {
        return `<p class="desc-food">${rendang[i].description}</p>`
    })(foodIndex-1);
    console.log(imgWrap,descWrap);
    el.innerHTML = descWrap + imgWrap;
    // let main = document.getElementById('main');
    // element.innerHTML += '<div>'+imgWrap + descWrap+'</div>';

}
const foodChoice = (el) => {
    let foodList = Object.values(document.getElementsByTagName('option'));
    console.log(foodList);
    for (let i of foodList) {
        console.log(i);
        i.addEventListener('click',() => {
            foodDisplay(i.value,el);
            //console.log(i.value,element);
        })
    }
}

const menuHeadText = '<h2 id="menu-header">Menu</h2>';
const menu0 = '<option value="" disabled selected hidden>-Select menu-</option>';
let menuList = (() => {
    let text = "";
    for (let i of rendang) {
        text += `<option value="${i.value}">Rendang ${i.variant}</option>`;
    }
    return text;
})();
const menuDropDown = `${menuHeadText}<div><select>${menu0}${menuList}</select></div>`;

const menuLoad = () => {
    //document.getElementById('home-page').style.display = 'none';
    let menuContent = document.getElementById('content');
    const newElement = document.createElement('div');
    newElement.id = 'food-desc-container';
    menuContent.innerHTML = menuDropDown;
    menuContent.appendChild(newElement);
    foodChoice(newElement);
    //newElement.innerHTML = "hehe";
}

export {
    menuLoad,
}