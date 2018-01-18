$(document).ready(function() {

    $("#formDireccion").validate({

      rules: {
        nombre: { required: true},            
      },        
      messages: {
        nombre: "Nombre Dirección Necesario",         
                  
      },
      submitHandler: function(){    
        var dataString = $("#formDireccion").serialize();
        $.ajax({
            type: "POST",
            url:baseURL + "Direcciones_ctrl/create_direccion",
            data: dataString,
            success: function(respuesta) {
              var obj = JSON.parse(respuesta);
                if (obj.resultado === true) {                      
                   //Limpiar formulario
                   $("#formDireccion")[0].reset(); 
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

    $("#formDireccionEdit").validate({

      rules: {
        nombre: { required: true},
      },
      messages: {
        nombre: "Nombre Dirección Necesario",          
      },
      submitHandler: function(){    
        var dataString = $("#formDireccionEdit").serialize();
        $.ajax({
            type: "POST",
            url:baseURL + "Direcciones_ctrl/edit_direccion",
            data: dataString,
            success: function(respuesta) {
              var obj = JSON.parse(respuesta);
                if (obj.resultado === true) {
                   //Limpiar formulario
                   $("#editarDireccion").modal('hide');
                   //Mensaje de operación realizada con éxito
                    setTimeout(function(){
                        toastr.options = {
                            closeButton: true,
                            progressBar: true,
                            showMethod: 'slideDown',
                            timeOut: 1200
                        };
                    toastr.success('Los datos se guardaron correctamente', 'ACTUALIZANDO DATOS');
                    setTimeout(function() {
                      window.location.href = baseURL + "Direcciones_ctrl/index";
                    }, 1300);
                }, 1300);
                }
            }
        });
      }
    });
});

function editDireccion(id){

    var nombre=document.getElementById("nombre"+id).innerHTML;    

    document.getElementById("idEditar").innerHTML=id+"";
    document.getElementById("idEditar").value=id;              
    document.getElementById("nombreEditar").value=nombre;
}