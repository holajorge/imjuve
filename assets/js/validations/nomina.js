$(document).ready(function() {
    
});

function buscar_emp_nomina(event){ //-------------------------------ELIMINAR---
    event.preventDefault();
    $("#resultado_emp_nomina").html("");
    $("#lista_percepciones").html("");
    $("#body_tabla_percepciones").html("");
    $("#encabezado_nomina_1").html("");
    $("#dropdown_lista_periodos").html("");
    $("#txt_per_quinq").html("");

    var d = document.getElementById("det_nomina_oculto"); 
        d.setAttribute("style", "display: none;");

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
            }else{
                swal({
                    title: "Error! No se encontró al empleado",
                    text: "Dar de alta nuevo empleado ",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Si, agregar",
                    cancelButtonText: "No, cancelar",
                    closeOnConfirm: true,
                    closeOnCancel: true },
                function (isConfirm) {
                    if (isConfirm) {
                        window.open(baseURL + "Empleado_controller/create");
                        // window.open(baseURL + "Nomina_controller/pdf_por_empleado");
                    } else {
                       // swal("Cancelado", "", "error");
                    }
                });
            }
        } 
    });
}
var trabajador_eventual = false;
function tab_det_nomina(id){
    trabajador_eventual = false;
    $("#total_percepcion").html("");
    $("#total_deducciones").html("");
    $("#total_aportaciones").html("");
    $("#liquido-nom").html("");
    $("#body_tabla_percepciones").html("");
    $("#body_tabla_deducciones").html("");
    $("#body_tabla_aportaciones").html("");
    $("#encabezado_nomina_1").html("");
    $("#dropdown_lista_periodos").html("");
    $("#txt_per_quinq").html("");

    var d = document.getElementById("det_nomina_oculto"); 
        d.setAttribute("style", "display: none;");
    //Se pasa a la siguiente pestaña
    $('#myTabs a[href="#det_nomina"]').tab('show');
    
    // **********************************************************************
    // variables necesarias
    var no_plaza=document.getElementById("no_plaza"+id).innerHTML;    
    var horas=document.getElementById("horas"+id).innerHTML;
    var nombre=document.getElementById("nombre_emp"+id).innerHTML;
    var ap_paterno=document.getElementById("ap_paterno"+id).innerHTML;
    var ap_materno=document.getElementById("ap_materno"+id).innerHTML;
    var fecha_nacimiento=document.getElementById("fecha_nacimiento"+id).innerHTML;
    var fecha_ingreso=document.getElementById("fecha_ingreso"+id).innerHTML;        
    var rfc=document.getElementById("rfc"+id).innerHTML;
    var no_empleado=document.getElementById("no_empleado"+id).innerHTML;
    var curp=document.getElementById("curp"+id).innerHTML;   
    var nombre_depto=document.getElementById("nombre_depto"+id).innerHTML;
    var nombre_puesto=document.getElementById("nombre_puesto"+id).innerHTML;
    var trabajador=document.getElementById("trabajador"+id).innerHTML;
    var id_tipo_trabajador = document.getElementById("id_tipo_trabajador"+id).value;
    //Creación de la tabla de resultados
    var html = "";
    if (id_tipo_trabajador == 3) {
        trabajador_eventual = true;
    }
    html += "<h2 class='text-center'> TRABAJADOR <strong>  "+ trabajador +" </strong></h2>";
    html += "<table class='table table-bordered'>";
    html += "<tbody>";
    
        var id_empleado = id;

        html += "<tr>";
        html += "<td COLSPAN='8' class='text-center'> DATOS DEL EMPLEADO</td>";
        html += "</tr>";

        html += "<tr>";
        html += "<td>  <input type='hidden' id ='id_empleado_en_nomina' value='"+ id_empleado +"'> No. de plaza: </td>";
        html += "<td>" + " "+ no_plaza +"</td>";
        html += "<td> No. empleado: </td>";
        html += "<td>" + " "+ no_empleado+ "</td>";
        html += "<td> Nombre: </td>";
        html += "<td>" + " "+ nombre +" "+ap_paterno + " " + ap_materno +"</td>";
        html += "<td> R.F.C: </td>";
        html += "<td>" + " "+ rfc+ "</td>";
        html += "</tr>";

        html += "<tr>";
        html += "<td> Curp: </td>";
        html += "<td>" + " "+curp + "</td>";
        html += "<td> Departamento:  </td>";
        html += "<td>" + " "+ nombre_depto + "</td>";
        html += "<td> Puesto: </td>";
        html += "<td COLSPAN='3'>" + nombre_puesto + "</td>";
        html += "</tr>";
        
    html += "</tbody>";
    html += "</table>";
    $("#encabezado_nomina_1").html(html);

    //SE LLAMA A LA FUNCIÓN QUE LISTA LOS PERIODOS QUINQUENALES EN EL DROPDOWN
    listar_periodo_quinquenal();
    // ***********************************************************************    
}
// ***********************************************************************************
// LISTAR PERIODO QUINQUENAL
// ***********************************************************************************
function listar_periodo_quinquenal(){
    $("#dropdown_lista_periodos").html("");
    $.ajax({
            url: baseURL + "Nomina_controller/getAll",
            type: "POST",
            data: { },
            success: function(respuesta) {
            var obj = JSON.parse(respuesta);
                if (obj.resultado === true) {
                    var html = "";
                    for (l in obj.periodo_nomina) {
                        var id_nomina = obj.periodo_nomina[l].id_nomina;
                        var per_quinq = obj.periodo_nomina[l].periodo_quinquenal;
                        var fecha_inicio = obj.periodo_nomina[l].periodo_inicio;
                        var fecha_fin = obj.periodo_nomina[l].periodo_fin;
                        html += "<li>";
                        html +=  "<input type='hidden' class='input_per_quinq_"+ id_nomina +"' value='"+ id_nomina +"'>";
                        html +=  "<input type='hidden' class='input_per_quinq_"+ id_nomina +"' value='"+ per_quinq +"'>";
                        html +=  "<input type='hidden' class='input_per_quinq_"+ id_nomina +"' value='"+ fecha_inicio +"'>";
                        html +=  "<input type='hidden' class='input_per_quinq_"+ id_nomina +"' value='"+ fecha_fin +"'>";
                        html += "<a href='#' onclick='mostrar_tablas_det_nomina(event,"+id_nomina+")'> <strong>"+ per_quinq +"</strong> | " + fecha_inicio +" | " + fecha_fin +"</a>";
                        html += "</li>";
                        html += "<li role='separator' class='divider'></li>";
                    }
                    $("#dropdown_lista_periodos").html(html);                    
                }
        } 
    });
}
// ***********************************************************************************
// MOSTRAR LAS TABLAS OCULTAS DEL DETALLE DE NÓMINA
// ***********************************************************************************
function mostrar_tablas_det_nomina(event,id_nomina){
    event.preventDefault();
    var id_empleado = document.getElementById("id_empleado_en_nomina").value;
    $.ajax({
        url: baseURL + "Nomina_controller/validar_empleado_nomina",
        type: "POST",
        data: {
            id_empleado: id_empleado,
            id_nomina: id_nomina
        },
        success: function(respuesta) {
            var obj = JSON.parse(respuesta);
            if (obj.resultado === true) {
                swal({
                    title: "ALERTA",
                    text: "EL EMPLEADO YA SE HA DADO DE ALTA EN ESTE PERIODO QUINQUENAL",
                    type: "warning"
                });

                var d = document.getElementById("det_nomina_oculto"); 
                    d.setAttribute("style", "display: none;");
                    $("#txt_per_quinq").html("");
            }else{
                
                var d = document.getElementById("det_nomina_oculto"); 
                    d.setAttribute("style", "display: block;");
                    $("#mostrar_aportaciones").show();
                //SE OCULTAN LAS APORTACIONES CUANDO ES UN TRABAJADOR DE TIPO EVENTUAL
                // if (trabajador_eventual) {
                //     $("#mostrar_aportaciones").hide();
                // }
                //LLAMAR A LA FUNCIÓN DE MOSTRAR PERIODO QUINQUENAL
                mostrar_per_quinquenal(id_nomina);
            }
        } 
    });

    
}
// ***********************************************************************************
// MOSTRAR EL PERIODO QUINQUENAL DE LA NÓMINA EN LA VISTA DEL HTML
// ***********************************************************************************
function mostrar_per_quinquenal(id_nomina){

    var periodo_q = $(".input_per_quinq_" + id_nomina);
    var valores = periodo_q.toArray();
    var id_per_q = valores[0].value;
    var per_q = valores[1].value;
    var per_q_inicio = valores[2].value;
    var per_q_fin = valores[3].value;
    var html = "";
        html += "<input type='hidden' id='id_per_q_nomina' value='"+ id_per_q +"'>";
        html += "Periodo "+per_q+": del "+ per_q_inicio +" al "+ per_q_fin;
    $("#txt_per_quinq").html(html);
}
// ***********************************************************************************
// PERCEPCIONES
// ***********************************************************************************
function lista_percepciones(){
       
    $.ajax({
        url: baseURL + "Percepciones_ctrl/lista_percepciones",
        type: "POST",
        data: {

        },
        success: function(respuesta) {
            var obj = JSON.parse(respuesta);
                if (obj.resultado === true) {
                
                    var html = "";
                    for (l in obj.percepciones) {
                        html += "<tr>";
                        html += "<td style='display: none;'>" + obj.percepciones[l].id_percepcion + "</td>";
                        html += "<td>" + obj.percepciones[l].indicador + "</td>";
                        html += "<td>" + obj.percepciones[l].nombre +"</td>";
                        html += "<td>" + "<input type='number' id='id_per_"+obj.percepciones[l].id_percepcion+"' onkeyup='calc_total_percepciones()' onchange='calc_total_percepciones()' name='importe_percepcion' class='importe_percepcion'> " +"</td>";
                        html += "<td>" + "<button type='button' id='borrar_celda_per' class='btn btn-danger btn-sm'> <span class='glyphicon glyphicon-trash'></span> </button>" +"</td>";
                        html += "</tr>";
                    }
                    $("#body_tabla_percepciones").html(html);
                    //SE LLAMA A LA FUNCIÓN QUE CALCULA UTOMÁTICAMENTE LAS DEDUCCIONES
                    calc_deducciones_por_percepcion(sueldoConfianzaMasQuinquenio, sueldoConfianza);
                    calc_total_percepciones();
            }
        } 
    });
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
            if (id == 1 | id == 7) {
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
    $("#total_percepcion").html(total_percepciones.toFixed(2));
    calc_aportaciones_por_percepcion(sueldoConfianzaMasQuinquenio, sueldoConfianza);
    //calcular el total del líquido cada vez que se haga un cambio al input
    calcular_liquido();
    
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
                    document.getElementById("id_ded_"+id).value = impuesto.toFixed(2);
                    break;
                case 3:
                    impuesto = (sueldoConfianzaMasQuinquenio1 * 1.125) / 100;
                    document.getElementById("id_ded_"+id).value = impuesto.toFixed(2);
                    break;
                case 4:
                    impuesto = (sueldoConfianzaMasQuinquenio1 * 6.125) / 100;
                    document.getElementById("id_ded_"+id).value = impuesto.toFixed(2);
                    break;
                case 5:
                    impuesto = (sueldoConfianzaMasQuinquenio1 * 1) / 100;
                    document.getElementById("id_ded_"+id).value = impuesto.toFixed(2);
                    break;
                case 6:
                    impuesto = (sueldoConfianzaMasQuinquenio1 * 2) / 100;
                    document.getElementById("id_ded_"+id).value = impuesto.toFixed(2);
                    break;
                case 7:
                    impuesto = (sueldoConfianza1 * 5) / 100;
                    document.getElementById("id_ded_"+id).value = impuesto.toFixed(2);
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
                    for (l in obj.deducciones) {
                            var id_d = obj.deducciones[l].id_deduccion;
                            if ((trabajador_eventual == true) & (id_d > 1 & id_d <= 7)) {

                            }else{
                            html += "<tr>";
                            html += "<td style='display:none;'>" + obj.deducciones[l].id_deduccion + "</td>";
                            html += "<td>" + obj.deducciones[l].indicador + "</td>";
                            html += "<td>" + obj.deducciones[l].nombre +"</td>";
                            //html += "<td>" + "<input type='checkbox' name='check_ded[]' value='"+ num_fila +"'>" +"</td>";
                            if (id_d > 1 & id_d <= 7) {
                                html += "<td>" + "<input type='number' id='id_ded_"+id_d+"' onkeyup='calc_total_deducciones()' onchange='calc_total_deducciones()' name='importe_deduccion' class='importe_deduccion' disabled> "+"</td>"; 
                            }else{
                                html += "<td>" + "<input type='number' id='id_ded_"+id_d+"' onkeyup='calc_total_deducciones()' onchange='calc_total_deducciones()' name='importe_deduccion' class='importe_deduccion'> "+"</td>";
                            }
                            html += "<td>" +"<button type='button' id='borrar_celda_ded' class='btn btn-danger btn-sm'> <span class='glyphicon glyphicon-trash'></span> </button>"+ "</td>";
                            html += "</tr>"; 
                        }
                    }
                    $("#body_tabla_deducciones").html(html);
                    //SE LLAMA A LA FUNCIÓN QUE CALCULA UTOMÁTICAMENTE LAS DEDUCCIONES
                    calc_deducciones_por_percepcion(sueldoConfianzaMasQuinquenio, sueldoConfianza);
                    //SE LLAMA A LA FUNCIÓN QUE CALCULA UTOMÁTICAMENTE LAS APORTACIONES
                    calc_aportaciones_por_percepcion(sueldoConfianzaMasQuinquenio, sueldoConfianza);
            }
        } 
    });
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
    $("#total_deducciones").html(total_deducciones.toFixed(2));
    //calcular el total del líquido cada vez que se haga un cambio al input
    calcular_liquido();
}
//************************************************************************************
//PREPARAR Y VALIDAR DATOS PARA GUARDAR
//************************************************************************************

