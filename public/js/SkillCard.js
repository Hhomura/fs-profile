//Data
var data = [{
    title: "Javascript",
    description:"Intermediário",
    src:"./src/assets/icons/javascript.svg"
},
{
    title: "Typescript",
    description:"Básico",
    src:"./src/assets/icons/typescript.svg"
},
{
    title: "Node.js",
    description:"básico para intermediário",
    src:"./src/assets/icons/node.svg"
},
{
    title: "Java",
    description:"intermediário",
    src:"./src/assets/icons/java.svg"
},

{
    title: "Android",
    description:"Básico",
    src:"./src/assets/icons/android.svg"
},
{
    title: "HTML5",
    description:"intermediário",
    src:"./src/assets/icons/html.svg"
},
{
    title: "CSS",
    description:"intermediário",
    src:"./src/assets/icons/css.svg"
},
{
    title: "Unity",
    description:"intermediário",
    src:"./src/assets/icons/unity.svg"
},
{
    title: "GIT",
    description:"GitHub, BitBucket",
    src:"./src/assets/icons/git.svg"
},
]

var container = document.querySelector("#skillCard");
var cardTemplate = document.querySelector("#cardTemplate");

function createCards() {
    data.map((item) => {
        var clone = document.importNode(cardTemplate.content, true);
        var img = clone.querySelector("img");
        var h2 = clone.querySelector("h2");
        //var p = clone.querySelector("p");

        img.setAttribute("src", item.src);
        h2.textContent = item.title;
        //p.textContent = item.description;

        container.appendChild(clone);
    });
}

createCards();
