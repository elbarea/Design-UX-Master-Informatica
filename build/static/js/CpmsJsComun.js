
/**
 * Función que solo permite ingresar número en un input.
 */

function soloNumeros(e){	
	// obtenemos la tecla pulsada
	  var unicode=e.keyCode? e.keyCode : e.charCode;
	  
	// Permitimos las siguientes teclas también:
      // 8 backspace
      // 46 suprimir
	  // 13 enter
	  // 9 tabulador
	  // 37 izquierda
	  // 39 derecha
	  // 38 subir
	  // 40 bajar
 		  
	return ((unicode >= 48 && unicode <=57) || 
			 unicode==8 || 
			 unicode==46 || 
			 unicode==13 || 
			 unicode==9 || 
			 unicode==37 || 
			 unicode==39 || 
			 unicode==38 || 
			 unicode==40);
}


/**
 Si el campo está activo devuelve true
 * @param idCampoCheck
 * @returns true si activo false si no
 */
function esCampoActivo(idCampo){
		
	var checkDisabled = document.getElementById(idCampo).disabled;
	
	var resultado = "1";
	if (false == checkDisabled){
		resultado = "0";
	}
	
	return resultado;
}

/**
 * Si el radio esta activo habilita el textArea asignado.
 * @param idTextArea: atributo ID del campo textArea que se debe habilitar o no.
 * @param isActive: boolean que determina si se activa o desactiva.
 */

function actDesactCampoDesdeRadio(idTextArea, isActive) {
	if(isActive) {
		document.getElementById(idTextArea).disabled = "";
	} else {
		document.getElementById(idTextArea).value = "";
		document.getElementById(idTextArea).disabled = "disabled";
	}
}

/**
Si el check esta activo entonces habilita el campo
* @param idCampoCheck
* @param idCampoActDesact
*/
function activarDesativarCampoDesdeCheck(idCampoCheck, idCampoActDesact){
	
	//alert(idCampoCheck);
	//alert(idCampoActDesact);
	var check = document.getElementById(idCampoCheck).checked;
	//alert(check);
	
	
	if (true == check){
		//alert('disabled no');
		document.getElementById(idCampoActDesact).disabled = "";
	}
	if (false == check){
		//alert('disabled si');
		document.getElementById(idCampoActDesact).value = "";
		document.getElementById(idCampoActDesact).disabled = "disabled";
	}
}


/**
* 
* Si el check esta activo entonces deshabilita el campo
* @param idCampoCheck
* @param idCampoActDesact
*/
function desactivarActivarCampoDesdeCheck(idCampoCheck, idCampoActDesact){
	
	if(document.getElementById(idCampoCheck) != null){
		
		//alert(idCampoCheck);
		//alert(idCampoActDesact);
		var check = document.getElementById(idCampoCheck).checked;
		//alert(check);
					
		if (true == check){
			//alert('disabled si');
			document.getElementById(idCampoActDesact).value = "";
			document.getElementById(idCampoActDesact).disabled = "disabled";
			
		}
		if (false == check){
			//alert('disabled no');
			document.getElementById(idCampoActDesact).disabled = "";
		}
	}
}

/**
 * 
 * @param idCampoCombo
 * @param valorCombo
 * @param idCampoActDesact
 */
function activarDesativarCampoDesdeCombo(idCampoCombo, valorCombo, idCampoActDesact){
	
	var combo = document.getElementById(idCampoCombo);
	
	if(combo != null){
		
		var indiceSeleccionado = combo.selectedIndex;
		var opcionSeleccionada = combo.options[indiceSeleccionado];
		var valorSeleccionado = opcionSeleccionada.value;
		
		if (valorSeleccionado == valorCombo){
			document.getElementById(idCampoActDesact).disabled = "";
		}
		if (valorSeleccionado != valorCombo){
			document.getElementById(idCampoActDesact).value = "";
			document.getElementById(idCampoActDesact).disabled = "disabled";
		}
		
	}

	
}
/**
 * Función que límita el número de caracteres de un objeto input de tipo texto
 * @param e - evento
 * @param contenido - texto del control
 * @param caracteres - límite de caracteres del control
 */	
 function limitar(e, contenido, caracteres) {
	 // obtenemos la tecla pulsada
	  var unicode=e.keyCode? e.keyCode : e.charCode;

	  // Permitimos las siguientes teclas:
      // 8 backspace
      // 46 suprimir
	  // 13 enter
	  // 9 tabulador
	  // 37 izquierda
	  // 39 derecha
	  // 38 subir
	  // 40 bajar

	  if(unicode==8 || unicode==46 || unicode==13 || unicode==9 || unicode==37 || unicode==39 || unicode==38 || unicode==40)
		  return true;

	  // Si ha superado el limite de caracteres devolvemos false
	  if(contenido.length>=caracteres)
		  return false;
	  return true;
 }	