function guardar_datos_nomina(){
        
    var id_nomina = document.getElementById("id_per_q_nomina").value;
    var id_empleado = document.getElementById("id_empleado_en_nomina").value;
    var data_percepciones = get_data_tabla(".importe_percepcion","tabla_percepciones","id_per_");
    var data_deducciones = get_data_tabla(".importe_deduccion","tabla_deducciones","id_ded_");
    var data_aportaciones = get_data_tabla(".importe_aportacion","tabla_aportaciones","id_apor_");
    
    //SE VERIFICA QUE NO HAYAN CAMPOS VACIOS Y QUE SE HAYAN SELECCIONADO LAS 3 TABLAS
    //if (trabajador_eventual) {
        if ((data_percepciones[data_percepciones.length - 1]["camposvacios"] == true) | (data_deducciones[data_deducciones.length - 1]["camposvacios"] == true) | (data_aportaciones[data_aportaciones.length - 1]["camposVaciosFaltantes"] == true) ) {
            swal({
                title: " ",
                text: "FALTAN CAMPOS POR LLENAR",
                type: "warning"
            });
        }else{
             swal({
            title: "Confirmar",
            text: "¿Desea guardar los datos de la nómina?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Si, Guardar!",
            closeOnConfirm: false
            }, function () {
                guardar_nom_en_db(id_nomina,id_empleado,data_percepciones,data_deducciones,data_aportaciones);
            });
            
        }
    // }else{
    //     if ((data_percepciones[data_percepciones.length - 1]["camposvacios"] == true) | (data_deducciones[data_deducciones.length - 1]["camposvacios"] == true) | (data_aportaciones[data_aportaciones.length - 1]["camposvacios"] == true) ) {
    //         swal({
    //             title: " ",
    //             text: "FALTAN CAMPOS POR LLENAR",
    //             type: "warning"
    //         });
    //     }else{
    //         swal({
    //         title: "Confirmar",
    //         text: "¿Desea guardar los datos de la nómina?",
    //         type: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#DD6B55",
    //         confirmButtonText: "Si, Guardar!",
    //         closeOnConfirm: false
    //         }, function () {
    //             guardar_nom_en_db(id_nomina,id_empleado,data_percepciones,data_deducciones,data_aportaciones);
    //        });
    //     }
    // }   
    
}
//************************************************************************************
//GUADRAR NÓMINA EN BASE DE DATOS
//************************************************************************************
function guardar_nom_en_db(id_nomina,id_empleado,data_percepciones,data_deducciones,data_aportaciones){
    $.ajax({
        url: baseURL + "Nomina_controller/guardar_detalle_nomina",
        type: "POST",
        data: {
            id_nomina: id_nomina,
            id_empleado: id_empleado,
            data_percepciones: data_percepciones,
            data_deducciones: data_deducciones,
            data_aportaciones: data_aportaciones
        },
        success: function(respuesta) {
            var obj = JSON.parse(respuesta);
                if (obj.resultado === true) {
                    // alert(obj.data_per[0].importe);
                    swal("GUARDADO", "LA NÓMINA SE GUARDADO CORRECTAMENTE", "success");
                    setTimeout(function(){
                        window.location.replace(baseURL + "Nomina_controller/detalle_nomina");
                    }, 1500);                    
                }
        } 
    });
}

