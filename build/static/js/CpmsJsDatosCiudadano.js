/**
 * Llama a funciones que validan varios campos a la vez.
 * 
 * NOTA: Esta función se invoca automáticamente si las validaciones de un solo campo han ido bien
 * @returns array de mensajes de error.
 */

function validacionGeneral(oFormulario) {
	var arrayMensajes = new Array();
	var resultadoOK = new ParqMensaje("", null);
	
	
	if(sBotonActivo == 'SPM.ACC.SIGUIENTE') {
		var mensaje1 = validarTipo();
	
	}

	if(mensaje1.codigo != resultadoOK.codigo) {
		arrayMensajes.push(mensaje1);
	}
	
	if(arrayMensajes.length == 0) {
		return resultadoOK;
	}
	
	return arrayMensajes;
}

/**
 * Validación JS que comprueba que si se haya seleccionado el primer radio
 * button del fieldset opción de busqueda cita previa el text sea obligatorio
 */
function radioCodPostal(){
	
	var resultadoInvalido = ParqMsgObligatorio(
			new ParqMensaje("pros@Val.codigoPostal", null, 'CPMS'));
	
	var radio = document.getElementById("radioCodPostal").checked;

	if(radio){
		var textarea = document.getElementById("codPostal").value;
		if(textarea == "") {
			return resultadoInvalido;
		}
	}
	
	return new ParqMensaje("", null);
}

/**
 * Validación JS que comprueba que si se haya seleccionado el segundo radio
 * button del fieldset opción de busqueda cita previa el text sea obligatorio
 */
function radioProvincia(){
	var resultadoInvalido = ParqMsgObligatorio(
			new ParqMensaje("pros@Val.provincia", null, 'CPMS'));
	
	var radio = document.getElementById("radioProvincia").checked;

	if(radio){
		 var myForm = document.getElementById('provincia');
		 var index = myForm.selectedIndex;
		 var provincia= myForm.options[index].value;
		 if(provincia.trim() == "") {
			return resultadoInvalido;
		}
	}
	
	return new ParqMensaje("", null);
}

/**
 * Validación JS que comprueba que si se haya seleccionado el tercero radio
 * button del fieldset opción de busqueda cita previa el text sea obligatorio
 */
function radioDiaHoraProvincia(){
	var resultadoInvalido = ParqMsgObligatorio(
			new ParqMensaje("pros@Val.provincia", null, 'CPMS'));
	
	var radio = document.getElementById("radioDiaHoraProvincia").checked;

	if(radio){
		var myForm = document.getElementById('provincia1');
		var index = myForm.selectedIndex;
		var provincia1= myForm.options[index].value;
		if(provincia1.trim() == "") {
			return resultadoInvalido;
		}
	}
	
	return new ParqMensaje("", null);
}


/**
 * Validación JS que comprueba que el campo Tipo al elegir NIF, NIE o PASAPORTE tiene los caracteres correctos
 */
function validarTipo() {

	var myForm = document.getElementById('tipo');
	var index = myForm.selectedIndex;
	var tipo = myForm.options[index].value;
	var ipf = document.getElementById("ipfnumero").value;
	var param1 = new ParqMsgParam("PARAMETRO1", ipf);
	var listaParam = new Array(param1);
	if(tipo == '1'){
		var EXP_REG_NIF = /[0-9]{1,8}[A-HJ-NP-TV-Za-hj-np-tv-z]/;
			if(!EXP_REG_NIF.test(ipf)) {
				var resultadoInvalido = new ParqMensaje("nav@Val.errorFormatoNif", listaParam, 'CPMS');
				return resultadoInvalido;
			}
			
	} else if(tipo == '6'){
		var EXP_REG_NIE = /[XxYyZz][0-9]{7}[A-HJ-NP-TV-Za-hj-np-tv-z]/;
			if(!EXP_REG_NIE.test(ipf)) {
				var resultadoInvalido = new ParqMensaje("nav@Val.errorFormatoNie", listaParam, 'CPMS');
				return resultadoInvalido;
			}
			
	} else if(tipo == '2'){
		var EXP_REG_PASAPORTE = /[a-zA-Z0-9_]{2,}/; 
			///^([a-zA-Z]{2})\s([0-9]{7})$/;
			if(!EXP_REG_PASAPORTE.test(ipf)) {
				var resultadoInvalido = new ParqMensaje("nav@Val.errorFormatoPasaporte", listaParam, 'CPMS');
				return resultadoInvalido;
			}
	}
	
	return new ParqMensaje("", null);
}



/**
 * Validación JS que comprueba que el campo teléfono tiene los caracteres correctos
 */
function validarTelefono() {
	var EXP_REG_TELEFONO = /[0|6|7|9]\d{8}/;
	var telefono = document.getElementById("telefono").value;
		if(telefono.length>0 && !EXP_REG_TELEFONO.test(telefono)) {
			var param1 = new ParqMsgParam("PARAMETRO1", "Teléfono");
			var param2 = new ParqMsgParam("PARAMETRO2", telefono);
			var listaParam = new Array(param1, param2);
			var resultadoInvalido = new ParqMensaje("msgDinamicError.errorTelefono", listaParam, 'CPMS');
			return resultadoInvalido;
		}
		
	return new ParqMensaje("", null);
}


/**
 * Validación JS que comprueba que el campo email tiene los caracteres correctos
 */
function validarEmail() {
	// var EXP_REG_EMAIL = /([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})/; 
	var EXP_REG_EMAIL = /[_a-zA-Z0-9-]+(.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*(.[a-zA-Z0-9]{2,4})/;
	var email = document.getElementById("email").value; 
		if(email.length>0 && !EXP_REG_EMAIL.test(email)) {
			var param1 = new ParqMsgParam("PARAMETRO1", email);
			listaParam = new Array(param1);
			var resultadoInvalido = new ParqMensaje("nav@Val.errorFormatoEMail", listaParam, 'CPMS');
			return resultadoInvalido;
		}
		
	return new ParqMensaje("", null);
}