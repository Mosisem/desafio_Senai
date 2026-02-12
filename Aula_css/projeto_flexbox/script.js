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
        <div>
            <h4>Card Exemplo ${i} </h4>
            <p>Observe como este elemento se comporta ao aletrar entre os modos de exibição</p>
        </div>
    `;
    demoContainer.appendChild(iten)
}
