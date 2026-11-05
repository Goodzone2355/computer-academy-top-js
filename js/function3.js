// 1 - мах число, знак чисел
// function getBig(num1, num2, num3){
//     s = 0
//     if(num1>num2 && num1>num3){
//         s = num1
//     }else if(num2>num1 && num2>num3){
//         s = num2
//     }else{
//         s = num3
//     }
//     return s
// }

// function isSign(num1, num2, num3){
//     if((num1>0 && num2>0 && num3>0) || (num1<0 && num2<0 && num3<0)){
//         return true
//     }else{
//         return false
//     }
// }

// function isSign1(num1, num2){
//     if((num1*num2>0)){
//         return true
//     }else{
//         return false
//     }
// }

// num1 = prompt("Введите первое число:");
// num2 = prompt("Введите второе число:");
// num3 = prompt("Введите третье число:")
// num1 = parseInt(num1) || 1;
// num2 = parseInt(num2) || 1;
// num3 = parseInt(num3) || 1;

// alert(getBig(num1, num2, num3));

// if (isSign(num1, num2, num3)){
//     alert("Числа одинакового знака");
// }else{
//     alert("Числа разного знака");
// }

// if (isSign1(num1, num2)){
//     alert("Числа 1 and 2 одинакового знака");
// }else{
//     alert("Числа 1 and 2 разного знака");
// }

// 2 - анонимная функция
// let a = +prompt("Введите a");
// let b = +prompt("Введите b");
// let summa = function(x, y){
//     return x+y;
// }
// alert(summa(a, b));

// 3 - проверка четного числа
let isEven = function(num){
    if(num%2==0){
        return true
    }else{
        return false
    }
}
a = +prompt("Введите число")
if(isEven(a)){
    alert(a+1)
}else{
    alert(a)
}