const nombre = document.getElementById("nombre");
        const apellido = document.getElementById("apellido");
        const dni = document.getElementById("dni");
        const nacionalidad = document.getElementById("nacionalidad");
        const estadocivil = document.getElementById("estadocivil");
        const email = document.getElementById("email");
        const telefono = document.getElementById("telefono");

        const wizard1 = document.getElementById("wizard1");
        const wizard2 = document.getElementById("wizard2");

        const botonimprimir = document.getElementById("wizardsubmit");

        const warning = document.querySelector(".warning");

        const btnWz1 = document.getElementById("btnWz1");
        btnWz1.onclick = function () {

            const nombreV = nombre.value;
            const apellidoV = apellido.value;
            const dniV = dni.value;
            const nacionalidadV = nacionalidad.value;
            const estadocivilV = estadocivil.value;
            const emailV = email.value;
            const telefonoV = telefono.value;

            let estado = true;

            if (nombreV.length == 0) {
                estado = false;
            }
            if (apellidoV.length == 0) {
                estado = false;
            }
            if (dniV.length < 7) {
                estado = false;
            }
            if (nacionalidadV.length == 0) {
                estado = false;
            }
            if (estadocivilV.length == 0) {
                estado = false;
            }
            if (emailV.length == 0) {
                estado = false;
            }
            if (telefonoV.length == 0) {
                estado = false;
            }

            if (estado == true) {

                wizard1.style.display = "none";
                wizard2.style.display = "block";

                botonimprimir.style.display = "block";

            } else {
                
                warning.style.display = "block";

            }

        }

        const formwizard = document.getElementById("formwizard");
        formwizard.onsubmit = function (e) {

            e.preventDefault();

            const oferta = document.getElementById("oferta").value;
            const mensaje = document.getElementById("mensaje").value;

            if (oferta.length > 0) {

                const nombreV = nombre.value;
                const apellidoV = apellido.value;
                const dniV = dni.value;
                const nacionalidadV = nacionalidad.value;
                const estadocivilV = estadocivil.value;
                const emailV = email.value;
                const telefonoV = telefono.value;
                const ocultar = document.getElementById("ocultar");
                const divfooter = document.getElementById("divfooter");

                wizard1.style.display = "block";
                btnWz1.style.display = "none";
                ocultar.style.display = "none";
                botonimprimir.style.display = "none";
                divfooter.style.display = "none";
                warning.style.display = "none";

                window.print();

                location.reload();


            }
        }