    //<!-- let nombre=rompt("ingrese un nombre")-->
    //<!-- alert("ingresar el nombre : +nombre")-->


   

let mess = prompt("Ingrese el nombre de un mes (en minúsculas): ");

if (mess === "enero" || mess === "marzo" || mess === "mayo" || mess === "julio" || mess === "agosto" || mess === "octubre" || mes === "diciembre") {
  alert("Este mes tiene 31 días");
} else if (mess === "febrero") {
  let esBisiesto = confirm("¿Es un año bisiesto?");
  if (esBisiesto) {
    alert("Este mes tiene 29 días");
  } else {
    alert("Este mes tiene 28 días");
  }
} else if (mess === "abril" || mess === "junio" || mess === "septiembre" || mess=== "noviembre") {
  alert("Este mes tiene 30 días");
} else {
  alert("Eso no es un mes válido");
}

let mes = prompt("Ingrese el nombre de un mes (en minúsculas): ");

switch (mes) {
  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre":
    alert("Este mes tiene 31 días");
    break;
  case "febrero":
    alert("Este mes tiene 28 dias");
    break;
 let esBisiesto = confirm("¿Es un año bisiesto?");
    if (esBisiesto) {
      alert("Este mes tiene 29 días");
    } else {
      alert("Este mes tiene 28 días");
    }
    break;
  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    alert("Este mes tiene 30 días");
    break;
  default:
    alert("Eso no es un mes válido");
    break;
}