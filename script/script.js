// task 1
//Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17),
// дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

let age = +prompt("Скільки вам років?")

if (age < 0) {
    alert("То ви ще не народилися?");
}
else if (age <= 11) {
    alert("Привіт, дитино");
}
else if (age <= 17) {
    alert("Отже ти підліток, га?");
}
else if (age <= 59) {
    alert("Доброго ранку пане/пані");
}
else if (age >= 60) {
    alert("Ого, ви мабуть багато чого встигли побачити");
}
else {
    alert("Що?");
}

//task 2
//Запитай у користувача число від 0 до 9 і виведи йому спецсимвол,
// який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let num = +prompt("Введіть число, від 0 до 9");
if (num == 1) {
    alert("!");
}
else if (num == 2) {
    alert('"');
}
else if (num == 3) {
    alert("№");
}
else if (num == 4) {
    alert(";");
}
else if (num == 5) {
    alert("%");
}
else if (num == 6) {
    alert(":");
}
else if (num == 7) {
    alert("?");
}
else if (num == 8) {
    alert("*");
}

else if (num == 9) {
    alert("(");
}
else if (num == 0) {
    alert(")");
}

else {
    alert("ну я так не граю");
}

// task 3
//Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let firstNumber = +prompt('Вкажіть перше число', '');
let lastNumber = +prompt('Вкажіть останнє число', '');
let sum = 0;
for (let i = firstNumber; i <= lastNumber; i++)  sum += i;
alert("Сума усіх чисел у заданому Вами діапазоні становить" + sum);

// task 4
//Запитай у користувача 2 числа і знайди найбільший спільний дільник.

let a = +prompt('Введіть перше число');
console.log(a);
let b = +prompt('Введіть друге число');
console.log(b);
let gcd;
while (a != b) {
    if (a > b) {
        a = a - b;
    }
    else {
        b = b - a;
    }
}
gcd = a;
console.log("Найбільший спільний дільник дорівнює " + a);

// task 5
//Запитай у користувача число і виведи всі дільники цього числа.

let numbr = +prompt();
for (let i = numbr; ;) {
    if (numbr % i == 0) {
        console.log(i);
    }
    i--;
    if (i == 0) {
        break;
    }
}

//normal
// task 1
//Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

let nmbr = prompt('Вкажіть число', '');
let removeNeg = nmbr.replace('-', '');
if (Number(removeNeg)) {
    let str = removeNeg.toString();
    let i = 0;
    for (let j = str.length - 1; true; j--) {
        if (str.charAt(i++) == str.charAt(j)) {
            if (i == j || i - j == 1 || j - i == 1) {
                alert('Ваше число є паліндромом!');
                break;
            }
        } else {
            alert('Ваше число не є паліндромом паліндром.');
            break;
        }
    }
} else {
    alert('Будь ласка, введіть число');
};

// task 2
// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.


let price = +prompt();
let discount;
if (price < 200) {
    alert(price);
}
else if (price >= 200 && price <= 300) {
    discount = price / 100 * 3;
    alert(price - discount);
}
else if (price >= 300 && price <= 500) {
    discount = price / 100 * 5;
    alert(price - discount);
}
else if (price > 500) {
    discount = price / 100 * 7;
    alert(price - discount);
}

//task 3
// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
// При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. 
// Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

let number;
let zero = 0;
let positiveNum = 0;
let negativeNum = 0;
let evenNumber = 0;
let oddNumber = 0;
for (let i = 0; i < 10; i++) {
    number = +prompt('Введіть число');
    console.log(number);
    if (number === 0) {
        zero++;
    } else if (number > 0) {
        positiveNum++;
    } else if (number < 0) {
        negativeNum++;
    }
    if (number % 2) {
        oddNumber++;
    } else if (number != 0 && number % 2 == 0) {
        evenNumber++;
    }
}

console.log(`Нулів введено ${zero} шт.`);
console.log(`Додатніх чисел введено ${positiveNum} шт.`);
console.log(`Відємних чисел введено ${negativeNum} шт.`);
console.log(`Непарних чисел введено ${oddNumber} шт.`);
console.log(`Парних чисел введено ${evenNumber} шт.`);

//task 4
// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? »
//  і так до тих пір, поки користувач натискає OK.

let dayNum = 1;
let dayName;
let message;
do {
    switch (dayNum) {
        case 1:
            dayName = 'Понеділок';
            break;
        case 2:
            dayName = 'Вівторок';
            break;
        case 3:
            dayName = 'Середа';
            break;
        case 4:
            dayName = 'Четвер';
            break;
        case 5:
            dayName = "П'ятниця";
            break;
        case 6:
            dayName = 'Субота';
            break;
        case 7:
            dayName = 'Неділя';
            break;
    };
    message = confirm(`${dayName}. Хочеш побачити наступний день?`);
    dayNum < 7 ? dayNum++ : dayNum = 1;
} while (message);

//task 1
//  Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом:
//  кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?».
//   Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. 
//   Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N 
//   (буде корисним почитати про алгоритм: "бінарний пошук").
alert('Загадайте число від 0 до 100');
let min = 0;
let max = 101;
while (true) {
    let num = Math.floor((min + max) / 2);
    let hint = prompt(`Ваше число > ${num}, < ${num} або == ${num}?`)
    if (hint == '==' || hint == '=') {
        alert(`Ваше число ${num}`)
        break
    }
    else if (hint == '>') {
        min = num;
    }
    else if (hint == '<') {
        max = num
    }
}
