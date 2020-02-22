/******** Variables PRIVADAS ARQUITECTURA ********/

if (!idTimeoutAviso) {
	var idTimeoutAviso;
}
if (!idTimeoutFinSesion) {
	var idTimeoutFinSesion;
}

var iARQDTIMEOUT_CARGA_XML= 2000;
var bARQDRequestedSubmit= false;
var bSalirClick = false;
var sURLIMGComunes  = "";

var MSG_CAMPOOBLIGATORIO=        "3";
var MSG_ERRORLONGMINIMA=         "4";
var MSG_ERRORLONGMAXIMA=		 "5";
var MSG_FORMATOINCORRECTO=       "6";
var MSG_DATOINCORRECTO=			 "7";
var MSG_DATONOESPECIFICADO=      "18";
var MSG_NUMPARAMSINCORRECTO=     "19";
var MSG_DOCUMENTOINCOMPLETO=     "20";
var MSG_ERRORCARGAAYUDAS=        "21";
var MSG_ERRORANNADIRTIPOSDATOS=  "22";
var MSG_FUNCIONNOEXISTE=         "23";
var MSG_TIPODATONODEFINIDO=      "24";
var MSG_MANEJADORYADEFINIDO=     "25";
var MSG_ACCIONNOPERMITIDA=       "26";
var MSG_ELEMENTOSINFORMATO=      "27";
var MSG_FUNCVALIDNODEFINIDA=     "28";
var MSG_TIPODATONOPERMITIDO=     "29";
var MSG_TAMANOGETEXCESIVO=       "30";
var MSG_AVISO=                   "31";
var MSG_ERROR=                   "32";
var MSG_ERRORJS=                 "33";
var MSG_ERRORMENORMINIMO=		 "34";
var MSG_ERRORMAYORMAXIMO=		 "35";
var MSG_FORMATOINCORRECTOFECHA=  "37";
var MSG_SELECCIONOBLIGATORIA = 	 "42";
/****** FIN Variables PRIVADAS ARQUITECTURA ******/

/******** Variables PUBLICAS ********/
var gIdioma;
var sBotonActivo = "";
var oArrayNombresCalendario = new Array();
var oArrayObjetosCalendario = new Array();
var oArrayEditores = new Array();
var oArrayTextos = new Array();
var oArrayGTB = new Array();
/****** FIN Variables PUBLICAS ******/

function metaTags(nombre)
{
	var oMetas= document.getElementsByTagName("meta");
	for (var k=0; k< oMetas.length; k++)
	{
		if(oMetas[k].name == nombre)
			return oMetas[k];
	}
	return null;
}
gIdioma= 'ES';  // valor por defecto
if (metaTags('SPM.IDIOMA') != null)
	gIdioma= metaTags('SPM.IDIOMA').content;

//*************************************************************************
//* Inicializa el javascript de Prosa con el idioma y el fichero de       *
//* errores de validacion; asi como la ayuda     
//* FW2
//*************************************************************************
function InicializarProsa()
{
	InicializarValidaciones();	
}

var bNavValida = false;

/**
 * Miramos a ver si debemos lanzar una petición de cierre para no dejar
 * colgados los servicios
 * @returns
 */
function finPantalla() 
{ 	
	// SI EXISTE TICKET LANZAMOS UN CANCELAPP PERO SOLO PARA PANTALLAS HTML O POPUPS	
	if ($("#ARQ\\.SPM\\.TICKET") != null && $("#ARQ\\.SPM\\.TICKET").val() != "")	
	{	
		if  ($("#SPM\\.ISPOPUP").val() == '1' || $("#SPM\\.PORTALTYPE").val() == 'HTML')
		{
			var dataForm = $('form#formDatos').serialize() + "&ARQ.SPM.ACTION=CANCELAPP";	
			var sURL = $("#formDatos").attr("action").substr(0, $("#formDatos").attr("action").indexOf("?"));
			$.get(sURL, dataForm, function(data) {
			});			
		}
	}
}		
 
/**
 * Define los eventos para controlar la navegación
 * @returns
 */
