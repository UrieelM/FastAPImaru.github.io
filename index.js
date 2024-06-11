const getLibros = async (done) => {
    try {
        const response = await fetch("http://165.227.92.146/libros/");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data received from API:", data); // Debugging line
        done(data);
    } catch (error) {
        console.error("Error fetching libros:", error);
    }
}

getLibros(libros => {
    if (!libros || !Array.isArray(libros)) {
        console.error("Unexpected data format:", libros);
        return;
    }
    libros.forEach(libro => {
        const article = document.createRange().createContextualFragment(
            `<article>
                <div class="image-container">
                    <img src="https://images.unsplash.com/photo-1557427654-8c1dd151d23b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="libro">
                </div>
                <h2>${libro.titulo}</h2>
                <h3>Categoria: ${libro.nombre_categoria}, Año: ${libro.año}</h3>
                <span>ID: ${libro.id_libro}, Autor: ${libro.autor}, Paginas: ${libro.numPaginas}</span>
            </article>`
        );
        const main = document.querySelector("main");
        main.appendChild(article);
    });
});