//************************************************************************************
//DATOS DE LAS DEDUCCIONES PARA GUARDAR EN LA BASE DE DATOS
//************************************************************************************
function get_data_tabla(nombre, tabla, id_input){
    
    var arregloData = $(nombre);
    // Convertimos el jQuery object a array
    var valores = arregloData.toArray();
    // alert(valores[2].id);
    var data = new Array();
    // var indice_celda = 2;
    var camposVacios = false;
    var camposVaciosFaltantes = false;
    for (var i = 0; i < valores.length; i++) {

        var id  = valores[i].id;
        var id_data = id.split("_");
        var valor = document.getElementById(id_input+id_data[2]).value;
        document.getElementById(id_input+id_data[2]).removeAttribute("style");
        if (valor == "" | parseFloat(valor) <= 0) {
            document.getElementById(id_input+id_data[2]).setAttribute("style", "border-color: red;");
            camposVacios = true;
            camposVaciosFaltantes = true;
        }
            data.push({"id":id_data[2],"importe":valor});
    }
    //*************************************************************************
    //SE VALIDA QUE YA SE HAYAN DADO DE ALTA AL MENOS UN CONCEPTO DE 
    //APORTACIONES, DEDUCCIONES Y PRESTACIONES
    //***************************************************************************
    if (valores.length <= 0) {
        camposVacios = true;
    }
    data.push({"camposvacios":camposVacios, "camposVaciosFaltantes":camposVaciosFaltantes});
    return data;
    //console.log(data);
}

