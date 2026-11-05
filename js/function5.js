//Глобальная область видимости
let foo = 1;
let bar = 2;
let myFunc = function(){
    // локальные переменные
    let a = 1;
    let b = 2;
    foo = 3;
    let calc = function(){
        return a = a+b+foo+bar;
    }
    console.log(calc());
}
myFunc()
console.log(foo)