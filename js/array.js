// 1 - создание массивов и формирование новых
// let arr=[27,54,-2355, true, "aboba"];
// let brr=[];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
//     if(typeof(arr[i])=="number"){
//         brr[i]=arr[i]
//     }
// }
// console.log(brr)

// let arrPositive=[2,5,36,8,654,,,10];
// let twiceArrPositive=[]
// for(let i=0; i<arrPositive.length; i++){
//     arrPositive[i] = arrPositive[i]*2;
//     document.writeln(arrPositive[i])
// }
// arrPositive.forEach(function(elem,i){
//     twiceArrPositive[i] = arrPositive[i]*2
//     document.writeln(`<li>[${i}] = ${elem}</li>`);
// })
// document.writeln(arrPositive);
// document.writeln("<br>");
// document.writeln(twiceArrPositive);

// arrPositive[0]*=3;
// arrPositive[arrPositive.length-1]/=2;
//document.writeln("<br>");
//document.writeln(arrPositive);

// let crr = arrPositive;
// document.writeln("<br>");
// document.writeln(crr);
// arrPositive[0]*=3;
// document.writeln("<br>");
// document.writeln(crr);
// document.writeln("<br>");

// crr[1]-=100;
// document.writeln(arrPositive, " ", crr);

// let crr=[...arrPositive];
// arrPositive[0] = 0;
// document.writeln(crr);

// Массив данных
// let user = ["Putin", "Zelenskij", "Biden"];
// let admin = ["Aboba", "Obama"];
// user[user.length]="Trump";
// admin[0] = "Zhmyh";
// user[user.length-1]="Macron";
// let users=[...user, ...admin];
// console.log(users.length);
// let people = [...users];
// let peoples = [...people, "Uga", "David"];
// console.log(peoples)
// people.sort().forEach(function(elem){
//     console.log(elem)
// })
// users.sort().forEach(function(elem){
//     console.log(elem)
// })

// Максимальный элемент в массиве, сумма элементов
// let sum=0; 
// let max=0;
// let arr = [123,7,50,-9,24,154];
// arr.forEach(function(elem,i){
//     sum+=elem;
//     if(max<=elem){
//         max=elem;
//     }
// })
// console.log(sum,max)

// 
// let arr = [];
// for(i=1; i<=5; i++){
//     let a = +prompt("Введите число")
//     arr.push(a)
// }
// document.writeln(arr);
// let last = arr.pop();
// document.writeln("<br>");
// document.writeln(last)

// массив положительный и четный
// let arr = [];
// let numPlus = [];
// for(i=1; i<=5; i++){
//     let a = +prompt("Введите число")
//     arr.push(a)
// }

// arr.forEach(function(elem){
//     if(elem%2==0){
//         numPlus.push(elem)
//     }
// })
// document.writeln(numPlus)

function showSimple(a){
    for(i=2; i<a; i++){
        if(a%i==0){
            d++
        }
    }
    if(d==0){
        return a
    }
}
arr=[];
newarr=[]
let n = 10;
for(i=0; i<n; i++){
    let b = Math.floor(Math.random()*100);
    arr[i] = b;
}
console.log(arr);
let last = arr.pop();
let first = arr.shift();
arr.unshift(last);
arr.push(first);
console.log(arr);
console.log(arr.length);
let d =0;
arr.forEach(function(elem){
    newarr.push(showSimple(elem))
})
console.log(newarr)








