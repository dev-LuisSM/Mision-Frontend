var checks_sabores = document.querySelectorAll(".check");
for (var i = 0; i < checks_sabores.length; i++)
  checks_sabores[i].onclick = selectiveCheck;

function selectiveCheck(event) {
  var checkedChecks = document.querySelectorAll(".check:checked");
  if (checkedChecks.length >= 4)
    return false;
}

var checks_adorno = document.querySelectorAll(".check-adorno");
for (var i = 0; i < checks_adorno.length; i++)
  checks_adorno[i].onclick = selectiveCheckAdorno;

function selectiveCheckAdorno(event) {
  var checkedChecksAdornos = document.querySelectorAll(".check-adorno:checked");
  if (checkedChecksAdornos.length >= 3)
    return false;
}

// Code from:https://www.learnwithjason.dev/blog/get-form-values-as-json

var imagen = "";

function handleFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const formJSON = Object.fromEntries(data.entries());

  formJSON.sabores = data.getAll('sabores');
  formJSON.adornos = data.getAll('adornos');

  var sabor = JSON.stringify(formJSON.sabores);
  var cubierta = JSON.stringify(formJSON.cubierta);
  var adorno = JSON.stringify(formJSON.adornos);
  var adorno_nombre = JSON.stringify(formJSON.adornos[0]);

  if (sabor == '[]')
    alert("Por favor, selecciona al menos un sabor");
  else if (cubierta == undefined)
    alert("Por favor, selecciona una cubierta");
  else if(adorno == undefined)
    alert("Por favor, selecciona al menos un adorno");
  else {
    imagen = cubierta + adorno_nombre;
    // Remplazar : ""
    imagen = imagen.replace(/['"]+/g, '-');
    imagen = imagen.slice(1, -1);

    document.querySelector('.pastel-imagen').src = `./images/pasteles/${imagen}.png`;
    document.querySelector('.pastel-descripcion').innerHTML = '¡Felicidades! Este es tu pastel seleccionado. Ahora nos toca a nosotros hacerlo realidad.';


    // Poner sabores en form
    // Remplazar: ""
    sabor = sabor.replace(/['"]+/g, ' ');
    // Remplazar: [
    sabor = sabor.replace(/\[/g, '');
    // Remplazar: ]
    sabor = sabor.replace(/\]/g, '');
    document.querySelector('#sabores-form').value = sabor;
    
    // Poner cubiertas en form
    // Remplazar: ""
    cubierta = cubierta.replace(/['"]+/g, '');
    document.querySelector('#cubierta-form').value=cubierta;

    // Poner adorno en form
    // Remplazar: ""
    adorno = adorno.replace(/['"]+/g, ' ');
    // Remplazar: [
    adorno = adorno.replace(/\[/g, '');
    // Remplazar: ]
    adorno = adorno.replace(/\]/g, '');
    document.querySelector('#adorno-form').value = adorno;
  }
}

const form = document.querySelector('.opciones');
form.addEventListener('submit', handleFormSubmit);






