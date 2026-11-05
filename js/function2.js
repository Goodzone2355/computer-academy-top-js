// function setK(){
//     let K= prompt("Введите конечное число последовательности чисел");
//     K= parseInt(K) || 1;
//     return K
// }

// function showNumber(S){
//     alert("Ваша числовая последовательность: " + S);
// }
// // 1 - Ввести 1-n чисел и вывести только положительные
// function showPositive(K){
//     let s = "";
//     for(let i=1; i<=K; i++){
//         if(i>0){
//             s= s + " " + i;
//         }
//     }
//     return s
// }
// showNumber(showPositive(setK()))

// 2 - Ввести 1-n чисел и вывести только нечетные
// function showOdd(K){
//     let s = "";
//     for(let i=1; i<=K; i++){
//         if(i%2==1){
//             s = s + " " + i
//         }
//     }
//     return s
// }
// showNumber(showOdd(setK()))

// 3 - Ввести 1-n чисел и вывести только кратные 10
// function showTen(K){
//     let s = "";
//     for(let i=1; i<=K; i++){
//         if(i%10==0){
//             s = s + " " + i
//         }
//     }
//     return s
// }
// showNumber(showTen(setK()))

// 4 - Проверить числа 1-n и если есть простое то вывести его
// function showPrime(K){
//     s = " ";
//     for(let n=1; n<=K; n++){
//         c = 0
//         for(let k=2; k<n; k++){
//             if(n%k==0){
//                 c += 1
//             }
//         }
//         if(c==0){
//             s = s + " " + n
//         }
//     }
//     return s
// }
// showNumber(showPrime(setK()))
// arr = [2,3,4,5,6,7,8,9,10]
// d=0;k=0;
// function isSimple(a){
//     for(let k=1; k<=a; k++){
//         if(a%k==0){
//             d += 1
//         }
//     }
//     if(d==2){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isSimple(83))
// arr.forEach(function(elem){
//     for(let k=1; k<=elem; k++){
//         if(elem%k==0){
//             d += 1
//         }
//     }
//     if(d==2){
//         return k++
//     }else{
//         return false
//     }
// })
// console.log(k)

arr=[0,1,2,3,4,5,6,7,8,9];
arr.forEach(function(elem){
    console.log(elem)
})