//Este js corrige el  error que se producia en las aplicaciones cuando habia múltiples pestañas y ocultaban los mensajes
function ProsaMargenes(name){
	this.name = name;
}

//var ProsaMargenes = ProsaMargenes || new ProsaMargenesNamespace("ProsaMargenes");

		
$(document).ready(function(){
			//Declaramos las variables 
		 var altoPestanas=$("#ARQpest").height();
		   var margenSuperior=parseInt(altoPestanas)-23;
		   var idMensaje=document.getElementById('ARQPrePestMensajeError');
		   var mensaje=["ARQPrePestMensajeError","ARQFondoMensajeInfoPest","ARQRellenoMensajePest","ARQMensajeGenericoPest","ARQContenMensajePest"];
		   var contenido=["ARQcapaPrincipalPestMensaje","ARQcapaPrincipalPest"];
		   var i;
		   //Creamos la condición para que sumen los espacios ocupados por el desborde de las pestañas
		    if(!idMensaje){
		    	for(i=0;i <= contenido.length;i++){
		    		$("#"+contenido[i]).css('margin-top',+margenSuperior+'px');
		    	}
		    }else{
		    	Array.prototype.push.apply(mensaje, contenido);
		    	for(i=0;i <= mensaje.length;i++){
		    		$("#"+mensaje[i]).css('margin-top',+margenSuperior+'px');
		    	}
		    }
	
});