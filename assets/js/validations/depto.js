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
                $(".custom-close").on('click', function() {
                    $('#formDeptoEditar').modal('hide');
                });
                
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