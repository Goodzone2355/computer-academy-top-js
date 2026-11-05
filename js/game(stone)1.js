function getScore(player, comp){
    if(player == comp){
        return 0
    }

    if((player== 1 && comp == 2) || (player == 2 && comp == 3) || (player == 3 && comp == 1)){
        return 1
    }

    if((player == 1 && comp == 3) || (player == 2 && comp == 1) || (player == 3 && comp == 2)){
        return 2
    }
}

let player_score = 0;
let comp_score = 0;
let player_select;
let comp_select;
for(let i=1; i<=3; i++){
    comp_select = Math.floor(Math.random() * 3 ) + 1;
    player_select = +prompt("1 - камень, 2 - ножницы, 3 - бумага");
    if(getScore(player_select, comp_select) == 1){
        player_score++
        if(comp_select == 1){
            alert("Вы победили в этом раунде\nКомпьютер выбрал камень\nВаш счет: " + player_score + "\nСчет компьютера: " + comp_score)
        }else if(comp_select == 2){
            alert("Вы победили в этом раунде\nКомпьютер выбрал ножницы\nВаш счет: " + player_score + "\nСчет компьютера: " + comp_score)
        }else{
            alert("Вы победили в этом раунде\nКомпьютер выбрал бумагу\nВаш счет: " + player_score + "\nСчет компьютера: " + comp_score)
        }
    }else if(getScore(player_select, comp_select) == 2){
        comp_score++
        if(comp_select == 1){
            alert("Компьютер победил в этом раунде\nКомпьютер выбрал камень\nВаш счет: " + player_score + "\nСчет компьютера: " + comp_score)
        }else if(comp_select == 2){
            alert("Компьютер победил в этом раунде\nКомпьютер выбрал ножницы\nВаш счет: " + player_score + "\nСчет компьютера: " + comp_score)
        }else{
            alert("Компьютер победил в этом раунде\nКомпьютер выбрал бумагу\nВаш счет: " + player_score + "\nСчет компьютера: " + comp_score)
        }
    }else{
        alert("Компьютер выбрал то же, что и вы\nВ этом раунде ничья!")
    }
}

if(comp_score>player_score){
    alert("Выиграл компьютер" + "\nВаши баллы: " + player_score + "\nБаллы компьютера: " + comp_score)
}else if(player_score>comp_score){
    alert("Выиграли вы" + "\nВаши баллы: " + player_score + "\nБаллы компьютера: " + comp_score)
}else{
    alert("У вас ничья" + "\nВаши баллы: " + player_score + "\nБаллы компьютера: " + comp_score)
}