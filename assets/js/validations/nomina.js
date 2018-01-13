$(document).ready(function() {
    
});

function buscar_emp_nomina(event){
    event.preventDefault();
    $("#resultado_emp_nomina").html("");
    $("#lista_percepciones").html("");
    $("#body_tabla_percepciones").html("");
    var rfc = document.getElementById("buscar_emp_nom").value;
    $.ajax({
            url: baseURL + "Nomina_controller/buscar_empleado_nomina",
            type: "POST",
            data: {rfc: rfc},
            success: function(respuesta) {
                var obj = JSON.parse(respuesta);
                    if (obj.resultado === true) {
                      
                    $("#form_busc_emp_nom")[0].reset(); 
                       
                    // **********************************************************************
                    //Creación de la tabla de resultados
                    var html = "";
                    html += "<table class='table table-bordered table-striped' id='miTabla'>";
                    html += "<thead>";
                    html += "<tr>";
                    html += "<th style='display:none;'>ID </th>";
                    html += "<th>NO. PLAZA </th>";
                    html += "<th>RFC</th>";
                    html += "<th>NOMBRE</th>";
                    html += "<th>APELLIDOS</th>";
                    html += "<th>CURP</th>";
                    html += "<th>PUESTO</th>";
                    html += "<th>DEPARTAMENTO</th>";
                    html += "<th>NO. EMPLEADO</th>";
                    html += "<th>SELECCIONAR</th>";
                    html += "</tr>";
                    html += "</thead>";
                    html += "<tbody>";
                    var num_fila = 1;
                    for (l in obj.empleado) {
                       
                        html += "<tr>";
                        html += "<td style='display:none;'>" + obj.empleado[l].id_empleado + "</td>";
                        html += "<td>" + obj.empleado[l].no_plaza + "</td>";
                        html += "<td>" + obj.empleado[l].rfc +"</td>";
                        html += "<td>" + obj.empleado[l].nombre_emp +"</td>";
                        html += "<td>" + obj.empleado[l].ap_paterno + " " + obj.empleado[l].ap_materno+"</td>";
                        html += "<td>" + obj.empleado[l].curp + "</td>";
                        html += "<td>" + obj.empleado[l].nombre_puesto + "</td>";
                        html += "<td>" + obj.empleado[l].nombre_depto + "</td>";
                        html += "<td>" + obj.empleado[l].no_empleado + "</td>";
                        html += "<td>" + "<button type='button' class='btn btn-primary' onclick='tab_det_nomina(" + num_fila + ")'>SELECCIONAR</button>" + "</td>";
                        html += "</tr>";
                        num_fila ++;
                    }
                    html += "</tbody>";
                    html += "</table>";
                    $("#resultado_emp_nomina").html(html);

                    // ***********************************************************************
            }
        } 
    });
}

function tab_det_nomina(fila){
    //Se pasa a la siguiente pestaña
    $('#myTabs a[href="#det_nomina"]').tab('show');
    
    // **********************************************************************
    //Creación de la tabla de resultados
    var html = "";
    html += "<table>";
    html += "<tbody>";
    
        html += "<tr>";
        html += "<td> No. de plaza: </td>";
        html += "<td>" + " "+document.getElementById("miTabla").rows[fila].cells[1].innerText +"</td>";
        html += "<td> No. empleado: </td>";
        html += "<td>" + " "+ document.getElementById("miTabla").rows[fila].cells[8].innerText+ "</td>";
        html += "</tr>";

        html += "<tr>";
        html += "<td> Nombre: </td>";
        html += "<td>" + " "+document.getElementById("miTabla").rows[fila].cells[3].innerText + " " + document.getElementById("miTabla").rows[fila].cells[4].innerText + "</td>";
        html += "<td> R.F.C: </td>";
        html += "<td>" + " "+ document.getElementById("miTabla").rows[fila].cells[2].innerText+ "</td>";
        html += "</tr>";

        html += "<tr>";
        html += "<td> Curp: </td>";
        html += "<td>" + " "+document.getElementById("miTabla").rows[fila].cells[5].innerText + "</td>";
        html += "<td> Departamento:  </td>";
        html += "<td>" + " "+ document.getElementById("miTabla").rows[fila].cells[7].innerText+ "</td>";
        html += "</tr>";

        html += "<tr>";
        html += "<td> Puesto </td>";
        html += "<td>" + " "+document.getElementById("miTabla").rows[fila].cells[6].innerText + "</td>";
        html += "<td>  </td>";
        html += "<td> </td>";
        html += "</tr>";
        
    html += "</tbody>";
    html += "</table>";
    $("#encabezado_nomina_1").html(html);

    // ***********************************************************************    
}

