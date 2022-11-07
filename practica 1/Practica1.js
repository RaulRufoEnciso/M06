
/* EJ 1 
function canvi(){
    alert("hola mon")
}*/
/* EJ 2 
function canvi(){
    alert("hola mon")
    elemento = document.getElementById("contingut").innerHTML = "Adeu"
}*/
/* EJ 3 
function canvi(){
    alert("hola mon")
    elemento = document.getElementById("contingut").innerHTML = "Adeu"
    document.getElementsByTagName("button")[0].style.background = "purple";

}*/
var i = 0;      // Contador
// Funcion de sumar.
function suma(){
    // Llama al elemento input y le suma 1 al valor existente.
    document.getElementById("input").value = ++i;
}
// Funcion para que el boton haga algo
function boto() {
    var n = document.getElementById('input2').valueAsNumber;
    let total = factorial(n);
    document.getElementById("texto").innerHTML = total; 
}
// Funcion para hacer factoriales
function factorial (n) {
	var total = 1; 
	for (let i=1; i<=n; i++) {
		total = total * i; 
	}
    return total;
}
// Funcion para caluclar letra DNI
function averigua ()
{
cadena="TRWAGMYFPDXBNJZSQVHLCKET"
posicion = formulario.dni.value % 23
letra = cadena.substring(posicion,posicion+1)
document.formulario.dni.value=formulario.dni.value+" - "+letra
}
