const checkInputStatus = () => {   
    let outputTextElement = document.querySelector('#outp');
    let inputNumberElement = document.querySelector('#inp')
    if (!inputNumberElement.value.length) {
        outputTextElement.textContent = "Пусто";
    } else if (isNaN(inputNumberElement.value)) {
        outputTextElement.textContent = 'Введите число!'  
    } else if (inputNumberElement.value < 500) { 
        outputTextElement.textContent = inputNumberElement.value; 
    } else {
        outputTextElement.textContent = 'Лимит превышен fuck'
    }
}
let inputNumberElement = document.querySelector('#inp')
inputNumberElement.addEventListener('input', checkInputStatus)

const createRedSquare = () => {
    const makeSquare = () => {
        const imgElement = document.createElement('img');
        imgElement.src = 'redSquare.png';
        outputElement.append(imgElement)
    }
    const outputElement = document.querySelector('#outpSquare');
    const numberOfSquares = document.querySelector('#inpNumber').value
    if (numberOfSquares <= 10) {
        for (let i = 0; i < numberOfSquares; i++) {
            makeSquare()
        }
    }
}
let buttonElement = document.querySelector(".buttonOfCreation");
buttonElement.addEventListener('click', createRedSquare);

const one = () => {
    console.log('1');
    setTimeout(two, 3000);
}
const two = () => {
    console.log('2');
    setTimeout(three, 3000);
}
const three = () => {
    console.log('3');
    setTimeout(four, 3000);
}
const four = () => {
    console.log('4');
    setTimeout(five, 3000);
}
const five = () => {
    console.log('5');
    setTimeout(six, 3000);
}
const six = () => {
    console.log('6');
    setTimeout(one, 3000);
}
// setTimeout(one, 3000);