// ***********************************************************************************
// PERCEPCIONES
// ***********************************************************************************
function lista_percepciones(){
    // $("#lista_percepciones").html("");
    
    $.ajax({
        url: baseURL + "Percepciones_ctrl/lista_percepciones",
        type: "POST",
        data: {

        },
        success: function(respuesta) {
            var obj = JSON.parse(respuesta);
                if (obj.resultado === true) {
                  
                   // **********************************************************************
                    //Creación de la tabla de resultados
                    var html = "";
                    html += "<table class='table table-bordered table-striped' id='tabla_percepciones'>";
                    html += "<thead>";
                    html += "<tr>";
                    html += "<th style='display: none;'> ID </th>";
                    html += "<th>INDICADOR </th>";
                    html += "<th>NOMBRE</th>";
                    html += "<th>TIPO</th>";
                    html += "<th>SELECCIONAR</th>";
                    html += "</tr>";
                    html += "</thead>";
                    html += "<tbody>";


                    var checkboxes = $(".importe_percepcion");
                    // Convertimos el jQuery object a array
                    var valores = checkboxes.toArray();

                    var num_fila = 1;
                    for (l in obj.percepciones) {
                       
                       var imprimir_percepcion = true;
                        for (var i = 0; i < valores.length; i++) {
                            var id_valores  = valores[i].id;
                            var id_split = id_valores.split("_");
                            var id_percepcion = id_split[2];
                            
                            if (id_percepcion == obj.percepciones[l].id_percepcion) {
                                imprimir_percepcion = false;
                            }

                            
                        }
                        if (imprimir_percepcion) {
                        html += "<tr>";
                        html += "<td style='display: none;'>" + obj.percepciones[l].id_percepcion + "</td>";
                        html += "<td>" + obj.percepciones[l].indicador + "</td>";
                        html += "<td>" + obj.percepciones[l].nombre +"</td>";
                        html += "<td>" + obj.percepciones[l].tipo +"</td>";
                        html += "<td>" + "<input type='checkbox' name='check_per[]' value='"+ num_fila +"'>" +"</td>";
                        html += "</tr>";
                        num_fila ++;
                        }
                    }
                    html += "</tbody>";
                    html += "</table>";
                    $("#lista_percepciones").html(html);
            }
        } 
    });
}
// ----------------------------------------------------------------------------------------
function addPercepcionesAnomina(){
    //var deducciones = new Array();
        
    $('input[name="check_per[]"]:checked').each(function() {
        //percepciones.push($(this).val());
        var table = document.getElementById("id_tab_per");
        var row = table.insertRow(2);
        var cellId = row.insertCell(0);
        var cellIndicador = row.insertCell(1);
        var cellDesc = row.insertCell(2);
        var cellImporte = row.insertCell(3);
        var cellEliminar = row.insertCell(4);
       
        var id_per = document.getElementById("tabla_percepciones").rows[$(this).val()].cells[0].innerText;
        cellId.innerHTML = id_per;
        cellId.setAttribute("style", "display:none;");
        cellIndicador.innerHTML = document.getElementById("tabla_percepciones").rows[$(this).val()].cells[1].innerText;
        cellDesc.innerHTML = document.getElementById("tabla_percepciones").rows[$(this).val()].cells[2].innerText;
        cellEliminar.innerHTML = "<button type='button' id='borrar_celda_per' class='btn btn-danger btn-sm'> <span class='glyphicon glyphicon-trash'></span> </button>";
        cellImporte.innerHTML = "<input type='text' id='id_per_"+id_per+"' onkeyup='calc_total_percepciones()' name='importe_percepcion' class='importe_percepcion'> ";    

    });

    $('#myModal').modal('hide');
    //SE LLAMA A LA FUNCIÓN QUE CALCULA UTOMÁTICAMENTE LAS DEDUCCIONES
    calc_deducciones_por_percepcion(sueldoConfianzaMasQuinquenio, sueldoConfianza);
    
}


    var sueldoConfianzaMasQuinquenio = 0;
    var sueldoConfianza = 0;
function calc_total_percepciones(){
        
    var checkboxes = $(".importe_percepcion");
    // Convertimos el jQuery object a array
    var valores = checkboxes.toArray();
    var total_percepciones = 0;

    //Se declara el indice de la celda 
    var indiceCelda = 2;
    
    sueldoConfianzaMasQuinquenio = 0;
    sueldoConfianza = 0;
    for (var i = 0; i < valores.length; i++) {
        var id  = valores[i].id;
        var id_percepcion = id.split("_");
        var valor = document.getElementById("id_per_"+id_percepcion[2]).value;
        if (valor != "") {
            total_percepciones += parseFloat(valor);

            //**********************************************************************************
            //Calcular las deducciones en base al SUELDO DE CONGIANZA y QUINQUENIO
            var id = document.getElementById("id_tab_per").rows[indiceCelda].cells[0].innerText;
            //var valorAsumar = document.getElementById("id_tab_per").rows[indiceCelda].cells[3].innerText;
            if (id > 0 & id <= 2) {
               sueldoConfianzaMasQuinquenio += parseFloat(valor);

               if (id == 1) {
                    sueldoConfianza = parseFloat(valor);
               }  
            }
            //*********************************************************************************
           
        }
        indiceCelda++;
    }
    
    //alert("SUELDO MAS QUINQUENIO " + sueldoConfianzaMasQuinquenio);
    //SE LLAMA A LA FUNCIÓN QUE CALCULA UTOMÁTICAMENTE LAS DEDUCCIONES
    calc_deducciones_por_percepcion(sueldoConfianzaMasQuinquenio, sueldoConfianza);
    $("#total_percepcion").html(total_percepciones);
}

