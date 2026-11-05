// let arr = ["Я","изучаю","JavaScript"];
// arr.splice(1,1, "изучил");
// console.log(arr)
// let twiceArr = [];
// function getArray(){
//     let arr=[];
//     for(i=-5; i<=5; i++){
//         arr.push(Math.floor(Math.random()*i*10));
//     }
//     return arr
// }

// function checkCountNull(arr){
//     for(elem of arr){
//         if(elem==0){
//             countNull++
//         }
//     }
//     return countNull
// }
// let countNull = 0;
// let num = getArray();
// console.log(num);
// console.log(checkCountNull(num));

// num.splice(num.indexOf(0),1);
// console.log(num);

// let arrPositive = num.filter(elem => elem>0);
// console.log(arrPositive)

// num.forEach(function(elem, j){
//     if(elem==0){
//         num.splice(j,1);
//     }
// })
// console.log(num);

// num.forEach(function(elem,j,arr){
//     if(elem%2==0){
//         arr.splice(j,1,elem+1)
//     }
// })
// console.log(num);

// twiceArr = arrPositive.map(function(elem){
//     return elem**2
// })
// console.log(twiceArr)

// let summa = arrPositive.reduce(function(sum,elem){
//     sum+=elem; 
//     return sum
// },0);
// console.log(summa)

// let max = arrPositive.reduce(function(max,elem){
//     if(max<elem){
//         return elem
//     }else{
//         return max
//     }
// })
// console.log(max);

// arrPositive.reverse();
// console.log(arrPositive);

// let str = "   Сегодня была прекрасная погода.Природа ожила.  ";
// str=str.trim();
// let arr=str.split(/[ |. ]/);
// console.log(arr);
// arr.splice(1,1,"будет");
// console.log(arr);

// let strNew = arr.join(" ");
// console.log(strNew)

let str = "1 2 3 4 5 6 67 878";
let arrNumber = [];
let arr = str.split(" ");
console.log(arr);
arrNumber = arr.map(function(elem){
    elem=parseInt(elem);
    return elem
})
console.log(arrNumber);
let sum=arrNumber.reduce(function(summa,elem){
    return summa+=elem;
},0)
console.log(sum)

let strReverse = str.split(" ").reverse().join(" ");
console.log(strReverse);

