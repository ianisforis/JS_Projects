"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/
const array = [];
const resultArr = [];
let sum = 0;
for (let i = 0; i < 5; i++) {
    const randomNumber = Math.trunc(Math.random() * 10);
    sum = sum + randomNumber;
    
    if (randomNumber == 3) {
        resultArr.push(i);
    }

    array.push(randomNumber);
}

const min = Math.min(...array);

//for checking
//console.log(array);

console.log(`Sum = ${sum}`);
console.log(`Min = ${min}`);
console.log(`Array of indexes of number 'three' = ${resultArr}`);
