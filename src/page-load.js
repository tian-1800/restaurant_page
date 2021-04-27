let headerText = '<div id="home-page"><h1>RENDANG PAK JOKO</h1><p>Making terrific rendang since 200 B.C.</p></div>';
let imgLinkText = "https://static.thehoneycombers.com/wp-content/uploads/sites/4/2020/01/Uni-Restaurant-Bar-best-restaurants-in-Canggu-Berawa-Bali-Indonesia.jpg";
let tabBarText = '<div id="tab-menu">'+'<div class="tab-item">Home</div>'+
    '<div class="tab-item">Menu</div>'+'<div class="tab-item">About</div>'+
    '<div class="tab-item">Contact</div>'+'</div>';
let contentText = `<div id="content">${headerText}</div>`;
const loadContent = () => {
    let main = document.getElementById('main');
    main.innerHTML = tabBarText+contentText;
    let header = document.getElementsByTagName('h1');
    console.log(header);
    //header.style.backgroundImage = "url('https://static.thehoneycombers.com/wp-content/uploads/sites/4/2020/01/Uni-Restaurant-Bar-best-restaurants-in-Canggu-Berawa-Bali-Indonesia.jpg')";
}
const loadHome = () => {
    let content = document.getElementById('content');
    content.innerHTML = contentText;
}

export {
    loadContent,
    loadHome
};