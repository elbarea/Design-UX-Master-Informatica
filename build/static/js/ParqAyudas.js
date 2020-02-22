/******** Variables PRIVADAS ARQUITECTURA ********/
var ParqAyudasJS= true;
var sURLBase;
var sIDAyuda;
var sIDAncla;
var sDominio;
var NOMBRE_ANCLA_AYUDAS_CONTEXTUALES= 'ARQAyudaCont';
var bARQAyudasContActivas= true;
/****** FIN Variables PRIVADAS ARQUITECTURA ******/

/******** Variables PUBLICAS ********/
/****** FIN Variables PUBLICAS ******/

function InicializarAyuda(strURLBase, strDominio, IDAyuda, IDAncla)
{
	sURLBase= strURLBase + "/" + strDominio;
	sDominio= strDominio;
	sIDAyuda= IDAyuda;
	sIDAncla = IDAncla;
	bARQAyudasContActivas= true;
	quitarIconoAyudasCont();
}

//*************************************************************************
//* Abre una ventana con la pagina de la ayuda principal de PROSA		  *
//*************************************************************************
function AyudaPrincipal(bDevolverExitoEjecucion)
{
	if ( (sIDAyuda!=null) && (sIDAyuda!='') )
	{	
		if (sIDAncla!='')	
			fnCargarAyuda(sIDAyuda, sIDAncla);
		else
			fnCargarAyuda(sIDAyuda);
		if (bDevolverExitoEjecucion) return true; else return false; 
	}
	else
	{
		if (bDevolverExitoEjecucion) 
			return false; 
		else 
		{
			// No se especificó la ubicación de la Ayuda global
			showMessageCod(MSG_DATONOESPECIFICADO, iMsgTipoCerrar, getMensajeARQD(MSG_ERROR), getMensajeARQD(MSG_ERRORJS),null,null,"DATO","Ubicación de la ayuda global");
			return false;
		}
	}
}

//*************************************************************************
//* Activa los tooltip de los campos de los formularios					  *
//*************************************************************************
function ActivarAyudaContextual(bDevolverExitoEjecucion)
{
	if (bARQAyudasContActivas)
		quitarIconoAyudasCont();
	else
		ponerIconoAyudasCont();		
}

function ProsaHelpId()
{
	fnCargarAyuda(sIDAyuda, this.id);	
}

function nada()
{
	void(0);
}

function getURLBase()
{
    return sURLBase;
}


function quitarIconoAyudasCont()
{
	var oArrayAyCont= document.getElementsByName(NOMBRE_ANCLA_AYUDAS_CONTEXTUALES);
  	for (var k=0; k< oArrayAyCont.length; k++)
  		oArrayAyCont[k].className= 'oculto';
  	bARQAyudasContActivas= false;     	
}

function ponerIconoAyudasCont()
{
	var oArrayAyCont= document.getElementsByName(NOMBRE_ANCLA_AYUDAS_CONTEXTUALES);
  	for (var k=0; k< oArrayAyCont.length; k++)
  		oArrayAyCont[k].className= 'ayudaCont';
  	bARQAyudasContActivas= true;     	
}