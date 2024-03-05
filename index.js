// console.log("Quieres ser mi novia?")
// let respuesta = ""

// if (respuesta === "si") {
//     console.log(":)")
// }else if (respuesta === "no") {
//     console.log(":(")
// }else {
//     console.log("Escribe si o no")
// }

// function Suma(a,b){
//     let resultado = a+b
//     return resultado
// }

// function Resta(a,b){
//     let resultado = a-b
//     return resultado
// }

// function Multiplicacion(a,b){
//     let resultado = a*b
//     return resultado
// }

// function Division(a,b){
//     let resultado = a/b
//     return resultado
// }

// console.log(Division(10,2))

// function contraseñaValida(a){
//     if (a === "2Fj(jjbFsuj" || a === "eoZiuabf8g9" ) {
//         return true
//     }else{
//         return false
//     }
// }

// console.log(contraseñaValida("2Fj(jjbFsuj"))

// function calcularImpuestos(edad,ingresos){
//     let porciento = (ingresos*40)/100
//     if (edad >= 18 && ingresos >= 1000) {
//         return ingresos * porciento
//     }else{
//         return 0
//     }
// }

// console.log(calcularImpuestos(19, 1000))

// function bmi(peso,altura){
//     let imc = peso/altura**2
//     console.log(imc)
//     if (imc < 18.5) {
//         return "Bajo peso"
//     }else if (imc >= 18.5 && imc <= 24.9) {
//         return "Normal"
//     }else if (imc >= 25 && imc < 29.9) {
//         return "Sobrepeso"
//     }else if (imc >= 30) {
//         return "obeso"
//     }
// }

// console.log(bmi(55,1.68))

// function fizzbuzz(a){
//     if (a%3 === 0 && a%5 === 0 ) {
//         return "Fizzbuzz"
//     }else if (a%5 === 0) {
//         return "buzz"
//     }else if (a%3 === 0) {
//         return "Fizz"   
//     }else{
//         return a
//     }
// }

// console.log(fizzbuzz(15))

// const numero = (max) => Math.floor(Math.random() * max)
// console.log(numero(100))

// function contarRango(a, b) {
//     nume = []
//     for (let i = a + 1; i < b; i++) {
//         nume.push(i)
//     }
//     tamaño = nume.length
//     return {tamaño, nume}
// }

// console.log(contarRango(1, 7))

// const ocupados = ["Jose","Martha","Eva","Alvaro","Larry"]
// const libres = ["Esteban","Maria","Isabella","Mariana","Luciano"]

// function rotar(list1,list2) {
//     name1 = list1.shift()
//     list2.push(name1)

//     name2 = list2.shift()
//     list1.push(name2)

//     return {list1,list2}
// }

// console.log(rotar(ocupados,libres))

// const inventarioActual = ["Laptop","Teléfono","Tableta"]
// const nuevasAdiciones = ["Laptop","Monitor"]
// function actualizarInventario(list1,list2){
//     return list1.concat(list2)
// }

// console.log(actualizarInventario(inventarioActual,nuevasAdiciones))

// let n1 = 15
// let contador = 1

// while (contador <= n1) {
//     if (n1%contador === 0) {
//         console.log(contador)
//     }
//     contador = contador + 1
// }

// let n1 = 15

// function esDivisor(a) {
//     if (a%2 ==0 || a%3 ==0 || a%5 ==0 || a%7 ==0) {
//         return "El numero es divisible por una de las opciones"
//     }else{
//         return "El numero no es divisible por ninguno de los numeros"
//     }
// }

// console.log(esDivisor(n1))

// let n1 = 45
// let n2 = 15

// function divisoresComunes(a,b) {
//     const divisores = []
//     for (let index = 1; index <= a; index++) {
//         if (a%index === 0 & b%index === 0) {
//             divisores.push(index)
//         }
//     }

//     return divisores
// }

// console.log(divisoresComunes(n1,n2))