//************************************************************************************
//ELIMINAR FILAS DE TABLA
//************************************************************************************
$(document).on('click', '#borrar_celda_per', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
    //SE LLAMA A LA FUNCIÓN QUE CALCULA UTOMÁTICAMENTE LAS PERCEPCIONES
    calc_total_percepciones();
    calc_aportaciones_por_percepcion(sueldoConfianzaMasQuinquenio, sueldoConfianza);

});

$(document).on('click', '#borrar_celda_ded', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
    //SE LLAMA A LA FUNCIÓN QUE CALCULA UTOMÁTICAMENTE LAS DEDUCCIONES
    calc_deducciones_por_percepcion(sueldoConfianzaMasQuinquenio, sueldoConfianza);
    calc_aportaciones_por_percepcion(sueldoConfianzaMasQuinquenio, sueldoConfianza);
});

$(document).on('click', '#borrar_celda_apor', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
    //SE LLAMA A LA FUNCIÓN QUE CALCULA UTOMÁTICAMENTE LAS APORTACIONES
    calc_aportaciones_por_percepcion(sueldoConfianzaMasQuinquenio, sueldoConfianza);
    calcular_liquido();
});

//************************************************************************************
//APORTACIONES
//************************************************************************************
function lista_aportaciones(){
    var idSubsidioSalario = 9;
    $.ajax({
        url: baseURL + "Aportaciones_ctrl/lista_aportaciones",
        type: "POST",
        data: {

        },
        success: function(respuesta) {
            var obj = JSON.parse(respuesta);
                if (obj.resultado === true) {
                        html = "";
                    for (l in obj.aportaciones) {
                        var id_apor = obj.aportaciones[l].id_aportacion;
                        html += "<tr>";
                        html += "<td style='display:none;'>" + obj.aportaciones[l].id_aportacion + "</td>";
                        html += "<td>" + obj.aportaciones[l].indicador + "</td>";
                        html += "<td>" + obj.aportaciones[l].nombre +"</td>";
                        if (id_apor > 0 & id_apor <= 8) {
                            html += "<td>" +"<input type='number' id='id_apor_"+id_apor+"' onkeyup='calc_total_aportaciones()' onchange='calc_total_aportaciones()' name='importe_aportacion' class='importe_aportacion' disabled> " + "</td>"; 
                        }else{
                            if (id_apor == idSubsidioSalario) {
                                html += "<td>" +"<input type='number' id='id_apor_"+id_apor+"' onkeyup='calc_total_aportaciones();calcular_liquido();' onchange='calc_total_aportaciones();calcular_liquido();' name='importe_aportacion' class='importe_aportacion'> "+ "</td>";
                            }else{
                                html += "<td>" +"<input type='number' id='id_apor_"+id_apor+"' onkeyup='calc_total_aportaciones()' onchange='calc_total_aportaciones()' name='importe_aportacion' class='importe_aportacion'> "+ "</td>";
                            }
                        }
                        html += "<td>" +"<button type='button' id='borrar_celda_apor' class='btn btn-danger btn-sm'> <span class='glyphicon glyphicon-trash'></span> </button>"+ "</td>";
                        html += "</tr>";
                     }
                    $("#body_tabla_aportaciones").html(html);
                    calc_aportaciones_por_percepcion(sueldoConfianzaMasQuinquenio, sueldoConfianza);
            }
        } 
    });
}
//************************************************************************************
//CALCULAR APORTACIONES POR PERCEPCION
//************************************************************************************
function calc_aportaciones_por_percepcion(sueldoConfianzaMasQuinquenio1, sueldoConfianza1){
    var checkboxes = $(".importe_aportacion");
    // Convertimos el jQuery object a array
    var valores = checkboxes.toArray();

    //Se declara el indice de la celda 
    var indiceCelda = 2;
    
    for (var i = 0; i < valores.length; i++) {
        
            //**********************************************************************************
            //Calcular las deducciones en base al SUELDO DE CONGIANZA y QUINQUENIO
            var id = document.getElementById("id_tab_apor").rows[indiceCelda].cells[0].innerText;
           
            var impuesto = 0;
            switch(parseInt(id)) {
                case 1:
                    impuesto = (sueldoConfianza1 * 5) / 100;
                    document.getElementById("id_apor_"+id).value = impuesto.toFixed(2);
                    break;
                case 2:
                    impuesto = (sueldoConfianzaMasQuinquenio1 * 5) / 100;
                    document.getElementById("id_apor_"+id).value = impuesto.toFixed(2);
                    break;
                case 3:
                    impuesto = (sueldoConfianzaMasQuinquenio1 * 5.175) / 100;
                    document.getElementById("id_apor_"+id).value = impuesto.toFixed(2);
                    break;
                case 4:
                    impuesto = (sueldoConfianza1 * 1.875) / 100;
                    document.getElementById("id_apor_"+id).value = impuesto.toFixed(2);
                    break;
                case 5:
                    impuesto = (sueldoConfianza1 * 8.095) / 100;
                    document.getElementById("id_apor_"+id).value = impuesto.toFixed(2);
                    break;
                case 6:
                    var ahor_sol_emp = 0;
                    try {
                        ahor_sol_emp = document.getElementById("id_ded_5").value
                    }
                    catch(err) {
                        //alert(err.message); 
                    }
                    impuesto = (ahor_sol_emp * 3.25);
                    document.getElementById("id_apor_"+id).value = impuesto.toFixed(2);
                    break;
                case 7:
                    var ahor_sol_emp = 0;
                    try {
                        ahor_sol_emp = document.getElementById("id_ded_6").value
                    }
                    catch(err) {
                        //alert(err.message); 
                    }
                    impuesto = (ahor_sol_emp * 3.25);
                    document.getElementById("id_apor_"+id).value = impuesto.toFixed(2);
                    break;
                case 8:
                    var total_percepciones = document.getElementById("total_percepcion").innerText;
                    if (total_percepciones != "") {
                        impuesto = (parseFloat(total_percepciones) * 3) / 100;
                        document.getElementById("id_apor_"+id).value = impuesto.toFixed(2);
                    }else{
                        document.getElementById("id_apor_"+id).value = 0.00;
                    }
                    
                    break;
                default:
                    //code block
            }
            //*********************************************************************************
           
        //}
        indiceCelda++;
    }
    calc_total_aportaciones();
}