function calc_deducciones_por_percepcion(sueldoConfianzaMasQuinquenio1, sueldoConfianza1){
    var checkboxes = $(".importe_deduccion");
    // Convertimos el jQuery object a array
    var valores = checkboxes.toArray();

    //Se declara el indice de la celda 
    var indiceCelda = 2;
    
    for (var i = 0; i < valores.length; i++) {
        
            //**********************************************************************************
            //Calcular las deducciones en base al SUELDO DE CONGIANZA y QUINQUENIO
            var id = document.getElementById("id_tab_ded").rows[indiceCelda].cells[0].innerText;
           
            var impuesto = 0;
            switch(parseInt(id)) {
                case 2:
                    impuesto = (sueldoConfianzaMasQuinquenio1 * 3.375) / 100;
                    document.getElementById("id_ded_"+id).value = impuesto;
                    break;
                case 3:
                    impuesto = (sueldoConfianzaMasQuinquenio1 * 1.125) / 100;
                    document.getElementById("id_ded_"+id).value = impuesto;
                    break;
                case 4:
                    impuesto = (sueldoConfianzaMasQuinquenio1 * 6.125) / 100;
                    document.getElementById("id_ded_"+id).value = impuesto;
                    break;
                case 5:
                    impuesto = (sueldoConfianzaMasQuinquenio1 * 1) / 100;
                    document.getElementById("id_ded_"+id).value = impuesto;
                    break;
                case 6:
                    impuesto = (sueldoConfianza1 * 5) / 100;
                    document.getElementById("id_ded_"+id).value = impuesto;
                    break;
                default:
                    //code block
            }
            //*********************************************************************************
           
        //}
        indiceCelda++;
    }
    calc_total_deducciones();
}
//***********************************************************************************
// DEDUCCIONES
// ***********************************************************************************
function lista_deducciones(){
    // $("#lista_percepciones").html("");
    $.ajax({
        url: baseURL + "Deduciones_ctrl/lista_deducciones",
        type: "POST",
        data: {

        },
        success: function(respuesta) {
            var obj = JSON.parse(respuesta);
                if (obj.resultado === true) {
                  
                   // **********************************************************************
                    //Creación de la tabla de resultados
                    var html = "";
                    html += "<table class='table table-bordered table-striped' id='tabla_deducciones'>";
                    html += "<thead>";
                    html += "<tr>";
                    html += "<th style='display:none;'> ID </th>";
                    html += "<th>INDICADOR </th>";
                    html += "<th>NOMBRE</th>";
                    html += "<th>TIPO</th>";
                    html += "<th>SELECCIONAR</th>";
                    html += "</tr>";
                    html += "</thead>";
                    html += "<tbody>";


                    
                    var checkboxes = $(".importe_deduccion");
                    // Convertimos el jQuery object a array
                    var valores = checkboxes.toArray();

                    var num_fila = 1;
                    for (l in obj.percepciones) {

                        
                        var imprimir_deduccion = true;
                        for (var i = 0; i < valores.length; i++) {
                            var id_valores  = valores[i].id;
                            var id_split = id_valores.split("_");
                            var id_deduccion = id_split[2];
                            
                            if (id_deduccion == obj.percepciones[l].id_deduccion) {
                                imprimir_deduccion = false;
                            }

                            
                        }
                        if (imprimir_deduccion) {
                            html += "<tr>";
                            html += "<td style='display:none;'>" + obj.percepciones[l].id_deduccion + "</td>";
                            html += "<td>" + obj.percepciones[l].indicador + "</td>";
                            html += "<td>" + obj.percepciones[l].nombre +"</td>";
                            html += "<td>" + obj.percepciones[l].tipo +"</td>";
                            html += "<td>" + "<input type='checkbox' name='check_ded[]' value='"+ num_fila +"'>" +"</td>";
                            html += "</tr>";
                            num_fila ++;
                        }

                        
                    }
                    html += "</tbody>";
                    html += "</table>";
                    $("#lista_deducciones").html(html);
            }
        } 
    });
}


