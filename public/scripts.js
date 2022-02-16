function someAction() {

    let x = document.getElementById('inp').value


    // console.log(x);
    
    if (document.getElementById('inp').value != "") {
        document.getElementById('outp').innerHTML = x



        document.getElementById('inp').value = ""
    } else {
        document.getElementById('outp').innerHTML = ""
    }
}