//************************************************************************************
//CALCULAR APORTACIONES
//************************************************************************************
function calc_total_aportaciones(){
    var inputAportaciones = $(".importe_aportacion");
    // Convertimos el jQuery object a array
    var valores = inputAportaciones.toArray();
    // alert(valores[2].id);
    var total_aportaciones = 0;
    for (var i = 0; i < valores.length; i++) {
        var id  = valores[i].id;
        var id_aportacion = id.split("_");
        var valor = document.getElementById("id_apor_"+id_aportacion[2]).value;
        if (valor != "") {
            total_aportaciones += parseFloat(valor);
        }
    }
    $("#total_aportaciones").html(total_aportaciones.toFixed(2));
}

//************************************************************************************
//CALCULAR LIQUIDO
//************************************************************************************

function calcular_liquido(){
    var total_percepciones = document.getElementById("total_percepcion").innerHTML;
    var total_deducciones = document.getElementById("total_deducciones").innerHTML;
    if (total_percepciones == "") {
        total_percepciones = 0;
    }
    if (total_deducciones == "") {
        total_deducciones = 0;
    }
    var liquido = parseFloat(total_percepciones) - parseFloat(total_deducciones);
    try {
        var subsidioSalario = document.getElementById("id_apor_9").value;
        if (subsidioSalario == "") {
            subsidioSalario = 0;
        }
        var html = "LÍQUIDO: $"+liquido.toFixed(2);
        var subsidio = parseFloat(subsidioSalario);
        var total = parseFloat(subsidio + liquido);
            html += "<br> SUBSIDIO AL SALARIO: $" + subsidio.toFixed(2);
            html += "<br> TOTAL: $" + total.toFixed(2);
        $("#liquido-nom").html(html);
        }
    catch(err) {
        $("#liquido-nom").html("LÍQUIDO: $"+liquido.toFixed(2));
    }
}