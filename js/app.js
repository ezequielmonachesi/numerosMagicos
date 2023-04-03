let comenzarJuego = document.querySelector('#comenzarJuego');
let nRandom = 0;

comenzarJuego.addEventListener('click', ()=>{
    nRandom = Math.floor(Math.random() * 5) + 1;
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