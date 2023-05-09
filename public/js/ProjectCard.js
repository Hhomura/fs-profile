var data = [
    {
        Titulo: "Communication",
        descricao: "Jogo desenvolvido como projeto de Iniciação Científica (PIBIC) durante o curso Técnico em Jogos Digitais no IFAM.",
        desctech: "Unity | C#",
        link1: "#",
        link2: "#"
    },
    {
        Titulo: "Task List",
        descricao: "Projeto Pessoal Desenvolvido com intuito de organização e gerenciamento de Tarefas Simples.",
        desctech: "React.js | JSON.Server",
        link1: "#",
        link2: "#"
    },
    {
        Titulo: "CRUD Postgres",
        descricao: "Projeto Pessoal que faz ligação com o banco de dados para um sistema simiples de cadastro e relação de dados.",
        desctech: "Node.js | PostgresSQL | Bootstrap | handlebars",
        link1: "#",
        link2: "#"
    },
    {
        Titulo: "Em breve",
        descricao: "projeto em andamento...",
        desctech: "...",
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
        var descTech = clone.querySelector("#descTech");
        var link1 = clone.querySelector("#link1");
        var link2 = clone.querySelector("#link2");

        titulo.textContent = item.Titulo;
        descricao.textContent = item.descricao;
        link1.textContent = item.link1;
        link2.textContent = item.link2;
        descTech.textContent = item.desctech;

        container.appendChild(clone);
    });
}

createCards();