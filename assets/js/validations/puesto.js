$(document).ready(function() {
    
});
function savePuesto(event){
    event.preventDefault();
    $.ajax({
            url: baseURL + "Puesto_ctrl/create_puesto",
            type: "POST",
            data: $("#formPuesto").serialize(),
            success: function(respuesta) {
                var obj = JSON.parse(respuesta);
                    if (obj.resultado === true) {
                      
                       //Limpiar formulario
                       $("#formPuesto")[0].reset(); 
                       //Mensaje de operación realizada con éxito
                        setTimeout(function() {
                            toastr.options = {
                                closeButton: true,
                                progressBar: true,
                                showMethod: 'slideDown',
                                timeOut: 4000
                            };
                        toastr.success('Los datos se guardaron correctamente', 'DATOS GUARDADOS');
                    }, 1300);
            }
        } 
    });
}