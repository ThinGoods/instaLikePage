/*
  TASK 4
  Почитай что такое spred операторы в js
  и выполни все задания написанные над result переменными 
  используя spred операторы
*/

const objectA = {
  a: 1,
  b: 2,
  c: 3
}

const objectB = {
  d: 4,
  e: 5,
  f: 6
}

const objectC = {
  a: 10,
  c: 30,
  e: 50
}

// в этой переменной нужно получить обьект со свойствами objectA 
const result1 = {};

// в этой переменной нужно получить обьект со свойствами objectA и objectB
const result2 = {};

// в этой переменной нужно получить обьект со свойствами objectA, objectB и objectC
const result3 = {};

// в этой переменной нужно получить обьект со свойствами objectA и objectC
// при этом если у objectC есть свойство которое есть и в objectA, то в новый обьект должно попасть значение только из objectA.
const result4 = {};

// -------------------------------------------------------------------------

const arrayA = [1, 2, 3, 4, 5]

const arrayB = ['a', 'b', 'c']

const arrayC = [null, null, null]


// в этом массиве нужно получить элементы из arrayA
const result5 = []

// в этом массиве нужно получить элементы сначала из arrayA, потом из arrayB
const result6 = []

// в этом массиве нужно получить элементы сначала из arrayC, потом из arrayA, потом из arrayB
const result7 = []