/**
 * Función que trunca el texto al tamaño máximo 
 * @param texto - texto del control
 * @param maxlong - límite de caracteres del control
 */	
function remplazaMaximaLongitud(texto, maxlong) {
	
	var out_value;
	
	if (texto.value.length > maxlong) {
		
		// Truncamos el texto al tamaño máximo indicado
		in_value = texto.value;
		out_value = in_value.substring(0,maxlong);
		texto.value = out_value;
		
	}

	return true;

}


//Funcion que inserta los separadores de fechas cuando se rellena un input de tipo fecha
//Parametros: sElement 'el elemento del formulario'
function autoCompletarFecha(sElement)
{ 
	var key = window.event.keyCode;
	
	//si no es numero 
	if (key < 48 || key > 57)
	{
		//anula la entrada de texto. 
		window.event.keyCode = 0;			
	
	}
	else
	{
		if(sElement != null  &&  sElement != "" && 
		   sElement.form != null  &&  sElement.form != "")		
		{				
			if(sElement.name != null  &&  sElement.name != "" && 
			   sElement.form.id != null  &&  sElement.form.id != "")				
			{				
				var cajaFecha = eval(sElement.form.id + "." + sElement.name);
				if(cajaFecha != null  &&  cajaFecha != "" && 
				   cajaFecha.value != null)
				{		
					if(cajaFecha.value.length < 10)
					{
						var posCur = parseInt(getSelectionStart(cajaFecha));																						
						cajaFecha.value = cambiarSlashACF(cajaFecha.value, posCur, key);										
						//if(cajaFecha.value.length == 2  ||  cajaFecha.value.length == 5) 
						//	cajaFecha.value = insertarSlashACF(cajaFecha.value);	
						muevePosicionCursorACF(sElement,posCur,cajaFecha.value);																						
					}
					else if(key >= 48 && key <= 57)
						window.event.keyCode = 0;			
				}
			}
		}
	}

}

/////////////////////////////////////////////////////////////////////
//Funcion que concatena cuando corresponde al valor un 
//separador con el caracter que se ha pulsado
//Parametros: sValor 'valor del campo de texto'
//			   , sPosCur 'de 0 a 10'   			      
//			   , sKey 'el codigo de la tecla pulsada'
function cambiarSlashACF(sValor, sPosCur, sKey )
{
	
	var sCharCode = String.fromCharCode(sKey);
		
	var valorFecha = "";
	var fecha = sValor.split("/");
	var llenoDia = false, llenoMes = false, llenoAnio = false;
	for(x = 0; x < fecha.length; x++)
	{				
		if(x == 0  &&  fecha[x].length == 2)
		{
			llenoDia = true;		
		}
		else if(x == 1  &&  fecha[x].length == 2)
		{
			llenoMes = true;		
		}	
		else if(x == 2  &&  fecha[x].length == 4)
		{
			llenoAnio = true;		
		}			
	}						
			
	if(!(llenoDia  &&  llenoMes  &&  llenoAnio))
	{

		var valorFechaSinSlash = replaceAll(sValor,"/","");			
		var teclaCorrecta = true;	
		if ((sPosCur == 0) && !( sKey >= 48 && sKey <= 51))
			teclaCorrecta = false;
		else if ((sPosCur == 2 || sPosCur == 3) && !( sKey >= 48 && sKey <= 49))
			teclaCorrecta = false;			
		else if ((sPosCur == 5 || sPosCur == 6) && !( sKey >= 49 && sKey <= 50))
			teclaCorrecta = false;		
		else if ((sPosCur == 7)){
			if(valorFechaSinSlash.charAt(4) == "1" && sKey != 57){
				teclaCorrecta = false;
			} else if (valorFechaSinSlash.charAt(4) == "2" && sKey != 48){
				teclaCorrecta = false;
			}
		}
							
		
		if(valorFechaSinSlash.length < 8  && teclaCorrecta)
		{	
			if(sPosCur > 2  &&  sPosCur <= 5)
			{
				if( (sValor.indexOf("/") != sValor.lastIndexOf("/")) &&
				     sValor.indexOf("/") != -1)				
						sPosCur --;		
				else if( (sValor.indexOf("/") != sValor.lastIndexOf("/")) &&
				    sValor.lastIndexOf("/") != -1)
						sPosCur --;													
			}
			else if(sPosCur > 5)
			{
						
				if( (sValor.indexOf("/") == sValor.lastIndexOf("/")) &&
				    sValor.indexOf("/") != -1)
						sPosCur --;					
				if( (sValor.indexOf("/") != sValor.lastIndexOf("/"))  &&
					    sValor.indexOf("/") != -1	&&
					    sValor.lastIndexOf("/") != -1)
						sPosCur -=2;			
														
			}		
			
			valorFecha = valorFechaSinSlash.substring(0, sPosCur);					
			valorFecha += String(sCharCode);	
			valorFecha += valorFechaSinSlash.substring(sPosCur);						
		}	
		else
			valorFecha = sValor;
			
		if( valorFecha.length > 2   &&  
			(valorFecha.indexOf("/") == valorFecha.lastIndexOf("/")) &&
			valorFecha.indexOf("/") != 2)
				valorFecha = insertarSlashACF(valorFecha.substring(0, 2)) + valorFecha.substring(2);			
		if( valorFecha.length > 5  &&  
			(valorFecha.indexOf("/") == valorFecha.lastIndexOf("/")) )
		{
			var posSlash = 5;			
			valorFecha = insertarSlashACF(valorFecha.substring(0, posSlash)) + valorFecha.substring(posSlash);
		}
					
	}		
	
	window.event.keyCode = 0;
	
	return valorFecha;
}

