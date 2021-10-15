const projects = [
    {
        name: "Memelist.ml",
        description: "Funny concepts that you can say or refer to sometimes that will not make sense to most people.",
        img: 'imgs/memelist.png',
        link: 'https://memelist.ml', // Memelist
    },
    {
        name: "bigsur-modal",
        description: "2.4kb minified library to make alert dialogs in the style of MacOS Big Sur.",
        img: 'imgs/bigsur-modal.png',
        link: 'https://pineapplerind.ga/libraries/bigsur-modal'
    },
    {
        name: "Radium",
        description: "A fresh-looking theme for VSCode. Almost radioactive.",
        img: 'https://radium-theme.github.io/example.png',
        link: 'https://radium-theme.github.io'
    }
]
var page = ``
function newt(url) {
    window.open(url, '_blank').focus();
}
for (let i = 0; i < projects.length; i++) {
   page += `
    <div class="box" onclick="newt('${projects[i].link}')">
    <img src="${projects[i].img}">
    <div><h1>${projects[i].name}</h1>
    <p>${projects[i].description}</p>
    </div></div>`
}
document.querySelector('.inner').innerHTML += page