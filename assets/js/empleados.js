$(document).ready(function() {
	
});

function guardar_empleado(){
	$.ajax({
            url: baseURL + "Empleado_controller/guardar_empleado",
            type: "POST",
            data: {
                
            },
            success: function(respuesta) {
                var obj = JSON.parse(respuesta);
	                if (obj.resultado === true) {
	                   console.log("correcto"); 
	                } 
            }
    });
}