function defineEventos() 
{ 
	window.onbeforeunload = function() 
	{ 
		if (!bNavValida) 
		{ 
			finPantalla(); 
		} 
	} 
	
	// Eventos válidos de cambio de página
	// tecla F5
	$(document).bind('keypress', function(e) {		
		if (e.keyCode == 116){	bNavValida = true;	} }); 
	// Enlaces 
	$("a").bind("click", function() { bNavValida = true; }); 
	// submits 
	$("form").bind("submit", function() { bNavValida = true; }); 
	// campos de la pantalla 
	$("input[type=submit]").bind("click", function() { bNavValida = true; }); 
} 

//*************************************************************************
//* Inicializa el javascript de Prosa        							  *
//* Salir, textos, editores, Textareas, JSON, y demas                     *
//*************************************************************************
function InitServProsa() {
	
	// Lo comentamos de momento, ultimos cambios subidos de Bordallo que parece que no funcionan bien. A Revisar.
	// defineEventos();
	
	
	// ACTUALIZAMOS EL HIDDEN DEL JAVASCRIPT		
	document.getElementById("SPM.HAYJS").value = "1";
	// CONTROL BOTON DE SALIDA
	blurSalir();
	// GENERA LOS CAMPOS DINAMICOS DE GTB
	generar_combos();
	// ACTUALIZAMOS DESCRIPCIONES DE BOTONES SUBMIT DE CIERRE, SI LAS HAY
	cambiarTextos();
	// EDITORES DE TEXTO ENRIQUECIDO SI LOS HAY	
	generaEditores();
	// SELECCIONAMOS PRIMER CAMPO VISIBLE Y ACTIVO
		var principal= $('#ARQcapaPrincipal');
		var principalPest= $('#ARQcapaPrincipalPest');
		principalPest.find(':input').filter(':visible:enabled:first').focus();
		principal.find(':input').filter(':visible:enabled:first').focus();
			
	
}


function trimLeft( str )
{   
	return(str)?str.replace(/^[ \t]*/g,""):str;   
}
function trimRight( str	)
{
	return(str)?str.replace(/[ \t]*$/g,""):str;
}
function trim( str )
{
	return trimRight(trimLeft(str));
}
function quitarAcentos(buf) 
{				
	if (buf)
	{
		buf=buf.replace(/[\xC1\xC4]/g,'A').replace(/[\xE1\xE4]/g,'a');
		buf=buf.replace(/[\xC9\xCB]/g,'E').replace(/[\xE9\xEB]/g,'e');
		buf=buf.replace(/[\xCD\xCF]/g,'I').replace(/[\xED\xEF]/g,'i');
		buf=buf.replace(/[\xD3\xD6]/g,'O').replace(/[\xF3\xF6]/g,'o');
		buf=buf.replace(/[\xDA\xDC]/g,'U').replace(/[\xFA\xFC]/g,'u');
	}	
	return buf;
}

//**************************************************************************
//* escapaEspeciales: se encarga de escapar aquellos caracteres que tienen *
//*						cierta significacion en Expresiones regulares	   *
//**************************************************************************
function escapaEspeciales(buf)
{
	return (buf)?buf.replace(/[\/\\\.\*\+\?\|\(\)\[\]\{\}\^\$]/g,"\\$&"):buf;
}

function obtenerElementoActivo(evt)
{
     if (navigator.appName.indexOf("Netscape")>-1)
     	return evt.target;
     else
        return event.srcElement;
}

