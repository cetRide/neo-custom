function displayCustomDetails() {
    document.getElementById('size').innerHTML = localStorage.getItem('size');
    document.getElementById('heightOne').innerHTML = localStorage.getItem('heightOne');
    document.getElementById('heightTwo').innerHTML = localStorage.getItem('heightTwo');
    document.getElementById('length').innerHTML = localStorage.getItem('length');
    document.getElementById('usage').innerHTML = localStorage.getItem('selectType');
    document.getElementById('board').innerHTML = localStorage.getItem('selectBackBoard');
    document.getElementById('pug').innerHTML = localStorage.getItem('electricPug');
    document.getElementById('price').innerHTML = localStorage.getItem('totalPrice');
    document.getElementById('totalPrice').innerHTML = localStorage.getItem('totalPrice') *1;
    let newText = localStorage.getItem('text').split(',');
    let finalText = "";
    for (let i = 0; i < newText.length; i++) {
        finalText += newText[i] + "<br>";
    }
    document.getElementById('myText').innerHTML = finalText;
    document.getElementById('myText').style.fontSize = '50px';
    // document.getElementById('myText').style.textAlign = localStorage.getItem('alignText');
    document.getElementById('myText').style.fontFamily = localStorage.getItem('font');
    document.getElementById('myText').style.textShadow = localStorage.getItem('glow-color-code');
}

setInterval(function () {
    this.displayCustomDetails();
}, 100);
