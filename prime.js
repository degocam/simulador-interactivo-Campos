/*En cuanto a mi proyecto final me gustaría realizar la compra de entradas para el cine */

/*La finalidad de la tarea actual es comprar entradas para un películas */
let cantEntradas = parseInt(prompt('Ingresa la cantidad de entradas que deseas comprar'));

/*Según la cantidad de entradas el precio de c/u va bajando de la sgte forma */
for (let i = 1; i <=5; i++){
    if (cantEntradas <= 2){
        precio = 3490;
    }
    if (cantEntradas <= 4){
        precio = 2490;
    }
    else if (cantEntradas >= 5){
        precio = 1990;
    }
}

/*La función va a multiplicar dos parámetros y entregar el resultado en un alert*/
function precioEntradas (a,b){
    let totalEntradas = a*b;
    alert ('El total de tus entradas es '+"$"+totalEntradas);  
}

/*Estamos llamando a la función y estableciendo que los argumentos de la función que se van
a multiplicar son el precio y la cantidad de entradas*/
precioEntradas(precio,cantEntradas);