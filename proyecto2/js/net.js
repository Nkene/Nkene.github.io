function mostrar(){
    var N = document.getElementById("no").value;
    
    if (N=="BATMAN") {
        alert("¿Donde esta robin?");
    } else {
        console.log("Nombre" + N); 
    }

    var A = document.getElementById("p1").checked;
    var M = document.getElementById("p2").checked;
    if (A==true) {
        console.log("Pago anual");
    } else {
        console.log("Pago mensual");
    }

    var s1=document.getElementById("ser1").checked;
    var s2=document.getElementById("ser2").checked;
    var s3=document.getElementById("ser3").checked;
    if(s1==true){
        console.log("Series");
    }
    if(s2==true){
        console.log("Peliculas");
    }
    if(s3==true){
        alert("A ti te gustan los ultrasaurios");
        console.log("Documentales");
    }

    var fe= document.getElementById("F").value;
        console.log("fecha"+fe);

    
    var pe= document.getElementById("p").value;
        
        if (pe=="Mordor") {
            alert(" Antombo te va a matal");
        } else {
            console.log("Su nacionalidad es" + pe); 
        }
    var U= document.getElementById("usu").value;
        if (U=="5") {
            alert("5 rima con brinco")
        } else {
            console.log("El numero de usuarios es"+U); 
        }
        

    var color = document.getElementById("colorFondo").value;
    document.body.style.backgroundColor=color;
}