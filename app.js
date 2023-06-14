const redRange = document.getElementById("red");
const greenRange = document.getElementById("green");
const blueRange = document.getElementById("blue");
const alphaRange = document.getElementById("alpha");
const colorBox = document.getElementById("colorBox");

const redValue = document.getElementById("redVal");
const greenValue = document.getElementById("greenVal");
const blueValue = document.getElementById("blueVal");
const alphaValue = document.getElementById("alphaVal");

function updateColor() {
  const red = redRange.value;
  const green = greenRange.value;
  const blue = blueRange.value;
  const alpha = alphaRange.value;

  const rgbValue = `RGBA(${red}, ${green}, ${blue}, ${alpha})`;

  colorBox.style.backgroundColor = rgbValue;
  colorBox.textContent = rgbValue;

  redValue.textContent = red;
  greenValue.textContent = green;
  blueValue.textContent = blue;
  alphaValue.textContent = alpha;

  const colorBrightness =
    (Number(red) * 0.299 + Number(green) * 0.587 + Number(blue) * 0.114) / 255;
  const textContrast =
    (1 - Number(alpha)) * Number(colorBrightness) + Number(alpha);

  if (textContrast < 0.5) {
    colorBox.style.color = "black";
  } else {
    colorBox.style.color = "white";
  }
}

redRange.addEventListener("input", updateColor);
greenRange.addEventListener("input", updateColor);
blueRange.addEventListener("input", updateColor);
alphaRange.addEventListener("input", updateColor);

updateColor();
