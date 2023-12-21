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
const sizeSelect = document.getElementById('size');
const colorSelect = document.getElementById('color');

// Add event listeners to detect changes and fire updateImages function
genderSelect.addEventListener('change', updateImages);
brandSelect.addEventListener('change', updateImages);
sizeSelect.addEventListener('change', updateImages);
colorSelect.addEventListener('change', updateImages);


// Arrays List Images

// Array shoes for man
const shoesMan = [
    
    {
        marca: ['nike', 'adidas', 'newBalance', 'timberland'], talla: ['37', '39', '40'], color: ['blanco', 'negro', 'azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/1.png'
    },

    {
        talla: ['38', '39', '40'], color: ['blanco', 'negro', 'azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/2.png'
    },

    {
        marca: ['nike'], talla: ['38', '39', '40'], color: ['blanco', 'negro', 'azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/3.png'
    },

    {
        marca: ['nike'], talla: ['38', '39', '40'], color: ['blanco', 'negro', 'azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/9.png'
    },

    {
        marca: ['nike'], talla: ['38', '39'], color: ['blanco', 'negro', 'azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/9.png'
    },

    {
        marca: ['nike'], talla: ['38', '39'], color: ['blanco', 'negro', 'azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/9.png'
    },

]

// Array shoes for women
const shoesWoman = [
    
    {
        marca: ['nike', 'adidas', 'newBalance', 'timberland'], talla: ['35', '36', '37', '38'], color: ['blanco', 'negro', 'azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/4.png'
    },

    {
        marca: ['nike', 'adidas', 'newBalance', 'timberland'], talla: ['35', '39', '40'], color: ['blanco', 'negro', 'azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/5.png'
    },

    {
        marca: ['x'], talla: ['38', '39', '40'], color: ['blanco', 'negro', 'azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/6.png'
    },

    {
        marca:  ['nike', 'adidas'], talla: ['38', '36', '40'], color: ['blanco', 'negro', 'azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/7.png'
    },

    {
        marca: ['x'], talla: ['38', '39', '40'], color: ['blanco', 'negro', 'azul'], tienda: 'Plaza Venezuela', 
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

    if (genderSelect.value !== '' && brandSelect.value === '' && sizeSelect.value === '' && colorSelect.value === ''){

        if (genderSelect.value === 'hombre') {

            takeAndGenerateImg(shoesMan);

        } else if (genderSelect.value === 'mujer'){
            
            takeAndGenerateImg(shoesWoman);

        } else if (genderSelect.value === 'todo' || genderSelect.value === 'unisex'){

            takeAndGenerateImg(todoShoes);

        } else if (genderSelect.value === 'nino' || genderSelect.value === 'nina'){

            takeAndGenerateImg(childrensShoes);

        }

    // Bulding the Nike part
    } else if (genderSelect.value !== '' && brandSelect.value === 'nike' && sizeSelect.value === '' && colorSelect.value === ''){ // Si gender es diferente a vacio y nike está pickeado entro abajo

        if (genderSelect.value === 'hombre' && brandSelect.value === 'nike') { // Si es hombre + nike
            
            const hombreNike = shoesMan.filter(item => { // Declaro array constante, apunto al array que usaré, filtraré y guardaré en item
                if (Array.isArray(item.marca)) { // Verifica si marca es un array anidado y retorna un booleano
                    if (item.marca.includes(brandSelect.value)){ // Verifica si en el array marca, está incluido el brandselect.value o no
                        return true; // Si es true mostrará si es false no lo hará
                    }
                }
            });

            takeAndGenerateImg(hombreNike); // Llamamos a la función y le pasamos el parámetro que contiene los que coinciden


        } else if (genderSelect.value === 'mujer' && brandSelect.value === 'nike'){

            const mujerNike = shoesWoman.filter(item => {
                if (Array.isArray(item.marca)) {
                    if (item.marca.includes(brandSelect.value)){
                        return true;
                    }
                }
            });

            takeAndGenerateImg(mujerNike);

        } else if (genderSelect.value === 'nino' && brandSelect.value === 'nike' || genderSelect.value === 'nina' && brandSelect.value === 'nike'){

            takeAndGenerateImg(childrensShoes);

        } else if (genderSelect.value === 'unisex' && brandSelect.value === 'nike' || genderSelect.value === 'todo' && brandSelect.value === 'nike'){

            const todoCatalogo = todoShoes.filter(item => {
                if (Array.isArray(item.marca)){
                    if (item.marca.includes(brandSelect.value)){
                        return true;
                    }
                }
            });

            takeAndGenerateImg(todoCatalogo);

        }
    // Bulding the model/size part. Example.
    } else if (genderSelect.value !== '' && brandSelect.value === 'nike' && sizeSelect.value !== '' && colorSelect.value === ''){

        if (genderSelect.value === 'hombre' && brandSelect.value === 'nike' && sizeSelect.value !== '') {// Aquí voy a organizar una busqueda que filtre por marca + talla.

            // Let's do our magic here
            const sizeLooking = shoesMan.filter(item => {
                if (Array.isArray(item.marca)){
                    if (item.marca.includes(brandSelect.value) && item.talla.includes(sizeSelect.value)){
                        return true;
                    }
                }
            });
            console.log(sizeLooking)
            takeAndGenerateImg(sizeLooking);
        }
    } else if (genderSelect.value !== '' && brandSelect.value === 'nike' && sizeSelect.value !== '' && colorSelect.value !== ''){

        if (genderSelect.value === 'mujer') { 
            const testSearch = shoesWoman.filter(item => { // Todo este array constante lo hice por prueba para ver si puedo filter por 3 opciones, y verifiqué, estoy en lo cierto, se puede hacer así que ya terminé la prueba.
                if (Array.isArray(item.marca && item.talla && item.color)){
                    if (item.marca.includes(brandSelect.value) && item.talla.includes(sizeSelect.value) && item.color.includes(colorSelect.value)){
                        return true;
                    }
                } else {
                    console.log('Alguno de los array verificados, no contiene un array anidado')
                }
            });

            takeAndGenerateImg(testSearch);

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

