function expandeEnriq(id){

	document.getElementById("modal_"+id).style.display = "block" ;
	document.getElementById("campoExtendido_"+id).style.display = "block" ;
	document.getElementById("original_"+id).style.display = "none" ;
	
	
	// Se obtiene el texto del iframe original y se guarda en una variable
	var iframe1 = document.getElementById(id+"_html"); 
	var doc1; 
	var valor1;
	if(iframe1.contentDocument) { 
	    doc1 = iframe1.contentDocument; 
	} else {
	    doc1 = iframe1.contentWindow.document; 
	}
	valor1=doc1.body.innerHTML
	
	//Se obtiene el iframe destino y se guarda el texto obtenido
	var iframe2 = document.getElementById("txtAreaCampoExt_"+id+"_html"); 
	var doc2; 
	if(iframe2.contentDocument) { 
	    doc2 = iframe2.contentDocument; 
	} else {
	    doc2 = iframe2.contentWindow.document; 
	}
	doc2.body.innerHTML=valor1;
	
	document.getElementById("muestraExpandir_" + id).value = "0" ;
	document.getElementById("botonImag").style.display = "none";
	
	document.getElementById("txtAreaCampoExt_"+id+"_html").style.width='100%';
	document.getElementById("txtAreaCampoExt_"+id+"_html").style.height='100%';
	
	//modificacion del div del iframe en tamaño	
	var div=document.getElementById("campoExtendido_"+id).firstElementChild.children[1];
	div.style.width='100%';
	div.style.height='93%';
	
	//modificacion del iframe en tamaño
	var div=document.getElementById("campoExtendido_"+id).firstElementChild.children[1].firstElementChild;
	div.style.width='100%';
	div.style.height='95%';
	
	//modificacion de la tabla
	var tabla=document.getElementById("txtAreaCampoExt_"+id+"_wrap");
	tabla.style.height='100%';
	
	var td=document.getElementById("txtAreaCampoExt_"+id+"_container");	
	td.style.height='95%';
	
	return false;
	 
}


function cancelarEnriq(id, aviso, mensajeAviso){
	
	if(aviso == "SI"){
		if (confirm(mensajeAviso)){
			
			document.getElementById("modal_"+id).style.display = "none" ;
			document.getElementById("campoExtendido_"+id).style.display = "none" ;		
			document.getElementById("original_"+id).style.display = "block" ;
			
			document.getElementById("txtAreaCampoExt_"+id).value = ""  ;
			document.getElementById("muestraExpandir_" + id).value = "1" ;
			document.getElementById("botonImag").style.display = "block";
		};
	}else{
		
		document.getElementById("modal_"+id).style.display = "none" ;
		document.getElementById("campoExtendido_"+id).style.display = "none" ;		
		document.getElementById("original_"+id).style.display = "block" ;
		
		document.getElementById("txtAreaCampoExt_"+id).value = ""  ;
		document.getElementById("muestraExpandir_" + id).value = "1" ;
		document.getElementById("botonImag").style.display = "block";
	}
	
}
 
function aceptarGuardarEnriq(id){
	
	// Se obtiene el texto del iframe original y se guarda en una variable
	var iframe1 = document.getElementById("txtAreaCampoExt_"+id+"_html"); 
	var doc1; 
	var valor1;
	if(iframe1.contentDocument) { 
	    doc1 = iframe1.contentDocument; 
	} else {
	    doc1 = iframe1.contentWindow.document; 
	}
	valor1=doc1.body.innerHTML
	doc1.body.innerHTML='';
	
	//Se obtiene el iframe destino y se guarda el texto obtenido
	var iframe2 = document.getElementById(id+"_html");  
	var doc2; 
	if(iframe2.contentDocument) { 
	    doc2 = iframe2.contentDocument; 
	} else {
	    doc2 = iframe2.contentWindow.document; 
	}
	doc2.body.innerHTML='';
	doc2.body.innerHTML=valor1;
	
	document.getElementById("campoExtendido_"+id).style.display = "none" ;
	document.getElementById("modal_"+id).style.display = "none" ;
	document.getElementById("original_"+id).style.display = "block" ;
	document.getElementById("muestraExpandir_" +id).value = "1" ;
	document.getElementById("botonImag").style.display = "block";
	
	document.getElementById(id+"_container").style.height='100%';
	document.getElementById(id+"_html").style.height='100%';
	document.getElementById(id+"_html").style.width='100%';
	
}
