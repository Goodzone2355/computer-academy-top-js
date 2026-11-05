function getScore(player_select, comp_select){
    if(player_select == comp_select){
        player_score += 0;
        comp_score += 0;
    }

    if(player_select == 1 && comp_select == 2){
        player_score += 1;
    }

    if(player_select == 1 && comp_select == 3){
        comp_score += 1;
    }

    if(player_select == 2 && comp_select == 1){
        comp_score += 1;
    }

    if(player_select == 2 && comp_select == 3){
        player_score += 1;
    }

    if(player_select == 3 && comp_select == 1){
        player_score += 1
    }

    if(player_select == 3 && comp_select == 2){
        comp_score += 1;
    }  
}

let player_score = 0;
let comp_score = 0;
let player_select;
let comp_select;
for(let i=1; i<=3; i++){
    comp_select = Math.floor(Math.random() * 3 ) + 1;
    player_select = +prompt("1 - камень, 2 - ножницы, 3 - бумага");
    getScore(player_select, comp_select);
    console.log(player_select, comp_select, player_score, comp_score)
}

if(comp_score>player_score){
    alert("Ваши баллы: " + player_score + "\nБаллы компутера: " + comp_score + "\nВыиграл компутер")
}else if(player_score>comp_score){
    alert(("Ваши баллы: " + player_score + "\nБаллы компутера: " + comp_score + "\nВыиграли вы"))
}else{
    alert(("Ваши баллы: " + player_score + "\nБаллы компутера: " + comp_score + "\nУ вас ничья"))
}