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
function one () {
    console.log('1');
}
function two () {
    console.log('2');
}
function three () {
    console.log('3');
}
function four () {
    console.log('4');
}
function five () {
    console.log('5');
}
function six () {
    console.log('6');
}
setInterval(one, 3000);
setInterval(two, 3000);
setInterval(three, 3000);
setInterval(four, 3000);
setInterval(five, 3000);
setInterval(six, 3000);