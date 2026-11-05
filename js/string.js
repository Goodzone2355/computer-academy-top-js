// let str = "Привет мир программирования";
// str+="!!!";
// console.log(str);
// let kol = str.length;
// console.log(kol);
// console.log("Киевская \"Русь\"");
// console.log(str[kol-1]);

// k=0;c=0
// for(i=0; i<kol; i++){
    // console.log(str[i]);
    // if(str[i] == "а"){
    //     k++
    //     console.log(i)
    // }
    // if(str[i] == "!"){
    //     c++
    //     console.log(i)
    // }
// }
// if(k){
//     console.log(`Символ а есть в строке, его количество ${k}`);
// }else{
//     console.log("Символа а нет в строке")
// }
// if(c){
//     console.log(`Символ ! есть в строке, его количество ${c}`);
// }else{
//     console.log("Символ ! нет в строке")
// }
// p=0
// for(let simvol of str){
//     // console.log(simvol);
//     if(simvol==" "){
//         p++
//     }
// }
// if(p){
//     console.log(`Количество слов ${p+1}`)
// }

// Изменение регистра
// let p=0;
// let str = "Мама мыла раму";
// let newStr = str.toLowerCase();
// for(let simvol of newStr){
//     if(simvol=="м"){
//         p++
//     }
// }
// if(p){
//     console.log(`Количество символа м: ${p}`);
// }

// Поиск подстроки
// let emailUser = prompt("Введите email");
// let ind = emailUser.indexOf("@");
// let ind2 = emailUser.indexOf(".")
// if(ind!=-1 && ind2!=-1){
//     alert("Почта введена верна")
// }else{
//     alert("Почта введена неверно")
// }

// let str = "Карабас барабас";
// let newStr = str.toLowerCase();
// if(newStr.includes("бас")){
//     console.log("Вы написали верно")
// }
// if(newStr.includes("кар")){
//     console.log("есть вхождение")
// }
// console.log(str.toLowerCase().includes("кар"))

// p=0;
// let str = "Павел Чинарев, Виталий Корниенко, Роман Евдокимов, Павел Майков, Елена Полякова";
// let actor = prompt("Введите актера").toLowerCase();
// let newStr = str.toLowerCase()
// if(newStr.includes(actor)){
//     alert(`${actor} снимался тут`);
// }

// срезы
// let url="https://www.home.ru";
// let ind = url.indexOf("://");
// let newUrl = url.slice(ind+3);
// console.log(newUrl);

// replace
// let hello = "Добрый вечер. Этот вечер прекрасен";
// let newHello = hello.replace("вечер", "день");
// newHello = newHello.replace("вечер", "день");
// let exp = /вечер/gi;
// let exp2 = / /g;
// let newHello = hello.replace(exp2, "_");
// console.log(hello.replace(exp,"день"));
// console.log(newHello);

// let str = "<script>close</script>";
// let expl = /</g;
// let expg = />/g;
// let newStr = str.replace(expl, '&lt').replace(expg, '&gt');
// console.log(newStr);

// let number = "8(800)-777-77-77";
// let exp = /[( )-]/g;
// let newNumber = number.replace(exp, "");
// console.log(newNumber);
// let exp = /\d/;
// console.log(exp.test(number))

let str = "Али Баба";
let exp = /[a-zA-Zа-яА-Я_\. -.']/g;
console.log(exp.test(str))







