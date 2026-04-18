let puntos = 0;

function sumar(){
  puntos++;
  document.getElementById("puntos").innerText = puntos;
}

function validar1(){
  let r = document.getElementById("respuesta").value.toLowerCase();

  if(r.includes("seres vivos")){
    document.getElementById("msg").innerText = "✅ Correcto";
  } else {
    document.getElementById("msg").innerText = "❌ Intenta otra vez";
  }
}

function correcto(){
  document.getElementById("msg").innerText = "✅ Bien hecho";
}

function incorrecto(){
  document.getElementById("msg").innerText = "❌ Incorrecto";
}
