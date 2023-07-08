//Funcion que devuelve un entero random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  //Funcion que obtiene la jugada de la computadora
  function obtenerJugadaComputadora() {
    const valores = ['Piedra', 'Papel', 'Tijeras'];
    let resultado = valores[getRandomInt(3)];
    return resultado
  }
  
  //Funcion para obtener la jugada del usuario
  function obtenerJugadaUsuario() {
    const readlineSync = require('readline-sync');
    const seleccion = readlineSync.question('Por favor, elija entre piedra, papel o tijeras: ');
    return seleccion
    
  }
  //Funcion para determinar ganador
  function determinarGanador(selUsuario, selComputador){
    const valores = ['piedra', 'papel', 'tijeras'];
    let valUsuario=valores.indexOf(selUsuario.toString().toLowerCase())
    let valComputador=valores.indexOf(selComputador.toString().toLowerCase())
    let resultado=""
    if(valUsuario>valComputador){
        resultado="Gana Usuario"
    }
        else
        if(valUsuario<valComputador){
            resultado="Gana Computadora"
        }
        else
        resultado="Empate"

    return resultado;
  }
  
  //Llamamos funcion de computadora
  let compu=obtenerJugadaComputadora();
  //Llamamos funcion de usuario
  let usu=obtenerJugadaUsuario();
  //Determinamos al ganador
  let ganador=determinarGanador(usu,compu);
  //Mostramos por pantalla
  console.log("La computadora eligio: "+compu+".")
  console.log("El usuario eligio: "+usu+".")
  console.log("El resultado fue: "+ganador+".")
