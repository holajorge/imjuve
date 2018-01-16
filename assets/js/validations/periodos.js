$(document).ready(function() {
     $(".modal-wide").on("show.bs.modal", function() {
      var height = $(window).height() - 200;
      $(this).find(".modal-body").css("max-height", height);
    });

});

function serach_periodos(id){

	$("#resultado_periodo").html("");
	
	console.log(id);
	$.ajax({
            url: baseURL + "Nomina_controller/buscar_periodo",
            type: "POST",
            data: {id: id},
            success: function(respuesta) {
                var obj = JSON.parse(respuesta);
                	console.log(obj);
                    if (obj.resultado === true) {                                         
                       
                    // **********************************************************************
                    //Creación de la tabla de resultados
                    var html = "";
                    html += "<table class='table table-bordered table-striped' id='miTabla'>";
                    html += "<thead>";
                    html += "<tr>";                    
                    html += "<th>NO. PLAZA </th>";
                    html += "<th>RFC</th>";
                    html += "<th>NOMBRE</th>";
                    html += "<th>APELLIDOS</th>";
                    html += "<th>FECHA INGRESO</th>";
                    html += "<th>CURP</th>";
                    html += "<th>DEPTO</th>";
                    html += "<th>PUESTO</th>";
                    html += "<th>IMPRIMIR</th>";              
                    html += "</tr>";
                    html += "</thead>";
                    html += "<tbody>";
                    var num_fila = 1;
                    for (l in obj.empleado) {
                       console.log(obj.empleado[l].id_nomina);
                       console.log(obj.empleado[l].id_empleado);
                        html += "<tr>";
                        html += "<td>" + obj.empleado[l].no_plaza + "</td>";
                        html += "<td>" + obj.empleado[l].rfc +"</td>";
                        html += "<td>" + obj.empleado[l].nombre_emp +"</td>";
                        html += "<td>" + obj.empleado[l].ap_paterno + " " + obj.empleado[l].ap_materno+"</td>";
                        html += "<td>" + obj.empleado[l].fecha_ingreso +"</td>";
                        html += "<td>" + obj.empleado[l].curp + "</td>";
                        html += "<td>" + obj.empleado[l].depto + "</td>";
                        html += "<td>" + obj.empleado[l].puesto + "</td>";                        
                        html += "<td>" + "<button type='button' class='btn btn-primary' onclick='printDetalle("+ obj.empleado[l].id_empleado +","+ obj.empleado[l].id_nomina +")' >IMPRIMIR</button>" + "</td>";
                        html += "</tr>";
                        num_fila ++;
                    }
                    html += "</tbody>";
                    html += "</table>";
                    $("#resultado_periodo").html(html);

                    // ***********************************************************************
            }
        } 
    });
}

function printDetalle(id_empleado, id_nomina){

	window.open(baseURL + "Nomina_controller/pdf_por_empleado?id_emp="+ id_empleado +"&id_nom="+id_nomina);

}

	
