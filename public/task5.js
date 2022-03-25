/* 
  TASK 5
  Изучи что такое деструктуризация ОБЬЕКТОВ и МАССИВОВ
  
  1 При деструктуризации ОБЬЕКТОВ изучи:
    - 1.1 как переименовать свойство при деструктуризации
    - 1.2 как задать значение по умолчанию, если свойство отсутствует при деструктуризации
    - 1.3 как собрать все остальные свойства в другой обьект, которые не учавствуют в деструктуризации
    - 1.4 деструктуризация второго, третьего и тд уровней
  
  2 При деструктуризации МАССИВО изучи:
    - 2.1 как задать значение по умолчанию, если элемент отсутствует при деструктуризации
    - 2.2 как при деструктуризации пропустить один или несколько элементов
    - 2.3 как собрать все остальные элементы в другой массив, которые не учавствуют в деструктуризации
    - 2.4 деструктуризация второго, третьего и тд уровней

  3 В функциях:
    - 3.1 как использовать деструктуризацию параметров функции (ОБЬЕКТ и МАССИВ)
*/

const NIKITA_USER = {
  name: 'Никита',
  surname: 'Жигамовский',
  age: 23,
  diplomas: ['Младший специалист', 'Бакалавр', 'Магистр'],
  pets: [
    { type: 'кот', name: 'Муся' },
    { type: 'собака', name: 'Бонд' }
  ],
  isHadSamsungGalaxyS8: true,
  isHadIPhone: true,
  cryptoInvestments: [
    {
      currency: 'BTC',
      transactions: [
        { date: new Date(2022, 1, 13), amount: '$10' },
        { date: new Date(2021, 2, 24), amount: '$20' },
        { date: new Date(2022, 5, 13), amount: '$5' },
        { date: new Date(2017, 7, 13), amount: '$105' },
        { date: new Date(2019, 5, 13), amount: '$11' }
      ]
    },
    {
      currency: 'ETH',
      transactions: [
        { date: new Date(2021, 2, 1), amount: '$11' },
        { date: new Date(2021, 3, 12), amount: '$25' },
        { date: new Date(2021, 6, 23), amount: '$3' },
        { date: new Date(2017, 4, 3), amount: '$89' },
        { date: new Date(2022, 2, 1), amount: '$125' }
      ]
    },
    {
      currency: 'XRP',
    }
  ]
}

const STAS_USER = {
  name: 'Стас',
  surname: 'Ващенко',
  age: 22,
  diplomas: ['Младший специалист'],
  coinlistAccounts: [
    { owner: 'Стас', },
    { owner: 'Лена' },
    { owner: 'Саша' }
  ],
  isHadSamsungGalaxyS8: true,
  isHadXiaomi: true,
  cryptoInvestments: [
    {
      currency: 'BTC',
      transactions: [
        { date: new Date(2017, 1, 13), amount: '$100' },
        { date: new Date(2016, 2, 24), amount: '$40' },
        { date: new Date(2022, 3, 13), amount: '$6' },
        { date: new Date(2021, 7, 13), amount: '$67' },
        { date: new Date(2020, 5, 13), amount: '$91' }
      ]
    },
    {
      currency: 'SOL',
      transactions: [
        { date: new Date(2021, 2, 1), amount: '$45' },
        { date: new Date(2021, 1, 12), amount: '$12' },
        { date: new Date(2021, 9, 23), amount: '$9' },
        { date: new Date(2017, 8, 3), amount: '$99' },
        { date: new Date(2022, 3, 24), amount: '$155' }
      ]
    }
  ]
}

const USERS = [NIKITA_USER, STAS_USER]

/*
  1 - используя деструктуризацию "вытащи" из users 
  трех пользователей, если пользователя нету - по умолчанию дай значение 'USER_DOES_NOT_EXIST'
*/ 

const destrFunc1 = (users) => {
  // ...

  console.log('destructuring 1', {
    user1,
    user2,
    user3
  })
}

destrFunc1(USERS)

/*
  2 - вытащи у user - name, surname, age, diplomas
*/

const destrFunc2 = (user) => {
  // ...

  console.log('destructuring 2 for ' + user.name, {
    name,
    surname,
    age,
    diplomas
  })
}

destrFunc2(NIKITA_USER)
destrFunc2(STAS_USER)

/*
  3 - вытащи name, surname, age, diplomas у user, 
  при этом собрав все остальные параметры в restUserData
*/

