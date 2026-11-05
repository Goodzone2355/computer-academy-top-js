// 1 - Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата
// function showS(a,b){
//     if(a && b){
//         return a*b
//     }
//     if(b==0){
//         return a**2
//     }
// }
// let len = prompt("Введите длину прямоугольника");
// let width = prompt("Введите ширину прямоугольника");
// len = parseFloat(len) || 0;
// width = parseFloat(width) || 0;
// alert(showS(len,width))

// 2 - Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей
// function isPerfectNumber(x){
//     s = 0
//     for(i=1; i<x; i++){
//         if(x%i==0){
//             s+=i
//         }
//     }
//     if(s==x){
//         return true
//     }else{
//         return false
//     }
// }
// num = prompt("Введите целое число");
// num = parseInt(num) || 1;
// if(isPerfectNumber(num)){
//     alert(`Число ${num} - совершенное`)
// }else{
//     alert(`Число ${num} - несовершенное`)
// }

// 3 - Написать функцию возведения числа в степень.
// function showPower(x,n){
//     if(n==1){
//         return x
//     }else{
//         return x*showPower(x,n-1)
//     }
// }
// let num = prompt("Введите число") || 1;
// let power = prompt("Введите степень") || 1;
// num = parseInt(num); power = parseInt(power)
// alert(`Число ${num} в степени ${power} равно ${showPower(num,power)}`)

// 4 - Написать функцию поиска наибольшего общего делителя
function showNOD(a,b){
    if(b==0){
        return a
    }
    return showNOD(b, a%b)
}
let num1 = prompt("Введите первое число");
let num2 = prompt("Введите второе число");
alert(`${num1} и ${num2} имеют наибольший общий делитель ${showNOD(num1,num2)}`)