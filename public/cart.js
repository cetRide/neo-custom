function displayCustomDetails(){
    document.getElementById('size').innerHTML = localStorage.getItem('size');
    document.getElementById('heightOne').innerHTML = localStorage.getItem('heightOne');
    document.getElementById('heightTwo').innerHTML = localStorage.getItem('heightTwo');
    document.getElementById('length').innerHTML = localStorage.getItem('length');
    document.getElementById('usage').innerHTML = localStorage.getItem('selectType');
    document.getElementById('board').innerHTML = localStorage.getItem('selectBackBoard');
    document.getElementById('pug').innerHTML = localStorage.getItem('electricPug');
}
setInterval(function () {
    this.displayCustomDetails();
}, 100);
