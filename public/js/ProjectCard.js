var data = [
    {
        Titulo: "primeiro Titulo",
        descricao: "primeira AAAAAAAAAAAAAAAAAAAAAAA descrição do projeto",
        link1: "#",
        link2: "#"
    },
    {
        Titulo: "primeiro Titulo",
        descricao: "primeira descrição do projeto",
        link1: "#",
        link2: "#"
    },
    {
        Titulo: "primeiro Titulo",
        descricao: "primeira descrição do projeto",
        link1: "#",
        link2: "#"
    },
    {
        Titulo: "primeiro Titulo",
        descricao: "primeira descrição do projeto",
        link1: "#",
        link2: "#"
    },
    {
        Titulo: "Em breve",
        descricao: "projeto em andamento...",
        link1: "#",
        link2: "#"
    },
]

var container = document.querySelector(".projects_cards");
var cardTemplate = document.querySelector("#cardProjectTemplate");

function createCards() {
    data.map((item) => {
        var clone = document.importNode(cardTemplate.content, true);
        var titulo = clone.querySelector("h3");
        var descricao = clone.querySelector("p");
        var link1 = clone.querySelector("#link1");
        var link2 = clone.querySelector("#link2");

        titulo.textContent = item.Titulo;
        descricao.textContent = item.descricao;
        link1.textContent = item.link1;
        link2.textContent = item.link2;

        container.appendChild(clone);
    });
}

createCards();