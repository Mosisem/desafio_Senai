const demoContainer = document.getElementById("demoContainer")
const btnFlex = document.getElementById("btnFlex")
const btnGrid = document.getElementById("btnGrid")
const txtAxis = document.getElementById("txtAxis")
const txtIdeal = document.getElementById("txtIdeal")

const itens = 10
for (let i = 1; i <= itens; i++) {
    const iten = document.createElement('div');
    iten.className = 'gallery-item';
    const hue = (i * 40) % 360;

    iten.innerHTML = `
        <div 
        class="img-box" 
        style="background:linear-gradient(
            135deg, 
            hsl(${hue}, 70%, 60%), 
            hsl(${hue}, 70%, 60%), 
            hsl(${hue}, 70%, 40%)
        )">
            Item ${i}
        </div>
        <div class="content-box">
            <h4>Card Exemplo ${i} </h4>
            <p>Observe como este elemento se comporta ao aletrar entre os modos de exibição</p>
        </div>
    `;
    demoContainer.appendChild(iten)
}

function setMode(mode){
    if (mode ===  'flex'){
        demoContainer.className = "demo-container mode-flex";
        btnFlex.classList.add("active-grid");
        btnGrid.classList.remove("active-grid");

        txtAxis.inert = "Unidimensional (Linha)";
        txtIdeal.innerText = " O layout é calculado item a item. Ótimo para distribuir espaço em uma limha";
    } else {
        demoContainer.className = "demo-container mode-grid";
        btnGrid.classList.add("active-grid");
        btnFlex.classList.remove("active-flex");

        txtAxis.innerText = "Bidimensional (Grade)"
        txtAxis.innerText = "Define a estrutura primeiro. Alinhamento rigoroso de coluna e linhas"; 

    }
}
