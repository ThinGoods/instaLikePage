function someFunction() {    
    document.getElementById('outp').textContent = document.querySelector('#inp').value;
    if (!document.querySelector('#inp').value.length) {
        document.getElementById('outp').textContent = "Пусто";
    }
}
let inputValue = document.querySelector('#inp')
inputValue.addEventListener('input', someFunction)