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
const storeSelect = document.getElementById('store');

// Add event listeners to detect changes and fire updateImages function
genderSelect.addEventListener('change', updateImages);
brandSelect.addEventListener('change', updateImages);
sizeSelect.addEventListener('change', updateImages);
// colorSelect.addEventListener('change', updateImages);
// storeSelect.addEventListener('change', updateImages);


// Arrays List Images

// Array shoes for man
const shoesMan = [
    
    {
        marca: ['nike', 'newBalance', 'timberland'], talla: ['37', '39', '40'], color: ['blanco', 'negro', 'azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/1.png'
    },

    {
        marca: ['x', 'timberland'], talla: ['38', '39', '40'], color: ['blanco', 'negro', 'azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/2.png'
    },

    {
        marca: ['timberland'], talla: ['38', '39', '41'], color: ['blanco', 'negro', 'azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/3.png'
    },

    {
        marca: ['timberland', 'newBalance'], talla: ['38', '39', '41'], color: ['blanco', 'negro', 'azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/9.png'
    },

    {
        marca: ['x'], talla: ['38', '39'], color: ['blanco', 'negro', 'azul'], tienda: 'Plaza Venezuela', 
        model: 'A55723J', url: 'image_searchs/9.png'
    },

    {
        marca: ['nike', 'adidas'], talla: ['38', '39'], color: ['blanco', 'negro', 'azul'], tienda: 'Plaza Venezuela', 
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
        marca:  ['nike', 'adidas'], talla: ['36', '38', '40'], color: ['blanco', 'negro', 'azul'], tienda: 'Plaza Venezuela', 
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

    // Operation
    if (genderSelect.value === 'hombre' && brandSelect.value === '' && sizeSelect.value === '' && colorSelect.value === '' && storeSelect.value === ''){
        takeAndGenerateImg(shoesMan);

    } else if (genderSelect.value === 'mujer' && brandSelect.value === '' && sizeSelect.value === '' && colorSelect.value === '' && storeSelect.value === ''){
        takeAndGenerateImg(shoesWoman);

    } else if ((genderSelect.value === 'nino' || genderSelect.value === 'nina') && brandSelect.value === '' && sizeSelect.value === '' && colorSelect.value === '' && storeSelect.value === ''){
        takeAndGenerateImg(childrensShoes);

    } else if ((genderSelect.value === 'unisex' || genderSelect.value === 'todo') && brandSelect.value === '' && sizeSelect.value === '' && colorSelect.value === '' && storeSelect.value === ''){
        takeAndGenerateImg(todoShoes);
    
    // ----------------- ** ----------------- //

    } else if (genderSelect.value === 'hombre' && brandSelect.value !== '' && sizeSelect.value === '' && colorSelect.value === '' && storeSelect.value === '') {
        const testSearch = shoesMan.filter(item => { 
            if (Array.isArray(item.marca)){
                if (item.marca.includes(brandSelect.value)){
                    return true;
                }
            } else {
                console.log('Alguno de los array verificados, no contiene un array anidado');
            }
        });
        takeAndGenerateImg(testSearch);

    } else if (genderSelect.value === 'hombre' && brandSelect.value !== '' && sizeSelect.value !== '' && colorSelect.value === '' && storeSelect.value === '') {
        const testSearch = shoesMan.filter(item => { 
            if (Array.isArray(item.marca && item.talla)){
                if (item.marca.includes(brandSelect.value) && item.talla.includes(sizeSelect.value)){
                    return true;
                }
            } else {
                console.log('Alguno de los array verificados, no contiene un array anidado');
            }
        });
        takeAndGenerateImg(testSearch);
    } else if (genderSelect.value === 'mujer' && brandSelect.value !== '' && sizeSelect.value === '' && colorSelect.value === '' && storeSelect.value === '') {
        const testSearch = shoesWoman.filter(item => { 
            if (Array.isArray(item.marca)){
                if (item.marca.includes(brandSelect.value)){
                    return true;
                }
            } else {
                console.log('Alguno de los array verificados, no contiene un array anidado');
            }
        });
        takeAndGenerateImg(testSearch);
        

    } else if (genderSelect.value === 'mujer' && brandSelect.value !== '' && sizeSelect.value !== '' && colorSelect.value === '' && storeSelect.value === '') {
        const testSearch = shoesWoman.filter(item => { 
            if (Array.isArray(item.marca && item.talla)){
                if (item.marca.includes(brandSelect.value) && item.talla.includes(sizeSelect.value)){
                    return true;
                }
            } else {
                console.log('Alguno de los array verificados, no contiene un array anidado');
            }
        });
        takeAndGenerateImg(testSearch);
    } else if ((genderSelect.value === 'unisex' || genderSelect.value === 'todo') && brandSelect.value !== '' && sizeSelect.value === '' && colorSelect.value === '' && storeSelect.value === '') {
        const testSearch = todoShoes.filter(item => { 
            if (Array.isArray(item.marca)){
                if (item.marca.includes(brandSelect.value)){
                    return true;
                }
            } else {
                console.log('Alguno de los array verificados, no contiene un array anidado');
            }
        });
        takeAndGenerateImg(testSearch);
        

    } else if ((genderSelect.value === 'unisex' || genderSelect.value === 'todo') && brandSelect.value !== '' && sizeSelect.value !== '' && colorSelect.value === '' && storeSelect.value === '') {
        const testSearch = todoShoes.filter(item => { 
            if (Array.isArray(item.marca && item.talla)){
                if (item.marca.includes(brandSelect.value) && item.talla.includes(sizeSelect.value)){
                    return true;
                }
            } else {
                console.log('Alguno de los array verificados, no contiene un array anidado');
            }
        });
        takeAndGenerateImg(testSearch);
    } else {
        console.log('Opción no valida!')
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

