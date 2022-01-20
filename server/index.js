import { baseDeDatos } from "./plugins/dataBase/dataBase.js";
// Obtener elementos del DOM

const formularioEmail = document.getElementById("formularioEmail");
const labelEmail = document.getElementById("labelEmail");





console.log(baseDeDatos().obtenerUsuarios());


// validacion del login

// obtener elementos del DOM 

    const cuenta = document.getElementById('formularioCuenta');
    const cuentaLabel = document.getElementById("labelCuenta")
    const contraseña = document.getElementById('formularioPassword');
    const contraseñaLabel = document.getElementById('labelPassword')
    const btnSubmit = document.getElementById('btnSubmit');

// validacion del login con el button submit

function efectoDelLabel(element, label) {
        
    element.addEventListener("input", () => {

        if (element.value.length > 0) {

            label.style.top = "5px";
            label.style.left = "4px";
            label.style.fontSize = "1rem"

        }
    });
}

efectoDelLabel(cuenta, cuentaLabel);
efectoDelLabel(contraseña, contraseñaLabel)

btnSubmit.addEventListener("click", () => {

    const valueCuenta = cuenta.value;
    const valuePassword = contraseña.value;
    
    if (valueCuenta.length === 0) {

        console.error("Por favor ingrese una cuenta valida")

    } else if (valuePassword.length === 0) {

        console.error("Por favor digite una contraseña valida")
        
    } else if (valueCuenta == baseDeDatos().obtenerUsuarios()[0].email ||valueCuenta == baseDeDatos().obtenerUsuarios()[0].numeroTelefonico ) {

        if( valuePassword == baseDeDatos().obtenerUsuarios()[0].password ) {

            console.log("login exitoso");

        } else {

            console.warn("Contraseña incorrecta!")

        }

    } else {

        console.warn("No existe ninguna cuenta con estos datos.")

    }


});






