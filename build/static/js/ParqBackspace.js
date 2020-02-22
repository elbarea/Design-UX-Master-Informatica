/**
 * Javascript para avisar al usuario que puede perder la informaci�n que haya rellenado
 * en el formulario si se esta abandonando la p�gina por la pulsaci�n de la tecla 
 * Backspace
 */

/**
 * Variable que indica si se ha presionado o no la tecla backspace
 */

function ProsaBackspaceNamespace(name) {
	this.name = name;
}

var ProsaBackspace = ProsaBackspace || new ProsaBackspaceNamespace("ProsaBackspace");

(function(_, undefined) {

	_.bARQBackspacePresionada = false;
	
	_.inicializa = function() {
		$(document).keydown(function(event){
			if (event.which == 8) 
				_.bARQBackspacePresionada = true;
		});

		$(document).keyup(function(event){
			if (event.which == 8) 
				_.bARQBackspacePresionada = false;			
		});
	
		// De momento este evento no se debe estar tratando en ninguna aplicaci�n.
		// Podr�amos hacerlo de una manera m�s general desde el framework de presentaci�n 
		// para ir ampliando el tratamiento del evento.
		// Por si alguien no quiere el tratamiento del backspace crearemos una variable
		// en el framework xsl, skVgControlBackspace, para poder eliminarlo a nivel de aplicaci�n.
		$(window).on('beforeunload', function(){
			if (_.bARQBackspacePresionada) {
				_.bARQBackspacePresionada = false;
				// TODO El mensaje deberia salir del xml de mensajes, a revisar.
				return "Los datos que haya introducido podr�an no guardarse";
			}
		});
	}
	
})(ProsaBackspace);

// Podemos agregar los eventos a la p�gina directamente desde aqu�
ProsaBackspace.inicializa();