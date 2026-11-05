// while
// 1 - сумма чисел, только +, если - то остановка
// let num = prompt("Введите число:");
// num = parseInt(num);
// let s = 0;
// while(num>0){
//     num = parseInt(num);
//     s = isNaN(num) || num<=0  ?s :s+num
//     num = prompt("Введите число:");
// }
// alert(`s=${s}`)

// 2 - посчитать количество цифр в числе
// let num = prompt("Введите число");
// num = parseInt(num);
// s = 0;
// if(!isNaN(num)){
// while(num>0){
//     num = Math.floor(num/10);
//     s++;
// }
// }
// else{
//     alert("Вы ввели не число")
// }
// alert("Сумма цифр: " + s)

// 3 - вывести все цифры от 1<=x<=10 x!={6}
// let i = 0;
// do{
//     ++i
//     if(i==6){
//         continue;
//     }
//     console.log(i);
// }while(i<10)

// 4 - игра "угадай число"
// alert("Загадайте число!")
let min = 1, max = 100, number, x, otvet=true;
do{
    number = Math.floor((min+max)/2);
    console.log(number);
    x = prompt(`Введите 1: ${min} - ${number-1}\nВведите 2: ${number}\nВведите 3: ${number+1} - ${max}`);
    x = parseInt(x)
    switch(x){
        case 1: alert(`${min} - ${number}`);
                max = number;
                break;
        case 2: alert(`${number}`); otvet=false;  break;
        case 3: alert(`${number} - ${max}`); 
                min = number
                break;
        default: otvet=false; break;
    }
}while(otvet)


