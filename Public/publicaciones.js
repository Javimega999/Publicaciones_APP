async function getData() {
    const response = await fetch("/publicaciones");
    const datos = await response.json();
    console.log(datos);

    for (let i = 0; i < datos.length; i++) {
        const root = document.createElement("div");
        root.classList.add("publicacion-card");

        const imagen = document.createElement("img");
        imagen.classList.add("publicacion-imagen");
        imagen.src = datos[i].base64;

        const usuario = document.createElement("div");
        usuario.classList.add("publicacion-usuario");
        usuario.textContent = "Usuario: " + datos[i].usuario;

        const Descripcion = document.createElement("div");
        Descripcion.classList.add("publicacion-descripcion");
        Descripcion.textContent = "Descripción: " + datos[i].Descripcion;

        const linea = document.createElement("hr");

        root.append(imagen, usuario, Descripcion, linea);

        document.getElementById("publicaciones").append(root);
    }
}

getData();
