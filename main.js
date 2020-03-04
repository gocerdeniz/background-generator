
// 1. renk input'unu, 2. renk inputunu seç. Body'yi seç.

let colorOne = document.getElementById("color1");
let colorTwo = document.getElementById("color2");
let body = document.getElementById("gradient");
let currentColor = document.getElementById("mevcutRenk");
let copyBtn = document.getElementById("kopyala");



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

function selectText(node) {
  node = document.getElementById(node);

  if (document.body.createTextRange) {
      const range = document.body.createTextRange();
      range.moveToElementText(node);
      range.select();
  } else if (window.getSelection) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(node);
      selection.removeAllRanges();
      selection.addRange(range);
  } else {
      console.warn("Could not select text in node: Unsupported browser.");
  }
  document.execCommand("copy")
}

const clickable = document.querySelector('.click-me');
clickable.addEventListener('click', () => selectText('mevcutRenk'));

  


colorOne.addEventListener("input", changeRenk);
colorTwo.addEventListener("input",changeRenk);