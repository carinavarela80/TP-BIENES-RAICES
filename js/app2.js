fetch('https://fb-rest-server-node.herokuapp.com/api/inmuebles')
            .then(resp => resp.json())
            .then(resp_data => {

                const anuncios = resp_data.data;

                anuncios.forEach(element => {

                    const articulo = `
                    
                        <div class="anuncio">
                            <img src="${element.imgUrl}" alt="Anuncio Casa en el Lago">
                            <div class="contenido-anuncio">
                                <h3>${element.title}</h3>
                                <p>${element.description}</p>
                                <p class="precio">$ ${element.precio}</p>
                                <ul class="iconos-caracteristicas">
                                    <li>
                                        <img src="img/icono_wc.svg" alt="icono_wc">
                                        <p>3</p>
                                    </li>
                                    <li>
                                        <img src="img/icono_estacionamiento.svg" alt="icono_estacionamiento">
                                        <p>2</p>
                                    </li>
                                    <li>
                                        <img src="img/icono_dormitorio.svg" alt="icono_dormitorio">
                                        <p>5</p>
                                    </li>
                                </ul>
                                    <a href="anuncio.html" class="boton boton-naranja d-bock">Ver Propiedad</a>
                            </div>
                        </div>
                    
                        `;

                    const nodoInmuebles = document.getElementById('inmuebles');
                    nodoInmuebles.innerHTML = nodoInmuebles.innerHTML + articulo;
                });

            });