var data = [
    {
        Titulo: "Communication",
        descricao: "Jogo desenvolvido como projeto de Iniciação Científica (PIBIC) durante o curso Técnico em Jogos Digitais no IFAM. O objetivo do Projeto é auxiliar no ensino da língua inglesa através de um jogo dinâmico e divertido.",
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
        Titulo: "Service Burger",
        descricao: "Projeto Pessoal que tem como objetivo servir como um criador de pedidos voltados para hamburgers.",
        desctech: "Typescript | HTML | CSS | Vue.js",
        link1: "https://github.com/Hhomura/Service-Burger-Vue.js",
        link2: "https://drive.google.com/file/d/1VplAdFHxuVssPERRxVJ5jIMJAQP81CTp/view?usp=sharing",
        url: "./src/assets/imgs/burger.png"
    },
    {
        Titulo: "Flappy Bird CLone",
        descricao: "Projeto Pessoal que é um clone do popular Jogo Flappy Bird. Foi usado o Canvas para tabalhar as constantes renderizações no Jogo.",
        desctech: "Java | Android",
        link1: "https://github.com/Hhomura/FlappyBird-Android",
        link2: "https://drive.google.com/file/d/1SNAMcnIeudUKYDQqAtHINQ72Us2lj96-/view?usp=sharing",
        url: "./src/assets/imgs/birdBack.jpeg"
    },

    {
        Titulo: "GitHub Search",
        descricao: "Desafio lançado pela plataforma DIO. Um aplicativo Android que pesquisa os repositórios do usuário que tiver seu nome digitado. O app faz uso do retrofit e uma API própria do GitHub, além de que, está seguindo o padrão MVP.",
        desctech: "Kotlin | Android | Retrofit | MVP",
        link1: "https://github.com/Hhomura/desafio-github-search/tree/Hhomura",
        link2: "https://drive.google.com/file/d/1xv4xmrPDeN3cEWoUFUMl-D592pPMhtIX/view?usp=sharing",
        url: "./src/assets/imgs/gitHub_search.jpg"
    },

    {
        Titulo: "My Books",
        descricao: "Projeto de Conclusão de curso do IFMG. Criação de um aplicativo mobile que cadastre e liste livros conforme seu status de leitura ou concluído",
        desctech: "Typescript | Firebase | Rest API | React Native",
        link1: "https://github.com/Hhomura/my-books-react-native",
        link2: "https://drive.google.com/file/d/1jWeFeHhyESs9HNHzmMcXTF7QrWW5hmIN/view?usp=sharing",
        url: "./src/assets/imgs/my_books.png"
    },

    {
        Titulo: "Em breve",
        descricao: "projeto em andamento...",
        desctech: "...",
        link1: "",
        link2: "",
        url: ""
    }
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