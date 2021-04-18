let colorPickerOne = new iro.ColorPicker(".color-picker-one", {
  width: 100,
  color: "#70FFD7"
});

let colorPickerTwo = new iro.ColorPicker(".color-picker-two", {
  width: 100,
  color: "#639FFF"
});

let colorPickerThree = new iro.ColorPicker(".color-picker-three", {
  width: 100,
  color: "#FFA8B0"
});

// GET COLOR PICKER ONE
function onColorChangeOne(color) {
  const corHex = color.hexString;
  document.querySelector(".one").style.backgroundColor = corHex;
  showOutputColor(0, corHex);
}

colorPickerOne.on("color:change", onColorChangeOne);
colorPickerOne.on("color:init", onColorChangeOne);

// GET COLOR PICKER TWO
function onColorChangeTwo(color) {
  const corHex = color.hexString;
  document.querySelector(".two").style.backgroundColor = corHex;
  showOutputColor(1, corHex);
}

colorPickerTwo.on("color:change", onColorChangeTwo);
colorPickerTwo.on("color:init", onColorChangeTwo);

// GET COLOR PICKER THREE
function onColorChangeThree(color) {
  const corHex = color.hexString;
  document.querySelector(".three").style.backgroundColor = corHex;
  showOutputColor(2, corHex);
}

colorPickerThree.on("color:change", onColorChangeThree);
colorPickerThree.on("color:init", onColorChangeThree);

// SHOW OUTPUT COLOR
function showOutputColor(indice, cor) {
  const outputColor = document.querySelectorAll("[date-color]")[indice];
  outputColor.innerText = cor.toUpperCase();
}

// SHOW COLOR PICKER
const getNewColor = document.querySelectorAll("[date-new-color]");

function getColor() {
  // ADD OR REMOVE CLASS ACTIVE TO COLOR PICKER
  const currentTarget = this.parentElement.nextElementSibling;
  currentTarget.classList.toggle("active");
}

getNewColor.forEach(newColor => {
  newColor.addEventListener("click", getColor);
});

const clipBoardElements = document.querySelectorAll("[date-color]");

function copyToClipBoard() {
  const idCurrentElement = this.getAttribute("id");
  const currentElement = document.getElementById(idCurrentElement);

  if (window.getSelection) {
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(currentElement);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
  }
}

clipBoardElements.forEach(element => {
  element.addEventListener("click", copyToClipBoard);
});

// ACTIVE CLIPBOARD MESSAGE
const allBoxMessages = document.querySelectorAll("[date-color]");

const showMessageClipboard = function(event) {
  const clipboardElement = this.parentElement.nextElementSibling
    .nextElementSibling;
  clipboardElement.classList.add("active");
  setTimeout(() => {
    clipboardElement.classList.remove("active");
  }, 1500);
};

allBoxMessages.forEach(elements => {
  elements.addEventListener("click", showMessageClipboard);
});

// ON LOAD MESSAGE

let numDataPercentage = 0;
const dataPercentage = document.querySelector("[data-percentage]");
const closeMessage = document.querySelector(".message-to-copy");
setInterval(() => {
  if (numDataPercentage < 100) {
    numDataPercentage++;
    dataPercentage.innerText = numDataPercentage + "%";
    if (numDataPercentage === 100) {
      setTimeout(() => {
        closeMessage.style.display = "none";
      }, 500);
    }
  }
}, 30);
