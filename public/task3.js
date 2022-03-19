/*
  TASK 3
  Создай функцию getSumm которая, принимает любое количество параметров (чисел), и возвращает их сумму

  Создай два варианта функции getSumm.
  Первый в виде стрелочной функции
  Второй в виде обычной функции через function.

  Они должны работать идентично.
*/

const getSumm = () => {
  // ...
}

// function getSumm() {
//   // ...
// }


const result1 = getSumm(1, 2)
const result2 = getSumm(5, 9, 10, 1)
const result3 = getSumm(1)
const result4 = getSumm(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 50, 1)

// должно вывести число 3
console.log(result1)

// должно вывести число 25
console.log(result2)

// должно вывести число 1
console.log(result3)

// должно вывести число 156
console.log(result4)