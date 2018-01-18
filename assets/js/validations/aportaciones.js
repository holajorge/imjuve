$(document).ready(function() {

    $("#formAportacion").validate({

      rules: {
        indicador: { required: true},
        nombre: { required: true},            
      },        
      messages: {
        indicador: "Indicador Necesario",
        nombre: "Nombre Necesario",            
      },
      submitHandler: function(){    
        var dataString = $("#formAportacion").serialize();
        $.ajax({
            type: "POST",
            url:baseURL + "Aportaciones_ctrl/create_aportacion",
            data: dataString,
            success: function(respuesta) {
              var obj = JSON.parse(respuesta);
                if (obj.resultado === true) {                      
                   //Limpiar formulario
                   $("#formAportacion")[0].reset(); 
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

    $("#formAportacionEditar").validate({

      rules: {
        indicador: { required: true},
        nombre: { required: true},            
      },        
      messages: {
        indicador: "Indicador Necesario",
        nombre: "Nombre Indicador Necesario",            
      },
      submitHandler: function(){    
        var dataString = $("#formAportacionEditar").serialize();
        $.ajax({
            type: "POST",
            url:baseURL + "Aportaciones_ctrl/edit_apartacion",
            data: dataString,
            success: function(respuesta) {
              var obj = JSON.parse(respuesta);
                if (obj.resultado === true) {                      
                   //Limpiar formulario
                   $("#editarAportacion").modal('hide');
                   //Mensaje de operación realizada con éxito
                    setTimeout(function() {
                        toastr.options = {
                            closeButton: true,
                            progressBar: true,
                            showMethod: 'slideDown',
                            timeOut: 1200
                        };
                    toastr.success('Los datos se guardaron correctamente', 'ACTUALIZANDO DATOS');
                    setTimeout(function() {                    
                      window.location.href = baseURL + "Aportaciones_ctrl/index";
                    }, 1300); 
                }, 1300);
                }
            } 
        });
      }
    });
});

function editAportacion(id){

    var indicador=document.getElementById("indicador"+id).innerHTML;    
    var nombre=document.getElementById("nombre"+id).innerHTML;                         

    document.getElementById("idEditar").innerHTML=id+"";
    document.getElementById("idEditar").value=id;              
    document.getElementById("indicadorEditar").value=indicador;
    document.getElementById("nombreEditar").value=nombre;           
}
