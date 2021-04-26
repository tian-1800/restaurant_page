let main = document.getElementById('main');
let headerText = "<h1>Tian's Restaurant</h1>";
let imgLinkText = '<img id="img-resto" src="https://static.thehoneycombers.com/wp-content/uploads/sites/4/2020/01/Uni-Restaurant-Bar-best-restaurants-in-Canggu-Berawa-Bali-Indonesia.jpg">';
let tabBarText = '<div id="tab-menu">'+'<div class="tab-item">Home</div>'+
    '<div class="tab-item">Menu</div>'+'<div class="tab-item">Commitment</div>'+
    '<div class="tab-item">Contact</div>'+'</div>';
let contentText = '<div id="content">yes</div>';
const loadContent = () => {
    main.innerHTML = headerText+tabBarText+imgLinkText+contentText;
}; 

export {loadContent};