//**********************************************************************************
//* cambiaFocoDoc: Funcion encargada de "cambiar" automaticamente al siguiente     *
//*						text/text-area cuando llegó al numero maximo de caracteres *
//**********************************************************************************
function cambiaFocoDoc(evt)
{   
	var eventoVentana= (window.event) ? window.event : evt;
	
	if ( eventoVentana.keyCode != 37 && eventoVentana.keyCode != 39 && eventoVentana.keyCode != 9 && eventoVentana.keyCode != 16)
	{  
		//var oFocusEle = document.activeElement;
		var oFocusEle = obtenerElementoActivo(eventoVentana);
		if ( oFocusEle.type == "text" || oFocusEle.type == "textarea" )
		{    			
			var vInputTx= document.forms[0].elements;
			
			var nIndiceSiguiente = -1;
			var nIndiceElementoFocus = -1;
			for ( i=0; i < vInputTx.length ; i++ )
			{ 
					//Se modifica la condicion añadiendo tres tipos de input: submit, checkbox y radio
				if ( (vInputTx[i].type == "text" || vInputTx[i].type == "textarea" || vInputTx[i].type == "submit" || vInputTx[i].type == "checkbox" || vInputTx[i].type == "radio") && vInputTx[i].disabled == false  && vInputTx[i].readOnly == false  )
				{	
					if ( vInputTx[i] == oFocusEle )
						nIndiceElementoFocus = i;
					else if ( nIndiceElementoFocus != -1  && i > nIndiceElementoFocus)
					{
						nIndiceSiguiente = i;
						i = vInputTx.length;
					}
				}    	  
			}
			
			if ( oFocusEle.maxLength == oFocusEle.value.length && nIndiceSiguiente != -1 )
			{	  
				
				// MIRAMOS SI EL CONTROL ACTUAL ESTA EN LA LISTA DE GTBS DINAMICOS, SOLO TEXT
				/* for (r=0; r<oArrayGTB.length; r++)
				{
					if (oArrayGTB[r].id == oFocusEle.id)
						buscarGTBDinamico(oArrayGTB[r]);
				}		
				*/
				try 
				{					
					vInputTx[nIndiceSiguiente].focus();
				} 
				catch (e) 
				{};
			}		
		}		
	}
	
}

//Definimos un manejador para el evento KeyUp, comprobando antes de que no hay definido
//previamente un manejador para dicho evento  
if ( document.onkeypress != null )
{
	// El objeto document ya tiene definido un manejador para el evento KeyUp
	showMessageCod(MSG_MANEJADORYADEFINIDO, iMsgTipoCerrar, getMensajeARQD(MSG_ERROR), getMensajeARQD(MSG_ERRORJS), null, null, "EVENTO", document.onkeypress);
}
else
{
	document.onkeyup=function(event){cambiaFocoDoc(event);};
}

function reemplazarSubcadena(Texto, Origen, Destino)
{
	var salida= Texto;
	
	if ( (Texto!= null) && (Origen != null) && (Destino != null) )
	{
		var texto= Texto;
		var posicion= 0;
		
		posicion= Texto.indexOf(Origen, posicion);
		while ( posicion != -1 )
		{
			salida= texto.substring(0, posicion);
			salida= salida + Destino;
			salida= salida + texto.substring(posicion + Origen.length);
			texto= salida;
			posicion= texto.indexOf(Origen, posicion+Destino.length);
		}
	}
	
	return salida;
}

function cerrarAplicacion() 
{
	if (top.self['deleteTareaActiva']) 
		top.deleteTareaActiva();
	else 
	{
		// Aquí sólo debería entrar en el caso de portal ligero y excepción a nivel de portal.
		window.status= "PCB:ACT-TAREAS_DESP_O_CANC";   
		if(top.window == window);
			window.close();
	}
}

function cancelApp()
{
	cerrarAplicacion();
}

/**
 * Semáforo para controlar las dobles pulsaciones en submits
 * @returns
 */
function ARQOnSubmitForm()
{
    if (bARQDRequestedSubmit)
    {
    	alert("La aplicación actualmente está trabajando...");
		return false;
	}
	else
	{
		bARQDRequestedSubmit= true;
		return ARQValidaciones();
	}
}

/**
 * Semáforo para controlar los dobles clicks en enlaces de WF
 * @param sURL
 * @returns {Boolean}
 */
function ARQlanzarEnlace(sURL)
{
    if (bARQDRequestedSubmit)
    {
    	alert("La aplicación actualmente está trabajando...");
		return false;
	}
	else
	{
		bARQDRequestedSubmit= true;
		document.location = sURL;
		return true;
	}
}


function ARQimprimir()
{
	print();
}

