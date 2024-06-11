const getCategorias = async (done) => {
    try {
        const response = await fetch("http://165.227.92.146/categorias");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data received from API:", data); // Debugging line
        done(data);
    } catch (error) {
        console.error("Error fetching categorias:", error);
    }
}

getCategorias(categorias => {
    if (!categorias || !Array.isArray(categorias)) {
        console.error("Unexpected data format:", categorias);
        return;
    }
    categorias.forEach(categoria => {
        const article = document.createRange().createContextualFragment(
            `<article>
                <div class="image-container">
                    <img src="https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="categorias">
                </div>
                <h2>${categoria.nombre}</h2>
                <h3>ID: ${categoria.id_categoria}</h3>
            </article>`
        );
        const main = document.querySelector("main");
        main.appendChild(article);
    });
});
