function setCodigoOpener(sCod, sCorta, sLarga)
{
	document.getElementById('codSel').value = sCod;
	document.getElementById('DescCSel').value = sCorta;
	document.getElementById('DescLSel').value = sLarga;
}

function aceptarGTB(campo, valor, tipodescripcion, descCorta, descLarga)
{
	if (valor!="")
	{
		document.getElementById(campo).value = valor;
		$('#' + campo).trigger('propertychange');
		if (document.getElementById('ARQ_desc'+campo))
		{
			var sDesc = descLarga;
			if (tipodescripcion == 0)
				sDesc = descCorta;
				
			document.getElementById('ARQ_desc'+campo).value= sDesc;
			document.getElementById('ARQ_desc'+campo).title= sDesc;
		}
	}
}

function escribirDatos(src)
{	
	src.aceptarGTB(document.getElementById('CAMPO').value, 
					document.getElementById('codSel').value, 
					document.getElementById('DESCRIPCION').value, 
					document.getElementById('DescCSel').value, 
					document.getElementById('DescLSel').value);
}



function oGTBDinamico(id, tabla, lista, datos)
{
	this.id= id;
	this.tabla = tabla;
	this.lista = lista;
	this.datos = datos;
}

function gtbDinamico(id, tabla, lista)
{
	var comboGTB = new oGTBDinamico(id, tabla, lista, null);	
	oArrayGTB.push(comboGTB);
}


function generar_combos()
{	
	if (oArrayGTB.length > 0)
	{	for (var t = 0; t<oArrayGTB.length; t++)
		{			
			var oComboGTB = oArrayGTB[t];
			$("#"+oComboGTB.id).attr("class", "cargando");
			crearComboJSON(oComboGTB);		
		}		
	}
}


function crearComboJSON(oComboGTB)
{	
	var sURL = $("#formDatos").attr("action").substr(0, $("#formDatos").attr("action").indexOf("?"));

	if (oComboGTB.lista == '0001')
	{
		$.get(sURL, { "ARQ.SPM.APPTYPE": "SERVICE" , "ARQ.SPM.DELETEARQ":"1", "ARQ.IDAPP": "SFP00002", "ARQ.SPM.TICKET_ORIGEN" : $("#ARQ\\.SPM\\.TICKET").val(), "SPM.CONTEXT": $("#SPM\\.CONTEXT").val(), "SPM.ACC.GETELEMENTOSTABLA": "SPM.ACC.GETELEMENTOSTABLA",  "ARQ.SPM.OUT": "JSON", "TABLA": oComboGTB.tabla}, function(data){ oComboGTB.datos = data; creaComboGTB(oComboGTB); } );
	} 
	else 
	{
		$.get(sURL, { "ARQ.SPM.APPTYPE": "SERVICE" , "ARQ.SPM.DELETEARQ":"1", "ARQ.IDAPP": "SFP00002", "ARQ.SPM.TICKET_ORIGEN" : $("#ARQ\\.SPM\\.TICKET").val(), "SPM.CONTEXT": $("#SPM\\.CONTEXT").val(), "SPM.ACC.GETELEMENTOSTABLA": "SPM.ACC.GETELEMENTOSTABLA",  "ARQ.SPM.OUT": "JSON", "TABLA": oComboGTB.tabla, "LISTA": oComboGTB.lista}, function(data){ oComboGTB.datos = data; creaComboGTB(oComboGTB); } );
	}
}

