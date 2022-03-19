/* 
  TASK 2
  Есть три переменные objectA, objectB, objectC
  Напиши функцию mergeObjects, которая принимает два аргумента (два обьекта - obj1, obj2),
  и возвращает обьект, который содержит свойства как первого так и второго переданного обьекта (obj1, obj2)
  то есть соединяет два обьекта в один новый.
  Если у obj2 есть свойство которое есть и в obj1, то в новый обьект должно попасть значение только из obj1.
*/


const objectA = {
  a: 1,
  b: 2,
  c: 3
}

const objectB = {
  b: 4,
  c: 5,
  d: 6
}

const objectC = {
  d: 7,
  e: 8,
  f: 9
}

const mergeObjects = (obj1, obj2) => {
  // ...
}

const resultOfTask2_1 = mergeObjects(objectA, objectB)
const resultOfTask2_2 = mergeObjects(objectA, objectC)
const resultOfTask2_3 = mergeObjects(objectB, objectC)


/*
  тут в результате должно вывести такой обьект в консоль
  {
    a: 1,
    b: 2,
    c: 3,
    d: 6
  }
*/
console.log(resultOfTask2_1)

/*
  тут в результате должно вывести такой обьект в консоль
  {
    a: 1,
    b: 2,
    c: 3,
    d: 7,
    e: 8,
    f: 9
  }
*/
console.log(resultOfTask2_2)


/*
  тут в результате должно вывести такой обьект в консоль
  {
    b: 4,
    c: 5,
    d: 6,
    e: 8,
    f: 9
  }
*/
console.log(resultOfTask2_3)