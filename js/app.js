let codigos = [];

function codigoAleatorio() {
  let numero = Math.round(Math.random() * (99999999 - 10000000) + 10000000);

  //Con numeros mas pequeños: mas chances para probar el else y la no repetición
  //let numero = Math.round(Math.random() * (1000 - 100) + 100);

  if (codigos.indexOf(numero) === -1) {
    codigos.push(numero);
    document.write(`${numero} <br>`);
    //console.log(codigos);
    return;
  } else {
    console.log("hola");
    codigoAleatorio();
  }
}

//Creo 30 codigos aleatorios
for (i = 0; i < 30; i++) {
  codigoAleatorio();
}
