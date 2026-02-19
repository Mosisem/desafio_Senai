let texto_h1 = window.document.getElementById('paragrafo_mx');
let fundo_p = window.document.getElementById('titulo_h3');
let decorar = window.document.getElementById('caixa');
let li = window.document.getElementById('liste');
let valo_no_imput = window.document.getElementById('valor_digitado');
let lista_01 = window.document.getElementById('lista_para adicionar');
let image_nova = window.document.getElementById('fundo_img')
let texto_2 = "Olá Mundo!"
let div_primaria = window.document.getElementById('verificador_de_div')


//1. Selecione um elemento <h1> pelo ID e altere seu texto para "Olá Mundo!".
function mudar(){
     texto_h1.innerText=texto_2;
}

//2.

function mudar_p(){
     fundo_p.style.color="#FF0000"
}

//3.

function aviso(){
     window.alert(valo_no_imput.value);
}

//4. Adicione uma nova <li> a uma <ul> existente usando JavaScript.

function adicionar_item(){
     lista_01.innerHTML+= "<li>nova li na lista </li>"
}

//5. Remova o último item de uma lista ao clicar em um botão "Excluir.

function Remova_item(){
     lista_01.innerHTML-="<li>nova li na lista </li>"
}

//6. Altere o atributo src de uma imagem via JS.
function mudar_img(){
  image_nova.attributes = " src =img\istockphoto-2215674535-2048x2048.jpg"
}

//7. Verifique se uma div possui uma classe específica e, se não, adicione-a.
function verificando_div(){
   if(!div.classList.contains("ativa")){
     div.classList.add("ativa");
    }
}



function mudar_lista1(){
     if(decorar.checked){
        li.style.textDecoration="underline red"
     }
     
}

function mudar_lista2(){
     if(decorar.checked){
        li.style.textDecoration="underline red"
     }
     
}


function mudar_lista3(){
     if(decorar.checked){
        li.style.textDecoration="underline red"
     }
     
}

let count = 0;
document.getElementById("mais").onclick = () => {
  count++;
  document.getElementById("contador").textContent = count;
};

// 9 Esconder
document.getElementById("esconder").onclick = function() {
  this.style.display = "none";
};

// 10 Trocar todos <p>
document.getElementById("trocarP").onclick = () => {
  document.querySelectorAll("p").forEach(p => {
    p.textContent = "Texto alterado!";
  });
};

// 11 Número aleatório
document.getElementById("randomBtn").onclick = () => {
  document.getElementById("random").textContent =
    Math.floor(Math.random() * 100);
};

// 12 Validação
document.getElementById("form").onsubmit = function(e) {
  e.preventDefault();
  let nome = document.getElementById("nome");
  if (nome.value.trim() === "") {
    nome.style.border = "2px solid red";
  } else {
    nome.style.border = "";
  }
};

// 13 Mouseover imagem
let img = document.getElementById("imagem");
img.addEventListener("mouseover", () => img.style.opacity = "0.5");
img.addEventListener("mouseout", () => img.style.opacity = "1");

// 14 Tecla pressionada
document.addEventListener("keydown", (e) => {
  console.log("Tecla:", e.key, "Código:", e.code);
});

// 15 Modo Noturno
document.getElementById("modo").onclick = () => {
  document.body.classList.toggle("dark");
};

// 16 Cronômetro
let segundos = 0;
setInterval(() => {
  segundos++;
  document.getElementById("cronometro").textContent = segundos;
}, 1000);

// 17 Evento comum para todos botões
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Botão clicado:", btn.textContent);
  });
});

// 18 Inserir <p> antes da div
document.getElementById("inserirP").onclick = () => {
  let p = document.createElement("p");
  p.textContent = "Parágrafo criado dinamicamente";
  let ref = document.getElementById("referencia");
  ref.parentNode.insertBefore(p, ref);
};

// 19 Select
document.getElementById("select").onchange = function() {
  document.getElementById("valorSelect").textContent = this.value;
};

// 20 Cursor pointer via JS
let hoverBtn = document.createElement("button");
hoverBtn.textContent = "Hover aqui";
hoverBtn.id = "hoverBtn";
document.body.appendChild(hoverBtn);
hoverBtn.addEventListener("mouseover", () => hoverBtn.style.cursor = "pointer");
hoverBtn.addEventListener("mouseout", () => hoverBtn.style.cursor = "default");


// 22 Detectar tamanho tela
if (window.innerWidth < 768) {
  console.log("Mobile");
} else {
  console.log("Desktop");
}

// 23 Accordion
document.querySelector(".accordion-title").onclick = function() {
  let content = document.querySelector(".accordion-content");
  content.style.display =
    content.style.display === "block" ? "none" : "block";
};

// 24 Duplo clique
document.getElementById("duplo").ondblclick = function() {
  this.style.width = "200px";
};

// 25 Limpar formulário
document.getElementById("limpar").onclick = () => {
  document.getElementById("form").reset();
};

// 26 Cor baseada no input
document.getElementById("corInput").oninput = function() {
  document.getElementById("textoCor").style.color = this.value;
};

// 27 Checkbox habilita botão
document.getElementById("termos").onchange = function() {
  document.getElementById("enviar").disabled = !this.checked;
};

// 28 Relógio digital
setInterval(() => {
  let agora = new Date();
  document.getElementById("relogio").textContent =
    agora.toLocaleTimeString();
}, 1000);

// 29 Criar tabela
document.getElementById("criarTabela").onclick = () => {
  let tabela = document.createElement("table");
  tabela.border = "1";
  for (let i = 0; i < 2; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < 2; j++) {
      let td = document.createElement("td");
      td.textContent = `Linha ${i+1} Col ${j+1}`;
      tr.appendChild(td);
    }
    tabela.appendChild(tr);
  }
  document.getElementById("tabelaDiv").innerHTML = "";
  document.getElementById("tabelaDiv").appendChild(tabela);
};

// 30 Curtir
let likes = 0;
let curtirBtn = document.getElementById("curtir");
curtirBtn.onclick = () => {
  likes++;
  document.getElementById("likes").textContent = likes;
  curtirBtn.textContent = "❤️ Curtido";
};


