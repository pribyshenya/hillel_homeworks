let textElement = document.getElementById("text");
let colorChangeButton = document.getElementById("color-change-button");
let isTextColorChanged = false;

colorChangeButton.addEventListener("click", () => {
  if (isTextColorChanged) {
    textElement.style.color = "black";
  } else {
    textElement.style.color = "red";
  }
  isTextColorChanged = !isTextColorChanged;
});

let pifagorTable = document.getElementById("pifagor-table");
for (let i = 1; i <= 10; i++) {
  let row = pifagorTable.insertRow();
  for (let j = 1; j <= 10; j++) {
    let cell = row.insertCell();
    cell.textContent = i * j;
  }
}

let imageElement = document.getElementById("image");
let randomImageIndex = Math.floor(Math.random() * 9) + 1;
let imagePath = `images/${randomImageIndex}.jpg`;

imageElement.src = imagePath;
