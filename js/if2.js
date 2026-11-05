// 1 - Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д)
// let numm = prompt("Введите число от 0-9");
// if(numm){
//     a = parseInt(numm);
//     if (!isNaN(a) && a>=0 && a<=9){
//         switch(a){
//             case 0:
//                 alert(")");
//                 break;
//             case 1:
//                 alert("!");
//                 break;
//             case 2:
//                 alert("@");
//                 break;
//             case 3:
//                 alert("#");
//                 break;
//             case 4:
//                 alert("$");
//                 break;
//             case 5:
//                 alert("%");
//                 break;
//             case 6:
//                 alert("^");
//                 break;
//             case 7:
//                 alert("&");
//                 break;
//             case 8:
//                 alert("*");
//                 break;
//             case 9:
//                 alert("(")
//                 break
//         }
//     }
//     else if (isNaN(a)){
//         alert("Вы ввели не число");
//     }
//     else{
//         alert("Вы ввели некорректное число");
//     }

// }
// else{
//     alert("Вы ничего не ввели");
// }

// 2 - Создать калькулятор для 4х математических операций (+,-,*,). Пользователь вводит два числа и знак операции, навыходе получаем результат ввиде, например: 5*2=10. На нольделить нельзя
// let num1 = prompt("Введите первое число");
// let num2 = prompt("Введите второе число");
// let znak = prompt("Введите знак операции");
// let num11, num22, result;
// if(num1 && num2 && znak){
//     num11 = parseFloat(num1);
//     num22 = parseFloat(num2);
//     if(!isNaN(num11) && !isNaN(num22)){
//         switch(znak){
//             case "+":
//                 result = num11 + num22;
//                 break;
//             case "-":
//                 result = num11 - num22;
//                 break;
//             case "*":
//                 result = num11 * num22;
//                 break;
//             case "/":
//                 if (num22!=0){
//                     result = num11 / num22;
//                 }
//                 else{
//                     alert("На нуль делить нельзя")
//                 }
//         }
//         if(result!=undefined){
//         alert(result)
//         }
//     }
//     else if(isNaN(num11) || isNan(num22)){
//         alert("Вы ввели не числа");
//     }
// }
// else{
//     alert("Вы ничего не ввели");
// }

// 3 - Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100 (кратен означает, что делится на это число без остатка, то есть остаток равен 0)
// let year = prompt("Введите год на проверку високосности");
// if (year){
//     let yearN = parseInt(year);
//     if (!isNaN(yearN) && yearN>=0){
//         if ((yearN%400==0) || (yearN%4==0 && yearN%100!=0)){
//             alert("Год високосной")
//         }
//         else{
//             alert("Год обычный")
//         }
//     }
//     else if (yearN<0){
//         alert("Вы ввели некорректный год(отрицательный)")
//     }
//     else{
//         alert("Вы ввели не год")
//     }
// }
// else{
//     alert("Вы ничего не ввели");
// }

// 4 - Задать пользователю 3 вопроса(тема произвольная), в каждом вопросе по 3 варианта ответа(ответ принимается ввиде чисел 1,2,3). За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
let first = prompt("Введите правильный ответ\nКакая тригонометрическая функция является обратной sin?\n1 - sec\n2 - arcsin\n3 - (-sin)");
let second = prompt("Введите правильный ответ\nКакая тригонометрическая функция является отношение sin и cos\n1 - tg\n2 - ctg\n3 - cosec");
let third = prompt("Введите правильный ответ\nКакая тригонометрическая функция является отношение cos и sin\n1 - ctg\n2 - tg\n3 - arccos");
let firstN, secondN, thirdN; result = 0
if (first && second && third){
    firstN = parseInt(first);
    secondN = parseInt(second);
    thirdN = parseInt(third);
    if(!isNaN(firstN) && !isNaN(secondN) && !isNaN(thirdN) && firstN>=1 && firstN<=3 && secondN>=1 && second<=3 && thirdN>=1 && third<=3){
        switch(firstN){
            case 1:
            case 2:
                result += 2;
            case 3:
        }

        switch(secondN){
            case 1:
                result += 2;
            case 2:
            case 3:
        }
        switch(thirdN){
            case 1:
                result += 2;
            case 2:
            case 3:
        }
        alert("За каждый ответ давалось два балла. Ваш балл: " + result)
    }
    else{
        alert("Вы ввели некорректное выражение:");
    }
}
else{
    alert("Вы ничего не ввели");
}

// 5 - Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом. Числовой палиндром — это натуральное число, которое читается слева направо и справа налево одинаково (47574)
let num = prompt("Введите пятиразрядное число:"), numN
if (num){
    numN = parseInt(num)
    if (!isNaN(numN) && (numN/10000)>=1 && (numN/10000)<10){
        if( (Math.floor(numN/10000)) == (numN%10) && (Math.floor(numN/1000%10)) == (Math.floor(numN%100/10))){
            alert("Число является палиндромом")
        }
        else{
            alert("Число не является палиндромом")
        }
    }
    else if (isNaN(numN)){
        alert("Вы ввели не число")
    }
    
    else{
        alert("Вы ввели некорректное число")
    }
}
else{
    alert("Вы ничего не ввели")
}


