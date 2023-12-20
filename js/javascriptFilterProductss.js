// Menu configuration
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('#navbar-id');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-menu');
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('navbar-active');
}

// Filter Products XX

// Fragment Document
let documentFragment = document.createDocumentFragment();

// Get the div element to display the images
const imageContainer = document.getElementById('div_search_result');

// Point out elements of interest
const genderSelect = document.getElementById('gender');
const brandSelect = document.getElementById('brand');

// Add event listeners to detect changes and fire updateImages function
genderSelect.addEventListener('change', updateImages);
brandSelect.addEventListener('change', updateImages);

// Arrays List Images

// Array shoes for man
const shoesMan = [
    
    {
        marca: ['nike', 'adidas', 'newBalance', 'timberland'], talla: ['38', '39', '40'], color: ['blanco', ' negro', ' azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/1.png'
    },

    {
        talla: ['38', '39', '40'], color: ['blanco', ' negro', ' azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/2.png'
    },

    {
        talla: ['38', '39', '40'], color: ['blanco', ' negro', ' azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/3.png'
    },

]

// Array shoes for women
const shoesWoman = [
    
    {
        marca: ['nike', 'adidas', 'newBalance', 'timberland'], talla: ['38', '39', '40'], color: ['blanco', ' negro', ' azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/4.png'
    },

    {
        talla: ['38', '39', '40'], color: ['blanco', ' negro', ' azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/5.png'
    },

    {
        talla: ['38', '39', '40'], color: ['blanco', ' negro', ' azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/6.png'
    },

    {
        talla: ['38', '39', '40'], color: ['blanco', ' negro', ' azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/7.png'
    },

    {
        talla: ['38', '39', '40'], color: ['blanco', ' negro', ' azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/8.png'
    },

]

// Array for childrens shoes
const childrensShoes = [
    
    {
        talla: 'Agotado', color: 'Agotado', tienda: 'Agotado', 
        model: 'Agotado', url: 'image_searchs/out-stock.png'
    }

]

// Concat some arrays
const todoShoes = shoesMan.concat(shoesWoman);

// Functions
function updateImages(){

    // Get the selected values
    const selectedGender = genderSelect.value; 

    
    // If conditions to generate images

    if (genderSelect.value !== '' && brandSelect.value === ''){

        if (genderSelect.value === 'hombre') {

            takeAndGenerateImg(shoesMan);

        } else if (genderSelect.value === 'mujer'){
            
            takeAndGenerateImg(shoesWoman);

        } else if (genderSelect.value === 'todo' || genderSelect.value === 'unisex'){

            takeAndGenerateImg(todoShoes);

        } else if (genderSelect.value === 'nino' || genderSelect.value === 'nina'){

            takeAndGenerateImg(childrensShoes);

        }

    } else if (genderSelect.value !== '' && brandSelect.value === 'nike'){ // Si gender es diferente a vacio y nike está pickeado entro abajo

        if (genderSelect.value === 'hombre' && brandSelect.value === 'nike') { // Si es hombre + nike
            
            const hombreNike = shoesMan.filter(item => { // Declaro array constante, entro al array hombre, filtraré y guardaré en item
                if (Array.isArray(item.marca)) { // Verifica si marca es un array anidado y retorna un booleano
                    if (item.marca.includes(brandSelect.value)){ // Verifica si en el array marca, está incluido el brandselect.value o no
                        return true; // Si es true mostrará si es false no lo hará
                    }
                }
            });

            takeAndGenerateImg(hombreNike); // Llamamos a la función y le pasamos el parámetro que contiene los que coinciden


        } else if (genderSelect.value === 'mujer' && brandSelect.value === 'nike'){

            console.log('Waiting to be programmed');

        }

    }
}

// Function to generate the div that contain all the catalogue of filter images
function takeAndGenerateImg(arrayToGenerate){

    arrayToGenerate.forEach(imagen => {

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
    })

    imageContainer.innerHTML = ''; // Vaciar el contenido del div

    imageContainer.appendChild(documentFragment); // Agregar documento fragmentado al DOM principal

}

