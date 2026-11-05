// let i = 10;
// for(let i = 1; i<5; i++){
//     console.log(i);
// }
// console.log(i);
// 1 - вывести N-первых числа
// num = prompt("Введите диапозон");
// num1 = parseInt(num) || 1;
// let s = " ";
// let summ = 0
// for(let i = 1; i<=num1; i++){
//     s = s+" "+i
// }
// alert("Числовая последовательность: " + s)

// 2 - сумму N чисел
// for (let i = 1; i<=num1; i++){
//     summ = summ+i
// }
// alert(summ)

// 3 - Вýвести все числа от 1 до 100, которýе кратнýе указанному полþзователем числу, например 10
// let num = 100
// let s = " "
// for (i=10; i<=num; i+=10){
//     s = s+" "+i
// }
// alert(s)

// 4 - Вýвести каждýй 4-й ÿлемент из указанного полþзователем диапазона. Полþзователþ указýвает минималþное и максималþное значениā диапазона.
// let num1 = prompt("Введите первую границу")
// let num2 = prompt("Введите вторую границу")
// let num11 = parseInt(num1) || 1
// let num22 = parseInt(num2) || 1
// let s = " "
// console.log(num11, num22)
// if (num22>num11){
// for (i=num11; i<=num22; i+=4){
//     alert(i)
// }
// }

// else if (num11==num22){
//     alert("У вас равные границы")
// }

// else{
//     for(i=num11; num22<i; i-=4){
//         alert(i)
//     }
// }

// 5 - Вýвести все делители числа и подсчитатþ их количество
// let num = prompt("Введите число: ");
// let num1 = parseInt(num) || 1;
// let s = " "
// let d = 0
// for (i=1; i<=num1; i++){
//     if(num1%i==0){
//         s = s + " " + i
//         d++
//     } 
// }
// alert("Делители числа: " + s +" Количество:  "+d)

// 6 - *Запроситþ число и проверитþ, простое ли оно или составное.Простое число делитсā без остатка толþко на себā и на единицу.
// let num = prompt("Введите число")
// let num1 = parseInt(num) || 1;
// let s = " "
// let d = 0
// a = 0
// for (i=1; i<=num1; i++){
//     if(num1%i==0){
//         s = s + " " + i
//         d++
//     } 
// }
// if (d==2){
//     alert(`${num1} - это простое число`)
// }

// 7 - число и степень
let num = prompt("Введите число:");
let step = prompt("Введите степень:");
d = 1;
let num1 = parseInt(num) || 0;
let step1 = parseInt(step) || 0;
if(step1==0){
    d=1
}
for(i=1; i<=step1; i++){
    d *= num1
}
alert("Число в степени: " + d)




