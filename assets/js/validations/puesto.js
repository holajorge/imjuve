$(document).ready(function() {
   
    $("#formPuesto").validate({

      rules: {
        nivel: { required: true},
        nombre: { required: true},            
      },        
      messages: {
        nivel: "Nivel Necesario",
        nombre: "Nombre Necesario",            
      },
      submitHandler: function(){    
        var dataString = $("#formPuesto").serialize();
        $.ajax({
            type: "POST",
            url:baseURL + "Puesto_ctrl/create_puesto",
            data: dataString,
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
    });

    $("#formPuestosEditar").validate({

      rules: {
        nivel: { required: true},
        nombre: { required: true},            
      },        
      messages: {
        nivel: "Nivel Necesario",
        nombre:  "Nombre Necesario",             
      },
      submitHandler: function(){    
        var dataString = $("#formPuestosEditar").serialize();
        $.ajax({
            type: "POST",
            url:baseURL + "Puesto_ctrl/edit_puestos",
            data: dataString,
            success: function(respuesta) {
              var obj = JSON.parse(respuesta);
                if (obj.resultado === true) {                      
                   //Limpiar formulario
                   $("#editarPuesto").modal('hide');
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

 function editPuesto(id){

    var nivel=document.getElementById("nivel"+id).innerHTML;    
    var nombre=document.getElementById("nombre"+id).innerHTML;            

    document.getElementById("idEditar").innerHTML=id+"";
    document.getElementById("idEditar").value=id;              
    document.getElementById("nivelEditar").value=nivel;
    document.getElementById("nombreEditar").value=nombre;                      
    }

 function savePuestoEdit(){

        $.ajax({
                url: baseURL + "Puesto_ctrl/edit_puestos",
                type: "POST",
                data: $("#formPuestosEditar").serialize(),
                success: function(respuesta) {
                    var obj = JSON.parse(respuesta);
                        if (obj.resultado === true) {
                          $("#editarPuesto").modal('hide');
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