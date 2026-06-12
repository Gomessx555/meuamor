const dataNamoro = new Date("2023-02-18T00:00:00");

function atualizarContador() {

    const agora = new Date();

    let anos = agora.getFullYear() - dataNamoro.getFullYear();
    let meses = agora.getMonth() - dataNamoro.getMonth();
    let dias = agora.getDate() - dataNamoro.getDate();

    if (dias < 0) {
        meses--;
        const ultimoMes = new Date(
            agora.getFullYear(),
            agora.getMonth(),
            0
        );

        dias += ultimoMes.getDate();
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    const diferenca = agora - dataNamoro;

    const totalSegundos = Math.floor(diferenca / 1000);

    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = totalSegundos % 60;

    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

setInterval(atualizarContador, 1000);
atualizarContador();

const mensagens = [
    "Seu beijo que acelera e acalma meu coração ❤️",
    "Seu abraço que é meu lugar favorito ❤️",
    "Sua alegria que me faz ver o lado bom da vida ❤️",
    "Sua companhia que me faz ver quanta sorte eu tenho em ter você ❤️"
];

let indiceMensagem = 0;

const loveText = document.getElementById("loveText");

function trocarMensagem() {

    loveText.style.opacity = "0";

    setTimeout(() => {

        indiceMensagem++;

        if (indiceMensagem >= mensagens.length) {
            indiceMensagem = 0;
        }

        loveText.textContent = mensagens[indiceMensagem];

        loveText.style.opacity = "1";

    }, 500);
}

setInterval(trocarMensagem, 3000);

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("active");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach((item) => {
    observador.observe(item);
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const fechar = document.querySelector(".close");

document.querySelectorAll(".gallery img").forEach((img) => {

    img.addEventListener("click", () => {

        modal.style.display = "flex";
        modalImg.src = img.src;

    });

});

fechar.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {
        modal.style.display = "none";
    }

});

function criarCoracao() {

    const coracao = document.createElement("div");

    coracao.classList.add("heart");

    coracao.innerHTML = "❤";

    coracao.style.left = Math.random() * window.innerWidth + "px";

    coracao.style.fontSize =
        Math.random() * 20 + 15 + "px";

    coracao.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    document
        .getElementById("hearts-container")
        .appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 10000);
}

setInterval(criarCoracao, 500);

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "1.5s";
        document.body.style.opacity = "1";

    }, 100);

});

const finalSection = document.querySelector(".final-section");

window.addEventListener("scroll", () => {

    const posicao = finalSection.getBoundingClientRect().top;

    if (posicao < window.innerHeight - 150) {

        finalSection.style.transition = "2s";
        finalSection.style.transform = "scale(1)";
        finalSection.style.opacity = "1";

    }

});

const musicName = document.getElementById("musicName");

musicName.textContent = "BB, Tim Bernardes";