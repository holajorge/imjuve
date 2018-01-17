$(document).ready(function() {

    $("#formDepto").validate({

      rules: {
        nombre: { required: true},
        direccion: { required: true},            
      },        
      messages: {
        nombre: "Nombre Necesario",
        direccion: "Seleccione una Direccion",            
      },
      submitHandler: function(){    
        var dataString = $("#formDepto").serialize();
        $.ajax({
            type: "POST",
            url:baseURL + "Depto_ctrl/create_depto",
            data: dataString,
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
    });

    $("#formDeptoEditar").validate({

      rules: {
        nombre: { required: true},
        direccion: { required: true},            
      },        
      messages: {
        nombre: "Nombre Necesario",
        direccion: "Seleccione una Direccion",            
      },
      submitHandler: function(){    
        var dataString = $("#formDeptoEditar").serialize();
        $.ajax({
            type: "POST",
            url:baseURL + "Depto_ctrl/edit_depto",
            data: dataString,
            success: function(respuesta) {
              var obj = JSON.parse(respuesta);
                if (obj.resultado === true) {                      
                   //Limpiar formulario
                   $("#editarDepto").modal('hide');
                   //Mensaje de operación realizada con éxito
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
    });
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

function editDepto(id){

    var nombre=document.getElementById("nombre"+id).innerHTML;    

    document.getElementById("idEditar").innerHTML=id+"";
    document.getElementById("idEditar").value=id;              
    document.getElementById("nombreEditar").value=nombre;
}

function saveDeptoEdit(){

    $.ajax({
        url: baseURL + "Depto_ctrl/edit_depto",
        type: "POST",
        data: $("#formDeptoEditar").serialize(),
        success: function(respuesta) {
            var obj = JSON.parse(respuesta);
               if (obj.resultado === true) {
                 $('#editarDepto').modal('hide');
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