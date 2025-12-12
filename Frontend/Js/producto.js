const API_URL = "http://localhost:3000/api/productos"

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const contenedor = document.getElementById('contenedor-recetas');
            contenedor.innerHTML = ''; // Limpiar contenedor
            const row = document.createElement('div');
            row.classList.add('row');
            data.data.forEach(producto => {
                const card = document.createElement('div');
                card.classList.add('col-lg-4', 'mb-4');
                card.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${producto.Nombre}</h5>
                            <p class="card-text">${producto.Descripcion}</p>
                            <p class="card-text"><strong>Precio: $${producto.Precio}</strong></p>
                            <p class="card-text"><small class="text-muted">Categoría: ${producto.Categoria}</small></p>
                        </div>
                    </div>`;
                row.appendChild(card);
            });
            contenedor.appendChild(row);
        } else {
            console.error('Error al obtener productos:', data.error);
        }
    })
    .catch(error => {
        console.error('Error en la petición:', error);
    });