function addDeduccionAnomina(){
    //var deducciones = new Array();
        
    $('input[name="check_ded[]"]:checked').each(function() {
        //percepciones.push($(this).val());
        var table = document.getElementById("id_tab_ded");
        var row = table.insertRow(2);
        var cellId = row.insertCell(0);
        var cellIndicador = row.insertCell(1);
        var cellDesc = row.insertCell(2);
        var cellImporte = row.insertCell(3);
        var cellEliminar = row.insertCell(4);
       
        var id_d = document.getElementById("tabla_deducciones").rows[$(this).val()].cells[0].innerText;
        cellId.innerHTML = id_d;
        cellId.setAttribute("style", "display:none;");
        cellIndicador.innerHTML = document.getElementById("tabla_deducciones").rows[$(this).val()].cells[1].innerText;
        cellDesc.innerHTML = document.getElementById("tabla_deducciones").rows[$(this).val()].cells[2].innerText;
        cellEliminar.innerHTML = "<button type='button' id='borrar_celda_ded' class='btn btn-danger btn-sm'> <span class='glyphicon glyphicon-trash'></span> </button>";

        if (id_d > 1 & id_d <= 6) {
            cellImporte.innerHTML = "<input type='text' id='id_ded_"+id_d+"' onkeyup='calc_total_deducciones()' name='importe_deduccion' class='importe_deduccion' disabled> ";
            // html_tab_ded += "<td>" + "<input type='text' id='id_ded_"+id_d+"' onkeyup='calc_total_deducciones()' name='importe_deduccion' class='importe_deduccion' disabled> " +"</td>";
        }else{
            cellImporte.innerHTML = "<input type='text' id='id_ded_"+id_d+"' onkeyup='calc_total_deducciones()' name='importe_deduccion' class='importe_deduccion'> ";
            // html_tab_ded += "<td>" + "<input type='text' id='id_ded_"+id_d+"' onkeyup='calc_total_deducciones()' name='importe_deduccion' class='importe_deduccion'> " +"</td>";
        }

    });

    $('#modal_deducciones').modal('hide');
    //SE LLAMA A LA FUNCIÓN QUE CALCULA UTOMÁTICAMENTE LAS DEDUCCIONES
    calc_deducciones_por_percepcion(sueldoConfianzaMasQuinquenio, sueldoConfianza);
    
}
function calc_total_deducciones(){
        
    var checkboxes = $(".importe_deduccion");
    // Convertimos el jQuery object a array
    var valores = checkboxes.toArray();
    // alert(valores[2].id);
    var total_deducciones = 0;
    for (var i = 0; i < valores.length; i++) {
        var id  = valores[i].id;
        var id_deduccion = id.split("_");
        var valor = document.getElementById("id_ded_"+id_deduccion[2]).value;
        if (valor != "") {
            total_deducciones += parseFloat(valor);
        }
    }
    $("#total_deducciones").html(total_deducciones);
}
//************************************************************************************
//PREPARAR DATOS PARA GUARDAR NÓMINA EN LA BASE DE DATOS
//************************************************************************************
function guardar_datos_nomina(){
    var data_percepciones = get_datas_tabla(".importe_percepcion","tabla_percepciones","id_per_");
    console.log(data_percepciones);

    var data_deducciones = get_datas_tabla(".importe_deduccion","tabla_deducciones","id_ded_");
    console.log(data_deducciones);
}
//************************************************************************************
//DATOS DE LAS DEDUCCIONES PARA GUARDAR EN LA BASE DE DATOS
//************************************************************************************
function get_datas_tabla(nombre, tabla, id_input){

    var arregloData = $(nombre);
    // Convertimos el jQuery object a array
    var valores = arregloData.toArray();
    // alert(valores[2].id);
    var data = new Array();
    var indice_celda = 2;
    for (var i = 0; i < valores.length; i++) {
        var id  = valores[i].id;
        var id_data = id.split("_");
        var valor = document.getElementById(id_input+id_data[2]).value;

            data.push({"id":id_data[2],"importe":valor});

        var id_d = document.getElementById(tabla).rows[indice_celda].cells[0].innerText;
        indice_celda++;
    }

    return data;
    //console.log(data);
}

//************************************************************************************
//ELIMINAR FILAS DE TABLA
//************************************************************************************
$(document).on('click', '#borrar_celda_ded', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
    //SE LLAMA A LA FUNCIÓN QUE CALCULA UTOMÁTICAMENTE LAS DEDUCCIONES
    calc_deducciones_por_percepcion(sueldoConfianzaMasQuinquenio, sueldoConfianza);
});

$(document).on('click', '#borrar_celda_per', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
    //SE LLAMA A LA FUNCIÓN QUE CALCULA UTOMÁTICAMENTE LAS DEDUCCIONES
    calc_total_percepciones();
});