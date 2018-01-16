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
<<<<<<< HEAD
                url: baseURL + "Puesto_ctrl/edit_puestos",
                type: "POST",
                data: $("#formPuestosEditar").serialize(),
=======
                url: baseURL + "Puesto_ctrl/edit_puesto",
                type: "POST",
                data: $("#formPuestoEditar").serialize(),
>>>>>>> 4a4cd8640eadfc747c03eb1def5a7f15d95b94d9
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