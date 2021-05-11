

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const filtrar = () => {
    // console.log(formulario.value);
    resultado.innerHTML = '';


    const texto = formulario.value.toLowerCase();

    for(let producto of data){
        let name = producto.name.toLowerCase();
        if(name.indexOf(texto) !== -1){
            resultado.innerHTML +=`
                <div>${producto.name}</div>
            `;
        }
    }
    if(resultado.innerHTML === '') {
        resultado.innerHTML +=`
                <div>producto no encontrado...</div>
            `;
    }
}

boton.addEventListener('click', filtrar);