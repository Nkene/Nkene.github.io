function mostrar(juegos){
    console.log("ejecutando");
    iniciar();
    var videos = document.querySelectorAll("." + juegos);
    
    for( let i=0; i<videos.length;i++){
        console.log(i);
        videos[i].style.opacity ="1";
    }
} 
function iniciar(){
    var imagenes = document.querySelectorAll(".juego");
    for(let i=0;i<imagenes.length;i++){
        imagenes[i].style.opacity ="0.2";
    }
} 