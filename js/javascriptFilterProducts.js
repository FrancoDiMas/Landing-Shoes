// Menu configuration
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('#navbar-id');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-menu');
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('navbar-active');
}

// Filters configurations
document.getElementById("form_filter").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
  
    var gender = document.getElementById("gender").value;
    var brand = document.getElementById("brand").value;
    var model = document.getElementById("model").value;
    var talla = document.getElementById("talla").value; // tomar en cuenta esta para corregir, es un input
    var color = document.getElementById("color").value;
    var store = document.getElementById("store").value;
  
    // Aquí puedes agregar tu lógica para buscar los modelos de zapatos que coincidan con las opciones seleccionadas
    // Puedes hacer una petición a una API, buscar en una base de datos, etc.
  
    // Ejemplo: Mostrar los resultados en la página
    var resultsDiv = document.getElementById("search_result");
    resultsDiv.innerHTML = "<h2>Resultados de búsqueda</h2>" +
                           "<p>Género: " + gender + "</p>" +
                           "<p>Marca: " + brand + "</p>" +
                           "<p>Modelo: " + model + "</p>" +
                           "<p>Talla: " + talla + "</p>" +
                           "<p>Color: " + color + "</p>" +
                           "<p>Tienda: " + store + "</p>";
                           
  });