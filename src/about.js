const subtitle = {
    first: "Original Sumatran Rendang", 
    second: "Our Story",
};
const subtitleWrap = (text) => `<h2 class="about-subtitle">${text}</h2>`;

const desc = {
    a: "If you’ve never had rendang before, we’re glad your taste buds are here. We’re a traditional rendang house with a Padang flair. Everything that goes in your mouth has been highly approved by our talented team of rendang-lovers. Rendang is the deluxe food for every season and with a lifetime of combinations of sauce and spice options to put into your plate of rendang, we’re happy to be there for every savory experience. ",
    b: "The story is a wild ride to say the least. When we started in 2012 with a food truck, we couldn't have imagined being named the best Rendang in Antartica by our fans two short years later. In a continent long dominated by enchiladas and fish chips, we've loved introducing Antartican and Siberian to our favorite food."
};
const descWrap = (text) => `<p class="about-text">${text}</p>`;

const img = {
    bigRendang: "https://4.bp.blogspot.com/-BrNxdUVfB8g/Vpz7lGV1--I/AAAAAAAABlk/CMKaLoCXtg8/s1600/bumbu%2Brendang%2Bjawa.jpg",
    rendang1: "https://img.inews.co.id/media/822/files/inews_new/2019/09/28/rendang1a.jpg",
    rendang2: "https://cdn-2.tstatic.net/travel/foto/bank/images/ilustrasi-menu-rendang-untuk-idul-adha.jpg",
    rendang3: "https://farm9.staticflickr.com/8053/8123825733_e45d0d26b4.jpg",
}
const imgWrap = (text) => `<img class="about-img-big" src=${text}>`;
const imgFlexWrap = (text1,text2,text3) => {
    return `<div id="about-img-container"><img class="about-img-item" src=${text1}><img class="about-img-item" src=${text2}><img class="about-img-item" src=${text3}></div>`;
}
const aboutLoad = () => {
    const content = document.getElementById('content');
    let text = imgWrap(img.bigRendang) +
        subtitleWrap(subtitle.first) +
        descWrap(desc.a) +
        imgFlexWrap(img.rendang1, img.rendang2, img.rendang3) +
        subtitleWrap(subtitle.second) +
        descWrap(desc.b) +
        imgWrap(img.bigRendang);
    content.innerHTML = text; 
}

export {
    aboutLoad,
};