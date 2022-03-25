/*

  TASK 6 - Работа с массивами

*/

const NIKITA = {
  transactions: [
    { id: 1, date: new Date(2022, 1, 13), amount: 10 },
    { id: 2, date: new Date(2021, 2, 24), amount: 20 },
    { id: 3, date: new Date(2022, 5, 12), amount: 5 },
    { id: 4, date: new Date(2017, 7, 18), amount: 105 },
    { id: 5, date: new Date(2019, 5, 8), amount: 11 },
    { id: 6, date: new Date(2021, 2, 1), amount: 11 },
    { id: 7, date: new Date(2021, 3, 12), amount: 25 },
    { id: 8, date: new Date(2021, 6, 25), amount: 3 },
    { id: 9, date: new Date(2017, 4, 3), amount: 89 },
    { id: 10, date: new Date(2022, 2, 1), amount: 125 },
    { id: 11, date: new Date(2017, 1, 13), amount: 100 },
  ]
}

const STAS = {
  transactions: [
    { id: 12, date: new Date(2016, 2, 24), amount: 40 },
    { id: 13, date: new Date(2022, 3, 9), amount: 6 },
    { id: 14, date: new Date(2016, 7, 14), amount: 67 },
    { id: 15, date: new Date(2020, 5, 17), amount: 91 },
    { id: 16, date: new Date(2021, 2, 1), amount: 45 },
    { id: 17, date: new Date(2020, 1, 12), amount: 12 },
    { id: 18, date: new Date(2021, 9, 23), amount: 9 },
    { id: 19, date: new Date(2017, 8, 3), amount: 99 },
    { id: 20, date: new Date(2022, 3, 24), amount: 155 }
  ]
}

/*
  1 - функция, которая должна вернуть true/false, 
  если количество элементов в arr1 больше чем в arr2
  то вернуть true, если меньше то false
*/

const moreThan = (arr1, arr2) => {
  // ...
}

const result1 = moreThan(NIKITA.transactions, STAS.transactions)





/*
  2 - функция, которая принимает arr1 и arr2 в параметры
  и должна вернуть новый массив, в котором будут скопированы 
  элементы из arr1 и arr2
  
  есть 3 разные способа решения
*/

const mergeArray = (arr1, arr2) => {
  // ...
}

const result2 = mergeArray(NIKITA.transactions, STAS.transactions)






/*
  3 - функция, которая принимает в параметры один массив
  и возвращает новый массив, в который должны попасть отфильтрованные элементы
  первого массива. 
  
  3.1 - в массив должны попасть элементы с датой больше чем 2018.01.01
  3.2 - в массив должны попасть элементы с датой больше чем 2017.01.01 и меньше чем 2020.01.01
  3.3 - в массив должны попасть элементы с amount больше чем 60 и меньше чем 150
*/

const filterArray = (arr) => {
  // ...
}

// передаю функции общий массив транзакций двух юзеров (чтобы было что фильтровать)
const result3 = filterArray(result2)






/*
  4 - функция, которая принимает в параметры один массив
  и возвращает новый массив, в котором элементы должны быть отсортированы по:

  4.1 - по дате по убыванию
  4.2 - по дате по возрастанию
  4.3 - по amount по убыванию
  4.4 - по amount по возрастанию 

*/

const sortArray = (arr) => {
  // ...
}

// передаю функции общий массив транзакций двух юзеров (чтобы было что сортировать)
const result4 = sortArray(result2)





/*
  5 - функция принимает массив, возвращает элемент массива, у которого id равен 13

  есть 4 разных способа
*/

const searchArray = (arr) => {
  // ...
}

// передаю функции общий массив транзакций двух юзеров (чтобы было где искать)
const result5 = searchArray(result2)






/*
  6 - функция принимает массив, возвращает новый массив, 
  который содержит элементы (обьекты транзакций) без поля date.
  То есть в результирующем массиве будут элементы {id: .., amount: ...} без date

  можно 3мя способами
*/

const removeDatesFromArray = (arr) => {
  // ...
}


// передаю функции общий массив транзакций двух юзеров
const result6 = removeDatesFromArray(result2)






/*
  7 - функция принимает массив, возвращает true/false,
  
  true - если хотя-бы у одного элемента в массиве amount больше чем 150,
  в ином случае - false

*/

const isArrayContainBigAmount = (arr) => {
  // ...
}

const result7 = isArrayExistBigAmount(result2)







/*
  8 - функция принимает массив, возвращает true/false

  true - если у всех транзакций amount больше чем 6
  false в ином случае

*/

const isArrayContainElementsGreater6 = (arr) => {
  // ...
}

const result8 = isArrayContainElementsGreater6(result2)







/*
  9 - функция принимает массив, возвращает число
  число - сумма всех amount всех элементов массива

  как минимум 2 способа
*/

const calcTotalAmountOfArray = (arr) => {
  // ...
}

const result9 = calcTotalAmountOfArray(result2)






/*
  10 - функция принимает массив, возвращает строку
  строка -  id каждого элемента через пробел
  
  типа "1 2 3 4 5 6 7 8 9 10 11 12 13 14" и тд

*/

const joinIdOfArray = (arr) => {
  // ...
}

const result10 = joinIdOfArray(result2)







/*
  11 - функция принимает строку, возвращает массив
  строка - результат предыдущего задания (10)
  то есть числа разделенные пробелом

  тебе нужно сделать массив из этой строки 
  типа [1, 2, 3, 4, 5, 6, 7, 8 ...]


*/

const generateArrayFromString = (str) => {
  // ...
}

const result11 = generateArrayFromString(result10)
