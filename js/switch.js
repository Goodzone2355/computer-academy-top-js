// Написать вывод сообщения, работает офис или нет. Пользователь вводит время (в часах) офис работате c 9 утра до 9  вечера 
// let hour = 18
// if (hour>24 || hour<0){
//     console.log("Некорректное время")
// }   
// else{
//     if (hour>21 || hour<8){
//         console.log("Офис не работает")
//     }
//     else{
//         console.log("Офис работает")
//     }
// }

// преобразование строчки в число
// let x = prompt("Введите данные")
// if (x){
//     let y = parseInt(x)
//     if(!isNaN(y)){
//         alert(`${y} - число`)
//     }
//     else{
//         alert(`${x} - не число`)
//     }
// }
// else{
//     alert("Вы ничего не ввели")
// }

// Свитчи. Пользователь ввводит протокол, а выводится определение
// a = prompt("Введите протокол обмена данных");
// switch(a){
//     case "HTTP":
//         alert("HyperText Transfer Protocol");
//         break;
//     case "HTTPS":
//         alert("HyperText Transfer Protocol Secure");
//         break;
//     case "FTP": 
//         alert("File Transfer Protocol");
//         break;
//     default:
//         alert("Пользователь не ввел верный протокол обмена данных")
// }

// На определение типа данных
// let a = 54*2/250
// let x = typeof(a);
// switch(x){
//     case "number":
//         console.log(`${a} - это число`);
//         break;
//     case "string":
//         console.log(`${a} - это строка`);
//         break;
//     case "boolean":
//         console.log(`${a} - это логика`);
//         break;
//     case "undefined":
//         console.log(`${a} - Неопредленно`);
//         break;
//     case "object":
//         console.log(`${a} - это object`);
//         break;
// }

// Даты
// let nowDay = new Date();
// let weekDay = nowDay.getDay();
// switch(weekDay){
//     case 1:
//         console.log("Сегодня понедельник");
//         break;
//     case 2:
//         console.log("Сегодня вторник");
//         break;
//     case 3:
//         console.log("Сегодня среда");
//         break;
//     case 4:
//         console.log("Сегодня четверг");
//         break;
//     case 5:
//         console.log("Сегодня пятница");
//         break;
//     case 6:
//     case 7:
//         console.log("Выходные дни")
// }