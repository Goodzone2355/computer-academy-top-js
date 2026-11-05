// let user = {
//     name:"Volodimir",
//     age:54,
//     place:"Donetsk",
//     "year birthday": 1969, 
// }
// user.age=3;
// user.email="biba@gmail.com";
// delete(user.place);
// delete(user["year birthday"])
// console.log(user)
// for(let key in user){
//     console.log(user[key])
// }

// function in object
// const fruit = {
//     name: "strawberry",
//     color: "red",
//     taste: "sweet",
//     size: "small",
//     country: {
//         name: "Russia",
//         finanse: "rub",
//     },
//     say: function(){
//         alert("Я фрукт! "+ fruit.name);
//     },
//     getName: function(){
//         return fruit.name
//     },
//     setName: function(){
//         fruit.name = prompt("Введите название фрукта")
//     }
// };

// вывод свойств и ключей объекта
// for(key in fruit){
//     if(typeof(fruit[key])=="object"){
//         for(keys in fruit[key]){
//             document.writeln(keys+": "+fruit[key][keys]+"<br>")
//         }
//     }else{
//         document.writeln(key+": "+fruit[key]+"<br>");
//     }
// }

// изменение свойства 
// console.log(fruit);
// if(fruit.hasOwnProperty("taste")){
//     console.log("свойство есть");
//     fruit["taste"];
// }else{
//     fruit["taste"]="sold";
// }
// console.log(fruit)

// изменение свойства
// if("size" in fruit){
//     fruit["size"]="big";
// }
// console.log(fruit);
// console.log(fruit.country.name);

// удаление ключа и с-ва
// if("color" in fruit){
//     delete fruit.color
// }
// установить имя
// fruit.setName()
// console.log(fruit);
// вывести имя
// fruit.say(); 
// поменять втупую
// fruit.name = prompt("Введите название фрукта");
// возврат имени объекта
// let fruitName = fruit.getName();
// alert(fruitName);
// console.log(fruit);

// const salaries ={
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//     name: "Bubu"
// }

// функция по сложению с-тв, универ. функции
// let totalSum = function(){
//     s=0;
//     for(key in this){
//         if(typeof(this[key])=="number"){
//             s+=this[key]
//         }
//     }
//     return s
// }
// salaries.total = totalSum;
// console.log(salaries)
// console.log(salaries.total())

// const salaries2 ={
//     Biba: 200,
//     Boba: 330,
//     Valera: 540,
//     name: "Uga-buga"
// }
// salaries2.total = totalSum;
// console.log(salaries2.total());

const creatReac = function(a,b,c,d){
    return{
        x1: a,
        x2: b,
        y1: c,
        y2: d,
    }
}
const rect = creatReac(1,5,7,9);
const squar = creatReac(1,5,7,11)
console.log(rect)
console.log(squar)

const showInfo = function(){
    for(key in this){
        if(typeof(this[key])!=="function"){
            document.writeln(this[key]+"<br>")
        }
    }
}
rect.show = showInfo;
rect.show()

const calcWidth = function(){
    return Math.abs(this.x2-this.x1)
}
rect.width = calcWidth;
document.writeln("Ширина = "+rect.width()+"<br>")

const calcHeight = function(){
    return Math.abs(this["y2"]-this["y1"])
}
rect.height = calcHeight;
document.writeln("Высота = "+rect.height()+"<br>")

const calcS = function(){
    return this.width()*this.height()
}
rect.S = calcS;
document.writeln("Площадь = "+rect.S())









