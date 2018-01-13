$(document).ready(function() {
    
});
function saveDeduccion(){
    
    $.ajax({
            url: baseURL + "Deduciones_ctrl/create_deducciones",
            type: "POST",
            data: $("#formDeduciones").serialize(),
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

function editDeduccion(id){

    var indicador=document.getElementById("indicador"+id).innerHTML;    
    var nombre=document.getElementById("nombre"+id).innerHTML;            
    var tipo=document.getElementById("tipo"+id).innerHTML;              

    document.getElementById("idEditar").innerHTML=id+"";
    document.getElementById("idEditar").value=id;              
    document.getElementById("indicadorEditar").value=indicador;
    document.getElementById("nombreEditar").value=nombre;  
    document.getElementById("tipoEditar").value=tipo;            
}

function saveDeduccionEdit(){

        $.ajax({
                url: baseURL + "Deduciones_ctrl/edit_deduccion",
                type: "POST",
                data: $("#formDeduccionEditar").serialize(),
                success: function(respuesta) {
                    var obj = JSON.parse(respuesta);
                        if (obj.resultado === true) {
                          $("#editarDeduccion").modal('hide');
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