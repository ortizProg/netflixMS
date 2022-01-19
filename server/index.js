// Obtener elementos del DOM

const formularioEmail = document.getElementById("formularioEmail");
const labelEmail = document.getElementById("labelEmail");

// Estilos para el dom

// estilo de los imputs

console.log(formularioEmail);

function focusFormulario() {

    formularioEmail.addEventListener("focus", () => {

        return true

    });
    

}

const active = window.location.pathname;


formularioEmail.addEventListener("select", () => console.log("pedro"));

function comprobarFocus() {

    if (focusFormulario()) {

        labelEmail.style.marginTop = "5px";
        labelEmail.style.marginLeft = "8px";
        labelEmail.style.fontSize = "1.1rem";
        labelEmail.style.transition = "300ms all ease";
    
    } else {
    
        console.log("error");
    
    }

}

console.log(active);
