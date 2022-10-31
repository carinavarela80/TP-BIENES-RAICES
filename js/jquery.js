$(document).ready(function () {

    const formcontacto = $("#formcontacto");

    formcontacto.submit(function (event) {
        event.preventDefault();

        const nombre = $("#nombre").val();
        const email = $("#email").val();
        const telefono = $("#telefono").val();

        let estado = true;

        if (nombre.length == 0) {
            estado = false;
        }
        if (email.length == 0) {
            estado = false;
        }
        if (telefono.length == 0) {
            estado = false;
        }

        if (estado == true) {

            alert("Formulario Enviado");
            location.reload();

        } else {
            const warning = $(".warning");
            warning.show();

        }

    });

});