// anonymous
// summa = function(a, b){
//     return a+b
// }
// console.log(summa(2,32));

// arrow
// let add = (a, b)=>a+b
// console.log(add(2,54));

// let getSqrt = a =>a*a
// console.log(getSqrt(5))

// let txt = (a) => console.log(a)
// txt("hi")

let isNull = (a) => {
    if (a==0){
        alert("Это нуль")
    }else{
        alert("Это не нуль")}
    }
x = +prompt("Введите число")
isNull(x)