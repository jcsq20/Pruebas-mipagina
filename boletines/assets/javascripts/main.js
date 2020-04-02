/* 
console.log("Hola mundo");/* print
DOM
let links = document.querySelectorAll("a");
links.forEach(function(link){
    console.log(link);
});recorrer arreglos
  */

/* let celdas= document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener("click",function(){
        console.log(this);
    });
}); */

let links = document.querySelectorAll(".close");

links.forEach(function(link){
    //agregar un evento clicl a cada uno de ellos
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");
        //quitar las clases de animacion
        content.classList.remove("bounceInUp");
        content.classList.remove("animated");
        //agregar las clases pra animar su salidad
        content.classList.add("bounceOutUp");
        content.classList.add("animated");
        
        setTimeout(function(){ /* retardar la aparicion */
             /* location.href = "/"; */
             location.href = "/Mipagina/boletines/";
        },600);
       

        return false;
    });
});
