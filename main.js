/* 
Calculadora de TNA de billeteras de virtuales


*/

function calculador(a, b , c){
    let rendimiento = b/100/365
    let vueltas = c+1
    
    for(let i = 1; i < vueltas; i ++){
        a =  a+a*rendimiento
        if (i == c){
            return a
        }
    }
    
}


alert("Bienvenido/a a la calculadora de rendimiento de TNA de billeteras virtuales ")
let dinero = Number(prompt("Ingrese el monto que va a invertir:"))
let tna = Number(prompt("Igrese el porcentage de TNA de su billetera virtual:"))
let dias = Number(prompt("Ingrese la cantidad de dias que desea calcular"))





let rendimiento2 = calculador(dinero, tna, dias)
alert("El rendimiento de su dinero fue "+rendimiento2.toFixed(1))
