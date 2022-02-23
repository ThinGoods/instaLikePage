function someFunction() {   
    let divOutput = document.getElementById('outp');
    let inputRow = document.querySelector('#inp')
    // document.getElementById('outp').textContent = document.querySelector('#inp').value;
    if (!inputRow.value.length) {
        divOutput.textContent = "Пусто";
    } else if (!isNaN(inputRow.value)) {
        divOutput.textContent = inputRow.value;
    } else { divOutput.textContent = 'Введите число!' }
}
let inputValue = document.querySelector('#inp')
inputValue.addEventListener('input', someFunction)





/*function someFunction() {    
    document.getElementById('outp').textContent = document.querySelector('#inp').value;
    if (!document.querySelector('#inp').value.length) {
        document.getElementById('outp').textContent = "Пусто";
    }
}*/