/**
 * Javascript para avisar al usuario que puede perder la información que haya rellenado
 * en el formulario si se esta abandonando la página por la pulsación de la tecla 
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
	
		// De momento este evento no se debe estar tratando en ninguna aplicación.
		// Podríamos hacerlo de una manera más general desde el framework de presentación 
		// para ir ampliando el tratamiento del evento.
		// Por si alguien no quiere el tratamiento del backspace crearemos una variable
		// en el framework xsl, skVgControlBackspace, para poder eliminarlo a nivel de aplicación.
		$(window).on('beforeunload', function(){
			if (_.bARQBackspacePresionada) {
				_.bARQBackspacePresionada = false;
				// TODO El mensaje deberia salir del xml de mensajes, a revisar.
				return "Los datos que haya introducido podrían no guardarse";
			}
		});
	}
	
})(ProsaBackspace);

// Podemos agregar los eventos a la página directamente desde aquí
ProsaBackspace.inicializa();