/////////////////////////////////////////////////////////////////////
//Funcion que inserta al valor un separador
//Parametros: sValor 'valor del campo de texto'
function insertarSlashACF(sValor)
{	
	sValor += "/";
	return sValor;
}


/////////////////////////////////////////////////////////////////////
//Funcion mueve el cursor a la posicion actual para una fecha
//Parametros: sElement 'el elemento del formulario'
//		    , sPosCur 'posicion actual'  
//			, sValor 'valor del campo de texto'
function muevePosicionCursorACF(sElement, sPosCur, sValor)
{
	objSelectedRange = sElement.createTextRange(); 
	
	if(sPosCur <= 2)
	{		
			
		if(sPosCur == 2)
			sPosCur ++;
		//if( sValor.indexOf("/") == sValor.lastIndexOf("/")) 
			     sPosCur ++;																
	}	
	else if(sPosCur > 2  &&  sPosCur <= 5)
	{
		if(sPosCur == 5)
			sPosCur ++;
		if( (sValor.indexOf("/") != sValor.lastIndexOf("/")) &&
		     sValor.indexOf("/") != -1)				
				sPosCur ++;	
		else 
				sPosCur ++;																									
	}
	else if(sPosCur > 5)
	{	
		sPosCur ++;															
	}			
	
	
	objSelectedRange.move("character", sPosCur);
	objSelectedRange.select();	
}

/////////////////////////////////////////////////////////////////////
//Esta funcion devuelve la posicion inicial de la seleccion o la posicion
//actual del cursor en un input
//Parametros: sInput 'elemento tipo input del formulario'

function getSelectionStart(sInput) 
{
	if(sInput.createTextRange) 
	{
	selectedRange = document.selection.createRange().duplicate();
	selectedRange.moveEnd("character",sInput.value.length);
	pos=sInput.value.lastIndexOf(selectedRange.text);
	if(selectedRange.text=="") 
		pos=sInput.value.length;
		return pos;
	} 
	else
	return sInput.selectionStart;
}

//Esta funcion sustituye una cadena que recibe en el 2o parametro por la
//cadena del 3er parametro en la cadena del 1er parametro
//Parametros: sCadena 'cadena a modificar'
//	    , sDesde 'cadena a buscar'
//	    , sHasta 'cadena a sustituir'
function replaceAll( sCadena, sDesde, sHasta ) 
	{
	 var indice = sCadena.indexOf( sDesde );
	
	 while ( indice > -1)  {
	     sCadena = sCadena.replace( sDesde, sHasta) ; 
	     indice = sCadena.indexOf( sDesde ) ;
	 }
	
	 return sCadena;
}

