fetch('http://localhost:8080/api/blogs')
    .then(resp => resp.json())
    .then(resp_data => {

        const blogs = resp_data.data;

        blogs.forEach(element => {

            const articulo = `
                    <article class="entrada-blog">
                        <div class="imagen">
                            <img src="${element.imgUrl}" alt="Entrada de blog">
                        </div>
                        <div class="texto-entrada">
                            <a href="entrada.html">
                                <h4>${element.title}</h4>
                            </a>
                            <p>Escrito el: <span>${element.date}</span> por: <span>${element.user}</span></p>
                            <p>${element.description}</p>
                        </div>
                    </article>
                    `;

            const nodoBlogs = document.getElementById('blogs');
            nodoBlogs.innerHTML = nodoBlogs.innerHTML + articulo;
        });

    });