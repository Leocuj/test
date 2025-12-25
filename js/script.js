const audio = document.getElementById("audio");
const btnAudio = document.getElementById("btnAudio");
const btnEntrar = document.getElementById("btnEntrar");
const contenido = document.getElementById("contenido");
const login = document.getElementById("login");
const cards = document.querySelectorAll(".card");

let index = 0;

/* LOGIN */
btnEntrar.onclick = () => {
    if (document.getElementById("codigo").value === "amor") {
        login.style.display = "none";
        contenido.style.display = "block";
        iniciarAudio();
    } else {
        document.getElementById("error").textContent = "❌ Contraseña incorrecta";
    }
};

/* AUDIO */
function iniciarAudio() {
    audio.currentTime = 0;
    audio.volume = 0;
    audio.play();
    btnAudio.textContent = "🔊";

    let v = 0;
    const fade = setInterval(() => {
        if (v < 0.6) {
            v += 0.02;
            audio.volume = v;
        } else clearInterval(fade);
    }, 100);
}

btnAudio.onclick = () => {
    if (audio.paused) {
        audio.play();
        btnAudio.textContent = "🔊";
    } else {
        audio.pause();
        btnAudio.textContent = "⏸️";
    }
};

/* CARRUSEL */
function actualizar() {
    cards.forEach(c => c.classList.remove("activa"));
    cards[index].classList.add("activa");
}

function siguiente() {
    index = (index + 1) % cards.length;
    actualizar();
}

function anterior() {
    index = (index - 1 + cards.length) % cards.length;
    actualizar();
}

/* FINAL */
function finalizar(ok) {
    document.getElementById("resultado").textContent = ok ? "😊" : "😢";
}

/* REINICIAR */
function reiniciar() {
    index = 0;
    actualizar();
    iniciarAudio();
}

/* SALIR */
function salir() {
    audio.pause();
    audio.currentTime = 0;
    contenido.style.display = "none";
    login.style.display = "block";
}
