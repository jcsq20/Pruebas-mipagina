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
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");

        content.classList.remove("bounceInUp");
        content.classList.remove("animated");

        content.classList.add("bounceOutUp");
        content.classList.add("animated");
        
        setTimeout(function(){ /* retardar la aparicion */
             location.href = "/";
        },600);
       

        return false;
    });
});
