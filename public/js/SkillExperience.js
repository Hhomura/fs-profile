var data = [{
    cargo: "Desenvolvedor de Software JR",
    empresa: "IFAM//EMBRAPII//HANA ELETRONICS",
    periodo: "Período: 4 meses",
    descricao: "Atuei como desenvolvedor Node",
    techs: [
        "./src/assets/icons/javascript.svg",
        "./src/assets/icons/node.svg"
    ]
},
{
    cargo: "Desenvolvedor de Software Robótica",
    empresa: "IFAM",
    periodo: "Período: 1 ano e 5 meses",
    descricao: "Designado a ser programador e mentor da equipe de robótica Robotic Minds do IFAM campus avançado de Manacapuru. Atuei como programador e participannte no primeiro ano na competição First Lego League 2021. Em 2022 Atuei como Mentor da Nova Equipe.",
    techs: [
        "",
    ]
},
{
    cargo: "Desenvolvedor de Software Android",
    empresa: "Freelancer",
    periodo: "Desde Abril de 2022",
    descricao: "Realizo projetos voltados para plataforma mobile android utilizando o framework Android Studio. Desenvolvi e desenvolvo de aplicações simples com conexão com banco de dados e até mesmo Jogos com uso do Canvas, SurfaceView, ViewHolder e etc.",
    techs: [
        "./src/assets/icons/android.svg",
    ]
},
]

var container = document.querySelector(".skills_experience_container");
var template = document.querySelector("#profileExperience");

function createExperience(){
    data.map((item) =>{
        var clone = document.importNode(template.content, true);
        var h2 = clone.querySelector("#carg");
        var h3 = clone.querySelector("#company");
        var p1 = clone.querySelector("#period");
        var p2 = clone.querySelector("#description");

        var techs = clone.querySelector("#techs");

        h2.textContent = item.cargo;
        h3.textContent = item.empresa;
        p1.textContent = item.periodo;
        p2.textContent = item.descricao;

        item.techs.map((item) =>{ 
            console.log(item)
            var img = document.createElement("img");
            img.setAttribute("src", item);
            techs.appendChild(img);
        }) 

        container.appendChild(clone);
    })
}

createExperience();