import { Usuario } from "../agregarUsuario.js";

export function baseDeDatos() {

    const listas = [{
        id: "1",
        name: "usuarios",
        lista: [{
            email: "MS@Teamo.com",
            numeroTelefonico: "3213018235",
            password: "19-09-2020"
        }]
    }];

    return {
        obtenerUsuarios: function() {

            return listas[0].lista

        },
        añadirUsuario: function({
            email: email,
            numeroTelefonico: numeroTelefonico,
            password: password
        }){
            
         listas[0].lista.push(
            new Usuario({
                email: email,
                numeroTelefonico: numeroTelefonico,
                password: password
            })
        );

        },
        quitarUsuario: function() {

            usuarios -= 1;

        }

    }
}

baseDeDatos().añadirUsuario({
    email: "email",
    numeroTelefonico: "numeroTelefonico",
    password: "password"
});

baseDeDatos().añadirUsuario








