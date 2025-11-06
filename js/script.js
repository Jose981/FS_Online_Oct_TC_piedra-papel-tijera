//Declaracion de variables
const tijera = document.getElementById('tijera')
const piedra=document.getElementById('piedra')
const papel=document.getElementById('papel')


//Declaracion de los contadores
const contadorUsuario=document.getElementById('contador-usuario')
const contadorMaquina=document.getElementById('contador-ordenador')

let sumaUsuario=0
let sumaMaquina=0
const mostrarResultado = document.getElementById('resultados');

tijera.addEventListener('click', function() {
    mostrarResultado.innerHTML = "";
    let h1=document.createElement('h1')
    h1.innerText=jugada('tijera')
    mostrarResultado.appendChild(h1)
    contadorUsuario.innerText="Tus puntos: "+sumaUsuario
    contadorMaquina.innerText="Puntos de la Máquina: "+sumaMaquina

})

piedra.addEventListener('click', function() {
    mostrarResultado.innerHTML = "";
    let h1=document.createElement('h1')
    h1.innerText=jugada('piedra')
    mostrarResultado.appendChild(h1)
    contadorUsuario.innerText="Tus puntos: "+sumaUsuario
    contadorMaquina.innerText="Puntos de la Máquina: "+sumaMaquina
})

papel.addEventListener('click', function() {
    mostrarResultado.innerHTML = "";
    let h1=document.createElement('h1')
    h1.innerText=jugada('papel')
    mostrarResultado.appendChild(h1)
    contadorUsuario.innerText="Tus puntos: "+sumaUsuario
    contadorMaquina.innerText="Puntos de la Máquina: "+sumaMaquina
})

function jugada(seleccionUsuario){
    let opciones=['piedra','papel','tijera']
    let numeroMaquina = Math.floor(Math.random()*3);
    let eleccionMaquina= opciones[numeroMaquina];
    switch (seleccionUsuario){
        case 'tijera':
            if(eleccionMaquina === 'papel'){
                sumaUsuario += 1;
                return "Has ganado";
            }else if(eleccionMaquina === 'piedra'){
                sumaMaquina += 1;
                return "Has perdido"
            }else{
                return "Empate";
            }
        case 'papel':
            if(eleccionMaquina === 'piedra'){
                sumaUsuario+=1
                return "Has ganado";
            }else if(eleccionMaquina ==='tijera'){
                sumaMaquina+=1
                return "Has perdido";
            }else{
               return "Empate";
            }
        case 'piedra':
            if(eleccionMaquina === 'tijera'){
                sumaUsuario += 1;
                return "Has ganado";
            }else if(eleccionMaquina ==='papel'){
                sumaMaquina += 1;
                return "Has perdido";
            }else{
                return "Empate";
            }
        default:
           return "opcion no valida"
    }
}
