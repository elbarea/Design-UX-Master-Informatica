import React from 'react';
import logo from './logo.svg';
import './App.scss';

import './assets/css/CpmsMensajesAlerta.css';
import './assets/css/ParqColor.css';
import './assets/css/ParqColorGen.css';
import './assets/css/ParqEstructura.css';
import './assets/css/ParqImpresion.css';
import './assets/css/ParqTipografia.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=windows-1252"></meta>

        <meta content="IE=8;IE=edge" http-equiv="X-UA-Compatible"></meta>
        <meta name="SPM.DOMAIN" content="CPMS"></meta>
        <meta name="SPM.IDIOMA" content="ES"></meta>
        <meta name="SPM.DIRJS" content="/CPMSCitaPrevia/PROS/js/"></meta>
        <link type="text/css" rel="stylesheet" href="D:\2.MASTER INGENIERIA INFORMATICA\5.USER EXPERIENCE\helloworld\build\static\css\ParqEstructura.css" media="screen"></link>
        <link type="text/css" rel="stylesheet" href="D:\2.MASTER INGENIERIA INFORMATICA\5.USER EXPERIENCE\helloworld\build\static\css\ParqTipografia.css" media="screen, print"></link>
        <link type="text/css" rel="stylesheet" href="D:\2.MASTER INGENIERIA INFORMATICA\5.USER EXPERIENCE\helloworld\build\static\css\ParqImpresion.css" media="print"></link>
        <link type="text/css" rel="stylesheet" href="D:\2.MASTER INGENIERIA INFORMATICA\5.USER EXPERIENCE\helloworld\build\static\css\ParqColorGen.css" media="screen"></link>
        <link media="screen" type="text/css" rel="stylesheet" href="D:\2.MASTER INGENIERIA INFORMATICA\5.USER EXPERIENCE\helloworld\build\static\css\ParqColor.css"></link>
        <link type="text/css" rel="stylesheet" href="D:\2.MASTER INGENIERIA INFORMATICA\5.USER EXPERIENCE\helloworld\build\static\css\CpmsMensajesAlerta.css" media="screen"></link>
                <script type="text/javascript">var oArrayValidaciones = new Array();oAux = new oValida('', 'nombreApellidos', '0', 1, 'dtAlpha', '', '', '', 'Nombre y Apellidos', '', 'CPMS', 'SIGUIENTE', '0', '0', '');oArrayValidaciones.push(oAux);oAux = new oValida('', 'numeroDocumento', '0', 1, 'dtAlphaNumeric', '', '', '', 'Número de documento', '', 'CPMS', 'SIGUIENTE', '0', '0', '');oArrayValidaciones.push(oAux);oAux = new oValida('', 'tipo', '0', 1, 'dtAlphaNumeric', '', '', '', 'Tipo', '', 'CPMS', 'SIGUIENTE', '0', '0', '');oArrayValidaciones.push(oAux);oAux = new oValida('', 'telefono', '0', 1, 'dtNumeric', 'validarTelefono()', '', '', 'Teléfono', '', 'CPMS', 'SIGUIENTE', '0', '0', '');oArrayValidaciones.push(oAux);oAux = new oValida('', 'eMail', '0', 0, 'dtAlphaNumeric', 'validarEmail()', '', '', 'e-mail', '', 'CPMS', 'SIGUIENTE', '0', '0', '');oArrayValidaciones.push(oAux);oAux = new oValida('', 'tipoCitaSeleccionado', '0', 1, 'dtRadioButton', '', '', '', '', '', 'CPMS', 'SIGUIENTE', '0', '0', '');oArrayValidaciones.push(oAux);oAux = new oValida('', 'codigoPostal', '0', 1, 'dtNumeric', 'radioCodPostal()', '', '', 'Código Postal', '', 'CPMS', 'SIGUIENTE', '0', '0', '');oArrayValidaciones.push(oAux);oAux = new oValida('', 'provincia', '0', 1, 'dtAlphaNumeric', 'radioProvincia()', '', '', 'Provincia', '', 'CPMS', 'SIGUIENTE', '0', '0', '');oArrayValidaciones.push(oAux);oAux = new oValida('', 'provincia1', '0', 1, 'dtAlphaNumeric', 'radioDiaHoraProvincia()', '', '', 'Provincia', '', 'CPMS', 'SIGUIENTE', '0', '0', '');oArrayValidaciones.push(oAux);bARQIncluirFicheroMensajes= (oArrayValidaciones.length != 0);</script>
        <script type="text/javascript" src="Gesti%C3%B3n%20Esperas%20y%20Cita%20Previa%20-%20Cita%20Previa_files/CpmsJsComun.js"> </script>
        
        <title>Gestión Esperas y Cita Previa - Cita Previa</title>
        <script type="text/javascript">var ao_subid = "";</script>
        <script type="text/javascript" src="Gesti%C3%B3n%20Esperas%20y%20Cita%20Previa%20-%20Cita%20Previa_files/a.js"></script>
        
        <script type="text/javascript" src="Gesti%C3%B3n%20Esperas%20y%20Cita%20Previa%20-%20Cita%20Previa_files/ciuvo.js"></script>
        </head>
      <body>
        <form>
          <div id="ARQcab">
            
            <div id="ARQtitulos">
              <h1>Gestión Esperas y Cita Previa</h1>
              <h2> Cita Previa</h2>
            </div>
            <div id="ARQBotones" className="ARQimgCab">
              <a  id="salir" title="Finalizar aplicación" href="https://w6.seg-social.es/ProsaInternetAnonimo/OnlineAccess;jsessionid=0001iDrCt47cTJIdCPR0S8ufeKH:18jahh768?ARQ.SPM.TICKET=02600a8f968047bb81472afc636ca7b9&amp;SPM.CONTEXT=internet&amp;ARQ.SPM.TMS_NAVEGACION=1582239228019&amp;ARQ.SPM.ACTION=CANCELAPP"><img src="D:\2.MASTER INGENIERIA INFORMATICA\5.USER EXPERIENCE\helloworld\build\ParqCerrar.png" alt=""></img></a>
              <input id="impresion" type="button" title="Imprimir la página actual"></input>
            </div>
          </div>
          <div id="ARQsubCab">
            <div className="ARQsubCab1">Cita Previa sin Certificado Electrónico</div>
            <div className="ARQsubCab1">Asistente de Solicitud<div></div>
            </div>
          </div>
          
          <div>
            <input id="ARQ.SPM.TICKET" name="ARQ.SPM.TICKET" type="hidden" value="02600a8f968047bb81472afc636ca7b9"></input>
            <input id="SPM.CONTEXT" name="SPM.CONTEXT" type="hidden" value="internet"></input>
            <input id="SPM.HAYJS" name="SPM.HAYJS" type="hidden" value="1"></input>
            <input name="SPM.ISPOPUP" id="SPM.ISPOPUP" type="hidden" value="0"></input>
            <input name="SPM.PORTALTYPE" id="SPM.PORTALTYPE" type="hidden" value="HTML"></input>
          </div>
          
          <div id="ARQcapaPrincipal">
          <script type="text/javascript">IncluirFicheroMensajes('/CPMSCitaPrevia/xml/CpmsMensajes', '');</script>
          <script type="text/javascript" src="Gesti%C3%B3n%20Esperas%20y%20Cita%20Previa%20-%20Cita%20Previa_files/CpmsJsDatosCiudadano.js"> </script>
          <script type="text/javascript" src="Gesti%C3%B3n%20Esperas%20y%20Cita%20Previa%20-%20Cita%20Previa_files/CpmsPrpiJsComun.html"> </script>

          <div className="margenSup4 rellenoSup4 rellenoInf4 bordeAzulOscuro fondoOscuro alineacionCentrada">
            <span><strong>Paso 1. Datos Personales.</strong></span>
          </div>
          <div className="modoBloque ancho100">
            <div className="modoBloque alineacionIzquierda margenInf12">
              <span className="avisoOblig">Los campos marcados con <strong>(*)</strong> son obligatorios</span>
            </div>
            <h3 className="contenidoInvisible">Datos del Ciudadano</h3>
            <fieldset className="bordeAzulOscuro">
          <legend className="rellenoSup2 rellenoInf2 margenInf6">Datos persona fÍsica</legend>
          <div className="modoBloque">
          <div className="mostrarEnLineaBloque alineacionVerticalSuperior">
          <div className="modoBloque">
          <label><strong>(*) </strong>Nombre y Apellidos:</label>
          </div>
          <span className="bordeGrisOscuro texto075" ><input size={70} type="text" name="nombreApellidos" id="nombre" title="Nombre y Apellidos de la persona solicitante. Campo obligatorio."></input></span>
          </div>
          <div className="mostrarEnLineaBloque alineacionVerticalSuperior">
          <div className="modoBloque">
          <label><strong>(*) </strong>Tipo:</label>
          </div>
          <span className="bordeGrisOscuro"><select size={1} name="tipo" id="tipo" title="Tipo de documento de la persona solicitante. Opciones disponibles =&gt; NIE, NIF o PASAPORTE. Campo obligatorio."><option value="">-- Seleccionar --</option><option value="1">NIF</option><option value="6">NIE</option><option value="2">Pasaporte</option></select></span>
          </div>
          <div className="mostrarEnLineaBloque alineacionVerticalSuperior">
          <div className="modoBloque">
          <label><strong>(*) </strong>Número de documento:</label>
          </div>
          <span className="bordeGrisOscuro texto075" ><input  size={40} type="text" name="numeroDocumento" id="ipfnumero" title="Número de documento de la persona solicitante. El formato depende del Tipo de documento. El número de documento no debe completarse con ceros iniciales, ni poner guiones, puntos o espacios entre dígitos y letras. Campo obligatorio."></input></span>
          </div>
          </div>
          <div className="modoBloque margenSup12">
          <div className="mostrarEnLineaBloque">
          <div className="modoBloque">
          <label><strong>(*) </strong>Teléfono Móvil:</label>
          </div>
          
          <span className="bordeGrisOscuro texto075"><input size={50} type="text" name="telefono" id="telefono" title="Teléfono de la persona solicitante. Debe ser un número de 9 dígitos que empiece por '0', '6', '7' o '9'."></input></span>
          </div>
          <div className="mostrarEnLineaBloque">
          <div className="modoBloque">
          <label>e-mail:</label>
          </div>
          <span className="bordeGrisOscuro texto075" ><input size={70} type="text" name="eMail" id="email" title="E-mail de la persona solicitante. Debe de ser un texto con el siguiente formato =&gt; alfanumérico + @ + dominio."></input></span>
          </div>
          </div>
          <div className="modoBloque">
          <div className="mostrarEnLineaBloque margenSup6 margenDer10">
          <strong>Debe
          proporcionar un número de teléfono móvil para concertar cita. A este 
          número le enviaremos un recordatorio vía SMS (gratuito/sin coste), le 
          podremos avisar de cualquier incidencia relativa a su cita y, siguiendo 
          nuestra política de mejora de la calidad, le podríamos enviar una breve 
          encuesta (de carácter voluntario y anónimo) que le permita valorar 
          nuestros servicios.</strong>
          </div>
          </div>
          </fieldset>
          <h3 className="contenidoInvisible">Tipo de búsqueda de la cita</h3>
          <fieldset className="bordeAzulOscuro">
          <legend className="rellenoSup2 rellenoInf2 margenInf6">Tipo búsqueda de Cita</legend>
          <div className="modoBloque">
          <div className="modoBloque">
          <div className="mostrarEnLineaBloque ancho50">
          <span className="texto075 margenIzq8" ><input value="1" id="radioCodPostal" name="tipoCitaSeleccionado" type="radio" title="Opción de selección de cita buscando por Código Postal."></input></span><label>Quiero la primera cita disponible en el centro más próximo a este CP</label>
          </div>
          <div className="mostrarEnLineaBloque alineacionVerticalSuperior">
          <span className="texto075 alineacionDerecha margenIzq12" ><input size={22} type="text" name="codigoPostal" id="codPostal" title="Código Postal donde se solicita la cita. Campo obligatorio si se busca cita por Código Postal."></input></span>
          </div>
          </div>
          <div className="modoBloque">
          <div className="mostrarEnLineaBloque ancho50">
          <span className="texto075 margenIzq8" ><input value="2" id="radioProvincia" name="tipoCitaSeleccionado" type="radio" title="Opción de selección de cita buscando por Provincia."></input></span><label>Quiero la primera cita disponible en cualquier centro de esta Provincia</label>
          </div>
          <div className="mostrarEnLineaBloque alineacionVerticalSuperior">
          <span className="alineacionDerecha margenIzq10" ><select size={1} name="provincia" id="provincia" title="Provincia del Centro donde se solicita la cita. Campo obligatorio si se busca cita por Provincia."><option value="">-- Seleccionar --</option>
          <option value="15">A CORUNA</option><option value="3">ALACANT</option>
          <option value="2">ALBACETE</option><option value="4">ALMERIA</option>
          <option value="1">ÁRABA/ÁLAVA</option><option value="33">ASTURIAS</option>
          <option value="5">AVILA</option><option value="6">BADAJOZ</option>
          <option value="8">BARCELONA</option><option value="48">BIZKAIA</option>
          <option value="9">BURGOS</option><option value="10">CACERES</option>
          <option value="11">CADIZ</option><option value="39">CANTABRIA</option>
          <option value="12">CASTELLO</option><option value="51">CEUTA</option>
          <option value="13">CIUDAD REAL</option><option value="14">CORDOBA</option>
          <option value="16">CUENCA</option><option value="20">GIPUZKOA</option>
          <option value="17">GIRONA</option><option value="18">GRANADA</option>
          <option value="19">GUADALAJARA</option><option value="21">HUELVA</option>
          <option value="22">HUESCA</option><option value="7">ILLES BALEARS</option>
          <option value="23">JAEN</option><option value="26">LA RIOJA</option>
          <option value="35">LAS PALMAS</option><option value="24">LEON</option>
          <option value="25">LLEIDA</option><option value="27">LUGO</option>
          <option value="28">MADRID</option><option value="29">MALAGA</option>
          <option value="52">MELILLA</option><option value="30">MURCIA</option>
          <option value="31">NAVARRA</option><option value="32">OURENSE</option>
          <option value="34">PALENCIA</option><option value="36">PONTEVEDRA</option>
          <option value="38">S. C. DE TENERIFE</option><option value="37">SALAMANCA</option>
          <option value="40">SEGOVIA</option><option value="41">SEVILLA</option>
          <option value="42">SORIA</option><option value="43">TARRAGONA</option>
          <option value="44">TERUEL</option><option value="45">TOLEDO</option>
          <option value="46">VALENCIA</option><option value="47">VALLADOLID</option>
          <option value="49">ZAMORA</option><option value="50">ZARAGOZA</option></select></span>
          </div>
          </div>
          <div className="modoBloque">
          <div className="mostrarEnLineaBloque ancho50">
          <span className="texto075 margenIzq8" ><input value="3" id="radioDiaHoraProvincia" name="tipoCitaSeleccionado" type="radio" title="Opción de selección de cita buscando por Provincia, Centro, día y hora.">
            </input></span><label>Prefiero elegir yo el centro, el día y la hora en esta Provincia</label>
          </div>
          <div className="mostrarEnLineaBloque alineacionVerticalSuperior">
          <span className="alineacionDerecha margenIzq10" ><select size={1} name="provincia1" id="provincia1" title="Provincia del Centro donde se solicita la cita. Campo obligatorio si se busca cita por Provincia, Centro, día y hora."><option value="">-- Seleccionar --</option><option value="15">A CORUNA</option><option value="3">ALACANT</option><option value="2">ALBACETE</option><option value="4">ALMERIA</option><option value="1">ÁRABA/ÁLAVA</option><option value="33">ASTURIAS</option><option value="5">AVILA</option><option value="6">BADAJOZ</option><option value="8">BARCELONA</option><option value="48">BIZKAIA</option><option value="9">BURGOS</option><option value="10">CACERES</option><option value="11">CADIZ</option><option value="39">CANTABRIA</option><option value="12">CASTELLO</option><option value="51">CEUTA</option><option value="13">CIUDAD REAL</option><option value="14">CORDOBA</option><option value="16">CUENCA</option><option value="20">GIPUZKOA</option><option value="17">GIRONA</option><option value="18">GRANADA</option><option value="19">GUADALAJARA</option><option value="21">HUELVA</option><option value="22">HUESCA</option><option value="7">ILLES BALEARS</option><option value="23">JAEN</option><option value="26">LA RIOJA</option><option value="35">LAS PALMAS</option><option value="24">LEON</option><option value="25">LLEIDA</option><option value="27">LUGO</option><option value="28">MADRID</option><option value="29">MALAGA</option><option value="52">MELILLA</option><option value="30">MURCIA</option><option value="31">NAVARRA</option><option value="32">OURENSE</option><option value="34">PALENCIA</option><option value="36">PONTEVEDRA</option><option value="38">S. C. DE TENERIFE</option><option value="37">SALAMANCA</option><option value="40">SEGOVIA</option><option value="41">SEVILLA</option><option value="42">SORIA</option><option value="43">TARRAGONA</option><option value="44">TERUEL</option><option value="45">TOLEDO</option><option value="46">VALENCIA</option><option value="47">VALLADOLID</option><option value="49">ZAMORA</option><option value="50">ZARAGOZA</option></select></span>
          </div>
          </div>
          </div>
          </fieldset>
          </div>
          <fieldset>
            <legend>Pregunta de Seguridad</legend>
            <p className="p2">Para poder continuar, debe escribir en el espacio reservado cuál de las siguientes opciones se corresponde con:&nbsp;3x8</p>
            <p className="p0">Veinticuatro:&nbsp;Bongó:&nbsp;Bogotá:&nbsp;Vestíbulo:&nbsp;Bucarest:&nbsp;</p>
            <p>
              <label><strong>(*) </strong>Respuesta:</label>
              <input title="Respuesta de la pregunta de seguridad." name="ARQ.CAPTCHA" id="ARQ.CAPTCHA" type="text"></input>
            </p>
          </fieldset>
          </div>
          <div id="ARQpie">
            <h2 className="prhidden">Área de funcionalidad</h2>
                <div className="banda">
                  <h2 className="contenidoInvisible">Botonera</h2>
                  <input title="Escoge los datos de la persona física, el tipo búsqueda de cita y pasa a la siguiente pantalla del proceso. Obligatorio rellenar los campos indicados con (*) y seleccionar un tipo de búsqueda." value="Siguiente" className="BotBoton" id="SPM.ACC.SIGUIENTE" name="SPM.ACC.SIGUIENTE" type="submit" ></input>
                </div>
          </div>
        </form>
      </body>
    </div>
  );
}

export default App;