function creaComboGTB(oComboGTB)
{	
	var respuesta = oComboGTB.datos.ProsaXMLData.SPM.RESULTADO;
	if (respuesta == '0')
	{	
		// GUARDARSE EL VALOR ANTERIOR POR SI ES UNA MODIFICACION
		var valorDef = ""; 
		valorDef = $("#"+oComboGTB.id).val();
				
		// CREAMOS LA SELECT		
		var oSel = document.createElement('select');
		oSel.id = oComboGTB.id;
		oSel.name = oComboGTB.id;
		var oOpt = document.createElement('option');
		
		// SI TENIA VALOR NO HACE FALTA PONER OPCION POR DEFECTO SE SELECCIONA ESE VALOR
		// SI NO TENIA LA PRIMERA OPCION INDICA AL USUARIO QUE SELECCIONE
		if (valorDef == "")  
			oSel.appendChild(oOpt);
		// 
		var oArrayElementos = oComboGTB.datos.ProsaXMLData.SPM.ELEMENTOS;
		
		for (x=0; x<oArrayElementos.length; x++)
		{			
			var opcion = document.createElement('option');
			opcion.innerHTML = oArrayElementos[x].ELEMENTO.DESCCORTA;					
			opcion.value = oArrayElementos[x].ELEMENTO.CODELEMENTO;
			oSel.appendChild(opcion);
		}
		
		if (valorDef != "")
			$("#"+oComboGTB.id).val(valorDef);
		else
			oOpt.innerHTML = '';
		
		// BORRAMOS LOS CONTROLES DE GTB
		$("#"+oComboGTB.id).remove();
		$("#ARQ_desc"+oComboGTB.id).remove();
		$("#label_ARQ_desc"+oComboGTB.id).remove();
		
		// ANEXAMOS SELECT
		var oLabel = document.getElementById('label_'+ oComboGTB.id);		
		oLabel.appendChild(oSel);
	} else	{
		// DEJAMOS EL CONTROL COMO ESTABA
		$("#"+oComboGTB.id).attr("class", "");
	}

}

/* 
function leer_gtb_ajax(oComboGTB)
{
	$.post($("#formDatos").attr("action"), { "ARQ.SPM.TICKET_ORIGEN" : $("#ARQ\\.SPM\\.TICKET").val(), "ARQ.SPM.DELETEARQ":"1", "SPM.CONTEXT": $("#SPM\\.CONTEXT").val(), "ARQ.SPM.APPTYPE": "SERVICE" , "ARQ.IDAPP": "SFP00002" , "SPM.ACC.GTB_AJAX_COMBO": "SPM.ACC.GTB_AJAX_COMBO",  "ARQ.SPM.OUT": "XML", "TABLA": oComboGTB.tabla }, function(data){ oComboGTB.datos = data; gtbDinamico3(oComboGTB); } );		
}
*/


/**
 * PARA LOS CAMPOS GTB DINAMICOS LANZA UNA PETICION BUSCANDO EL ELEMENTO Y RECUPERANDOLO
 * @param oCampoActual
 * @return
 */
/* function buscarGTBDinamico(oComboGTB)
{	
	$.post($("#formDatos").attr("action"), { "ARQ.SPM.TICKET_ORIGEN" : $("#ARQ\\.SPM\\.TICKET").val(), "ARQ.SPM.DELETEARQ":"1", "SPM.CONTEXT": $("#SPM\\.CONTEXT").val(), "ARQ.SPM.APPTYPE": "SERVICE" , "ARQ.IDAPP": "SFP00002" , "SPM.ACC.GTB_AJAX_ELEMENTO": "SPM.ACC.GTB_AJAX_ELEMENTO",  "ARQ.SPM.OUT": "XML", "TABLA": oComboGTB.tabla, "ELEMENTO":document.getElementById(oComboGTB.id).value }, function(data){ oComboGTB.datos = data; gtbElementoRes(oComboGTB); } );	
}
*/

/* function gtbElementoRes(oElemGTB)
{
	var respuesta = $(oElemGTB.datos).find("GTB_AJAX_OK").text();

	if (respuesta == '1')
	{
		document.getElementById("ARQ_desc"+oElemGTB.id).value = $(oElemGTB.datos).find("DESCLARGA").text()
	}
	else
	{
		$("#ARQ_desc"+oElemGTB.id).value = '';
	}

}*/
