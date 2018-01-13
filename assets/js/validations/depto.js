$(document).ready(function() {
    
});
function saveDepto(){
    event.preventDefault();
    $.ajax({
            url: baseURL + "Depto_ctrl/create_depto",
            type: "POST",
            data: $("#formDepto").serialize(),
            success: function(respuesta) {
                var obj = JSON.parse(respuesta);
                    if (obj.resultado === true) {
                      
                       //Limpiar formulario
                       $("#formDepto")[0].reset(); 
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