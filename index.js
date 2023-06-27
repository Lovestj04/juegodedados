const inputUsuario = document.getElementById('inputUsuario');
const btnUsuario = document.getElementById('btnUsuario');


btnUsuario.addEventListener('click', function(){

    let nombreUsuario = btnUsuario.value;

    if (nombreUsuario.trim() !== "") {

        localStorage.setItem("username", nombreUsuario);

    } else {
        alert("Ingrese un nombre valido, no sea ninja.");
    }
});