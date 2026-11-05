// 1 - Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку
// let flashGB = +prompt("Введите объем флешки (Гб):")
// let flashMB = flashGB * 1024
// let file = 820
// let N = Math.floor(flashMB / file)
// alert(N + " файла(-ов) размером в 820Мб поместится на флешку")

// 2 - Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.
// let summMoney = +prompt("Введите сумму денег в кошельке:")
// let summChocolate = +prompt("Введите цену одной шоколадки:")
// let N = Math.floor(summMoney/summChocolate)
// let summAfter = summMoney%summChocolate
// alert("Вы можете купить " + N + " шоколадок \nВаша сдача: " + summAfter)

// 3 - Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.
// let salary = 250
// let sale = +prompt("Введите общую сумму продаж за месяц")
// let saleSalary = 0.1 * sale
// let salaryAll = salary + saleSalary
// alert("Ваша зарплата: " + salaryAll)

// 4 - Запросить четырехзначное число  и вывести первую цифру
// let num = +prompt("Введите четырехзначное число:")
// let num1 = Math.floor(num/1000)
// alert("Первая цифра числа: " + num1)

// 5 - Запросить пятизначное число и вывести  последнюю цифру
// let num = +prompt("Введите пятизначное число:")
// let num5 = num%10
// alert("Последняя цифра числа: " + num5)

// 6 - расчет платежей кредита
let stavkaBanka = +prompt("Введите годовую ставку банка")
let summaKredit = +prompt("Введите сумму, которую хотите взять в кредит")
let kolYear = +prompt("Введите на сколько лет вы хотите взять кредит")
let p = (stavkaBanka/12)/100
let n = kolYear*12
let k = (p*(1+p)**n)/((1+p)**n - 1)
let platezh = Math.floor(summaKredit * k)
let pereplata = platezh*n-summaKredit
alert("Ежемесячный платеж по кредиту: " + platezh)
alert("Итоговая сумма: " + platezh*n)
alert("Сумма переплаты: " + pereplata)
