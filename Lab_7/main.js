//Вывести на экран любое значение с помощью console.log
var text = "Любое значение";
console.log(text);

//Создать две переменные с числами и вывести их на экран
var numberOne = 1;
var numberTwo = 2;
console.log("Первое число: " + numberOne);
console.log("Второе число: " + numberTwo);

//Сложить две переменные и вывести результат на экран
var sum = numberOne + numberTwo;
console.log("Сумма: " + sum);

//Вывести на экран строку в верхнем и нижнем регистре
console.log("Верхний регистр: " + text.toUpperCase());
console.log("Нижний регистр: " + text.toLowerCase());

//Записать в скрипт реализацию каждой базовой операции над числами, возвести число в квадрат, получить остаток от деления
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function division(a, b) {
  if (b != 0) {
    return a / b;
  } else {
    return null;
  }
}

function square(a) {
  return squared = a ** 2;;
}

function mod(a, b) {
  if (b != 0) {
    return a % b;
  } else {
    return null;
  }
}

console.log("Сложение:", add(5, 3)); // 8
console.log("Вычитание:", sub(10, 4)); // 6
console.log("Умножение:", multiply(7, 2)); // 14
console.log("Деление:", division(15, 3)); // 5
console.log("Возведение в квадрат:", square(6)); // 36
console.log("Остаток от деления:", mod(10, 3)); // 1