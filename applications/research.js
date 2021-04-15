

const formulario = document.querySelector('#formulario');
const results = document.querySelector('#results');


const filtrar = ()=>{

    results.innerHTML = '',

    const texto = formulario.value.toUpperCase();

    for(let respuesta) {
        let nombre = respuesta.nombre.toUpperCase();
        if(nombre.indexOf(texto) !== -1){
            results.innerHTML += `
            <li>${respuesta.nombre}</li>
            `;
        }
    }
    if(resultados.innerHTML === ''){
        resultados.innerHTML += `
        <li>Producto no encontrado...</li>
        `;
}

formulario.addEventListener('keyup', filtrar);

filtrar();