function insertarBotonImpresion(sImg)
{
	var div= document.getElementById('ARQBotones');

	if (div != null)
	{
		var button = document.createElement('input');
		button.id = 'impresion';
		button.type = 'button';
		button.title = "Imprimir la página actual";
		button.href ="#";
		button.onclick = ARQimprimir;
		/*var img=document.createElement('img');
		img.src= sImg;
		img.alt= "Imprimir la página actual";
		button.appendChild(img);*/
		div.appendChild(button);
	}
}

//*************************************************************************
//* quitarRetornos: quita los retornos de carro de los strings 			  *
//* @param sCadena: elemento a limpiar                             		  *
//* @return string: cadena limpia                                 		  *
//*************************************************************************	
function quitarRetornos(sCadena)
{
		var sCadLimpia = escape(sCadena);
		
		re = /%0D/gi;
		sCadLimpia = sCadLimpia.replace(re, ' ');
		re = /%0A/gi;		
		sCadLimpia = sCadLimpia.replace(re, ' ');
		re = /%20/gi;
		sCadLimpia = sCadLimpia.replace(re, ' ');
	
		return sCadLimpia;
}

//*********************************************************************************
//* quitarRetornos: sustituye comillas simples y dobles por secuencias de escape  *
//* @param sCadena: elemento a limpiar                             		          *
//* @return string: cadena limpia                                 		          *
//*********************************************************************************	
function quitarComillas(sCadena)
{
		var doble = /"/g
		var simple = /'/g
			
		sCadena = sCadena.replace(doble,"\x34")
		sCadena = sCadena.replace(simple,"\x27")
}

