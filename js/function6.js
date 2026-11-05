// 1 - Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
// showBiggest = function(a, b){
//     if (a>b){
//         return 1
//     }else if(a<b){
//         return -1
//     }else{
//         return 0
//     }
// }
// let num1 = prompt("Введите первое число");
// let num2 = prompt("Введите второе число");
// num1 = parseInt(num1) || 1;
// num2 = parseInt(num2) || 1;
// alert(showBiggest(num1,num2))

// 2 - Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
// showNum = function(a,b,c){
//     return a+b+c
// }
// let num1 = prompt("Введите первое число");
// let num2 = prompt("Введите второе число");
// let num3 = prompt("Введите третье число");
// alert("Полученное число: " + showNum(num1,num2,num3))

// 3 - Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах
// showSeconds = function(a,b,c){
//     a *=3600;
//     b *=60;
//     return a+b+c
// }
// let hours = prompt("Введите часы");
// let minutes = prompt("Введите минуты");
// let seconds = prompt("Введите секунды");
// hours = parseInt(hours) || 1;
// minutes = parseInt(minutes) || 1;
// seconds = parseInt(seconds) || 1;
// alert("Время в секундах: " + showSeconds(hours,minutes,seconds))

// 4 - Вывести таблицу умножения для числа, которое ввел пользователь. Функции передается число (например 2 ) и обратно возвращается строка ввиде ‘1*2=2’, и т д все строки умножения на число 2
// showMultiplicationTable = function(a,i){
//     return alert(`${a}*${i}=${a*i}`)
// }
// let num = prompt("Введите число");
// num = parseInt(num) || 1;
// for(let i=1; i<=10; i++){
//     showMultiplicationTable(num, i)
// }

