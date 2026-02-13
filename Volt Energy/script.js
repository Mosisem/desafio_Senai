const buttons = window.document.querySelectorAll(".flavour-btn");
const title = document.getElementById("main-title");
const description = document.getElementById("main-description")
const tag = document.getElementById("flavour-tag");
const accent = document.getElementById("can-accent");
const glow = document.getElementById("glow-effect");
const bar = document.getElementById("enegy-bar");
const valTex = document.getElementById("energy-value");
const chargetn = document.getElementById("btn-charge")
const root = document.documentElement;

const flavour = {
    lime:{
        tag: "Edição Original",
        color:"#ccff00",
        desc:"A força cítrica que você precisa para virar a noite no código ou no jogo."
    },

    barry:{
        tag:"Edição Limitada",
        color:"#ff006e",
        desc:"Um mix intenso de frutas vermelhas com o dobro de Taurina para máxima performace."
    },

    ice: {
        tag:"Refrescância Extrema",
        color:"#00d4ff",
        desc:"Sinta o choque térmico. Foco frio e calculista para momentos de alta pressão."
    }
}

function switchFlavor(key){
    const data = flavour[key];

    tag.textContentn = data.tag;
    description.textContent = data.desc;
    root.style.setProperty("--primary-color", data.color);
    accent.setAttribute("fill", data.color);
    glow.style.backgroundColor = data.color; 


    buttons.forEach((item) => item.classList.remove("active"));
    document.querySelector(`[data-flavour="${key}]`).classList.add("active");


    resetEnergy();
}


let enegyLevel = 0
function updateEnergy(){

    if(enegyLevel < 100){
       enegyLevel += 10;
       bar.style.width = enegyLevel + "%";
       valTex.textContent = enegyLevel + "%";

       if (enegyLevel === 100){
        valTex.textContent = "CARGA MÁXIMA !!"
        chargetn.style.backgroundColor = "var(--primary-color)";
        chargetn.style.color = "black"
       }
    }

}

function resetEnergy(){
    enegyLevel = 0;
    bar.style.width = "0%";
    valTex.textContent = "0%";
    chargetn.style.backgroundColor ="transparent";
    chargetn.style.color = "white";
}

buttons.forEach((btn) => {
    btn.addEventListener('click', () =>{
        const flavour = btn.getAttribute("data-flavour");
        switchFlavor(flavour);
    })
})

chargetn.addEventListener("click", updateEnergy);