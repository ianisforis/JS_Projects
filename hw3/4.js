"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

const sum = (num1, num2) => {
    return num1 + num2;
}

const diff = (num1, num2) => {
    if (num1 >= num2) {
        return num1 - num2;
    } else {
        return num2 - num1;
    }
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const div = (num1, num2) => {
    return num1 / num2;
}


console.log(sum(4, 5));
console.log(diff(4, 5));
console.log(multiply(4, 5));
console.log(div(4, 5));


