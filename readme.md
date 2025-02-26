# Tarjetas Dinámicas 🚀

Este proyecto es una práctica de consumo de APIs usando **JavaScript** y **Bootstrap**. Se obtiene información de la API de **Rick and Morty** y se generan tarjetas dinámicamente con los personajes.

## 📋 Características

✔️ Consumo de la API de Rick and Morty  
✔️ Generación dinámica de tarjetas con Bootstrap  
✔️ Uso de **fetch()** y manejo de promesas  
✔️ Indicador de carga mientras se obtienen los datos

## 🚀 Tecnologías Utilizadas

- ✅ **HTML5**
- ✅ **CSS3 (Bootstrap 5.3)**
- ✅ **JavaScript (ES6)**
- ✅ **API Fetch**

## 📦 Instalación y Uso

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/HenryMJL/Tarjetas-Dinamicas-Fetch-Promesas.git
   ```

1. Abrir el archivo index.html en el navegador
1. ¡Listo! Verás los personajes de Rick and Morty en tarjetas dinámicas.

**📜 Código Principal (practica.js)**

```javascript
const url = "https://rickandmortyapi.com/api/character";
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});
const fetchData = async () => {
  try {
    loadingData(true);
    const res = await fetch(url);
    const data = await res.json();
    pintarCard(data);
  } catch (error) {
    console.log(error);
  } finally {
    loadingData(false);
  }
};
const pintarCard = (data) => {
  const cards = document.querySelector("#card-dinamicas");
  const templateCard = document.querySelector("#template-card");
  const fragment = document.createDocumentFragment();
  data.results.forEach((element) => {
    console.log(element.image);
    const clone = templateCard.content.cloneNode(true);
    clone.querySelector("h5").textContent = element.name;
    clone.querySelector("p.text-secondary").textContent = element.species;
    clone.querySelector("img.card-img-top").setAttribute("src", element.image);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};
const loadingData = (estado) => {
  const loading = document.querySelector("#sectionLoading");
  if (estado) {
    loading.classList.remove("d-none");
  } else {
    loading.classList.add("d-none");
  }
};
```

📌 Estructura del Proyecto

```
📂 Proyecto
│── 📄 index.html
│── 📄 practica.js
│── 📄 README.md
```

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

```
MIT License

© [2025] Henry Jimenez

Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia
 de este software y los archivos de documentación asociados (el "Software"), para
 utilizar el Software sin restricciones, incluyendo sin limitación los derechos
 de uso, copia, modificación, fusión, publicación, distribución, sublicencia y/o
 venta de copias del Software, y para permitir a las personas a quienes se les
 proporcione el Software a hacer lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las
 copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O
 IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIALIZACIÓN, IDONEIDAD
 PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS AUTORES O
 TITULARES DEL COPYRIGHT SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑO U OTRA
 RESPONSABILIDAD, YA SEA EN UNA ACCIÓN CONTRACTUAL, AGRAVIO O CUALQUIER OTRA FORMA,
 DERIVADA DE O EN CONEXIÓN CON EL SOFTWARE O EL USO U OTRO TIPO DE ACCIONES EN EL
 SOFTWARE.
```


📩 Contacto
📌 LinkedIn: www.linkedin.com/in/henry-jimenez-a9699034a

¡Diviértete aprendiendo! 🚀
