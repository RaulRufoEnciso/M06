function camColdiv(){
    let elemento = document.getElementById("recValue").value;
    document.getElementById("llista").children[elemento].style.backgroundColor = "red";
}
function borraCol(){
    let lista = document.getElementById("llista").children;
    for (let i= 0; i < lista.length; i++) {
        document.getElementById("llista").children[i].style.backgroundColor = "white";
    }
}
function min(){
    
    let lista = document.getElementById("llista").children;
    let min = parseInt(lista[0].textContent);
    let index = 0;
    for (let i= 0; i < lista.length; i++) {
        if (parseInt(lista[i].textContent)< min){
            min = parseInt(lista[i].textContent);
            index = i;
        }

    }
    lista[index].style.backgroundColor = "yellow";
}
function max(){
    let lista = document.getElementById("llista").children;
    let max = parseInt(lista[0].textContent);
    let index = 0;
    for (let i= 0; i < lista.length; i++) {
        if (parseInt(lista[i].textContent)> max){
            min = parseInt(lista[i].textContent);
            index = i;
        }

    }
    lista[index].style.backgroundColor = "yellow";
}