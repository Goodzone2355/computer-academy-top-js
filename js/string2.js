// 1 - Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины.
// function showLengthString(a,b){
//     if(a.length>b.length){
//         return 1
//     }
//     if(a.length==b.length){
//         return 0
//     }
//     if(a.length<b.length){
//         return -1
//     }
// }
// let str1 = prompt("Введите первую строку");
// let str2 = prompt("Введите вторую строку");
// alert(showLengthString(str1,str2))

// 2 - Написать функцию, которая принимает строку, переводит в верхний регистр первый символ данной строки. Функция возвращает первый символ строки в верхнем регистре.
// function showFirstSymbol(a){
//     let b = a.slice(0,1).toUpperCase();
//     return b
// }
// let str = prompt("Введите строку");
// alert(showFirstSymbol(str))

// 3 - Дан шаблон телефона “963-56-56”, проверить наличие дефиса “-” в строке на указном месте
function isDefis(a){
    if((a.slice(3,4)=="-") && (a.slice(6,7)=="-")){
        return true
    }else{
        return false
    }
}
let str = prompt("Введите номер телефона в шаблоне 963-56-56");
if(isDefis(str)){
    alert("Вы верно ввели номер")
}else{
    alert("Вы неверно ввели номер")
}