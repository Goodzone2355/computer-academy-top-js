// 1 -	Запросить число и степень. Возвести число в указанную	степень и вывести результат, подсчет вести исключительно через цикл!.
// let num = prompt("Введите число:");
// let raise = prompt("Введите степень, в которую хотите возвести число:");
// num = parseInt(num) || 0;
// raise = parseInt(raise) || 0;
// let d = 1;
// let m = 1;
// if(raise==0){
//     alert("Число: " + d);
// }

// if(raise>0){
// while(raise>0){
//     d *= num;
//     raise--
//     }
//     alert("Число: " + d);
// }

// if(raise<0){
//     while(raise<0){
//     d *= num;
//     raise++
//     }
//     m = 1/d;
//     alert("Число: " + m);
// }

// 2 - Запросить 2 числа и найти все общие делители
// let num1 = prompt("Введите первое число:");
// let num2 = prompt("Введите второе число:");
// let count = 0;
// s = ""
// num1 = parseInt(num1) || 1;
// num2 = parseInt(num2) || 1;
// while(num1>=count && num2>=count){
//     if(num1%count==0 && num2%count==0){
//         s = s + " " + count;
//     }
//     count++
// }
// alert("Их общие делители: " + s);

// 3 - Посчитать факториал введенного пользователем числа.
// let num = prompt("Введите число:");
// num = parseInt(num) || 1;
// s = 1;
// while(num>=1){
//     s = s*num;
//     num--
// }
// alert("Факториал числа: "+s)

// 4 - Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
// positive = 0;
// negative = 0;
// zero = 0;
// even = 0;
// odd = 0
// count = 10;
// while(count>0){
//     let num = prompt("Введите число:");
//     num = parseInt(num);
//     if(num>0){
//         positive++
//     }

//     if(num==0){
//         zero++
//     }

//     if(num<0){
//         negative++
//     }

//     if(num%2==0){
//         even++
//     }

//     if(num%2==1 || num%2==-1){
//         odd++
//     }
//     count--
// }
// alert("Положительные числа: " + positive +"\nОтрицательные числа: " + negative + "\nНули: " + zero + "\nЧетные числа: " + even + "\nНечетные числа: " + odd)

// 5 - Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
let num1 = prompt("Введите число:");
let shift = prompt("Введите насколько цифр вы хотите сдвинуть число:");
num1 = parseInt(num1) || 1;
shift = parseInt(shift) || 1;
let num11 = num1;
let lenNum = 0;
let i = 0;

while (num11 > 0) {
	num11 = Math.floor(num11 / 10);
	lenNum++
}

while (i < shift) {
	last = num1 % 10;
	num1 = Math.floor(num1 / 10);
	num1 += last * (10 ** (lenNum - 1))
	i++
}
alert("Полученное число: " + num1)


