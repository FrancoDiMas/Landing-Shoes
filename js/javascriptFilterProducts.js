// Menu configuration
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('#navbar-id');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-menu');
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('navbar-active');
}

// Filters configurations
// document.getElementById("form_filter").addEventListener("submit", function(event) {
//     event.preventDefault(); // Evita que el formulario se envíe
  
//     var gender = document.getElementById("gender").value;
//     var brand = document.getElementById("brand").value;
//     var model = document.getElementById("model").value;
//     var talla = document.getElementById("talla").value; // tomar en cuenta esta para corregir, es un input
//     var color = document.getElementById("color").value;
//     var store = document.getElementById("store").value;
  
//     // Aquí puedes agregar tu lógica para buscar los modelos de zapatos que coincidan con las opciones seleccionadas
//     // Puedes hacer una petición a una API, buscar en una base de datos, etc.
  
//     // Ejemplo: Mostrar los resultados en la página
//     var resultsDiv = document.getElementById("div_search_result");
//     resultsDiv.innerHTML = "<h2>Resultados de búsqueda</h2>" +
//                            "<p>Género: " + gender + "</p>" +
//                            "<p>Marca: " + brand + "</p>" +
//                            "<p>Modelo: " + model + "</p>" +
//                            "<p>Talla: " + talla + "</p>" +
//                            "<p>Color: " + color + "</p>" +
//                            "<p>Tienda: " + store + "</p>";
                           
//   });


// Get the select elements
const genderSelect = document.getElementById('gender');
const brandSelect = document.getElementById('brand');

// Get the div element to display the images
const imageContainer = document.getElementById('div_search_result');

// Add event listeners to detect changes
genderSelect.addEventListener('change', updateImages);
brandSelect.addEventListener('change', updateImages);

// Function to update the displayed images
function updateImages() {
    // Get the selected values
    const selectedGender = genderSelect.value;
    const selectedBrand = brandSelect.value;
    // Generate the image URL based on the selected values
    const imageUrl = `../image_searchs/${selectedGender}_${selectedBrand}.png`;

    // Display the image
    const imageElement = document.getElementById('image');
    imageElement.src = imageUrl;

    // Clear the image container
    div_search_result.innerHTML = '';

    // Append the image to the container
    div_search_result.appendChild(imageElement);
}


