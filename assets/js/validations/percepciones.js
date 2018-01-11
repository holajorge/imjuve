    $(document).ready(function() {
        
    });
    function savePercepcion(event){
        event.preventDefault();
        $.ajax({
                url: baseURL + "Percepciones_ctrl/create_percepciones",
                type: "POST",
                data: $("#formPercepcion").serialize(),
                success: function(respuesta) {
                    var obj = JSON.parse(respuesta);
                        if (obj.resultado === true) {
                          
                           //Limpiar formulario
                           $("#formPercepcion")[0].reset(); 
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

    function deletePercepcion(id){

       swal({
            title: "SEGURO DE ELIMINAR?",            
             type: "warning",
             showCancelButton: true,
             confirmButtonColor: "#DD6B55",
             confirmButtonText: "SI, ELIMINAR AHORA!",
             closeOnConfirm: false
           }, function (isConfirm) {
            if (!isConfirm) return;
                $.ajax({
                  url: baseURL + "Percepciones_ctrl/delete_Percepcion",
                  type: "POST",
                  data: {
                    id: id
                  },
                  dataType: "html",
                  success: function () {
                    swal("Hecho!", "Eliemeto Eliminado!", "success");
                    setTimeout(function() {
                      window.location.href = baseURL+"Percepciones_ctrl/index";
                    }, 2000);
                  },
                  error: function (xhr, ajaxOptions, thrownError) {
                    swal("Error deleting!", "Please try again", "error");
                  }
                });
        });
    }

