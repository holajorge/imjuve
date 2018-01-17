$(document).ready(function() {

    $("#formDeduciones").validate({

      rules: {
        indicador: { required: true},
        nombre: { required: true},            
      },        
      messages: {
        indicador: "Indicador Necesario",
        nombre: "Nombre Indicador Necesario",            
      },
      submitHandler: function(){    
        var dataString = $("#formDeduciones").serialize();
        $.ajax({
            type: "POST",
            url:baseURL + "Deduciones_ctrl/create_deducciones",
            data: dataString,
            success: function(respuesta) {
              var obj = JSON.parse(respuesta);
                if (obj.resultado === true) {                      
                   //Limpiar formulario
                   $("#formDeduciones")[0].reset(); 
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

    $("#formDeduccionEditar").validate({

      rules: {
        indicador: { required: true},
        nombre: { required: true},            
      },        
      messages: {
        indicador: "Indicador Necesario",
        nombre: "Nombre Indicador Necesario",            
      },
      submitHandler: function(){    
        var dataString = $("#formDeduccionEditar").serialize();
        $.ajax({
            type: "POST",
            url:baseURL + "Deduciones_ctrl/edit_deduccion",
            data: dataString,
            success: function(respuesta) {
              var obj = JSON.parse(respuesta);
                if (obj.resultado === true) {                      
                   //Limpiar formulario
                   $("#editarDeduccion").modal('hide');
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

function editDeduccion(id){

    var indicador=document.getElementById("indicador"+id).innerHTML;    
    var nombre=document.getElementById("nombre"+id).innerHTML;                         

    document.getElementById("idEditar").innerHTML=id+"";
    document.getElementById("idEditar").value=id;              
    document.getElementById("indicadorEditar").value=indicador;
    document.getElementById("nombreEditar").value=nombre;           
}
