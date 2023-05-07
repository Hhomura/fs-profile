//Data
var data = [{
    title: "Javascript",
    description:"Intermediário",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433"
},
{
    title: "Typescript",
    description:"Básico",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433"
},
{
    title: "Node.js",
    description:"básico para intermediário",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433"
},
{
    title: "Java",
    description:"intermediário",
    src:"https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem-640x400.jpg"
},

{
    title: "Android",
    description:"Básico",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433"
},
{
    title: "HTML5",
    description:"intermediário",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433"
},
{
    title: "CSS",
    description:"intermediário",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433"
},
{
    title: "Unity",
    description:"intermediário",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433"
},
{
    title: "GIT",
    description:"GitHub, BitBucket",
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433"
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
