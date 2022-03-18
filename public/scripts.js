// let outputValue = document.querySelector('#outp')
// outputValue.innerHTML = '<img src="../images/redSquare.png" alt="не загрузилось"/>'
function someFunction() {   
    let divOutput = document.getElementById('outp');
    let inputRow = document.querySelector('#inp')
    // document.getElementById('outp').textContent = document.querySelector('#inp').value;
    if (!inputRow.value.length) {
        divOutput.textContent = "Пусто";
    } else if (isNaN(inputRow.value)) {
        divOutput.textContent = 'Введите число!'  
    } else if (inputRow.value < 500) { 
        divOutput.textContent = inputRow.value; 
    } else {
        divOutput.textContent = 'Лимит превышен fuck'
    }
}
let inputValue = document.querySelector('#inp')
inputValue.addEventListener('input', someFunction)

let buttonOfCreationValue = document.querySelector(".buttonOfCreation");
buttonOfCreationValue.addEventListener('click', createRedSquarefnct);

function createRedSquarefnct() {

    const makeSquare = () => {
        let img = document.createElement('img');
        img.src = 'redSquare.png';
        outputValue.append(img)
    }
    const outputValue = document.querySelector('#outpSquare');
    const numberOfSquares = document.querySelector('#inpNumber').value
    if (numberOfSquares <= 10) {
        for (let i = 0; i < numberOfSquares; i++) {makeSquare()}
    }
    // let img = document.createElement('img');
    // img.src = 'redSquare.png';
    // console.log(img);
    // outputValue.append(img)
}

// const outputValue = document.querySelector('#outp');
// let img = document.createElement('img');
// img.src = 'redSquare.png';
// outputValue.append(img)

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/*function someFunction() {    
    document.getElementById('outp').textContent = document.querySelector('#inp').value;
    if (!document.querySelector('#inp').value.length) {
        document.getElementById('outp').textContent = "Пусто";
    }
}*/
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
