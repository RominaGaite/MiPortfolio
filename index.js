//titulo de perfil
const titulo = document.getElementById('titulo');
const titulos = ["Desarrollo web", "Diseño UX/UI", "Ciberseguridad"];
let index = 0; // Índice del título actual
let charIndex = 0; // Índice del carácter actual
let isDeleting = false; // Indica si estamos eliminando caracteres

function type() {
    const textoActual = titulos[index];
    const velocidadTipeo = 150;

    if (!isDeleting && charIndex < textoActual.length) {
        titulo.textContent += textoActual.charAt(charIndex);
        charIndex++;
        setTimeout(type, velocidadTipeo);
    } else if (isDeleting && charIndex > 0) {
        titulo.textContent = textoActual.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, velocidadTipeo / 1);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            index = (index + 1) % titulos.length;
        }
        setTimeout(type, 1000); // Espera 1 segundo antes de iniciar el siguiente título
    }
}

// Inicia el efecto de máquina de escribir
type();


//titulo de habilidades blandas
const titulo2 = document.getElementById('titulo-2');
const titulos2 = ["Autodidacta", "Creativa", "Analitica"];
let index2 = 0; // Índice del título actual
let charIndex2 = 0; // Índice del carácter actual
let isDeleting2 = false; // Indica si estamos eliminando caracteres

function type2() {
    const textoActual = titulos2[index2];
    const velocidadTipeo = 150;

    if (!isDeleting2 && charIndex < textoActual.length) {
        titulo2.textContent += textoActual.charAt(charIndex2);
        charIndex2++;
        setTimeout(type2, velocidadTipeo);
    } else if (isDeleting2 && charIndex2 > 0) {
        titulo2.textContent = textoActual.substring(0, charIndex2 - 1);
        charIndex2--;
        setTimeout(type2, velocidadTipeo / 1);
    } else {
        isDeleting2 = !isDeleting2;
        if (!isDeleting2) {
            index2 = (index2 + 1) % titulos2.length;
        }
        setTimeout(type2, 1000); // Espera 1 segundo antes de iniciar el siguiente título
    }
}

// Inicia el efecto de máquina de escribir
type2();


