function expande(id){
	
	document.getElementById("modal_"+id).style.display = "block" ;
	document.getElementById("campoExtendido_"+id).style.display = "block" ;
	document.getElementById("original_"+id).style.display = "none" ;
	
	document.getElementById("txtAreaCampoExt_"+id).value = document.getElementById(id).value  ;
	
	return false;
	 
}


function cancelar(id, aviso, mensajeAviso){
	
		if(aviso == "SI"){
			if(confirm(mensajeAviso)){
				document.getElementById("modal_"+id).style.display = "none" ;
				document.getElementById("campoExtendido_"+id).style.display = "none" ;		
				document.getElementById("original_"+id).style.display = "block" ;
				
				document.getElementById("txtAreaCampoExt_"+id).value = ""  ;
			};
		}else{
				document.getElementById("modal_"+id).style.display = "none" ;
				document.getElementById("campoExtendido_"+id).style.display = "none" ;		
				document.getElementById("original_"+id).style.display = "block" ;
				
				document.getElementById("txtAreaCampoExt_"+id).value = ""  ;
			}
}

function aceptarGuardar(id){
	
	var valor='';
	valor = document.getElementById("txtAreaCampoExt_"+id).value  ;
	
	document.getElementById("txtAreaCampoExt_"+id).value = ""  ;	
	
	document.getElementById(id).value=valor;
	
	document.getElementById("campoExtendido_"+id).style.display = "none" ;
	document.getElementById("modal_"+id).style.display = "none" ;
	document.getElementById("original_"+id).style.display = "block" ;
}
