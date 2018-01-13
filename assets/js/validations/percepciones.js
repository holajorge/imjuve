    $(document).ready(function() {

    });

    function verificarIndicador(){
      $.ajax({
       type: "POST",
       url: baseURL +"Percepciones_ctrl/searchIndicador",
             data: $("#formPercepcion").serialize(), // serializes the form's elements.,
             success: function(respuesta){
               var obj = JSON.parse(respuesta);
               if (obj.resultado === true) {
                                setTimeout(function() {
                                toastr.options = {
                                    closeButton: true,
                                    progressBar: true,
                                    showMethod: 'slideDown',
                                    timeOut: 4000
                                };
                            toastr.warning('Asigne otro numero de indicador', 'INDICADOR YA REGISTRADO');
                        }, 1300);
              }
            }
      }) 
    }
    function savePercepcion(){
        
        // $.ajax({
        //         url: baseURL + "Percepciones_ctrl/create_percepciones",
        //         type: "POST",
        //         data: $("#formPercepcion").serialize(),
        //         success: function(respuesta) {
        //             var obj = JSON.parse(respuesta);
        //                 if (obj.resultado === true) {
                          
        //                    //Limpiar formulario
        //                    $("#formPercepcion")[0].reset(); 
        //                    //Mensaje de operación realizada con éxito
        //                     setTimeout(function() {
        //                         toastr.options = {
        //                             closeButton: true,
        //                             progressBar: true,
        //                             showMethod: 'slideDown',
        //                             timeOut: 4000
        //                         };
        //                     toastr.success('Los datos se guardaron correctamente', 'DATOS GUARDADOS');
        //                 }, 1300);
        //         }
        //     } 
        // });
    }

    function editPercepcion(id){

            var indicador=document.getElementById("indicador"+id).innerHTML;    
            var nombre=document.getElementById("nombre"+id).innerHTML;            
            var tipo=document.getElementById("tipo"+id).innerHTML;              

            document.getElementById("idEditar").innerHTML=id+"";
            document.getElementById("idEditar").value=id;              
            document.getElementById("indicadorEditar").value=indicador;
            document.getElementById("nombreEditar").value=nombre;  
            document.getElementById("tipoEditar").value=tipo;                           
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

    function savePercepcionEdit(){

        $.ajax({
                url: baseURL + "Percepciones_ctrl/edit_perception",
                type: "POST",
                data: $("#formPercepcionEditar").serialize(),
                success: function(respuesta) {
                    var obj = JSON.parse(respuesta);
                        if (obj.resultado === true) {
                          $("#editarPercepcion").modal('hide');
                                setTimeout(function() {
                                toastr.options = {
                                    closeButton: true,
                                    progressBar: true,
                                    showMethod: 'slideDown',
                                    timeOut: 4000
                                };
                            toastr.success('Los datos se guardaron correctamente', 'DATOS ACTUALIZADOS');
                        }, 1300);
                }
            } 
        });
    }
