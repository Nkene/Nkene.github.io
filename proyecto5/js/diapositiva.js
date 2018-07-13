		function iniciar(){

			console.log("iniciado");
			setTimeout(cargar2,2000);
			setTimeout(cargar3,2000);
			setTimeout(cargar4,2000);
		}
		function cargar2(){
			var imagen = document.getElementById("foto");
			imagen.src ="images/foto2.jpg";
		}
		function cargar3(){
			var imagen =document.getElementById("foto");
			imagen.src = "images/foto3.jpg";
		}
		function cargar4(){
			var imagen =document.getElementById("foto");
			imagen.src = "images/foto5.jpg";
		}