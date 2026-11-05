// let adres = "mail@mail.ru";
// function showHello(nameUser="noname", age=0, town="notown"){
    // let age = 18;
    // let adres = "yandex@yandex.ru";
    // alert("Hello, " + nameUser + ", вам есть: " + age + ", ваш город: " + town);
    // alert(adres)
// }
// showHello()
// alert(adres)

// 2 - функция суммы
// function getSumma(x, y){
//     let s = x+y
//     return s
// }
// let median = getSumma(2,3)/2
// alert(median)

// 3 - пример с функцией квадрата и куба
// let x = prompt("Введите число:");
// x = parseInt(x);
// function get2(x){
//     let x2 = x*x;
//     return x2
// }

// function get3(x) {
//     let x3 = x*x*x;
//     return x3
// }
// if(x!=0 && !isNaN(x)){
// let y = (0.01*get2(x)+get3(x)/50)/(get2(x)*get2(x)+get2(x)*get3(x))
// alert(y.toFixed(3))
// }
// else{
//     alert("Неверно введены данные")
// }

// 4 - доступ по возрасту
// let age = +prompt("Введите свой возраст:");
// function isAge(age){
//     if(age>=18){
//         return true;
//     }else{
//         return false;
//     }
// }
// if (isAge(age) == true){
//     alert("Доступ есть")
// }else{
//     alert("Нет доступа")
// }  

// 5 - Четное или нет
// let n = +prompt("Введите начало числового ряда")
// let k = +prompt("Введите начало числового ряда")
// function isEven(num){
//     if(num%2==0){
//         return true
//     }else{
//         return false
//     }
// }
// function showEven(n,k){
//     let s = ""
//     for(let i = n; i<=k; i++){
//         if(isEven(i) == true){
//             s = s + " " + i
//         }
//     }
//     return s
// }
// alert(showEven(n,k))

// 6 - простое или составное
// let n = +prompt("Введите начало числового ряда")
// let k = +prompt("Введите начало числового ряда")
// function isPrime(n,k, num){
//     for (i=n; i<=k; i++){
//         if(num%i==0){
//                 d++
//             } 
//         }
//         if (d==2){
//             return true 
//         }else{
//             return false
//         }
// }
// function showPrime(n,k,num){
//     let s = ""
//     for(let i = n; i<=k; i++){
//         if(isPrime(i) == True){
//             s = s + " " + i
//         }
//     }
//     return s
// }
// alert(showPrime(n,k))
d=0;
k=0
// работает
function isSimple(a){
  for(let k=1; k<=a; k++){
      if(a%k==0){
          d += 1
      }
  }
  if(d==2){
      return true
  }else{
      return false
  }
}
let newArr=[];
let arr=[0,1,2,3,4,5,6,7,8,9,11];
arr.forEach(function(elem,i){
  if(isSimple(arr[i])){
    k++
  }
})
console.log(k)