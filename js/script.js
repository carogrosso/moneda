var boton = document.getElementById("btn");
var imagen = document.getElementById("image");
var txt = document.getElementById("txt");

boton.addEventListener("click", () => {
    imagen.src = "img/loading.gif";
    txt.innerHTML = "La moneda está girando...";
    setTimeout(function () {
    var numeroRandom = Math.round(Math.random() * (1-0)+1);
    if (numeroRandom == 1){
        console.log ("cara")
        txt.innerHTML = "Cara"
        image.src = "img/cara.png"
    } else {
        console.log ("ceca")
        txt.innerHTML = "Ceca"
        image.src = "img/ceca.png"
    }
}, 1000);
});