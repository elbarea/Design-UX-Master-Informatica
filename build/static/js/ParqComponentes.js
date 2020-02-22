 /**
 * ProsaComponentes namespace.
 * @namespace ProsaEDI
 */

function ProsaComponentesNamespace(name) {
		this.name = name;
}

/**
 * Instancia del namespace ProsaComponentesNamespace.
 */
var ProsaComponentes = ProsaComponentes || new ProsaComponentesNamespace("ProsaComponentes");


/**
 * @memberof ProsaComponentes
 * @inner
 */
(function(_, undefined) {

		/**
		 * Variable que guarda el estado del textarea (0-Minimizado, 1-Maximizado)
		 * @type int
		 * @access private 
		 */
		var estadoTextArea;
		/**
		 * Array que almacena el estado de los diferentes textarea en función de su id
		 * @type Array 
		 * @access private 
		 */
		var arrayTxtaDespl = new Array();


		/**
		 * Se encarga de inicializar el componente
		 * @function inicializa
		 * @param modoDesarrollo Indica si está en modo de desarrollo o no (0-No está en modo de desarrollo, 1-Está en modo desarrollo)
		 * @return 
		 * @access public 
		 * @memberof ProsaComponentes 
		 */
		
		_.inicializa = function(modoDesarrollo) {
				
			$("[data-pc_tipo]").each(function (e) {
				var tipoDeComponente = $(this).attr('data-pc_tipo');
				// TextAreaDesplegable
				if (tipoDeComponente  == 'bttextareadespl') {
					//Se obtienen los atributos skPmCrearTextArea, skPmPosEtiqueta y skPmNombre
					var crearTextarea = $(this).attr('data-pc_crearTextarea');
					var posEtiqueta = $(this).attr('data-pc_posetiq');
					var nombreObligatorio = $(this).attr('data-pc_idasoc');
					var tabindex = $(this).attr('data-pc_tabindex');
					//Se obtiene la altura cuando el textarea está maximizado y minimizado, y la ruta de las imágenes a utilizar para maximizarlo y minimizarlo
					_.altoMaximizado = $(this).attr('data-pc_altomax');
					_.altoMinimizado = $(this).attr('data-pc_altomin');				
					_.imgAscendente = $(this).attr('data-pc_imgAscend');
					_.imgDescendente = $(this).attr('data-pc_imgDescend');
					$(this).remove();
					// si estamos en modo desarrollo (=1) se valida si se dispone o no de todos los datos obligatorios para crear correctamente el componente
					if(modoDesarrollo == 1){
						if(nombreObligatorio != null && nombreObligatorio != ''){
							if(document.getElementById(nombreObligatorio) == null){
								alert('El parámetro skPmNombre del componente skTpTextAreaDesplegable no existe en el html');
							}
							if(crearTextarea != 0){
								//Se busa si hay algún label con un atributo for asociado al id del textarea o que el textarea tenga un atributo title
								var label = $('#'+nombreObligatorio+'_label').attr('for'); 
								var title = $('#'+nombreObligatorio).attr('title'); 
								if (label!=nombreObligatorio && title==undefined){
									alert('El parámetro skPmEtiqueta es obligatorio para el componente skTpTextAreaDesplegable');
									return;		
								}	
							}
						}else {
							alert('El parámetro skPmNombre es obligatorio para el componente skTpTextAreaDesplegable');
							return;
						}
					}
					// Se coloca el input en su posición correspondiente
					if(posEtiqueta==1){
						if(tabindex < 0){
							$('#'+nombreObligatorio).after('<input type="image" id="'+nombreObligatorio+'_input" alt="Ampliar área de texto" title="Ampliar área de texto" src="'+_.imgDescendente+'" onclick="ProsaComponentes.botonTextAreaDesplegable('+nombreObligatorio+');return false;"/>');
						} else{
							$('#'+nombreObligatorio).after('<input tabindex="'+tabindex+'" type="image" id="'+nombreObligatorio+'_input" alt="Ampliar área de texto" title="Ampliar área de texto" src="'+_.imgDescendente+'" onclick="ProsaComponentes.botonTextAreaDesplegable('+nombreObligatorio+');return false;"/>');
						}
					}if(posEtiqueta==0){
						if(tabindex < 0){
							$('#'+nombreObligatorio+'_label').after('<input type="image" id="'+nombreObligatorio+'_input" alt="Ampliar área de texto" title="Ampliar área de texto" src="'+_.imgDescendente+'" onclick="ProsaComponentes.botonTextAreaDesplegable('+nombreObligatorio+');return false;"/>');
						} else{
							$('#'+nombreObligatorio+'_label').after('<input tabindex="'+tabindex+'" type="image" id="'+nombreObligatorio+'_input" alt="Ampliar área de texto" title="Ampliar área de texto" src="'+_.imgDescendente+'" onclick="ProsaComponentes.botonTextAreaDesplegable('+nombreObligatorio+');return false;"/>');
						}
					}if(posEtiqueta==2){
						if(tabindex < 0){
							$('#'+nombreObligatorio).after('<input type="image" id="'+nombreObligatorio+'_input" alt="Ampliar área de texto" title="Ampliar área de texto" src="'+_.imgDescendente+'" onclick="ProsaComponentes.botonTextAreaDesplegable('+nombreObligatorio+');return false;"/>');
						} else{
							$('#'+nombreObligatorio).after('<input tabindex="'+tabindex+'" type="image" id="'+nombreObligatorio+'_input" alt="Ampliar área de texto" title="Ampliar área de texto" src="'+_.imgDescendente+'" onclick="ProsaComponentes.botonTextAreaDesplegable('+nombreObligatorio+');return false;"/>');
						}
					}if (crearTextarea == 0){
						if(tabindex < 0){
							$('#'+nombreObligatorio+'_span1').after('<input type="image" id="'+nombreObligatorio+'_input" alt="Ampliar área de texto" title="Ampliar área de texto" src="'+_.imgDescendente+'" onclick="ProsaComponentes.botonTextAreaDesplegable('+nombreObligatorio+');return false;"/>');
						} else{
							$('#'+nombreObligatorio+'_span1').after('<input tabindex="'+tabindex+'" type="image" id="'+nombreObligatorio+'_input" alt="Ampliar área de texto" title="Ampliar área de texto" src="'+_.imgDescendente+'" onclick="ProsaComponentes.botonTextAreaDesplegable('+nombreObligatorio+');return false;"/>');
						}
						$('#'+nombreObligatorio+'_span1').remove();
					}
				} else if(tipoDeComponente  == 'radiobuttonaccesible') {
					var id = $(this).attr('data-pc_id');
					var name = $(this).attr('data-pc_name');
					var value = $(this).attr('data-pc_value');
					var title = $(this).attr('data-pc_title');
					var seleccionado = $(this).attr('data-pc_seleccionado');
					var check = $(this).attr('data-pc_check');
					
					if(check == '0') {
						$(this).after(
							'<label for="'+id+'">' + 
							'</label>' +
							'<input id="'+id+'" name="'+name+'" value="'+value+'" title="'+title+'" type="radio">' +
							'</input>');
					} else {
						$(this).after(
							'<label for="'+id+'">' + 
							'</label>' +
							'<input id="'+id+'" name="'+name+'" value="'+value+'" title="'+title+'" type="checkbox">' +
							'</input>');
					}
		        	if(seleccionado == '1') {
		        		document.getElementById(id).checked='checked';
		        	}
		        	document.getElementById(id+'_td').style.display='block';
		        	document.getElementById(id+'_td').removeAttribute("style");
		        	document.getElementById(id+'_td').removeAttribute("id");
		        	$(this).remove();
				} else if(tipoDeComponente  == 'enlaceapopup') {
					var tieneClickHandler = false;
					var events = $._data($(this)[0], 'events')
					if(events && events["click"]  && events["click"].length > 0) {
						tieneClickHandler = true;
					}						
					var propiedadOnClick = $(this).prop("onclick");
					if (!tieneClickHandler && !($(this).attr("onclick")) && (propiedadOnClick==undefined || propiedadOnClick == null)) {
						$(this).attr("onclick","window.open(this.href, this.target);return false");
					}	
					$(this).removeAttr("data-pc_tipo");
				}
			});
		}
		/**
		 * Se encarga de maximizar o minimizar un textarea en función de su estado
		 * @function botonTextAreaDesplegable
		 * @param nombreObligatorio Id del textarea
		 * @return 
		 * @access public 
		 * @memberof ProsaComponentes 
		 */

		_.botonTextAreaDesplegable = function(nombreObligatorio) {
			idTextarea=nombreObligatorio.id;
			var extender = $('#'+idTextarea+'_input').attr('alt'); 
			//Si el input tiene un atributo con ese valor, se querrá maximizar
			if(extender.localeCompare('Ampliar área de texto') == 0){
				estadoTextArea = 1;
				arrayTxtaDespl[idTextarea] = estadoTextArea;
			//Si el input tiene un atributo con ese valor, se querrá minimizar
			}if (extender.localeCompare('Reducir área de texto') == 0){
				estadoTextArea = 0;
				arrayTxtaDespl[idTextarea] = estadoTextArea;
			}
		
			if(arrayTxtaDespl[idTextarea] == 1){
				//Se cambia el atributo height, la imagen del botón y el title del botón para maximizar el área de texto
				$('#'+idTextarea).height(this.altoMaximizado);
				$('#'+idTextarea+'_input').attr('src', this.imgAscendente);
				$('#'+idTextarea+'_input').attr('title', 'Reducir área de texto');
				$('#'+idTextarea+'_input').attr('alt', 'Reducir área de texto');
	
			}else {
				//Se cambia el atributo height, la imagen del botón y el title del botón para minimizar el área de texto
				$('#'+idTextarea).height(this.altoMinimizado);
				$('#'+idTextarea+'_input').attr('src', this.imgDescendente);
				$('#'+idTextarea+'_input').attr('title', 'Ampliar área de texto');
				$('#'+idTextarea+'_input').attr('alt', 'Ampliar área de texto');
			}

		}
		
})(ProsaComponentes);
