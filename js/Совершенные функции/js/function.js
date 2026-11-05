// function showName(){
//     let nameUser = "Alex";
//     return function display(){
//         return console.log(nameUser)
//     }
// }
// showName()()
// let Name = showName()
// Name()

// function count(){
//     let a = 1;
//     return function(){
//         return a++
//     }
// }
// let b = count()
// console.log(b())
// console.log(b())
// let dija = prompt("Выберите действие + - * /");
// let num1 = prompt("Введите первое число");
// let num2 = prompt("Введите второе число");
// num1 = parseFloat(num1) || 1;
// num2 = parseFloat(num2) || 1;
// function menu(a){
// 	if(a=="+"){
// 		return function(x,y){
// 			return x+y
// 		}
// 	}

// 	if(a=="-"){
// 		return function(x,y){
// 			return x-y
// 		}
// 	}

// 	if(a=="*"){
// 		return function(x,y){
// 			return x*y
// 		}
// 	}

// 	if(a=="/"){
// 		return function(x,y){
// 			return x/y
// 		}
// 	}
// }
// let action = menu(dija);
// alert(action(num1,num2));

// function savePass(pass){
// 	function isCorrect(word){
// 		if(pass==word){
// 			return true
// 		}else{
// 			return false
// 		}
// 	}
// 	return isCorrect;
// }
// let passUser = prompt("Введите пароль");

// do{
// let wordUser = prompt("Введите слово для проверки");
// let correct = savePass(passUser);
// if (correct(wordUser)){
// 	alert("Пароль верный");
// 	break
// }else{
// 	alert("Пароль неверный")
// }
// }while(confirm("Продолжить ввод"))

// Call-back
// function f(b, callback){
// 	console.log(1);
// 	callback(b);
// }
// function ff(a){
// 	console.log(a)
// }
// f(2,ff)

// function sum(a,b){
// 	return a+b
// }

// function substract(a,b){
// 	return a-b
// }

// function mult(a,b){
// 	return a*b
// }

// function divide(a,b){
// 	return a/b
// }

// function operation(x,y,oper){
// 	return oper(x,y)
// }
// alert(operation(54,27,divide))

// Рекурсия
// function factorial(n){
// 	if(n==1){
// 		return 1;
// 	}
// 	return n*factorial(n-1)
// }
// console.log(factorial(4))

// function showNumber(n){
// 	if(n==2){return 2}
// 	return showNumber(n-2) + " " + n
// }
// console.log(showNumber(24))

// let num = +prompt("Введите число")
// function reverse(n){
// 	if (n<10) return n
// 	return n%10+""+reverse(Math.floor(n/10))
// }
// console.log(reverse(num))