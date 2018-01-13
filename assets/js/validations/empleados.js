$(document).ready(function() {
    inicalizarDataTable("tabla_lista_empleados");
});

function hola(){
    console.log("hola");
}

function guardar_empleado(event){
    event.preventDefault()
    document.getElementById('btn_guardar_empleado').disabled;
    var no_plaza = document.getElementById('num_plaza').value;
    var nombre = document.getElementById('nombre').value;
    var ap_paterno = document.getElementById('ape_paterno').value;
    var ap_materno = document.getElementById('ape_materno').value;
    var fecha_nacimiento = document.getElementById('fecha_nacimiento').value; 
    var fecha_ingreso = document.getElementById('fecha_ingreso').value;
    var curp = document.getElementById('curp').value;
    var id_depto = document.getElementById('depto').value;
    var id_puesto = document.getElementById('puesto').value;
    var no_empleado = document.getElementById('num_empleado').value;
    var rfc = document.getElementById('rfc').value;

    // console.log("id_depto " + id_depto);
    // console.log("id_puesto " + id_puesto);
    $.ajax({
            url: baseURL + "empleado_controller/guardar_empleado",
            type: "POST",
            data: {
                no_plaza: no_plaza,
                nombre: nombre,
                ap_paterno: ap_paterno,
                ap_materno: ap_materno,
                fecha_nacimiento: fecha_nacimiento,
                fecha_ingreso: fecha_ingreso,
                curp: curp,
                id_depto: id_depto,
                id_puesto: id_puesto,
                no_empleado: no_empleado,
                rfc: rfc
            },
            success: function(respuesta) {
                var obj = JSON.parse(respuesta);
                    if (obj.resultado === true) {
                       //Limpiar formulario
                       $("#form_crear_empleado")[0].reset(); 
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
