const botao = document.getElementById("btnAbrir");
const input = document.getElementById("senha");
const carta = document.getElementById("carta");
const overlay = document.getElementById("overlay");
const erro = document.getElementById("erro");

const dataCorreta = "3004";

let intervaloCoracoes = null;

// =============================
// ABRIR CARTA
// =============================
botao.addEventListener("click", function () {

    let valor = input.value;

    // remove tudo que não for número
    valor = valor.replace(/\D/g, "");

    if (valor === dataCorreta) {
        carta.style.display = "block";
        overlay.style.display = "block";
        erro.style.display = "none";

        iniciarChuva(); // 💖 começa chuva contínua
    } else {
        erro.style.display = "block";
        carta.style.display = "none";
        overlay.style.display = "none";

        pararChuva(); // garante que pare se errar
    }
});

// =============================
// FECHAR AO CLICAR NO OVERLAY
// =============================
overlay.addEventListener("click", function () {
    carta.style.display = "none";
    overlay.style.display = "none";
    pararChuva();
});

// =============================
// APERTAR ENTER
// =============================
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        botao.click();
    }
});

// =============================
// CHUVA CONTÍNUA DE CORAÇÕES
// =============================
function iniciarChuva() {

    if (intervaloCoracoes) return; // evita duplicar intervalo

    intervaloCoracoes = setInterval(() => {

        const coracao = document.createElement("div");
        coracao.classList.add("coracao");

        const tipos = ["💖", "💗", "💘", "💝", "💕"];
        coracao.innerHTML = tipos[Math.floor(Math.random() * tipos.length)];

        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.fontSize = (Math.random() * 25 + 15) + "px";
        coracao.style.animationDuration = (Math.random() * 3 + 3) + "s";

        document.body.appendChild(coracao);

        setTimeout(() => {
            coracao.remove();
        }, 6000);

    }, 200);
}

// =============================
// PARAR CHUVA
// =============================
function pararChuva() {
    clearInterval(intervaloCoracoes);
    intervaloCoracoes = null;
}