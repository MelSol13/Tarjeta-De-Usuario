console.log("Bienvenido!")

function saluda() {
    alert("Hola a todas!");
    console.log("Como están?")
}

function sobreNombre(elemento) {
    console.log(elemento);
    elemento.innerText="Elena de Troya";
}

function fueraNombre(h1) {
    h1.innerText= "Melissa Solano";
}

function overButton(boton) {
    boton.innerText= "Estás sobre el botón";//en vez de guion la segunda palabra con mayuscula
    boton.style.backgroundColor = "red";
}

function outButton(boton) {
    boton.innerText= "Botón";
    boton.style.backgroundColor = "purple";
}

function dobleClick(parrafo){
    if(parrafo.innerHTML ==
        `Estudiante de programacion -
    <br>Amante de los perritos`){
        parrafo.innerText="Vacacionista profesional";
    } else {
        parrafo.innerHTML =
        `Estudiante de programacion -
    <br>Amante de los perritos`;
    }
    
    parrafo.style.color = "blue";
}

function eliminar(elemento) {
    elemento.remove();
}

function cambia_nombre() {
    //etiqueta
    //.clase
    //#id
    var etiqueta_h1 = document.querySelector("h1");
     // estoy seleccionando la etiqueta h1
    etiqueta_h1.innerText = "Juana de Arco";

    var etiqueta_h2= document.querySelector(".otro_titulo");
    etiqueta_h2.style.color = "aqua";
}

function cambio_clase() {
    var cuadrado = document.querySelector(".cuadrado");

    //if(cuadrado.classList.contains('azul'))
    //{
    //    cuadrado.classList.remove('azul');
    //    cuadrado.classList.add('amarillo');
    //} else {
    //    cuadrado.classList.remove('amarillo');
    //    cuadrado.classList.add('azul');
    //}

        cuadrado.classList.toggle('azul');
        cuadrado.classList.toggle('amarillo');

}

var num_clicks= 0;

function nuevo_click() {
    num_clicks++;
    var span_clicks = document.querySelector("h3 span");
    span_clicks.innerText = num_clicks;
}

function cambia_imagen(variable_img) {
    variable_img.src = "img/gear.png";
}