
const btn = document.querySelector('#calcular');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
let resultado = document.querySelector('.resultado')

btn.addEventListener('click', operation);   //si encierro mis etiquetas en un form
                                            //tendré un problema pues form toma el último button como submit
                                            //y esto no me permitirá ver el resultado, por lo tanto debo
                                            //manipular el argumento que me envía addEventListener por default
                                            //el cual lo llamamos event
function operation(event){
    console.log({event});                   //acá voy a encontrar un método que se llama preventDefault
                                            //que si lo ejecuto me permitirá evitar la acción default 
    event.preventDefault();

    resultado.innerHTML = Number(input1.value) + Number(input2.value);
} 










