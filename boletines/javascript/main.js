let links = document.querySelectorAll(".close");

links.forEach(function(link){
    link.addEventListener("click", function(ev){
        ev.preventDefault();

        let content = document.querySelector(".content");

        //Quitar las clases de animacion
        content.classList.remove("animate__zoomIn");
        content.classList.remove("animate__animated");

        //Colocar las clases de animacion
        content.classList.add("animate__zoomOut"); 
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href = "../";
        }, 400)

        
    });
    return false;
});

let lista = document.querySelectorAll(".info");

lista.forEach(function(a){
        a.addEventListener("click", function(ev){
        let content = document.querySelector(".content");

        //Quitar las clases de animacion
        content.classList.remove("animate__zoomIn");
        content.classList.remove("animate__animated");

        //Colocar las clases de animacion
        content.classList.add("animate__zoomOut"); 
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href = "../";
        }, 400)

    });
});