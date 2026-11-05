let arr = [];
let arrNegative = [];
let arrEven = [];
let arrSimple = [];
let sum = 0;
let kolEven = 0;
let cou = 0;
let kolSimple = 0;
let n = +prompt("Введите длину массива");
for(i=0; i<n; i++){
    let b = Math.floor(Math.random()*100);
    arr[i] = b;
}
document.writeln(`Исходный массив: ${arr}`);

let last = arr.pop();
let first = arr.shift();
arr.unshift(last); arr.push(first);
document.writeln("<br>");
document.writeln(`Массив после смены первого и последнего элемента: ${arr}`);

let kol = arr.length;
document.writeln("<br>");
document.writeln(`Количество элементов: ${kol}`);

arr.forEach(function(elem){
    if(elem<0){
        arrNegative.push(elem);
    }
})
document.writeln("<br>");
document.writeln(`Массив отрицательных чисел(не имеет смысла): ${arrNegative}`);

arr.forEach(function(elem){
    if(elem%2==0){
        arrEven.push(elem)
    }
    sum+=elem;
    if(elem%2==0){
        kolEven++
    }
    let flag = true;
    for(let i=2; i<elem; i++){
        if(elem%i==0){
            flag = false;
            break
        }
    }
    if(flag){
        kolSimple++
    }
})
document.writeln("<br>");
document.writeln(`Массив четных чисел: ${arrEven}`);
document.writeln("<br>");
document.writeln(`Сумма элементов массива: ${sum}`);
document.writeln("<br>");
document.writeln(`Количество четных элементов: ${kolEven}`);
document.writeln("<br>");
document.writeln(`Количество простых элементов: ${kolSimple}`);

