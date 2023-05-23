var data = [
    {
        Titulo: "Communication",
        descricao: "Jogo desenvolvido como projeto de Iniciação Científica (PIBIC) durante o curso Técnico em Jogos Digitais no IFAM. O oobjetivo do Projeto é auxiliar no ensino da língua inglesa através de um jogo dinâmico e divertido.",
        desctech: "Unity | C#",
        link1: "https://github.com/Hhomura/PIBIC",
        link2: "https://drive.google.com/file/d/10S7nw83VpPKhG-SctBzbU2tgDR8bpWqG/view",
        url: "./src/assets/imgs/Communication.jpg"
    },
    {
        Titulo: "Task List",
        descricao: "Projeto Pessoal Desenvolvido com intuito de organização e gerenciamento de Tarefas Simples.",
        desctech: "React.js | JSON.Server",
        link1: "https://github.com/Hhomura/Lista-de-Tarefas-com-React",
        link2: "https://www.linkedin.com/posts/felipe-santos-ramos-305813200_react-json-javascript-activity-7055944056480104448-b1_9?utm_source=share&utm_medium=member_desktop",
        url: "./src/assets/imgs/TaskList.png"
    },
    {
        Titulo: "CRUD Postgres",
        descricao: "Projeto Pessoal que faz ligação com o banco de dados para um sistema simiples de cadastro e relação de dados.",
        desctech: "Node.js | PostgresSQL | Bootstrap | handlebars",
        link1: "https://github.com/Hhomura/CRUD-Node.js-PostgreSQL",
        link2: "https://www.linkedin.com/posts/felipe-santos-ramos-305813200_nodejs-bootstrap-express-activity-7039015898292076545-ENDa?utm_source=share&utm_medium=member_desktop",
        url: "./src/assets/imgs/Postgres.png"
    },
    {
        Titulo: "Em breve",
        descricao: "projeto em andamento...",
        desctech: "...",
        link1: "",
        link2: "",
        url: ""
    },
    {
        Titulo: "Em breve",
        descricao: "projeto em andamento...",
        desctech: "...",
        link1: "",
        link2: "",
        url: ""
    },
    {
        Titulo: "Em breve",
        descricao: "projeto em andamento...",
        desctech: "...",
        link1: "",
        link2: "",
        url: ""
    },
]

//background-image: url(../../src/assets/imgs/background.jpg);


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

        var img = clone.querySelector("#capa");
        img.setAttribute("src", item.url);

        titulo.textContent = item.Titulo;
        descricao.textContent = item.descricao;
        link1.setAttribute("href", item.link1);
        link2.setAttribute("href", item.link2);
        descTech.textContent = item.desctech;

        container.appendChild(clone);
    });
}

createCards();