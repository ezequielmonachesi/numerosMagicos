let comenzarJuego = document.querySelector('#comenzarJuego');
let nRandom = 0;

comenzarJuego.addEventListener('click', ()=>{
    nRandom = getRandomIntInclusive(1, 5)
} )

let input = document.querySelector('input[name="numero"]');
let valorInput = 0;
input.addEventListener('click', ()=>{
    valorInput=parseInt(input.value)
});
input.addEventListener('keyup', ()=>{
    valorInput=parseInt(input.value)
});

let enviar = document.querySelector('#enviar');
enviar.addEventListener('click',()=>{
    if(valorInput > nRandom){
        alert('El número que elegiste es mayor!')
    }else if(valorInput < nRandom){
        alert(`El número que elegiste es menor!`)
    }else{
        alert(`Adivinaste el número! Felicidades!`)
    }
}
)

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  