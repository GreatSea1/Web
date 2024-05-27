//Калькулятор любви
function loveСalculator() {
  let firstPerson = prompt("Как его зовут?", null);
  let secondPerson = prompt("Как её зовут?", null);

  if (firstPerson != null && firstPerson != 'null' && secondPerson != null && secondPerson != 'null') {
    let result = Math.random() * 100;
    result = Math.round(result, 2);
    alert(`${firstPerson} и ${secondPerson} подходят друг другу на ${result}%`);
  } else {
    alert("Нет данных");
  }
}

//BMI Калькулятор
function BMICalculator() {
  let weight = prompt("Вес (кг)", null);
  let height = prompt("Рост (см)", null) / 100;

  if (weight != null) {
    let bmi = weight / (height ** 2);
    if (bmi <= 18.5) {
      alert("Недостаточный вес");
    } else if (bmi > 18.5 && bmi <= 25) {
      alert("Нормально");
    } else if (bmi > 25 && bmi <= 30) {
      alert("У вас излишек веса");
    } else {
      alert("Ожирение");
    }
  }
  else {
    alert("Нет данных");
  }
}

//Является ли год високосным?
function isLeap() {
    var year = document.getElementById('yearInput').value;
    year = parseInt(year);

    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        alert("Високосный год");
      } else {
        alert("Не является високосным");
      }
}

//Кто платит за ужин?
function whoPays() {
    let names = ['Дима', 'Катя', 'Петр', 'Лена'];
    let randomIndex = Math.floor(Math.random() * names.length);
    let winner = names[randomIndex];
    alert("Оплачивать будет " + winner)
}
