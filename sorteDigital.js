// Sorteo Digital
const d = document;

const $languages = d.getElementById("languages");
const $wrapper = d.getElementById("lang-wrapper");

const obtenerGanador = (btn) => {
    
    let textLi = [...$languages.querySelectorAll("li")].map(el => el.textContent);

    document.addEventListener("click", (e) => {
        if(e.target.matches(btn)){
            document.getElementById(btn);
            let elAleatorio = textLi[Math.floor(Math.random() * textLi.length)];
            $wrapper.insertAdjacentHTML("beforebegin", `<p style="color:blue">El ganador es: ${elAleatorio}</p>`);
            alert(`El ganador es: ${elAleatorio}`);
        }
            
    })
}

obtenerGanador("#btnWinner");
