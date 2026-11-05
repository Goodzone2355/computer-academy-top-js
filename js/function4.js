// Оценивание
getRandom = function(){
    x = Math.floor(Math.random() * 10) + 1;
    return x
}

isBall = function(num1, num2, summaUser){
    summa = num1 + num2
    if(summaUser==summa){
        return true
    }else{
        return false
    }
}

isBallMin = function(num1, num2, summaUser){
    summa = num1 - num2
    if(summaUser==summa){
        return true
    }else{
        return false
    }
}

showResult = function(a){
    if(a==0){
        alert("0 - вы ни на что не ответили")
    }else if(a==1){
        alert("1 - очень плохо")
    }else if(a==2){
        alert("2 - плохо")
    }else if(a==3){
        alert("3 - удовлетворительно")
    }else if(a==4){
        alert("4 - хорошо")
    }else if(a==5){
        alert("5 - Отлично")
    }
}

isAriphmetic = function(a){
    if(a==1){
        return 1
    }
    if(a==2){
        return 2
    }
}

cycle = function(){
    for(let i=1; i<=5; i++){
        num1 = getRandom(); num2 = getRandom()
        summaUser = +prompt(`Сколько будет: ${num1} + ${num2}?`);
        if(isBall(num1, num2, summaUser)){
            score++
        }
    }
    showResult(score)
}

cycleMin = function(){
    for(let i=1; i<=5; i++){
        num1 = getRandom(); num2 = getRandom()
        summaUser = +prompt(`Сколько будет: ${num1} - ${num2}?`);
        if(isBallMin(num1, num2, summaUser)){
            score++
        }
    }
    showResult(score)
}

// let score = 0;
// let choice = +prompt("Если вы хотите работать со сложнием - введите 1\nЕсли вы хотите работать с вычетанием - введите 2")
// if(isAriphmetic(choice) == 1){
//     cycle()
// }else if(isAriphmetic(choice) == 2){
//     cycleMin()
// }
let score = 0
while (true){
    let choice = +prompt("Если вы хотите работать со сложнием - введите 1\nЕсли вы хотите работать с вычетанием - введите 2")
    if(isAriphmetic(choice) == 1){
        cycle()
    }else if(isAriphmetic(choice) == 2){
        cycleMin()
    }
    score = 0
    let isContinue = confirm("Вы хотите продолжить?");
    if(isContinue){
        let choice = +prompt("Если вы хотите работать со сложнием - введите 1\nЕсли вы хотите работать с вычетанием - введите 2")
        if(isAriphmetic(choice) == 1){
            cycle()
        }else if(isAriphmetic(choice) == 2){
            cycleMin()
        }
        score = 0
    }else{
        break
    }
}


