function ProsaDialogos(name){
	this.name = name;
}


		
$(function(){
			
		
			var dialogo=$( "#ARQModalEnlaces" ).dialog({
				title:"Listado de enlaces",
				draggable : true,
	            resizable : false,
	            height:"auto",
	            maxHeight: 400,
	            minWidth: 350,
	            close : function(e){
	                $('#ARQCerrarModal').focus()
	                }
	            ,
	            closeText: "",
	            autoOpen : false,
	            describedBy : "dialogDescription",
	            modal : true
	        });
	       
	        $('#enlaces').click(function() {
            dialogo.dialog("open")
                .find(":input").eq(0).focus();
                return false;
            });
		       
		
	
});