const destrFunc3 = (user) => {
  // ...

  console.log('destructuring 3 for ' + user.name, {
    name, 
    surname, 
    age, 
    diplomas, 
    restUserData
  })
}

destrFunc3(NIKITA_USER)
destrFunc3(STAS_USER)

/*
  4 - вытащи у user трех питомцев 
  (если нет какого-то питомца, по умолчанию дай значение 'PET_DOES_NOT_EXIST')
  в этой же записи вытащи coinlistAccounts, если такого у пользователя нет -
  по умолчанию дай значение 'COINLIST_ACCOUNTS_DO_NOT_EXIST'
*/

const destrFunc4 = (user) => {
  // ...

  console.log('destructuring 4 for ' + user.name, {
    userPet1,
    userPet2,
    userPet3,
    coinlistAccounts
  })
}

destrFunc4(NIKITA_USER)
destrFunc4(STAS_USER)

/*
  5 - вытащи name первого питомца у user.
  если такого нет - давай по умолчанию значения, чтобы можно было достучаться 
  до поля name первого элемента в массиве pets, если нет имени - дай значение
  по умолчанию - 'PET_NAME_DOES_NOT_EXIST'
*/

const destrFunc5 = (user) => {
  // ...

  console.log('destructuring 5 for ' + user.name, {
    name
  })
}

destrFunc5(NIKITA_USER)
destrFunc5(STAS_USER)

/*
  6 - вытащи у user имена трех аккаунтов c coinlistAccounts,
  сделай так чтобы можно было достучаться до этих элементво даже если coinlistAccounts отсутсвует,
  в конце если нет имени - дай значение по умолчанию - 'COINLIST_ACCOUNT_NAME_DOES_NOT_EXIST'
*/

const destrFunc6 = (user) => {
  // ...

  console.log('destructuring 6 for ' + user.name, {
    userName1,
    userName2,
    userName3
  })
}

destrFunc6(NIKITA_USER)
destrFunc6(STAS_USER)

/*
  7 - вытащи первые три элемента cryptoInvestments у user
  если элемента нет - дай значение по умолчанию 'INVESTMENT_DOES_NOT_EXIST'
*/

const destrFunc7 = (user) => {
  // ...

  console.log('destructuring 7 for ' + user.name, {
    userInvest1,
    userInvest2,
    userInvest3
  })
}

destrFunc7(NIKITA_USER)
destrFunc7(STAS_USER)

/*
  8 - вытащи первую транзакцию 
  (первый элемент в transactions внутри каждого из трех элементов cryptoInvestments)
  если элемента нет - дай значение по умолчанию 'TRANSACTION_DOES_NOT_EXIST'
*/

const destrFunc8 = (user) => {
  // ...

  console.log('destructuring 8 for ' + user.name, {
    userTransaction1,
    userTransaction2,
    userTransaction3
  })
}

destrFunc8(NIKITA_USER)
destrFunc8(STAS_USER)

/* 
  9 - в cryptoInvestments у второго элемента вытащи только третью транзакцию, "пропустив" первые две, 
  и собери все остальные транзакции в otherTransactions
*/

const destrFunc9 = (user) => {
  // ...

  console.log('destructuring 9 for ' + user.name, {
    userTransaction,
    otherUserTransaction
  })
}

destrFunc9(NIKITA_USER)
destrFunc9(STAS_USER)

/*
  10 - вытащи isHadSamsungGalaxyS8, isHadXiaomi, isHadIPhone поля
  если элемента нет - дай значение по умолчанию false
*/

const destrFunc10 = (user) => {
  // ...

  console.log('destructuring 10 for ' + user.name, {
    isHadSamsungGalaxyS8,
    isHadXiaomi,
    isHadIPhone
  })
}

destrFunc10(NIKITA_USER)
destrFunc10(STAS_USER)

/*
  11 - попробуй вытащить сразу в параметрах функции ( на месте "user" )
  тоже самое, что было задано в пунктах 1 и 3 одновременно для всех пользователей
  при этом из-за того что имена свойств будут совпадать, 
  тебе нужно их переименовывать сразу же на ходу (тоже в деструктуризации)
*/

const destrFunc11 = (user) => {

  console.log('destructuring 11', {
    name1,
    name2,
    surname1,
    surname2,
    age1,
    age2,
    diplomas1,
    diplomas2,
    restUserData1,
    restUserData2,
    u3
  })
}

destrFunc11(USERS)

export default {}
