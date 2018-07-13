function validar() {
    console.log("hola");
    var nombre = document.getElementById("nombre").value;
    console.log(nombre);
    var dni = document.getElementById("dni").value;
    console.log(dni);
    var anyo = (document.getElementById("anyo").value);
    console.log(anyo);
    var tlf = document.getElementById("telefono").value;
    console.log(tlf);
    var email = document.getElementById("email").value;
    console.log(email);


    var tfono = document.getElementById("contacto1").checked;
    var mail = document.getElementById("contacto2").checked;
    var correo = document.getElementById("contacto3").checked;

    var html5 = document.getElementById("html").checked;
    var css3 = document.getElementById("css").checked;
    var java1 = document.getElementById("java1").checked;
    var java2 = document.getElementById("java2").checked;
    var trap = document.getElementById("boost").checked;
    var jq = document.getElementById("query").checked;
    var angular = document.getElementById("angular").checked;

    var respuesta = document.getElementById("alerta");
    var final = document.getElementById("confirmar");

    var hoy = new Date();
    var anyoActual = Number(hoy.getFullYear());
    var total = 0;

    var ok = false;

    if (nombre.trim() == "") {
        respuesta.innerHTML ="Por favor introduzca un nombre";
        ok = true;
    }
    if(anyo.trim()==""){
        respuesta.innerHTML ="Por favor introduzca su año de nacimiento";
        ok=true
    }

    if ((anyoActual - anyo) > 18) {
        anyo = Number(anyo);
        console.log(anyoActual - anyo );
    } else {
        respuesta.innerHTML="Usted es menor de edad y no puede realizar ningun curso disponible";
        ok = true;
    }


    if (html5 == false && css3 == false && java1 == false && java2 == false && trap == false && jq == false && angular == false) {
       respuesta.innerHTML= "Por favor escoja algun curso";
        ok = true;
    } else {
        console.log("ok");
    }

    if (html5 == true) {
        total = total + 300;
    }
    if (css3 == true) {
        total = total + 200;
    }
    if (java1 == true) {
        total = total + 500;
    }
    if (java2 == true) {
        total = total + 400;
    }
    if (trap == true) {
        total = total + 200;
    }
    if (jq == true) {
        total = total + 300;
    }
    if (angular == true) {
        total = total + 800;
    }
    if (ok == true){
        final.innerHTML=" Le falta algun campo por rellenar";
    }else{
        final.innerHTML ="El usuario "+ nombre+" ha encontrado cursos por valor de " + total;
    }



}