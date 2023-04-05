let comenzarJuego = document.querySelector("#comenzarJuego");
let form = document.querySelector(`form`);
let nRandom = 0;
let valorInput;
comenzarJuego.addEventListener("click", () => {
  nRandom = getRandomIntInclusive(1, 5);
});
form.addEventListener("submit", numeroMagico);
function numeroMagico(e) {
  e.preventDefault();
  let input = document.querySelector("input");
  valorInput = input.value;
  if (valorInput > nRandom) {
    alert("El número que elegiste es mayor!");
  } else if (valorInput < nRandom) {
    alert(`El número que elegiste es menor!`);
  } else {
    alert(`Adivinaste el número! Felicidades!`);
  }
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
