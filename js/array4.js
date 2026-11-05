function getArray(){
    a = [];
    for(i=1; i<=10; i++){
        let num = Math.floor(Math.random() * 10);
        a.push(num);
    }
    return a
}

function showMax(a){
    let max = a.reduce(function(maxim,elem){
        if(maxim>elem){
            return maxim
        }else{
            return elem
        }
    })
    return max
}

function showCountMaxElement(array,max){
    let count = 0
    for(elem of array){
        if(elem==max){
            count++
        }
    }
    return count
}

function showNewArr(array,max){
    let newArray = array.map(function(elem){
        return elem = max-elem
    })
    return newArray
}

function showNewNullArr(array){
    let ind = array.indexOf(0);
    if(ind>0){
       return NewArr = array.slice(0, ind);
    }
    if(ind==0){
       return "в исходном массиве нуль был нулевым элементов" 
    }
    if(ind=-1){
        return "в исходном массиве не было нуля"
    }
}

function showNewOriginalArr(array){
    array.sort();
    for(i=array.length-1; i>0; i--){
        if(array[i]==array[i-1]){
            array.splice(i, 1)
        }   
    }
    return array
}

function showNewAriphmeticArr(array){
    let sum=0;
    for(elem of array){
        sum+=elem
    }
    let ariphemtic = sum/array.length
    return array.filter(elem => elem>=ariphemtic)
}

// 1 - Создать массив из 10 случайных чисел (Math.floor(Math.random() * 10)) 
let arr = getArray();
document.writeln(`Исходный массив: ${arr}`);
document.writeln("<br>");

// 2 - Функция принимает массив и возвращает его максимальный элемент
let maxElement = showMax(arr);
document.writeln(`Максимальный элемент: ${maxElement}`);
document.writeln("<br>");

// 3 - Подсчитать, сколько раз повторяется максимальный элемент
let countMaxElement = showCountMaxElement(arr, maxElement);
document.writeln(`Количество максимальных элементов: ${countMaxElement}`);
document.writeln("<br>");

// 4 - функция принимает массив возвращает новый массив, состоящий из разницы максимального и текущего элемента
let newArr = showNewArr(arr, maxElement);
document.writeln(`Новый массив (разница максимума и текущего элемена): ${newArr}`);
document.writeln("<br>");

// 5 - функция принимает массив и возвращает новый массив при условии, что в исходном массиве есть элемент равный 0 и новый массив будет состоять из всех элементов до первого 0. Например из массива [1,3,0,4,2,0,5,6] будет сформирован новый массив, состоящий из чисел до первого нуля [1,3]
let newNullArr = showNewNullArr(arr);
document.writeln(`Новый массив (до первого нуля): ${newNullArr}`);
document.writeln("<br>");

// 6 - *Функция принимает массив и возвращает его без повторяющихся элементов
let newOriginalArr = showNewOriginalArr(arr);
document.writeln(`Новый массив (без повторяющихся элементов): ${newOriginalArr}`);
document.writeln("<br>");

// 7 - *функция принимает массив и возвращает новый массив, состоящий из чисел, которые больше среднеарифметического значения (сумма всех чисел деленная на количество)
let newAriphmeticArr = showNewAriphmeticArr(arr);
document.writeln(`Новый массив (элементы больше среднего арифметического): ${newAriphmeticArr}`);
document.writeln("<br>");

