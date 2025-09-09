//A continuación se desarrolla la lógica que permite el funcionamiento del programa: Amigo Secreto
//Declaramos el arreglo donde se van a alojar cada uno de los amigos a sortear
let amigos = [];

//Se declara función agregarAmigo, la cual permite agregar nuevos amigos al array
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let botonReiniciar = document.getElementById("reiniciar");
    let listaAmigos    = document.getElementById('listaAmigos');
    let nombre = input.value.trim();

    //Condicional if para validación de nombre vacío
    if (!nombre) {
        alert("Debes ingresar un nombre para agregarlo a la lista");
        input.focus();
        return;
    }

    // Expresion regular para evitar carácteres especiales en el nombre
    const regex = /[0-9@#\/\*\?!¡¿]/;
    if (regex.test(nombre)) {
        alert("No se aceptan carácteres especiales");
        input.focus();
        return;
    }

    // Validación de longitud mínima del nombre ingresado (mínimo 3 carácteres)
    if (nombre.length < 3) {
        alert("Ingresa un nombre con al menos 3 carácteres");
        input.focus();
        return;
    }

    // Con ayuda del método includes se revisa el no ingresar nombres duplicados
    if (amigos.includes(nombre)) {          
        alert("Este nombre ya existe, debes ingresar otro nombre!");
        input.value = '';
        input.focus();
        return;
    }   

    // Validación máxima de amigos, para este caso 20
    if (amigos.length >= 20) {
        alert(`Has alcanzado el número máximo de amigos ${amigos.length}`);
        input.value = '';
        input.focus();
        return;
    }

    botonReiniciar.disabled = false;
    amigos.push(nombre);
    const lista = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
    input.value = '';
    input.focus();
}

// Se lleva a cabo el sorteo con ayuda de Math.random
function sortearAmigo() {
    // Validación para realizar el sorteo con un mínimo de 4 amigos
    if (amigos.length < 4) {
        alert("Debes ingresar al menos 4 nombres para realizar el sorteo");
        return;
    }
    // Se sortea la lista de nombres de amigos
    const indice = Math.floor(Math.random() * amigos.length);
    const nombreElegido = amigos[indice];

    // Se muestra el amigo sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombreElegido}</strong></li>`;
}

// Se reinicia el juego de sorteo de nombres de amigos
function reiniciarJuego(){
    listaAmigos.innerHTML = "";
    resultado.innerHTML="";
    amigos = [];
    botonReiniciar.disabled = true;
    return;
}

