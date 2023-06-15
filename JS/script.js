const botonAviso = document.getElementById("cerrar-aviso");
const ventanaModal = document.getElementById("ventana-modal");
const fondoModal = document.getElementById("fondo-modal");


if (!sessionStorage.getItem("ventana-modal-visto")) {
    ventanaModal.classList.add("activo")
    fondoModal.classList.add("activo")
}
if (!sessionStorage.getItem("ventana-modal-visto")) {
    ventanaModal.classList.add("activo")
    fondoModal.classList.add("activo")
    sessionStorage.setItem("ventana-modal-visto", true)

}


//boton primero
document.getElementById('btnsaludo').onclick = function () {
    alert('Saludos, Gracias por visitar StyleHub!');
}

//modal segundo
var modal = document.getElementById("ventanaModal");
var boton = document.getElementById("abrirModal");
var span = document.getElementsByClassName("cerrar")[0];
boton.addEventListener("click", function () {
    modal.style.display = "block";
});
span.addEventListener("click", function () {
    modal.style.display = "none";
});

