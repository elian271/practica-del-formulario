let formulario = document.getElementById("formulario");
let boton = document.getElementById("btn");

function validarDatos(e){
    let inputNombre = document.formulario.name.value;
    let inputApellido = document.formulario.lastname.value;
    let inputEmail = document.formulario.email.value;


    if (inputNombre == 0 || inputApellido == 0 || inputEmail == 0 ){
        alert("Campo neceserio vacio");
        e.preventDeFault();
    }
}

// eventos 

formulario.addEventListener("submit",validarDatos);

