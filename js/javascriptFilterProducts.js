// Menu configuration
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('#navbar-id');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-menu');
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('navbar-active');
}

// Filter Products XX

let documentFragment = document.createDocumentFragment();

// Point out elements of interest
const genderSelect = document.getElementById('gender');
const brandSelect = document.getElementById('brand');

// Add event listeners to detect changes
genderSelect.addEventListener('change', updateImages);
brandSelect.addEventListener('change', updateImages);

// Get the div element to display the images
const imageContainer = document.getElementById('div_search_result');


var imagenes = [

    { genero: ['mujer', 'hombre', 'unisex'], marca: 'nike', modelo: 'deportivo', talla: ['38', '39', '40'], color: ['blanco', ' negro', ' azul'], tienda: 'Plaza Venezuela', 
    model: 'A55723J', url: 'image_searchs/1.png' },

    { genero: 'mujer', marca: 'nike', modelo: 'deportivo 2', talla: ['38', '40'], color: ['blanco', ' negro', ' azul'], tienda: 'Plaza Venezuela',
    model: 'A25637J', url: 'image_searchs/2.png' },

    { genero: 'unisex', marca: 'nike', modelo: 'casual', talla: ['38', '39', '42'], color: ['blanco', ' negro', ' azul'], tienda: 'Plaza Venezuela',
    model: 'E23483J', url: 'image_searchs/3.png' },

    { genero: 'hombre', marca: 'nike', modelo: 'casual', talla: ['38', '39', '42'], color: ['blanco', ' negro', ' azul'], tienda: 'Plaza Venezuela',
    model: 'E23483J', url: 'image_searchs/4.png' },

    { genero: 'nino', marca: 'nike', modelo: 'casual', talla: ['38', '39', '42'], color: ['blanco', ' negro', ' azul'], tienda: 'Plaza Venezuela',
    model: 'E23483J', url: 'image_searchs/3.png' },

  ];

function updateImages() {

    // Get the selected values
    const selectedGender = genderSelect.value;  // Contiene el valor selecionado
    const selectedBrand = brandSelect.value;    // Contiene el valor selecionado

    const imagenesCoincidentes = imagenes.filter(imagen => 
        imagen.genero === selectedGender && 
        imagen.marca === selectedBrand
    );

    // Segunda opción:
    // const imagenesCoincidentes = imagenes.filter(imagen => {
    //     // Verifica si el género coincide
    //     if (Array.isArray(imagen.marca)) {
    //         if (imagen.marca.includes(selectedBrand)) {
    //             return true;
    //         }
    //     } else {
    //         if (imagen.marca === selectedBrand) {
    //             return true;
    //         }
    //     }
    //     return false;
    // });

    // Creating all the display filter show
    imagenesCoincidentes.forEach(imagen => {

    const divProduct = document.createElement('div');
    divProduct.classList.add('div_product_image');

    const imgProduct = document.createElement('img');
    imgProduct.classList.add('imgFilter');
    imgProduct.src = imagen.url;
    divProduct.appendChild(imgProduct);

    const divDetails = document.createElement('div');
    divDetails.classList.add('div_more_details_product');
    divProduct.appendChild(divDetails);

    const h2Caracteristicas = document.createElement('h2');
    h2Caracteristicas.classList.add('h2_filter');
    h2Caracteristicas.textContent = 'Características';
    divDetails.appendChild(h2Caracteristicas);

    const pDetails = document.createElement('p');
    pDetails.classList.add('p_filter');
    let pContent = '';
    pContent += `                      
                Modelo: ${imagen.model}<br>
                Talla: ${imagen.talla}<br>
                Color: ${imagen.color}<br>
                Tienda: ${imagen.tienda}
                `
    pDetails.innerHTML = pContent;
    divDetails.appendChild(pDetails);

    documentFragment.appendChild(divProduct);

    // imageContainer.appendChild(divProduct);
    });

    imageContainer.innerHTML = ''; // Vaciar el contenido del div

    imageContainer.appendChild(documentFragment); // Agregar documento fragmentado al DOM principal

}

