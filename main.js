
// 1. renk input'unu, 2. renk inputunu seç. Body'yi seç.

let colorOne = document.getElementById("color1");
let colorTwo = document.getElementById("color2");
let body = document.getElementById("gradient");
let currentColor = document.getElementById("mevcutRenk");
let copyBtn = document.getElementById("kopyala");

function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  copyBtn.addEventListener("click",Clipboard_CopyTo);
  

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


  


colorOne.addEventListener("input", changeRenk);
colorTwo.addEventListener("input",changeRenk);