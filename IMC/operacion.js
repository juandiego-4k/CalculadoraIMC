const calcular = document.getElementById('calcular');

function imc () {
    const nombre = document.getElementById('nombre').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nombre !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let clasificacion = '';

        if (valorIMC < 18.5){
            clasificacion = 'esta bajo de peso';
        }else if (valorIMC < 25) {
            clasificacion = 'tienes el peso ideal. felicitaciones.';
        }else if (valorIMC < 30){
            clasificacion = 'un poco encima del peso';
        }else if (valorIMC < 35){
            clasificacion = 'con obesidad grado 1';
        }else if (valorIMC < 40){
            clasificacion = 'con obesidad grado 2';
        }else {
            clasificacion = 'con obesidad grado 3. Cuidado!!';
        }

        resultado.textContent = `${nombre} su IMC es ${valorIMC} condicion: ${clasificacion}`;
        
    }else {
        resultado.textContent = 'llena todos los campos';
    }

}

calcular.addEventListener('click', imc);