

function peso(){

var altura= document.getElementById("alt");
var altur =Number(altura.value);

var pes = document.getElementById("pess");
var pesso = Number(pes.value);
var IMC= pesso/(altur*altur)

var indice = document.getElementById("IMS");
indice.value = IMC;


var textM = document.getElementById("estas");

if (IMC>=25) {
 textM.innerHTML=" Tienes <strong>sobrepeso</strong>";
}else if (IMC<=18.5){
	 textM.innerHTML= " Tienes <strong>infrapeso</strong>"
}else{
	textM.innerHTML= " Tienes <strong>un peso adecuado</strong>"
}
}