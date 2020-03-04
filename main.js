
// 1. renk input'unu, 2. renk inputunu seç. Body'yi seç.

let colorOne = document.getElementById("color1");
let colorTwo = document.getElementById("color2");
let body = document.getElementById("gradient");
let currentColor = document.getElementById("mevcutRenk");



// Renk değiştir
function changeRenk() {
    body.style.background = 
    "linear-gradient(to right, "
    + colorOne.value
    + ", "
    + colorTwo.value
    + ")";

    currentColor.innerHTML = body.style.background +";";
}


function kopyala() {
    
}




colorOne.addEventListener("input", changeRenk);
colorTwo.addEventListener("input",changeRenk);