//*************************************************************************
//* limpiarCadena : quita las ' y las " de un string y las sustituye 
//* por ` para mostrar al usuario
//*************************************************************************
function limpiarCadena(sCadena)
{	
	sCadena = sCadena.replace(/'/g, "`");
	sCadena = sCadena.replace(/"/g, "``");	
	
	sCadena = sCadena.replace(/\\/g, "/\\/");
	return sCadena;
}



//*************************************************************************
//* RECIBE UNA CADENA; VALIDA SI ES UNA FECHA Y SI ES ASI DEVUELVE UN OBJETO DATE
//*************************************************************************
function validaCadenaFecha(sCadFecha, sParam)
{		
	var oMenValFecha = isDtDate(sCadFecha);
	if (oMenValFecha.codigo == '')
	{
		var fArray = sCadFecha.split("/");
		return new Date(fArray[1] + "/" + fArray[0] + "/" + fArray[2]);
	}		
	else
	{
		alert("Error en parámetros calendario -> " + sParam + " : " + sCadFecha);
		return null;
	}
}

//*************************************************************************
//* ponerCalendarioDesplegable : Invoca al JavaScript de DISEÑO DE INTERACCION
//* y pone un calendario desplegable. Esa función es llamada por un template
//*************************************************************************
function ponerCalendarioDesplegable(tabindex, fecha_desde, fecha_hasta, rango, campo_desde, campo_hasta, hpos, vpos, valor_inicial, nombre)
{	
	var oFechaDesde = null;
	var oFechaHasta = null;
	var oFechaInicial = null;
	var oCampo_desde = null;
	
	if (campo_desde != '' && campo_desde != null) 
		oCampo_desde = document.getElementById(campo_desde);
	else 
		oCampo_desde = document.getElementById(nombre);
	
	if (campo_hasta != '' && campo_hasta != null) 
		oCampo_hasta = document.getElementById(campo_hasta);
	else
		oCampo_hasta = null;
	
	
	
	if (fecha_desde!='' && fecha_desde != null)
		oFechaDesde = validaCadenaFecha(fecha_desde, "fecha_desde")
	
	if (fecha_hasta!='' && fecha_hasta != null)
		oFechaHasta = validaCadenaFecha(fecha_hasta, "fecha_hasta")

	if (valor_inicial!='' && valor_inicial != null)
		oFechaInicial = validaCadenaFecha(valor_inicial, "valor_inicial")
	
	var oCalendarioDes = new TCalendarioDesplegable(tabindex, oFechaDesde, oFechaHasta, rango, oCampo_desde, oCampo_hasta, hpos, vpos, getColorArea());	
	
	if (oFechaInicial!='' && oFechaInicial!=null)
	{		
		document.getElementById(nombre).value = valor_inicial;		
		oCalendarioDes.calendario.verHoja(oFechaInicial.getFullYear(), oFechaInicial.getMonth());
		
	} else {
		document.getElementById(nombre).value = "";
	}
		
	oCalendarioDes.setCalFontSize("0.8em");
	oCalendarioDes.setFontSize("0.95em");
	
	document.getElementById("label_" + nombre).appendChild(oCalendarioDes);

	// INSERTAREMOS EL CALENDARIO EN UN ARRAY PARA QUE PUEDA SER ACCESIBLE
	oArrayNombresCalendario.push(nombre);
	oArrayObjetosCalendario.push(oCalendarioDes);
}

//*************************************************************************
//* ponerCalendario : Invoca al JavaScript de DISEÑO DE INTERACCION
//* y pone un calendario. Esa función es llamada por un template
//*************************************************************************
function ponerCalendario(fecha_desde, fecha_hasta, rango, campo_desde, campo_hasta, valor_inicial, nombre)
{	
	var oFechaDesde = null;
	var oFechaHasta = null;
	var oFechaInicial = null;
	var oCampo_desde = null;
	
	if (campo_desde != '' && campo_desde != null) 
		oCampo_desde = document.getElementById(campo_desde);
	else 
		oCampo_desde = document.getElementById(nombre);
			
	if (fecha_desde!='' && fecha_desde != null)
		oFechaDesde = validaCadenaFecha(fecha_desde, "fecha_desde")
	
	if (fecha_hasta!='' && fecha_hasta != null)
		oFechaHasta = validaCadenaFecha(fecha_hasta, "fecha_hasta")

	if (valor_inicial!='' && valor_inicial != null)
		oFechaInicial = validaCadenaFecha(valor_inicial, "valor_inicial")
		
	var oCalendario = new TCalendarioDinamico(oFechaDesde, oFechaHasta, rango, oCampo_desde, document.getElementById(campo_hasta), getColorArea());	
	document.getElementById("label_" + nombre).appendChild(oCalendario);
		
	if (oFechaInicial!='' && oFechaInicial!=null)
	{		
		document.getElementById(nombre).value = valor_inicial;		
		oCalendario.verHoja(oFechaInicial.getFullYear(), oFechaInicial.getMonth());
		
	} else {
		document.getElementById(nombre).value = "";
	}
	
	oCalendario.setFontSize("0.95em");	

	// INSERTAREMOS EL CALENDARIO EN UN ARRAY PARA QUE PUEDA SER ACCESIBLE
	oArrayNombresCalendario.push(nombre);
	oArrayObjetosCalendario.push(oCalendario);
}


//*************************************************************************
//* Devuelve el color del calendario según el área en el que nos encontremos
//*************************************************************************
function getColorArea()
{
	if (document.getElementById("SPM.CONTEXT").value!=null)
	{
		var sArea = document.getElementById("SPM.CONTEXT").value;
		switch (sArea) {
			case "servicios" 	: return "verde";
			case "tareas" 		: return "azul";
			case "procesos" 	: return "rojo";
			case "internet"		: return "gris";	
			case "intranetDS"   : return "gris";		
			default : return "verde";
		}
	}
}

/**
 * Gestión del botón salir
 */
function blurSalir()
{	
	if (document.getElementById("salir")) // SI HAY BOTON DE SALIR LE QUITAMOS EL FOCO
	{	
		// SELECCIONAMOS EL PRIMER INPUT QUE NO SEA EL SALIR
		var oBotones= document.getElementsByTagName("input");
		for (var k=0; k< oBotones.length; k++)
		{
			if(oBotones[k].id != "salir" && oBotones[k].type == "text")
			{
				if (oBotones[k].disabled != null) //EXISTE LA PROPIEDAD DISABLED, VEMOS LOS POSIBLES VALORES 				
				{	
					// OJITO POR SI ESTA CONTENIDO EN UNA CAPA OCULTA
					if (oBotones[k].disabled != true && oBotones[k].disabled != "disabled" && oBotones[k].clientWidth!=0 && oBotones[k].clientHeight!=0) 
					{
						oBotones[k].focus();						
						break;	
					}
				}				
			}		
		}
	}
}


function liberaSalir()
{
	// No borrar esta función. Se llama desde los portales java 
}

function bloqueaSalir()
{
	// No borrar esta función. Se llama desde los portales java
}

/**
* Pone una capa con una imagen de cargando en la pantalla
*/
function ponCargar(sPathIMG)
{
	setTimeout(quitaCargar, 90000);
	
	var oCapa = $("<div/>",{id:"carga","class":"cen"});
	var oCapaLogo = $("<div/>",{"class":"logoCarga"});

	var oImg = document.createElement("img");
	oImg.setAttribute("src", sPathIMG + "circular_bar.gif");
	oImg.setAttribute("class", "cen");
	oImg.setAttribute("alt", "");	

	var p2 = document.createElement("p");
	p2.setAttribute("class", "p4 textoOscuro");
	p2.innerHTML = "<strong>Cargando...</strong>";
	
	var p1 = document.createElement("p");
	p1.appendChild(oImg);
	
	oCapaLogo.append(p1);
	oCapaLogo.append(p2);	
	oCapa.append(oCapaLogo);	

	$("body").append(oCapa);	
}

function quitaCargar()
{
	if (document.getElementById("carga") != null && document.getElementById("carga") != undefined)
	{
		$("#carga").remove();
	}
}


/* ************************************************************************************** */

var oArrayEditores = new Array();

function putEditor(campo)
{
	oArrayEditores.push(campo);
}
	
function generaEditores()
{
	if (oArrayEditores.length > 0)
	{
		for (var g = 0; g<oArrayEditores.length; g++)
		{		
			creaEditor(oArrayEditores[g]);			
		}
		oArrayEditores = []; // BORRAMOS EL ARRAY YA QUE EL INIT DE JQUERY SE RELANZA EN EL IFRAME
	}
}
	
function creaEditor(campo)
{		
	var mostrar = "0";
	var req = "0";
	if (document.getElementById("muestraExpandir_"+campo)!=null){
		mostrar = "1";
	}

	var hb = $("#"+campo).css("align","left").htmlbox({
     	toolbars:[
	    	[
			"cut","copy","paste",
			"separator","bold","italic","underline","strike","sup","sub",
			"separator","justify","left","center","right",
			"separator","ol","ul","indent","outdent",
			"separator","link","unlink", "separator",
	 		"removeformat","striptags","hr","paragraph",
	 		"separator","quote","syntax"
	 		]
			],
			icons:"default",
			idir:metaTags("SPM.DIRJS").content+"/v3/images/", 
			skin:document.getElementById("SPM.CONTEXT").value,
			muestraExpandir:mostrar
		});	
}

function ARQTextoObjeto(id, texto)
{
	this.idobjeto = id;
	this.texto = texto;
}

function cambiarTextoInicio(id, texto)
{
	var cambio = new ARQTextoObjeto(id, texto);	
	oArrayTextos.push(cambio);
}

function cambiarTextos()
{
	if (oArrayTextos.length > 0)
	{
		for (var g = 0; g<oArrayTextos.length; g++)
		{		
			oCambio = oArrayTextos[g];
			document.getElementById(oCambio.idobjeto).value = oCambio.texto;
		}
	}
}




/****************************************************************************************************
 * INTERACCIONES AJAX
/****************************************************************************************************/

/**
 * Informa al usuario de un error en una interacción AJAX con el servidor
 * Cierra el servicio en ejecución.
 */
function ErrorAJAX(jqxhr, settings, exception) {	
	var dataIncidencia = $.parseJSON(jqxhr.responseText);
	var iCod = dataIncidencia.ProsaXMLData.SPM.INCIDENCIA.claveIncidencia.idIncidencia;
	var datosARQ = dataIncidencia.ProsaXMLData.SPM.ARQ;	
	var sSalida = datosARQ["SPM.URLEXIT"];
	var bPopup = datosARQ["SPM.ISPOPUP"];
	
	alert("Ha ocurrido un error. " + jqxhr.statusText + "\nCódigo de Incidencia : " + iCod + "\nLa aplicación se cerrará.");

	// CERRAMOS EL SERVICIO
	// PRIMERO EVALUAMOS QUE SEA UN POPUP
	if (bPopup == null || bPopup == undefined || bPopup == "" || bPopup == "0")
	{
		bPopup = 0;
	}
		
	if (bPopup == '1')
	{
		//window.open('','_parent',''); 
		window.close();
	}
	else // NO ES POPUP MIRAMOS SI HAY URL DE SALIDA
	{
		if (sSalida == null || sSalida == undefined || sSalida == "") 
		{
			// NO HAY SALIDA 
			 if (datosARQ["SPM.PUNTOACCESO"] == 'INTRANET')
			{
				//window.open('','_parent',''); 
				window.close();
			}
		}
		else
		{
			if ((/^javascript/).test(sSalida))
				eval(sSalida);
			else
				document.location = sSalida;	
		}		
	}
}

/**
 * Ejecuta una acción contra el servicio en ejecución y devuelve los datos recibidos en formato JSON
 * @param sAccion Acción a ejecutar
 * @param sMetodo Método callback
 * @param vParams Parámetros de la invocación, aparte de los presentes en el formulario. Dentro de un ARRAY
 */
function ejecutaAccion(sAccion, sMetodoOK, oParams)
{
	sAccion = "SPM.ACC." + sAccion;  
	var oDatosJSON = null;	
	var dataForm = "&ARQ.SPM.OUT=JSON&"+sAccion+"="+sAccion+"&ARQ.SPM.TICKET=" + $("#ARQ\\.SPM\\.TICKET").val();
	if (oParams!=null)
	{
		dataForm =  dataForm + oParams.getCadena();
	}	
	var sURL = $("#formDatos").attr("action").substr(0, $("#formDatos").attr("action").indexOf("?"));
	//$.post(sURL, dataForm, function(data) {
	//		eval(sMetodo+"(data)");	
	//});
	
	$.post(sURL, dataForm).success(function(data){eval(sMetodoOK+"(data)")}).error(function(jqxhr, textStatus, error){  ErrorAJAX(jqxhr, textStatus, error); });
	
}


/**
 * Ejecuta una accion contra el servicio indicado y devuelve los datos en formato JSON
 * @param sServicio
 * @param sAccion
 * @param sMetodo
 * @param sMetodoError
 * @param sParams
 */
function ejecutaServicio(sServicio, sAccion, sMetodoOK, sMetodoError, oParams)
{	
	sAccion = "SPM.ACC." + sAccion;  
	var oDatosJSON = null;	
	var dataForm = "ARQ.SPM.APPTYPE=SERVICE&SPM.ISPOPUP=1&ARQ.SPM.DELETEARQ=1&ARQ.IDAPP=" + sServicio +"&ARQ.SPM.TICKET_ORIGEN=" + $("#ARQ\\.SPM\\.TICKET").val() + "&SPM.CONTEXT=" + $("#SPM\\.CONTEXT").val() + "&ARQ.SPM.OUT=JSON";
	if (sAccion != null && sAccion != undefined)
		dataForm = dataForm + "&" + sAccion + "=" + sAccion;
	if (oParams!=null)
		dataForm = dataForm + oParams.getCadena();

	var sURL = $("#formDatos").attr("action").substr(0, $("#formDatos").attr("action").indexOf("?"));
	//$.post(sURL, dataForm, function(data) {
	//	 eval(sMetodo+"(data)");
	//});			
	
	$.post(sURL, dataForm).success(function(data){eval(sMetodoOK+"(data)")}).error( function(jqxhr, textStatus, error){ eval(sMetodoError+"(jqxhr, textStatus, error)") } );
	
}


/**
 * Objeto Parámetro para JSON
 * @param parametro : nombre del parámetro
 * @param valor : valor del parámetro
 */
function oParametroJSON(parametro, valor)
{
	this.PARAMETRO = parametro;
	this.VALOR = valor;
}

/**
 * 
 */
function paramsPeticion()
{
	this.vParams = new Array();
	this.numero = 0;
	
	this.ponParametro = function (nombre, valor) 
		{ 
			var oP = new oParametroJSON(nombre, valor); 
			this.vParams[this.numero] = oP;
			this.numero++;
		};
	this.getCadena = function () 
		{ 
			var sCad = ""; 
			for (var x = 0; x<this.vParams.length; x++)				
			{
				sCad = sCad + "&" + this.vParams[x].PARAMETRO + "=" + this.vParams[x].VALOR;
			}
			return sCad;				
		};
}





/**
 * Cierra un popup mediante una petición AJAX.
 * @param sAccion
 * @param preMetodo
 * @param postMetodo
 * @returns {Boolean}
 */
function cerrarPopupARQ(sAccion, iValidar, postMetodo)
{	
	var bVal = true;
	var sRetorno = new ParqMensaje();
	
	if (iValidar == 1)
		bVal = ARQValidaciones();
	
	if (bVal)
	{	
		var dataForm = $('form#formDatos').serialize() + "&ARQ.SPM.OUT=JSON&"+sAccion+"="+sAccion;		
		
		if (sAccion != null && sAccion != undefined)
			dataForm = dataForm + "&" + sAccion + "=" + sAccion;
	
		var sURL = $("#formDatos").attr("action").substr(0, $("#formDatos").attr("action").indexOf("?"));
		$.get(sURL, dataForm,	function(data) {			
			oDatosJSONCierre = data;
			// LANZAMOS LA FUNCION DE NEGOCIO
			if (postMetodo != null && postMetodo != undefined)
			{
				sRetorno = eval(postMetodo+"();");
			}
			
			// NO HAY TICKET NI ERRORES 
			if (data.ProsaXMLData.SPM.TICKET == undefined && sRetorno.codigo == "") 
			{ 			
				window.open("","_parent",""); 
				window.close();								
			}
		});		
	}
	else
	{
		return false;
	}
	
	// MENSAJE de ERROR
	if (sRetorno.codigo != "") 
	{
		var args= "";
		for (var k=0; k< sRetorno.params.length; k++)                
			args+= ",'"+sRetorno.params[k].nombre+"','"+sRetorno.params[k].valor+"'";

		var sTextoMsg;
		try
		{
			sTextoMsg= eval("getMensaje('"+sRetorno.codigo+"','"+sRetorno.dominio+"'"+args+")" );
		}
		catch(e)
		{
			sTextoMsg= eval("getMensajeARQD('"+sRetorno.codigo+"'"+args+")");
		}		
		showMessage(sTextoMsg, iMsgTipoCerrar, 'Cierre de Ventana de Ayuda', 'Se han producido un error.');		
	}
	
	
	return false;  // PARA NO SUBMITIR OTRA VEZ
}


/**
 * Devuelve el valor de una cookie
 * @param nombre
 * @returns
 */
function getCookieCCEE(nombre)
{
	if(typeof DanaEval == 'function')
	{
		var cookiesCCEE  = eval('DanaEval(document.cookie)');
		var index = cookiesCCEE.indexOf(nombre +"=");
		if (index == -1) return null;
		index = cookiesCCEE.indexOf("=",index) +1;
		var endstr = cookiesCCEE.indexOf(";",index);
		if (endstr == -1) endstr = cookiesCCEE.length;
			return unescape(cookiesCCEE.substring(index,endstr));
	}
	else
		return null;
}

/**
 * Cambia el link del campo escaner y le añade el DSID
 * @param sCampoScanner
 */
function modificaURLScanner(sCampoScanner)
{
	var sDSID = getCookieCCEE("DSID");
	
	if (sDSID != null && sDSID != undefined)
	{
		var sHREF = $('#'+sCampoScanner).attr('href') + "&PARAM_PPCCEEE=" + sDSID;
		$('#'+sCampoScanner).attr('href', sHREF);
	}
}
