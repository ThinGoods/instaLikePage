/* 
  TASK 1

  есть переменные objectA и objectB. 
  Нужно написать функцию defineTypesInObject, 
  которая будет перебирать свойства обьекта, 
  который ей передают как параметр, 
  и выводить в консоль такой же обьект, 
  только вместо значений его свойств - тип этого свойства 
  (подсказка - используй typeof) 
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/typeof
*/
const objectA = {
  a: 1,
  b: 'bla-bla',
  c: {
    c1: 2
  },
  e: null,
  f: undefined
}

const objectB = {
  a: 'bla-bla',
  b: 0,
  c: [],
  d: () => {},
  e: true,
  f: NaN
}

const defineTypesInObject = (obj) => {
  // ...
}

const resultOfTask1_1 = defineTypesInObject(objectA)
const resultOfTask1_2 = defineTypesInObject(objectB)

/* 
  тут в результате должно вывести такой обьект в консоль
  {
    a: 'number',
    b: 'string',
    c: 'object',
    e: 'object',
    f: 'undefined'
  }
*/
console.log(resultOfTask1_1)

/* 
  тут в результате должно вывести такой обьект в консоль
  {
    a: 'string',
    b: 'number',
    c: 'object',
    d: 'function',
    e: 'boolean',
    f: 'number'
  }
*/
console.log(resultOfTask1_2)
