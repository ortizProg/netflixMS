// llamar elementos del DOM 

const boxPerfilMs = document.getElementById('perfilMS');
const sectionQuienVe = document.getElementById('sectionQuienVe');
const btnNo = document.getElementById('btnNo');
const btnSi = document.getElementById('btnSi');

// evento click del btn

boxPerfilMs.addEventListener("click", () => {

    
    sectionQuienVe.style.display = "none";

});

btnNo.onmouseover = function() {

    btnNo.style.position = "absolute";
    if (Math.random() > 0.5) {

        btnNo.style.transform = `translateY(${Math.floor((Math.random() * 100) * 3)}px)`;

    } else {

        btnNo.style.transform = `translateX(${Math.floor(Math.random() * 1000)}px)`;

    }

}

btnNo.addEventListener("click", () => {

    btnNo.style.display = "none";

});

btnSi.addEventListener("click", () => {

    location.href = './felicidades/felicidades.html';

});

// browser

